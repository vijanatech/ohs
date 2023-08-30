/* Qwik Service Worker */
const appBundles=[["q-06671217.js",[8]],["q-09e3ff25.js",[8,27],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-157db110.js",[8]],["q-1652d0ca.js",[8]],["q-1743e5d4.js",[8],["8EhJu0eNwkg"]],["q-19bdb453.js",[8],["7Mh00C0zUU4","I21lEHmDDqY","YIeDkSy02W0","yIWXQbHW90U"]],["q-1bf735dc.js",[8,28],["UJysYuLpeA4"]],["q-25b66589.js",[8,27],["e0ssiDXoeAM"]],["q-2d5edf8f.js",[]],["q-2d72e9d0.js",[8]],["q-2d8c25ff.js",[8]],["q-2f733dc7.js",[8],["QMRTJ6ADjpE"]],["q-31173b07.js",[2,8],["0YCJaOeZXN0","eBN1Ws5p01c","eKa8At0WZOc","g3LfJf3s2u0","JNriCpPFGV0","mBXnpu5cqHM","qfhlaCP40ao","tHUi0rNDbus","uky6IrGNyj4"]],["q-3e7af67f.js",[8]],["q-42d98f87.js",[8],["tCmRvLBorTM"]],["q-44b93ab8.js",[8],["jJ9UdgkOBnw","lAbJWaybOcM"]],["q-47b95ec6.js",[8,27],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-4db062c6.js",[8,27],["eBQ0vFsFKsk"]],["q-5047d5e1.js",[8]],["q-61e731e2.js",[],["DyVc0YBIqQU"]],["q-69d48727.js",[8,28],["AirgkP2JkiY"]],["q-6eed4b74.js",[8]],["q-70f28c5f.js",[8,27],["9zcbxwe7qgA"]],["q-7c3de601.js",[8]],["q-7f19fc3e.js",[8,27],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-82dc6305.js",[8]],["q-8ea06850.js",[]],["q-989ff521.js",[8]],["q-a0cb46af.js",[8]],["q-a1b841a4.js",[8],["A5bZC7WO00A"]],["q-a8af2d64.js",[8],["03Hh6o00I0E"]],["q-b121290f.js",[2,8],["00xeyOvcJ1I","0y6jEBHEg5k","dl0eZpkD8uE","eLTD2LJ000Y","FMm8O91E00Y","MJHRlNHpr28","qyNCd0m81sw"]],["q-b3f230e7.js",[8,27],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-b744a6c3.js",[8,27],["MZm4EEmfCg8"]],["q-c796ae0d.js",[8],["PlsxT0M1U6c"]],["q-ce31f860.js",[8,27],["wOIPfiQ04l4"]],["q-d7c73dd1.js",[8,27]],["q-e118a753.js",[8],["m7QsJSTZfzQ"]],["q-f36029de.js",[8],["UI0cm5mLn3k"]]];
const libraryBundleIds=[16];
const linkBundles=[[/^\/$/,[36,15,10,6]],[/^\/blog-details\/?$/,[36,15,13,14]],[/^\/blog\/?$/,[36,15,9,20]],[/^\/portfolio-details\/?$/,[36,15,18,4]],[/^\/services-details\/?$/,[36,15,0,11]],[/^\/sms\/?$/,[36,15,23,12]],[/^\/wedo\/?$/,[36,15,21,34]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
