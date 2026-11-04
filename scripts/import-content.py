import json,re,urllib.request,concurrent.futures,pathlib,hashlib
ROOT=pathlib.Path(__file__).resolve().parents[1]
DEST=ROOT/'content'; DEST.mkdir(exist_ok=True)
HOST='https://www.seraliorawilde.com.au'
CDN='https://cf72ccc17751c706e3ca.cdn6.editmysite.com'
def fetch(path):
 req=urllib.request.Request(HOST+path,headers={'User-Agent':'Mozilla/5.0'})
 return urllib.request.urlopen(req,timeout=40).read().decode()
def bootstrap(html):
 return json.loads(re.search(r'window\.__BOOTSTRAP_STATE__ = (.*);',html).group(1))
base=bootstrap(open('/tmp/sera-home.html').read())
meta=base['siteData']['pagesMeta']
def collect(obj,texts,images,links):
 if isinstance(obj,dict):
  if obj.get('hidden') is True: return
  if 'quill' in obj:
   ops=obj['quill'].get('ops',[]); text=''.join(op.get('insert','') if isinstance(op.get('insert',''),str) else '' for op in ops).strip()
   if text and text not in [t['text'] for t in texts]: texts.append({'text':text,'ops':ops})
  if ('source' in obj or 'original' in obj) and ('/uploads/' in str(obj.get('source','')) or '/uploads/' in str(obj.get('original',''))):
   source=obj.get('original') or obj.get('source')
   if source not in [i['source'] for i in images]:images.append({'source':source,'alt':obj.get('alt') or obj.get('altText') or obj.get('name',''),'width':obj.get('width'),'height':obj.get('height')})
  if 'link' in obj and isinstance(obj['link'],dict):
   if obj not in links: links.append(obj)
  for k,v in obj.items():
   if k not in ['quill','sourceSet','backgroundMobile','imageMobile']:collect(v,texts,images,links)
 elif isinstance(obj,list):
  for v in obj:collect(v,texts,images,links)
def run(m):
 route=m['route']; d=base if route=='home' else bootstrap(fetch('/'+route))
 p=d['siteData']['page']['properties']; texts=[]; images=[]; links=[]
 collect(p.get('contentAreas',{}),texts,images,links)
 out={'slug':route,'name':m['name'],'title':m['title'],'source':HOST+('/' if route=='home' else '/'+route),'texts':texts,'images':images,'links':links}
 (DEST/(route+'.json')).write_text(json.dumps(out,ensure_ascii=False,indent=2))
 return route,len(texts),len(images)
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:
 for r in ex.map(run,meta):print(r)
(DEST/'site-meta.json').write_text(json.dumps({'pages':meta,'site':base['siteData']['site'],'commerceLinks':base['commerceLinks'],'storeInfo':base['storeInfo']},ensure_ascii=False,indent=2))
