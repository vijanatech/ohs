import{getNotFound as fe}from"./@qwik-city-not-found-paths.js";import{isStaticPath as ue}from"./@qwik-city-static-paths.js";import{_ as de,a as he,v as pe,q as me}from"./assets/@qwik-city-plan-37b0035e.js";import{s as ge,r as we,m as ye}from"./assets/entry.ssr-fa64ed89.js";var q=class extends Error{constructor(e,r){super(r),this.status=e}};function be(e,r){let t="Server Error";return r!=null&&(typeof r.message=="string"?t=r.message:t=String(r)),"<html>"+E(e,t)+"</html>"}function E(e,r){typeof e!="number"&&(e=500),typeof r=="string"?r=xe(r):r="";const t=typeof r=="string"?"600px":"300px",a=e>=500?Re:_e;return`
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${r}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${a}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${t}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${a}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${a}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${r}</span></p></body>
`}var Se=/[&<>]/g,xe=e=>e.replace(Se,r=>{switch(r){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return""}}),_e="#006ce9",Re="#713fc2",Te={lax:"Lax",none:"None",strict:"Strict"},ke={seconds:1,minutes:1*60,hours:1*60*60,days:1*60*60*24,weeks:1*60*60*24*7},Ae=(e,r,t)=>{const a=[`${e}=${r}`];typeof t.domain=="string"&&a.push(`Domain=${t.domain}`),typeof t.maxAge=="number"?a.push(`Max-Age=${t.maxAge}`):Array.isArray(t.maxAge)?a.push(`Max-Age=${t.maxAge[0]*ke[t.maxAge[1]]}`):typeof t.expires=="number"||typeof t.expires=="string"?a.push(`Expires=${t.expires}`):t.expires instanceof Date&&a.push(`Expires=${t.expires.toUTCString()}`),t.httpOnly&&a.push("HttpOnly"),typeof t.path=="string"&&a.push(`Path=${t.path}`);const n=De(t.sameSite);return n&&a.push(`SameSite=${n}`),t.secure&&a.push("Secure"),a.join("; ")},Pe=e=>{const r={};if(typeof e=="string"&&e!==""){const t=e.split(";");for(const a of t){const n=a.indexOf("=");n!==-1&&(r[decodeURIComponent(a.slice(0,n).trim())]=decodeURIComponent(a.slice(n+1).trim()))}}return r};function De(e){if(e===!0)return"Strict";if(e===!1)return"None";if(e)return Te[e]}var A=Symbol("request-cookies"),N=Symbol("response-cookies"),_=Symbol("live-cookies"),ee,te,Me=class{constructor(e){this[ee]={},this[te]={},this[A]=Pe(e),this[_]={...this[A]}}get(e,r=!0){const t=this[r?_:A][e];return t?{value:t,json(){return JSON.parse(t)},number(){return Number(t)}}:null}getAll(e=!0){return Object.keys(this[e?_:A]).reduce((r,t)=>(r[t]=this.get(t),r),{})}has(e,r=!0){return!!this[r?_:A][e]}set(e,r,t={}){this[_][e]=typeof r=="string"?r:JSON.stringify(r);const a=typeof r=="string"?r:encodeURIComponent(JSON.stringify(r));this[N][e]=Ae(e,a,t)}delete(e,r){this.set(e,"deleted",{...r,maxAge:0}),this[_][e]=null}headers(){return Object.values(this[N])}};ee=N,te=_;var We=(e,r)=>{const t=r.headers();if(t.length>0){const a=new Headers(e);for(const n of t)a.append("Set-Cookie",n);return a}return e},U=class{},C=class extends U{},B=new WeakMap,G="qaction",Ce="qfunc";function $e(e){const{url:r,params:t,request:a,status:n,locale:i}=e,o={};a.headers.forEach((d,p)=>o[p]=d);const s=e.sharedMap.get(L),l=e.sharedMap.get(oe),c=e.sharedMap.get(Ke);return{url:new URL(r.pathname+r.search,r).href,requestHeaders:o,locale:i(),nonce:c,qwikcity:{ev:e,params:{...t},loadedRoute:Ye(e),response:{status:n(),loaders:H(e),action:s,formData:l}}}}var Oe=(e,r,t,a,n)=>{const i=[],o=[],s=[],l=!!(r&&Qe(r[1]));return e&&J(i,o,s,e,l,t),r&&(a&&(t==="POST"||t==="PUT"||t==="PATCH"||t==="DELETE")&&s.unshift(ze),l&&(t==="POST"&&s.push(Le),s.push(He),s.push(Fe)),s.push(Ue),J(i,o,s,r[1],l,t),l&&(s.push(ve(i,o)),s.push(n))),s},J=(e,r,t,a,n,i)=>{for(const o of a){typeof o.onRequest=="function"?t.push(o.onRequest):Array.isArray(o.onRequest)&&t.push(...o.onRequest);let s;switch(i){case"GET":{s=o.onGet;break}case"POST":{s=o.onPost;break}case"PUT":{s=o.onPut;break}case"PATCH":{s=o.onPatch;break}case"DELETE":{s=o.onDelete;break}case"OPTIONS":{s=o.onOptions;break}case"HEAD":{s=o.onHead;break}}if(typeof s=="function"?t.push(s):Array.isArray(s)&&t.push(...s),n){const l=Object.values(o).filter(d=>K(d,"server_loader"));e.push(...l);const c=Object.values(o).filter(d=>K(d,"server_action"));r.push(...c)}}},K=(e,r)=>e&&typeof e=="function"&&e.__brand===r;function ve(e,r){return async t=>{if(t.headersSent){t.exit();return}const{method:a}=t,n=H(t),i=j(t)==="dev",o=t[I];if(i&&a==="GET"&&t.query.has(G)&&console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`),a==="POST"){const s=t.query.get(G);if(s){const l=globalThis._qwikActionsMap,c=r.find(d=>d.__id===s)??(l==null?void 0:l.get(s));if(c){t.sharedMap.set(L,s);const d=await t.parseBody();if(!d||typeof d!="object")throw new Error("Expected request data to be an object");const p=await X(t,c.__validators,d,i);if(!p.success)n[s]=t.fail(p.status??500,p.error);else{const g=i?await O(t,c.__qrl.getSymbol().split("_",1)[0],()=>c.__qrl.call(t,p.data,t)):await c.__qrl.call(t,p.data,t);i&&$(o,g,c.__qrl),n[s]=g}}}}e.length>0&&await Promise.all(e.map(s=>{const l=s.__id;return n[l]=X(t,s.__validators,void 0,i).then(c=>c.success?i?O(t,s.__qrl.getSymbol().split("_",1)[0],()=>s.__qrl.call(t,t)):s.__qrl.call(t,t):t.fail(c.status??500,c.error)).then(c=>(typeof c=="function"?n[l]=c():(i&&$(o,c,s.__qrl),n[l]=c),c))}))}}async function X(e,r,t,a){let n={success:!0,data:t};if(r)for(const i of r)if(a?n=await O(e,"validator$",()=>i.validate(e,t)):n=await i.validate(e,t),n.success)t=n.data;else return n;return n}function Ie(e){return e&&typeof e=="object"&&Symbol.asyncIterator in e}async function Le(e){const r=e.query.get(Ce);if(r&&e.request.headers.get("X-QRL")===r&&e.request.headers.get("Content-Type")==="application/qwik-json"){e.exit();const t=j(e)==="dev",a=e[I],n=await e.parseBody();if(Array.isArray(n)){const[i,...o]=n;if(je(i)&&i.getHash()===r){let s;try{t?s=await O(e,`server_${i.getSymbol()}`,()=>i.apply(e,o)):s=await i.apply(e,o)}catch(l){e.headers.set("Content-Type","application/qwik-json"),e.send(500,await a._serializeData(l,!0));return}if(Ie(s)){e.headers.set("Content-Type","text/qwik-json-stream");const c=e.getWritableStream().getWriter();for await(const d of s){t&&$(a,d,i);const p=await a._serializeData(d,!0);if(e.signal.aborted)break;await c.write(v.encode(`${p}
`))}c.close()}else{$(a,s,i),e.headers.set("Content-Type","application/qwik-json");const l=await a._serializeData(s,!0);e.send(200,l)}return}}throw e.error(500,"Invalid request")}}function He(e){const r=F(e),{basePathname:t,pathname:a,url:n,sharedMap:i}=e;if(!i.has(P)&&a!==t&&!a.endsWith(".html")){if(r){if(!a.endsWith("/"))throw e.redirect(302,a+"/"+n.search)}else if(a.endsWith("/"))throw e.redirect(302,a.slice(0,a.length-1)+n.search)}}function $(e,r,t){try{e._verifySerializable(r,void 0)}catch(a){throw a instanceof Error&&t.dev&&(a.loc=t.dev),a}}var je=e=>typeof e=="function"&&typeof e.getSymbol=="function";function Qe(e){const r=e[e.length-1];return r&&typeof r.default=="function"}function re(e,r){return e.pathname.endsWith(R)?e.pathname.slice(0,-R.length+(r?1:0))+e.search:e.pathname}var v=new TextEncoder;function ze(e){if(Ge(e.request.headers,"application/x-www-form-urlencoded","multipart/form-data","text/plain")){const t=e.request.headers.get("origin"),a=e.url.origin;if(t!==a)throw e.error(403,`CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${t}" does not match the server origin "${a}".`)}}function Ne(e){return async r=>{if(r.headersSent||r.sharedMap.has(P))return;r.request.headers.forEach((p,g)=>p);const a=r.headers;a.has("Content-Type")||a.set("Content-Type","text/html; charset=utf-8");const n=F(r),{readable:i,writable:o}=new TextEncoderStream,s=r.getWritableStream(),l=i.pipeTo(s,{preventClose:!0}),c=o.getWriter(),d=r.status();try{const p=j(r)==="static",g=await e({base:r.basePathname+"build/",stream:c,serverData:$e(r),containerAttributes:{"q:render":p?"static":""}}),u={loaders:H(r),action:r.sharedMap.get(L),status:d!==200?d:200,href:re(r.url,n)};typeof g.html=="string"&&await c.write(g.html),r.sharedMap.set("qData",u)}finally{await c.ready,await c.close(),await l}await s.close()}}async function Ue(e){if(e.sharedMap.has(P)){try{await e.next()}catch(i){if(!(i instanceof C))throw i}if(e.headersSent)return;const t=e.status(),a=e.headers.get("Location");if(t>=301&&t<=308&&a){const i=Be(a);if(i){e.headers.set("Location",i),e.getWritableStream().close();return}else e.status(200),e.headers.delete("Location")}}}async function Fe(e){if(e.sharedMap.has(P)){if(await e.next(),e.headersSent||e.exited)return;const t=e.status(),a=e.headers.get("Location"),n=F(e);e.request.headers.forEach((c,d)=>c),e.headers.set("Content-Type","application/json; charset=utf-8");const i={loaders:H(e),action:e.sharedMap.get(L),status:t!==200?t:200,href:re(e.url,n),redirect:a??void 0},o=e.getWritableStream().getWriter(),l=await e[I]._serializeData(i,!0);o.write(v.encode(l)),e.sharedMap.set("qData",i),o.close()}}function Be(e){if(e.startsWith("/")){const r=R,t=new URL(e,"http://localhost");return(t.pathname.endsWith("/")?t.pathname.slice(0,-1):t.pathname)+(r.startsWith("/")?"":"/")+r+t.search}else return}function Y(){return typeof performance<"u"?performance.now():0}async function O(e,r,t){const a=Y();try{return await t()}finally{const n=Y()-a;let i=e.sharedMap.get("@serverTiming");i||e.sharedMap.set("@serverTiming",i=[]),i.push([r,n])}}function Ge(e,...r){var t;const a=((t=e.get("content-type"))==null?void 0:t.split(/;,/,1)[0].trim())??"";return r.includes(a)}function Je(e){const r=[];return e==="day"?e=60*60*24:e==="week"?e=60*60*24*7:e==="month"?e=60*60*24*30:e==="year"?e=60*60*24*365:e==="private"?e={private:!0,noCache:!0}:e==="immutable"?e={public:!0,immutable:!0,maxAge:60*60*24*365,staleWhileRevalidate:60*60*24*365}:e==="no-cache"&&(e={noCache:!0}),typeof e=="number"&&(e={maxAge:e,sMaxAge:e,staleWhileRevalidate:e}),e.immutable&&r.push("immutable"),e.maxAge&&r.push(`max-age=${e.maxAge}`),e.sMaxAge&&r.push(`s-maxage=${e.sMaxAge}`),e.noStore&&r.push("no-store"),e.noCache&&r.push("no-cache"),e.private&&r.push("private"),e.public&&r.push("public"),e.staleWhileRevalidate&&r.push(`stale-while-revalidate=${e.staleWhileRevalidate}`),e.staleIfError&&r.push(`stale-if-error=${e.staleIfError}`),r.join(", ")}var ae=Symbol("RequestEvLoaders"),ne=Symbol("RequestEvMode"),ie=Symbol("RequestEvRoute"),I=Symbol("RequestEvQwikSerializer"),se=Symbol("RequestEvTrailingSlash"),L="@actionId",oe="@actionFormData",Ke="@nonce";function Xe(e,r,t,a,n,i,o,s){const{request:l,platform:c,env:d}=e,p=new Map,g=new Me(l.headers.get("cookie")),u=new Headers,m=new URL(l.url);m.pathname.endsWith(R)&&(m.pathname=m.pathname.slice(0,-ce),n&&!m.pathname.endsWith("/")&&(m.pathname+="/"),p.set(P,!0)),p.set("@manifest",a);let y=-1,b=null,T,D=e.locale,w=200;const le=async()=>{for(y++;y<t.length;){const f=t[y],h=f(x);h instanceof Promise&&await h,y++}},k=()=>{if(b!==null)throw new Error("Response already sent")},M=(f,h)=>{if(k(),typeof f=="number"){w=f;const W=x.getWritableStream().getWriter();W.write(typeof h=="string"?v.encode(h):h),W.close()}else if(w=f.status,f.headers.forEach((S,W)=>{u.append(W,S)}),f.body){const S=x.getWritableStream();f.body.pipeTo(S)}else{if(w>=300&&w<400)return new C;x.getWritableStream().getWriter().close()}return Q()},Q=()=>(y=V,new U),z={},x={[ae]:z,[ne]:e.mode,[se]:n,[ie]:r,[I]:o,cookie:g,headers:u,env:d,method:l.method,signal:l.signal,params:(r==null?void 0:r[0])??{},pathname:m.pathname,platform:c,query:m.searchParams,request:l,url:m,basePathname:i,sharedMap:p,get headersSent(){return b!==null},get exited(){return y>=V},get clientConn(){return e.getClientConn()},next:le,exit:Q,cacheControl:f=>{k(),u.set("Cache-Control",Je(f))},resolveValue:async f=>{const h=f.__id;if(f.__brand==="server_loader"&&!(h in z))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");return z[h]},status:f=>typeof f=="number"?(k(),w=f,f):w,locale:f=>(typeof f=="string"&&(D=f),D||""),error:(f,h)=>(w=f,u.delete("Cache-Control"),new q(f,h)),redirect:(f,h)=>{if(k(),w=f,h){const S=h.replace(/([^:])\/{2,}/g,"$1/");h!==S&&console.warn(`Redirect URL ${h} is invalid, fixing to ${S}`),u.set("Location",S)}return u.delete("Cache-Control"),f>301&&u.set("Cache-Control","no-store"),Q(),new C},defer:f=>typeof f=="function"?f:()=>f,fail:(f,h)=>(k(),w=f,u.delete("Cache-Control"),{failed:!0,...h}),text:(f,h)=>(u.set("Content-Type","text/plain; charset=utf-8"),M(f,h)),html:(f,h)=>(u.set("Content-Type","text/html; charset=utf-8"),M(f,h)),parseBody:async()=>T!==void 0?T:T=Ve(x.request,p,o),json:(f,h)=>(u.set("Content-Type","application/json; charset=utf-8"),M(f,JSON.stringify(h))),send:M,isDirty:()=>b!==null,getWritableStream:()=>{if(b===null){if(e.mode==="dev"){const f=p.get("@serverTiming");f&&u.set("Server-Timing",f.map(h=>`${h[0]};dur=${h[1]}`).join(","))}b=e.getWritableStream(w,u,g,s,x)}return b}};return Object.freeze(x)}function H(e){return e[ae]}function F(e){return e[se]}function Ye(e){return e[ie]}function j(e){return e[ne]}var V=Number.MAX_SAFE_INTEGER,Ve=async(e,r,t)=>{var a;const n=e.clone(),i=((a=e.headers.get("content-type"))==null?void 0:a.split(/[;,]/,1)[0].trim())??"";if(i==="application/x-www-form-urlencoded"||i==="multipart/form-data"){const o=await n.formData();return r.set(oe,o),Ze(o)}else{if(i==="application/json")return await n.json();if(i==="application/qwik-json")return t._deserializeData(await n.text())}},Ze=e=>{const r={};return e.forEach((t,a)=>{const n=a.split(".").filter(o=>o);let i=r;for(let o=0;o<n.length;o++){let s=n[o];o===n.length-1?s.endsWith("[]")?(s=s.slice(0,-2),i[s]=i[s]||[],i[s].push(t)):i[s]=t:i=i[s]={...i[s]}}}),r};function qe(e,r,t,a,n=!0,i="/",o){let s;const l=new Promise(d=>s=d),c=Xe(e,r,t,a,n,i,o,s);return{response:l,requestEv:c,completion:Ee(c,s)}}async function Ee(e,r){try{await e.next()}catch(t){if(t instanceof C)await e.getWritableStream().close();else if(t instanceof q){if(console.error(t),!e.headersSent){const a=be(t.status,t),n=t.status;e.html(n,a)}}else if(!(t instanceof U)){if(j(e)!=="dev")try{e.headersSent||(e.headers.set("content-type","text/html; charset=utf-8"),e.cacheControl({noCache:!0}),e.status(500));const a=e.getWritableStream();if(!a.locked){const n=a.getWriter();await n.write(v.encode(E(500,"Internal Server Error"))),await n.close()}}catch{console.error("Unable to render error page")}return t}}finally{e.isDirty()||r(null)}}function et(e,r){if(e.endsWith(R)){const t=e.length-ce+(r?1:0);e=e.slice(0,t),e===""&&(e="/")}return e}var P="@isQData",R="/q-data.json",ce=R.length,tt=async(e,r,t,a)=>{if(Array.isArray(e))for(const n of e){const i=n[0].exec(a);if(i){const o=n[1],s=at(n[2],i),l=n[4],c=new Array(o.length),d=[],p=rt(r,a);let g;return o.forEach((u,m)=>{Z(u,d,y=>c[m]=y,t)}),Z(p,d,u=>g=u==null?void 0:u.default,t),d.length>0&&await Promise.all(d),[s,c,g,l]}}return null},Z=(e,r,t,a)=>{if(typeof e=="function"){const n=B.get(e);if(n)t(n);else{const i=e();typeof i.then=="function"?r.push(i.then(o=>{a!==!1&&B.set(e,o),t(o)})):i&&t(i)}}},rt=(e,r)=>{if(e){r=r.endsWith("/")?r:r+"/";const t=e.find(a=>a[0]===r||r.startsWith(a[0]+(r.endsWith("/")?"":"/")));if(t)return t[1]}},at=(e,r)=>{const t={};if(e)for(let a=0;a<e.length;a++){const n=(r==null?void 0:r[a+1])??"",i=n.endsWith("/")?n.slice(0,-1):n;t[e[a]]=decodeURIComponent(i)}return t};async function nt(e,r,t){const{render:a,qwikCityPlan:n,manifest:i,checkOrigin:o}=r,s=e.url.pathname,l=et(s,n.trailingSlash),c=await it(n,l,e.request.method,o??!0,a);return c?qe(e,c[0],c[1],i,n.trailingSlash,n.basePathname,t):null}async function it(e,r,t,a,n){const{routes:i,serverPlugins:o,menus:s,cacheModules:l}=e,c=await tt(i,s,l,r),d=Oe(o,c,t,a,Ne(n));return d.length>0?[c,d]:null}function st(e){globalThis.TextEncoderStream=ct;const r={_deserializeData:de,_serializeData:he,_verifySerializable:pe};e.manifest&&ge(e.manifest);async function t(a,n,i){try{const o=new URL(a.url);if(ue(a.method,o))return n.ASSETS.fetch(a);const s=o.hostname!=="127.0.0.1"&&o.hostname!=="localhost"&&o.port===""&&a.method==="GET",l=new Request(o.href,a),c=s?await caches.open("custom:qwikcity"):null;if(c){const u=await c.match(l);if(u)return u}const p=await nt({mode:"server",locale:void 0,url:o,request:a,env:{get(u){return n[u]}},getWritableStream:(u,m,y,b)=>{const{readable:T,writable:D}=new TransformStream,w=new Response(T,{status:u,headers:We(m,y)});return b(w),D},getClientConn:()=>({ip:a.headers.get("CF-connecting-ip")||"",country:a.headers.get("CF-IPCountry")||""}),platform:{request:a,env:n,ctx:i}},e,r);if(p){p.completion.then(m=>{m&&console.error(m)});const u=await p.response;if(u)return u.ok&&c&&u.headers.has("Cache-Control")&&i.waitUntil(c.put(l,u.clone())),u}const g=fe(o.pathname);return new Response(g,{status:404,headers:{"Content-Type":"text/html; charset=utf-8","X-Not-Found":o.pathname}})}catch(o){return console.error(o),new Response(String(o||"Error"),{status:500,headers:{"Content-Type":"text/plain; charset=utf-8","X-Error":"cloudflare-pages"}})}}return t}var ot=Promise.resolve(),ct=class{constructor(){this._writer=null,this.readable={pipeTo:r=>{this._writer=r.getWriter()}},this.writable={getWriter:()=>{if(!this._writer)throw new Error("No writable stream");const r=new TextEncoder;return{write:async t=>{t!=null&&await this._writer.write(r.encode(t))},close:()=>this._writer.close(),ready:ot}}}}};const pt=st({render:we,qwikCityPlan:me,manifest:ye});export{pt as fetch};
