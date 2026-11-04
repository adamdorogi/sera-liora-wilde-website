import json,pathlib,sys
root=pathlib.Path(__file__).resolve().parents[1]
paths=[]
for folder in ['app','components','lib','content']:
 for p in (root/folder).rglob('*'):
  if p.is_file() and p.suffix in ['.tsx','.ts','.css','.json','.svg']:paths.append(p)
for name in ['package.json','package-lock.json','next.config.ts','tsconfig.json','next-env.d.ts','eslint.config.mjs','vercel.json','scripts/prepare-deployment.mjs']:
 paths.append(root/name)
files=[{'file':str(p.relative_to(root)),'data':p.read_text(),'encoding':'utf-8'} for p in sorted(paths)]
serialized=json.dumps(files,ensure_ascii=True,separators=(',',':'))
size=50000
if len(sys.argv)>1:
 n=int(sys.argv[1]);print(json.dumps({'chunk':serialized[n*size:(n+1)*size]}))
else:
 pathlib.Path('/tmp/sera-release-source.json').write_text(serialized)
 print(json.dumps({'files':len(files),'bytes':len(serialized),'chunks':(len(serialized)+size-1)//size}))
