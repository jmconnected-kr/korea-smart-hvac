import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const html=readFileSync('dist/index.html','utf8');
for(const [,js] of html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g))new vm.Script(js);
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
if(new Set(ids).size!==ids.length)throw Error('Duplicate IDs');
for(const [,id] of html.matchAll(/href="#([^"]+)"/g))if(!ids.includes(id))throw Error('Broken anchor '+id);
console.log('PASS: JavaScript syntax, unique IDs, navigation targets');
