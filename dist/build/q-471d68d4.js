import{E as st,U as at,N as O,a as it,I as j,Y as f,C as lt,h as ct,c as M,_ as i,j as ut,l as F,Q as dt,s as G,b as _t,u as mt,p as pt}from"./q-734d351e.js";import{j as vt,c as ft,C as yt,d as ht,D as Et,R as St,e as Ct,f as bt,h as Rt,i as wt,l as $,k as K,m as Lt,r as gt,n as Z,o as Q,p as tt,q as qt,s as et,t as P,v as L,w as It,x as Pt,y as Dt}from"./q-210645e3.js";const At=":root{view-transition-name:none}",Tt=y=>{st(M(()=>i(()=>Promise.resolve().then(()=>N),void 0),"s_RPDJAz33WLA"));const n=vt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const h=at("url");if(!h)throw new Error("Missing Qwik URL Env Data");const C=new URL(h),a=O({url:C,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),b={},l=it(O(n.response.loaders,{deep:!1})),m=j({type:"initial",dest:C,forceReload:!1,replaceState:!1,scroll:!0}),p=O(ft),R=O({headings:void 0,menu:void 0}),c=j(),o=n.response.action,w=o?n.response.loaders[o]:void 0,d=j(w?{id:o,data:n.response.formData,output:{result:w,status:n.response.status}}:void 0),g=M(()=>i(()=>Promise.resolve().then(()=>N),void 0),"s_fX0bDjeJa0E",[d,b,m,a]);return f(yt,R),f(ht,c),f(Et,p),f(St,a),f(Ct,g),f(bt,l),f(Rt,d),f(wt,m),lt(M(()=>i(()=>Promise.resolve().then(()=>N),void 0),"s_02wMImzEAbk",[d,R,c,p,n,g,l,b,y,m,a])),ct(ut,null,3,"qY_0")};const S=()=>i(()=>import("./q-4d9a6206.js"),["build/q-4d9a6206.js","build/q-734d351e.js","build/q-210645e3.js"]),W=[[/^\/$/,[S,()=>i(()=>import("./q-3fb2630a.js"),["build/q-3fb2630a.js","build/q-734d351e.js"])]],[/^\/blog-details\/?$/,[S,()=>i(()=>import("./q-6d1d981a.js"),["build/q-6d1d981a.js","build/q-734d351e.js"])]],[/^\/blog\/?$/,[S,()=>i(()=>import("./q-5fe36c06.js"),["build/q-5fe36c06.js","build/q-734d351e.js"])]],[/^\/portfolio-details\/?$/,[S,()=>i(()=>import("./q-d2fc9e73.js"),["build/q-d2fc9e73.js","build/q-734d351e.js"])]],[/^\/services-details\/?$/,[S,()=>i(()=>import("./q-0d9c02ea.js"),["build/q-0d9c02ea.js","build/q-734d351e.js"])]],[/^\/sms\/?$/,[S,()=>i(()=>import("./q-137f5432.js"),["build/q-137f5432.js","build/q-734d351e.js"])]],[/^\/wedo\/?$/,[S,()=>i(()=>import("./q-bcf6c745.js"),["build/q-bcf6c745.js","build/q-734d351e.js"])]]],z=[];const J=!0;const kt=({track:y})=>{const[n,h,C,a,b,l,m,p,R,c,o]=F();async function w(){var Y;const[d,g]=y(()=>[c.value,n.value]),ot=dt(""),D=o.url,v=g?"form":d.type,nt=d.replaceState;let r,q,V=null,U;{r=new URL(d.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let A=$(W,z,J,r.pathname);U=G();const T=q=await K(r,U,!0,g);if(!T){c.untrackedValue={type:v,dest:r};return}const x=T.href,E=new URL(x,r);Lt(E,r)||(r=E,A=$(W,z,J,r.pathname)),V=await A}if(V){const[A,T,x]=V,E=T,rt=E[E.length-1];o.prevUrl=D,o.url=r,o.params={...A},c.untrackedValue={type:v,dest:r};const I=gt(q,o,E,ot);h.headings=rt.headings,h.menu=x,C.value=_t(E),a.links=I.links,a.meta=I.meta,a.styles=I.styles,a.title=I.title,a.frontmatter=I.frontmatter;{R.viewTransition!==!1&&(document.__q_view_transition__=!0);let B;v==="popstate"&&(B=Z()),d.scroll&&(!d.forceReload||!Q(r,D))&&(v==="link"||v==="popstate")&&(document.__q_scroll_restore__=()=>tt(v,r,D,B));const X=q==null?void 0:q.loaders,t=window;if(X&&Object.assign(m,X),qt.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),l(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const s=history.pushState,_=history.replaceState,k=e=>(e===null?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||L(document.documentElement),e);history.pushState=(e,u,H)=>(e=k(e),s.call(history,e,u,H)),history.replaceState=(e,u,H)=>(e=k(e),_.call(history,e,u,H))}document.body.addEventListener("click",s=>{if(s.defaultPrevented)return;const _=s.target.closest("a[href]");if(_&&!_.hasAttribute("preventdefault:click")){const k=_.getAttribute("href"),e=new URL(location.href),u=new URL(k,e);if(et(u,e)&&Q(u,e)){if(s.preventDefault(),!u.hash&&!u.href.endsWith("#")){u.href!==e.href&&history.pushState(null,"",u),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),P({...L(document.documentElement),x:0,y:0}),location.reload();return}l(_.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const s=L(document.documentElement);P(s)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const s=L(document.documentElement);P(s),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(Y=t._qCityBootstrap)==null||Y.remove(),t._qCityBootstrap=void 0,It.resolve()}if(v!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const s=L(document.documentElement);P(s)}Pt(window,v,D,r,nt),mt(U).then(()=>{var _;const s=L(document.documentElement);P(s),t._qCityScrollEnabled=!0,o.isNavigating=!1,(_=p.r)==null||_.call(p)})}}}w()},Ot=async(y,n)=>{const[h,C,a,b]=F(),{type:l="link",forceReload:m=y===void 0,replaceState:p=!1,scroll:R=!0}=typeof n=="object"?n:{forceReload:n},c=a.value.dest,o=y===void 0?c:Dt(y,b.url);if(!et(o,c)){location.href=o.href;return}if(!m&&Q(o,c)){l==="link"&&o.href!==location.href&&history.pushState(null,"",o),tt(l,o,new URL(location.href),Z()),l==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:l,dest:o,forceReload:m,replaceState:p,scroll:R},K(o,G()),$(W,z,J,o.pathname),h.value=void 0,b.isNavigating=!0,new Promise(w=>{C.r=w})},N=Object.freeze(Object.defineProperty({__proto__:null,_hW:pt,s_02wMImzEAbk:kt,s_RPDJAz33WLA:At,s_TxCFOy819ag:Tt,s_fX0bDjeJa0E:Ot},Symbol.toStringTag,{value:"Module"}));export{pt as _hW,kt as s_02wMImzEAbk,At as s_RPDJAz33WLA,Tt as s_TxCFOy819ag,Ot as s_fX0bDjeJa0E};
