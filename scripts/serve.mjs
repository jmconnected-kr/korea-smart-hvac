import http from 'node:http';
import {readFileSync} from 'node:fs';
const args=process.argv; const i=args.indexOf('--port'); const port=i>=0?Number(args[i+1]):3000;
http.createServer((req,res)=>{if(!['/','/index.html'].includes(req.url.split('?')[0])){res.writeHead(404);return res.end('Not found');}res.setHeader('Content-Type','text/html; charset=utf-8');res.end(readFileSync('dist/index.html'));}).listen(port,'0.0.0.0',()=>console.log('Listening on '+port));
