import{s as we,r as be,m as Se}from"./assets/entry.ssr-1da46022.mjs";import{getNotFound as xe}from"./@qwik-city-not-found-paths.js";import{isStaticPath as Te}from"./@qwik-city-static-paths.js";import{createReadStream as ve}from"fs";import{join as O,basename as Re,extname as _e}from"path";import{fileURLToPath as ke}from"url";import{Http2ServerRequest as Ae}from"http2";import{TextEncoderStream as Pe,TextDecoderStream as De,WritableStream as Me,ReadableStream as Oe}from"stream/web";import{fetch as $e,Headers as We,Request as je,Response as Ce,FormData as He}from"undici";import Le from"crypto";import{_ as Ie,a as Ue,v as ze,q as Ne}from"./assets/@qwik-city-plan-129bad42.mjs";import C from"express";import Fe from"cors";import{fileURLToPath as Qe}from"node:url";import{join as re}from"node:path";var ie=class extends Error{constructor(e,t){super(t),this.status=e}};function Be(e,t){let a="Server Error";return t!=null&&(typeof t.message=="string"?a=t.message:a=String(t)),"<html>"+se(e,a)+"</html>"}function se(e,t){typeof e!="number"&&(e=500),typeof t=="string"?t=Je(t):t="";const a=typeof t=="string"?"600px":"300px",n=e>=500?Ke:Ee;return`
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${n}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${a}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${n}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${n}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${t}</span></p></body>
`}var Ge=/[&<>]/g,Je=e=>e.replace(Ge,t=>{switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return""}}),Ee="#006ce9",Ke="#713fc2",Xe={lax:"Lax",none:"None",strict:"Strict"},Ye={seconds:1,minutes:1*60,hours:1*60*60,days:1*60*60*24,weeks:1*60*60*24*7},qe=(e,t,a)=>{const n=[`${e}=${t}`];typeof a.domain=="string"&&n.push(`Domain=${a.domain}`),typeof a.maxAge=="number"?n.push(`Max-Age=${a.maxAge}`):Array.isArray(a.maxAge)?n.push(`Max-Age=${a.maxAge[0]*Ye[a.maxAge[1]]}`):typeof a.expires=="number"||typeof a.expires=="string"?n.push(`Expires=${a.expires}`):a.expires instanceof Date&&n.push(`Expires=${a.expires.toUTCString()}`),a.httpOnly&&n.push("HttpOnly"),typeof a.path=="string"&&n.push(`Path=${a.path}`);const r=Ze(a.sameSite);return r&&n.push(`SameSite=${r}`),a.secure&&n.push("Secure"),n.join("; ")},Ve=e=>{const t={};if(typeof e=="string"&&e!==""){const a=e.split(";");for(const n of a){const r=n.indexOf("=");r!==-1&&(t[decodeURIComponent(n.slice(0,r).trim())]=decodeURIComponent(n.slice(r+1).trim()))}}return t};function Ze(e){if(e===!0)return"Strict";if(e===!1)return"None";if(e)return Xe[e]}var A=Symbol("request-cookies"),G=Symbol("response-cookies"),R=Symbol("live-cookies"),oe,ce,et=class{constructor(e){this[oe]={},this[ce]={},this[A]=Ve(e),this[R]={...this[A]}}get(e,t=!0){const a=this[t?R:A][e];return a?{value:a,json(){return JSON.parse(a)},number(){return Number(a)}}:null}getAll(e=!0){return Object.keys(this[e?R:A]).reduce((t,a)=>(t[a]=this.get(a),t),{})}has(e,t=!0){return!!this[t?R:A][e]}set(e,t,a={}){this[R][e]=typeof t=="string"?t:JSON.stringify(t);const n=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[G][e]=qe(e,n,a)}delete(e,t){this.set(e,"deleted",{...t,maxAge:0}),this[R][e]=null}headers(){return Object.values(this[G])}};oe=G,ce=R;var J=class{},$=class extends J{},X=new WeakMap,Y="qaction",tt="qfunc";function at(e){const{url:t,params:a,request:n,status:r,locale:s}=e,o={};n.headers.forEach((f,p)=>o[p]=f);const i=e.sharedMap.get(I),l=e.sharedMap.get(he),c=e.sharedMap.get(yt);return{url:new URL(t.pathname+t.search,t).href,requestHeaders:o,locale:s(),nonce:c,qwikcity:{ev:e,params:{...a},loadedRoute:bt(e),response:{status:r(),loaders:U(e),action:i,formData:l}}}}var nt=(e,t,a,n,r)=>{const s=[],o=[],i=[],l=!!(t&&lt(t[1]));return e&&q(s,o,i,e,l,a),t&&(n&&(a==="POST"||a==="PUT"||a==="PATCH"||a==="DELETE")&&i.unshift(ft),l&&(a==="POST"&&i.push(st),i.push(ot),i.push(pt)),i.push(ut),q(s,o,i,t[1],l,a),l&&(i.push(rt(s,o)),i.push(r))),i},q=(e,t,a,n,r,s)=>{for(const o of n){typeof o.onRequest=="function"?a.push(o.onRequest):Array.isArray(o.onRequest)&&a.push(...o.onRequest);let i;switch(s){case"GET":{i=o.onGet;break}case"POST":{i=o.onPost;break}case"PUT":{i=o.onPut;break}case"PATCH":{i=o.onPatch;break}case"DELETE":{i=o.onDelete;break}case"OPTIONS":{i=o.onOptions;break}case"HEAD":{i=o.onHead;break}}if(typeof i=="function"?a.push(i):Array.isArray(i)&&a.push(...i),r){const l=Object.values(o).filter(f=>V(f,"server_loader"));e.push(...l);const c=Object.values(o).filter(f=>V(f,"server_action"));t.push(...c)}}},V=(e,t)=>e&&typeof e=="function"&&e.__brand===t;function rt(e,t){return async a=>{if(a.headersSent){a.exit();return}const{method:n}=a,r=U(a),s=z(a)==="dev",o=a[L];if(s&&n==="GET"&&a.query.has(Y)&&console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`),n==="POST"){const i=a.query.get(Y);if(i){const l=globalThis._qwikActionsMap,c=t.find(f=>f.__id===i)??(l==null?void 0:l.get(i));if(c){a.sharedMap.set(I,i);const f=await a.parseBody();if(!f||typeof f!="object")throw new Error("Expected request data to be an object");const p=await Z(a,c.__validators,f,s);if(!p.success)r[i]=a.fail(p.status??500,p.error);else{const h=s?await j(a,c.__qrl.getSymbol().split("_",1)[0],()=>c.__qrl.call(a,p.data,a)):await c.__qrl.call(a,p.data,a);s&&W(o,h,c.__qrl),r[i]=h}}}}e.length>0&&await Promise.all(e.map(i=>{const l=i.__id;return r[l]=Z(a,i.__validators,void 0,s).then(c=>c.success?s?j(a,i.__qrl.getSymbol().split("_",1)[0],()=>i.__qrl.call(a,a)):i.__qrl.call(a,a):a.fail(c.status??500,c.error)).then(c=>(typeof c=="function"?r[l]=c():(s&&W(o,c,i.__qrl),r[l]=c),c))}))}}async function Z(e,t,a,n){let r={success:!0,data:a};if(t)for(const s of t)if(n?r=await j(e,"validator$",()=>s.validate(e,a)):r=await s.validate(e,a),r.success)a=r.data;else return r;return r}function it(e){return e&&typeof e=="object"&&Symbol.asyncIterator in e}async function st(e){const t=e.query.get(tt);if(t&&e.request.headers.get("X-QRL")===t&&e.request.headers.get("Content-Type")==="application/qwik-json"){e.exit();const a=z(e)==="dev",n=e[L],r=await e.parseBody();if(Array.isArray(r)){const[s,...o]=r;if(ct(s)&&s.getHash()===t){let i;try{a?i=await j(e,`server_${s.getSymbol()}`,()=>s.apply(e,o)):i=await s.apply(e,o)}catch(l){e.headers.set("Content-Type","application/qwik-json"),e.send(500,await n._serializeData(l,!0));return}if(it(i)){e.headers.set("Content-Type","text/qwik-json-stream");const c=e.getWritableStream().getWriter();for await(const f of i){a&&W(n,f,s);const p=await n._serializeData(f,!0);if(e.signal.aborted)break;await c.write(H.encode(`${p}
`))}c.close()}else{W(n,i,s),e.headers.set("Content-Type","application/qwik-json");const l=await n._serializeData(i,!0);e.send(200,l)}return}}throw e.error(500,"Invalid request")}}function ot(e){const t=E(e),{basePathname:a,pathname:n,url:r,sharedMap:s}=e;if(!s.has(P)&&n!==a&&!n.endsWith(".html")){if(t){if(!n.endsWith("/"))throw e.redirect(302,n+"/"+r.search)}else if(n.endsWith("/"))throw e.redirect(302,n.slice(0,n.length-1)+r.search)}}function W(e,t,a){try{e._verifySerializable(t,void 0)}catch(n){throw n instanceof Error&&a.dev&&(n.loc=a.dev),n}}var ct=e=>typeof e=="function"&&typeof e.getSymbol=="function";function lt(e){const t=e[e.length-1];return t&&typeof t.default=="function"}function le(e,t){return e.pathname.endsWith(_)?e.pathname.slice(0,-_.length+(t?1:0))+e.search:e.pathname}var H=new TextEncoder;function ft(e){if(mt(e.request.headers,"application/x-www-form-urlencoded","multipart/form-data","text/plain")){const a=e.request.headers.get("origin"),n=e.url.origin;if(a!==n)throw e.error(403,`CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${a}" does not match the server origin "${n}".`)}}function dt(e){return async t=>{if(t.headersSent||t.sharedMap.has(P))return;t.request.headers.forEach((p,h)=>p);const n=t.headers;n.has("Content-Type")||n.set("Content-Type","text/html; charset=utf-8");const r=E(t),{readable:s,writable:o}=new TextEncoderStream,i=t.getWritableStream(),l=s.pipeTo(i,{preventClose:!0}),c=o.getWriter(),f=t.status();try{const p=z(t)==="static",h=await e({base:t.basePathname+"build/",stream:c,serverData:at(t),containerAttributes:{"q:render":p?"static":""}}),u={loaders:U(t),action:t.sharedMap.get(I),status:f!==200?f:200,href:le(t.url,r)};typeof h.html=="string"&&await c.write(h.html),t.sharedMap.set("qData",u)}finally{await c.ready,await c.close(),await l}await i.close()}}async function ut(e){if(e.sharedMap.has(P)){try{await e.next()}catch(s){if(!(s instanceof $))throw s}if(e.headersSent)return;const a=e.status(),n=e.headers.get("Location");if(a>=301&&a<=308&&n){const s=ht(n);if(s){e.headers.set("Location",s),e.getWritableStream().close();return}else e.status(200),e.headers.delete("Location")}}}async function pt(e){if(e.sharedMap.has(P)){if(await e.next(),e.headersSent||e.exited)return;const a=e.status(),n=e.headers.get("Location"),r=E(e);e.request.headers.forEach((c,f)=>c),e.headers.set("Content-Type","application/json; charset=utf-8");const s={loaders:U(e),action:e.sharedMap.get(I),status:a!==200?a:200,href:le(e.url,r),redirect:n??void 0},o=e.getWritableStream().getWriter(),l=await e[L]._serializeData(s,!0);o.write(H.encode(l)),e.sharedMap.set("qData",s),o.close()}}function ht(e){if(e.startsWith("/")){const t=_,a=new URL(e,"http://localhost");return(a.pathname.endsWith("/")?a.pathname.slice(0,-1):a.pathname)+(t.startsWith("/")?"":"/")+t+a.search}else return}function ee(){return typeof performance<"u"?performance.now():0}async function j(e,t,a){const n=ee();try{return await a()}finally{const r=ee()-n;let s=e.sharedMap.get("@serverTiming");s||e.sharedMap.set("@serverTiming",s=[]),s.push([t,r])}}function mt(e,...t){var a;const n=((a=e.get("content-type"))==null?void 0:a.split(/;,/,1)[0].trim())??"";return t.includes(n)}function gt(e){const t=[];return e==="day"?e=60*60*24:e==="week"?e=60*60*24*7:e==="month"?e=60*60*24*30:e==="year"?e=60*60*24*365:e==="private"?e={private:!0,noCache:!0}:e==="immutable"?e={public:!0,immutable:!0,maxAge:60*60*24*365,staleWhileRevalidate:60*60*24*365}:e==="no-cache"&&(e={noCache:!0}),typeof e=="number"&&(e={maxAge:e,sMaxAge:e,staleWhileRevalidate:e}),e.immutable&&t.push("immutable"),e.maxAge&&t.push(`max-age=${e.maxAge}`),e.sMaxAge&&t.push(`s-maxage=${e.sMaxAge}`),e.noStore&&t.push("no-store"),e.noCache&&t.push("no-cache"),e.private&&t.push("private"),e.public&&t.push("public"),e.staleWhileRevalidate&&t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`),e.staleIfError&&t.push(`stale-if-error=${e.staleIfError}`),t.join(", ")}var fe=Symbol("RequestEvLoaders"),de=Symbol("RequestEvMode"),ue=Symbol("RequestEvRoute"),L=Symbol("RequestEvQwikSerializer"),pe=Symbol("RequestEvTrailingSlash"),I="@actionId",he="@actionFormData",yt="@nonce";function wt(e,t,a,n,r,s,o,i){const{request:l,platform:c,env:f}=e,p=new Map,h=new et(l.headers.get("cookie")),u=new Headers,g=new URL(l.url);g.pathname.endsWith(_)&&(g.pathname=g.pathname.slice(0,-me),r&&!g.pathname.endsWith("/")&&(g.pathname+="/"),p.set(P,!0)),p.set("@manifest",n);let y=-1,w=null,b,K=e.locale,S=200;const ye=async()=>{for(y++;y<a.length;){const d=a[y],m=d(v);m instanceof Promise&&await m,y++}},k=()=>{if(w!==null)throw new Error("Response already sent")},D=(d,m)=>{if(k(),typeof d=="number"){S=d;const M=v.getWritableStream().getWriter();M.write(typeof m=="string"?H.encode(m):m),M.close()}else if(S=d.status,d.headers.forEach((T,M)=>{u.append(M,T)}),d.body){const T=v.getWritableStream();d.body.pipeTo(T)}else{if(S>=300&&S<400)return new $;v.getWritableStream().getWriter().close()}return N()},N=()=>(y=te,new J),F={},v={[fe]:F,[de]:e.mode,[pe]:r,[ue]:t,[L]:o,cookie:h,headers:u,env:f,method:l.method,signal:l.signal,params:(t==null?void 0:t[0])??{},pathname:g.pathname,platform:c,query:g.searchParams,request:l,url:g,basePathname:s,sharedMap:p,get headersSent(){return w!==null},get exited(){return y>=te},get clientConn(){return e.getClientConn()},next:ye,exit:N,cacheControl:d=>{k(),u.set("Cache-Control",gt(d))},resolveValue:async d=>{const m=d.__id;if(d.__brand==="server_loader"&&!(m in F))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");return F[m]},status:d=>typeof d=="number"?(k(),S=d,d):S,locale:d=>(typeof d=="string"&&(K=d),K||""),error:(d,m)=>(S=d,u.delete("Cache-Control"),new ie(d,m)),redirect:(d,m)=>{if(k(),S=d,m){const T=m.replace(/([^:])\/{2,}/g,"$1/");m!==T&&console.warn(`Redirect URL ${m} is invalid, fixing to ${T}`),u.set("Location",T)}return u.delete("Cache-Control"),d>301&&u.set("Cache-Control","no-store"),N(),new $},defer:d=>typeof d=="function"?d:()=>d,fail:(d,m)=>(k(),S=d,u.delete("Cache-Control"),{failed:!0,...m}),text:(d,m)=>(u.set("Content-Type","text/plain; charset=utf-8"),D(d,m)),html:(d,m)=>(u.set("Content-Type","text/html; charset=utf-8"),D(d,m)),parseBody:async()=>b!==void 0?b:b=St(v.request,p,o),json:(d,m)=>(u.set("Content-Type","application/json; charset=utf-8"),D(d,JSON.stringify(m))),send:D,isDirty:()=>w!==null,getWritableStream:()=>{if(w===null){if(e.mode==="dev"){const d=p.get("@serverTiming");d&&u.set("Server-Timing",d.map(m=>`${m[0]};dur=${m[1]}`).join(","))}w=e.getWritableStream(S,u,h,i,v)}return w}};return Object.freeze(v)}function U(e){return e[fe]}function E(e){return e[pe]}function bt(e){return e[ue]}function z(e){return e[de]}var te=Number.MAX_SAFE_INTEGER,St=async(e,t,a)=>{var n;const r=e.clone(),s=((n=e.headers.get("content-type"))==null?void 0:n.split(/[;,]/,1)[0].trim())??"";if(s==="application/x-www-form-urlencoded"||s==="multipart/form-data"){const o=await r.formData();return t.set(he,o),xt(o)}else{if(s==="application/json")return await r.json();if(s==="application/qwik-json")return a._deserializeData(await r.text())}},xt=e=>{const t={};return e.forEach((a,n)=>{const r=n.split(".").filter(o=>o);let s=t;for(let o=0;o<r.length;o++){let i=r[o];o===r.length-1?i.endsWith("[]")?(i=i.slice(0,-2),s[i]=s[i]||[],s[i].push(a)):s[i]=a:s=s[i]={...s[i]}}}),t};function Tt(e,t,a,n,r=!0,s="/",o){let i;const l=new Promise(f=>i=f),c=wt(e,t,a,n,r,s,o,i);return{response:l,requestEv:c,completion:vt(c,i)}}async function vt(e,t){try{await e.next()}catch(a){if(a instanceof $)await e.getWritableStream().close();else if(a instanceof ie){if(console.error(a),!e.headersSent){const n=Be(a.status,a),r=a.status;e.html(r,n)}}else if(!(a instanceof J)){if(z(e)!=="dev")try{e.headersSent||(e.headers.set("content-type","text/html; charset=utf-8"),e.cacheControl({noCache:!0}),e.status(500));const n=e.getWritableStream();if(!n.locked){const r=n.getWriter();await r.write(H.encode(se(500,"Internal Server Error"))),await r.close()}}catch{console.error("Unable to render error page")}return a}}finally{e.isDirty()||t(null)}}function Rt(e,t){if(e.endsWith(_)){const a=e.length-me+(t?1:0);e=e.slice(0,a),e===""&&(e="/")}return e}var P="@isQData",_="/q-data.json",me=_.length,_t=async(e,t,a,n)=>{if(Array.isArray(e))for(const r of e){const s=r[0].exec(n);if(s){const o=r[1],i=At(r[2],s),l=r[4],c=new Array(o.length),f=[],p=kt(t,n);let h;return o.forEach((u,g)=>{ae(u,f,y=>c[g]=y,a)}),ae(p,f,u=>h=u==null?void 0:u.default,a),f.length>0&&await Promise.all(f),[i,c,h,l]}}return null},ae=(e,t,a,n)=>{if(typeof e=="function"){const r=X.get(e);if(r)a(r);else{const s=e();typeof s.then=="function"?t.push(s.then(o=>{n!==!1&&X.set(e,o),a(o)})):s&&a(s)}}},kt=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const a=e.find(n=>n[0]===t||t.startsWith(n[0]+(t.endsWith("/")?"":"/")));if(a)return a[1]}},At=(e,t)=>{const a={};if(e)for(let n=0;n<e.length;n++){const r=(t==null?void 0:t[n+1])??"",s=r.endsWith("/")?r.slice(0,-1):r;a[e[n]]=decodeURIComponent(s)}return a};async function Pt(e,t,a){const{render:n,qwikCityPlan:r,manifest:s,checkOrigin:o}=t,i=e.url.pathname,l=Rt(i,r.trailingSlash),c=await Dt(r,l,e.request.method,o??!0,n);return c?Tt(e,c[0],c[1],s,r.trailingSlash,r.basePathname,a):null}async function Dt(e,t,a,n,r){const{routes:s,serverPlugins:o,menus:i,cacheModules:l}=e,c=await _t(s,i,l,t),f=nt(o,c,a,n,dt(r));return f.length>0?[c,f]:null}function Q(e,t){var a;return((a=t==null?void 0:t.getOrigin)==null?void 0:a.call(t,e))??(t==null?void 0:t.origin)??process.env.ORIGIN??Mt(e)}function Mt(e){const{PROTOCOL_HEADER:t,HOST_HEADER:a}=process.env,n=e.headers,r=t&&n[t]||(e.socket.encrypted||e.connection.encrypted?"https":"http"),s=a??(e instanceof Ae?":authority":"host"),o=n[s];return`${r}://${o}`}function B(e,t){return $t(e.originalUrl||e.url||"/",t)}var Ot=/\/\/|\\\\/g;function $t(e,t){return new URL(e.replace(Ot,"/"),t)}async function Wt(e,t,a,n,r){const s=new Headers,o=t.headers;for(const h in o){const u=o[h];if(typeof u=="string")s.set(h,u);else if(Array.isArray(u))for(const g of u)s.append(h,g)}const i=async function*(){for await(const h of t)yield h},l=t.method==="HEAD"||t.method==="GET"?void 0:i(),c=new AbortController,f={method:t.method,headers:s,body:l,signal:c.signal,duplex:"half"};return a.on("close",()=>{c.abort()}),{mode:n,url:e,request:new Request(e.href,f),env:{get(h){return process.env[h]}},getWritableStream:(h,u,g)=>{a.statusCode=h,u.forEach((w,b)=>a.setHeader(b,w));const y=g.headers();return y.length>0&&a.setHeader("Set-Cookie",y),new WritableStream({write(w){a.write(w,b=>{b&&console.error(b)})},close(){a.end()}})},getClientConn:()=>r?r(t):{ip:t.socket.remoteAddress},platform:{ssr:!0,incomingMessage:t,node:process.versions.node},locale:void 0}}var jt={"3gp":"video/3gpp","3gpp":"video/3gpp",asf:"video/x-ms-asf",asx:"video/x-ms-asf",avi:"video/x-msvideo",avif:"image/avif",bmp:"image/x-ms-bmp",css:"text/css",flv:"video/x-flv",gif:"image/gif",htm:"text/html",html:"text/html",ico:"image/x-icon",jng:"image/x-jng",jpeg:"image/jpeg",jpg:"image/jpeg",js:"application/javascript",json:"application/json",kar:"audio/midi",m4a:"audio/x-m4a",m4v:"video/x-m4v",mid:"audio/midi",midi:"audio/midi",mng:"video/x-mng",mov:"video/quicktime",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",mpg:"video/mpeg",ogg:"audio/ogg",pdf:"application/pdf",png:"image/png",rar:"application/x-rar-compressed",shtml:"text/html",svg:"image/svg+xml",svgz:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",txt:"text/plain",wbmp:"image/vnd.wap.wbmp",webm:"video/webm",webp:"image/webp",wmv:"video/x-ms-wmv",woff:"font/woff",woff2:"font/woff2",xml:"text/xml",zip:"application/zip"};function Ct(){typeof global<"u"&&typeof globalThis.fetch!="function"&&typeof process<"u"&&process.versions.node&&(globalThis.fetch=$e,globalThis.Headers=We,globalThis.Request=je,globalThis.Response=Ce,globalThis.FormData=He),typeof globalThis.TextEncoderStream>"u"&&(globalThis.TextEncoderStream=Pe,globalThis.TextDecoderStream=De),typeof globalThis.WritableStream>"u"&&(globalThis.WritableStream=Me,globalThis.ReadableStream=Oe),typeof globalThis.crypto>"u"&&(globalThis.crypto=Le.webcrypto)}function Ht(e){var t;Ct();const a={_deserializeData:Ie,_serializeData:Ue,_verifySerializable:ze};e.manifest&&we(e.manifest);const n=((t=e.static)==null?void 0:t.root)??O(ke(import.meta.url),"..","..","dist");return{router:async(i,l,c)=>{try{const f=Q(i,e),p=await Wt(B(i,f),i,l,"server",e.getClientConn),h=await Pt(p,e,a);if(h){const u=await h.completion;if(u)throw u;if(h.requestEv.headersSent)return}c()}catch(f){console.error(f),c(f)}},notFound:async(i,l,c)=>{try{if(!l.headersSent){const f=Q(i,e),p=B(i,f),h=xe(p.pathname);l.writeHead(404,{"Content-Type":"text/html; charset=utf-8","X-Not-Found":p.pathname}),l.end(h)}}catch(f){console.error(f),c(f)}},staticFile:async(i,l,c)=>{var f;try{const p=Q(i,e),h=B(i,p);if(Te(i.method||"GET",h)){const u=h.pathname;let g;Re(u).includes(".")?g=O(n,u):e.qwikCityPlan.trailingSlash?g=O(n,u+"index.html"):g=O(n,u,"index.html");const y=ve(g),w=_e(g).replace(/^\./,""),b=jt[w];b&&l.setHeader("Content-Type",b),(f=e.static)!=null&&f.cacheControl&&l.setHeader("Cache-Control",e.static.cacheControl),y.on("error",c),y.pipe(l);return}return c()}catch(p){console.error(p),c(p)}}}}const ge=re(Qe(import.meta.url),"..","..","dist"),Lt=re(ge,"build"),ne=process.env.PORT??3e3,{router:It,notFound:Ut}=Ht({render:be,qwikCityPlan:Ne,manifest:Se}),x=C();x.use("/build",C.static(Lt,{immutable:!0,maxAge:"1y"}));x.use(C.static(ge,{redirect:!1}));x.use(It);x.use(Ut);x.use(Fe);x.use(C.json());x.get("/api",(e,t)=>{t.json({welcome:"you"})});x.post("/send-sms",async(e,t)=>{const{number:a,message:n}=e.body;try{const r=await zt(),s=await Nt(r,a,n);t.json(s)}catch{t.status(500).json({error:"Failed to send SMS"})}});async function zt(){const e=await fetch("https://apis.onfonmedia.co.ke/v1/authorization",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiUsername:process.env.PUBLIC_SMS_API_USERNAME,apiPassword:process.env.PUBLIC_SMS_API_PASSWORD})});if(e.ok)return(await e.json()).token;throw new Error("Login failed")}async function Nt(e,t,a){const n=await fetch("https://apis.onfonmedia.co.ke/v2_send",{method:"POST",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"},body:JSON.stringify({to:t,from:"ONE HEALTH",content:a,dlr:"no","dlr-url":"","dlr-level":1})});if(n.ok)return await n.json();throw new Error("Failed to push SMS")}x.listen(ne,()=>{console.log(`Server started: http://localhost:${ne}/`)});
