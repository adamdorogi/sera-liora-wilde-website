import json,pathlib,urllib.request,concurrent.futures,hashlib
root=pathlib.Path(__file__).resolve().parents[1]; dest=root/'public/images';dest.mkdir(parents=True,exist_ok=True)
jobs={}
for p in (root/'content').glob('*.json'):
 if p.stem=='site-meta':continue
 d=json.load(open(p))
 for i in d['images']:
  src=i['source'];ext=pathlib.Path(src.split('?')[0]).suffix.lower()
  if ext not in ['.png','.jpg','.jpeg','.webp']:ext='.jpg'
  name=hashlib.sha1(src.encode()).hexdigest()[:12]+ext
  i['local']='/images/'+name
  jobs[src]=name
 p.write_text(json.dumps(d,ensure_ascii=False,indent=2))
def run(job):
 src,name=job;url=('https://cf72ccc17751c706e3ca.cdn6.editmysite.com'+src if src.startswith('/') else src)
 req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
 try:
  data=urllib.request.urlopen(req,timeout=40).read();(dest/name).write_bytes(data)
  return name,len(data)
 except Exception as e:return name,str(e)
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:
 for r in ex.map(run,jobs.items()):print(r)
(root/'content/assets.json').write_text(json.dumps([{'source':s,'local':'/images/'+n} for s,n in jobs.items()],indent=2))
