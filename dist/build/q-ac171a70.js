import{r as b,G as _,a as T,U as A,M as P,B as d,c as q,_ as S,W as x,O as I,$ as W}from"./q-2d5edf8f.js";const O='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',j=d("qc-s"),st=d("qc-c"),nt=d("qc-ic"),U=d("qc-h"),B=d("qc-l"),F=d("qc-n"),ot=d("qc-a"),rt=d("qc-ir"),at=q(()=>S(()=>import("./q-61e731e2.js"),[]),"s_DyVc0YBIqQU"),it=()=>{},ct=I(q(()=>S(()=>import("./q-c4f5af07.js"),["build/q-c4f5af07.js","build/q-2d5edf8f.js"]),"s_e0ssiDXoeAM")),D=new WeakMap,g=new Map,H="qaction",lt=(t,e,n,s)=>{const o=M(),i={head:o,withLocale:r=>x(s,r),resolveValue:r=>{const c=r.__id;if(r.__brand==="server_loader"&&!(c in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const f=t.loaders[c];if(f instanceof Promise)throw new Error("Loaders returning a function can not be referred to in the head function.");return f},...e};for(let r=n.length-1;r>=0;r--){const c=n[r]&&n[r].head;c&&(typeof c=="function"?k(o,x(s,()=>c(i))):typeof c=="object"&&k(o,c))}return i.head},k=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),m(t.meta,e.meta),m(t.links,e.links),m(t.styles,e.styles),Object.assign(t.frontmatter,e.frontmatter)},m=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const s=t.findIndex(o=>o.key===n.key);if(s>-1){t[s]=n;continue}}t.push(n)}},M=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),ft=async(t,e,n,s)=>{if(Array.isArray(t))for(const o of t){const a=o[0].exec(s);if(a){const i=o[1],r=V(o[2],a),c=o[4],f=new Array(i.length),h=[],v=Q(e,s);let y;return i.forEach((l,w)=>{E(l,h,R=>f[w]=R,n)}),E(v,h,l=>y=l==null?void 0:l.default,n),h.length>0&&await Promise.all(h),[r,f,y,c]}}return null},E=(t,e,n,s)=>{if(typeof t=="function"){const o=D.get(t);if(o)n(o);else{const a=t();typeof a.then=="function"?e.push(a.then(i=>{s!==!1&&D.set(t,i),n(i)})):a&&n(a)}}},Q=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const n=t.find(s=>s[0]===e||e.startsWith(s[0]+(e.endsWith("/")?"":"/")));if(n)return n[1]}},V=(t,e)=>{const n={};if(t)for(let s=0;s<t.length;s++){const o=(e==null?void 0:e[s+1])??"",a=o.endsWith("/")?o.slice(0,-1):o;n[t[s]]=decodeURIComponent(a)}return n},p=t=>t.pathname+t.search+t.hash,u=(t,e)=>new URL(t,e.href),$=(t,e)=>t.origin===e.origin,L=(t,e)=>t.pathname+t.search===e.pathname+e.search,N=(t,e)=>t.pathname===e.pathname,z=(t,e)=>t.search===e.search,G=(t,e,n)=>{let s=e??"";return n&&(s+=(s?"&":"?")+H+"="+encodeURIComponent(n.id)),t+(t.endsWith("/")?"":"/")+"q-data.json"+s},ht=(t,e)=>{const n=t.href;if(typeof n=="string"&&typeof t.target!="string")try{const s=u(n.trim(),e.url),o=u("",e.url);if($(s,o))return p(s)}catch(s){console.error(s)}else if(t.reload)return p(u("",e.url));return null},dt=(t,e,n)=>{if(t.prefetch===!0&&e){const s=u(e,n.url),o=u("",n.url);if(!N(s,o)||!z(s,o))return""}return null},ut=(t,e,n,s,o=!1)=>{if(e!=="popstate"){const a=L(n,s),i=n.hash===s.hash;if(!a||!i){const r={_qCityScroll:Y()};o?t.history.replaceState(r,"",p(s)):t.history.pushState(r,"",p(s))}}},Y=()=>({x:0,y:0,w:0,h:0}),J=t=>{document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},K=async(t,e,n,s)=>{const o=t.pathname,a=t.search,i=G(o,a,s);let r;if(s||(r=g.get(i)),J({links:[o]}),!r){const c=X(s);s&&(s.data=void 0),r=fetch(i,c).then(f=>{const h=new URL(f.url),v=h.pathname.endsWith("/q-data.json");if(h.origin!==location.origin||!v){location.href=h.href;return}if((f.headers.get("content-type")||"").includes("json"))return f.text().then(y=>{const l=b(y,e);if(!l){location.href=t.href;return}if(n&&g.delete(i),l.redirect)location.href=l.redirect;else if(s){const w=l.loaders[s.id];s.resolve({status:f.status,result:w})}return l});location.href=t.href}),s||g.set(i,r)}return r.then(c=>(c||g.delete(i),c))},X=t=>{const e=t==null?void 0:t.data;if(e)return e instanceof FormData?{method:"POST",body:e}:{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json, charset=UTF-8"}}},yt=()=>_(U),gt=()=>_(B),pt=()=>_(F),_t=()=>T(A("qwikcity")),vt=(t,e,n,s)=>{t==="popstate"&&s?window.scrollTo(s.x,s.y):t==="link"&&(Z(e,n)||window.scrollTo(0,0))},Z=(t,e)=>{const n=t.hash.slice(1),s=n&&document.getElementById(n);return s?(s.scrollIntoView(),!0):!!(!s&&t.hash&&L(t,e))},wt=t=>({x:t.scrollLeft,y:t.scrollTop,w:Math.max(t.scrollWidth,t.clientWidth),h:Math.max(t.scrollHeight,t.clientHeight)}),mt=()=>{const t=history.state;return t==null?void 0:t._qCityScroll},Ct=t=>{const e=history.state||{};e._qCityScroll=t,history.replaceState(e,"")},qt=I(q(()=>S(()=>import("./q-f8b66833.js"),["build/q-f8b66833.js","build/q-2d5edf8f.js"]),"s_TxCFOy819ag")),St=(t,e)=>{t&&t.href&&t.hasAttribute("data-prefetch")&&(C||(C=innerWidth),(!e||e&&C<520)&&K(new URL(t.href),t))};let C=0;const xt=t=>W("script",{nonce:P(t,"nonce")},{dangerouslySetInnerHTML:O},null,3,"1Z_0"),Dt=(t,...e)=>{const{id:n,validators:s}=tt(e,t);function o(){return _(j,a=>{if(!(n in a))throw new Error(`routeLoader$ "${t.getSymbol()}" was invoked in a route where the it was not declared.
    This is because the routeLoader$ was not exported in a 'layout.tsx' or 'index.tsx' file of the existing route.
    For more information check: https://qwik.builder.io/qwikcity/route-loader/`);return P(a,n)})}return o.__brand="server_loader",o.__qrl=t,o.__validators=s,o.__id=n,Object.freeze(o),o},tt=(t,e)=>{let n;const s=[];if(t.length===1){const o=t[0];o&&typeof o=="object"&&("validate"in o?s.push(o):(n=o.id,o.validation&&s.push(...o.validation)))}else t.length>1&&s.push(...t.filter(o=>!!o));return typeof n=="string"?n=`id_${n}`:n=e.getHash(),{validators:s.reverse(),id:n}},kt=async function*(t,e,n){const s=t.getReader();try{let o="";const a=new TextDecoder;for(;!(n!=null&&n.aborted);){const i=await s.read();if(i.done)break;o+=a.decode(i.value,{stream:!0});const r=o.split(/\n/);o=r.pop();for(const c of r)yield await b(c,e)}}finally{s.releaseLock()}};export{it as A,ct as B,st as C,U as D,kt as E,St as F,Dt as G,qt as Q,B as R,xt as S,gt as a,dt as b,M as c,nt as d,F as e,j as f,ht as g,ot as h,rt as i,$ as j,L as k,mt as l,K as m,ft as n,N as o,lt as p,g as q,vt as r,Ct as s,u as t,pt as u,wt as v,at as w,ut as x,_t as y,yt as z};
