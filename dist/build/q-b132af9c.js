import{l as f,s as m,J as u,r as d}from"./q-2d5edf8f.js";import{E as w}from"./q-ac171a70.js";const h=async function(...o){const[s]=f(),n=o.length>0&&o[0]instanceof AbortSignal?o.shift():void 0;{const i=m(),l=o.map(t=>t instanceof SubmitEvent&&t.target instanceof HTMLFormElement?new FormData(t.target):t instanceof Event||t instanceof Node?null:t),a=s.getHash(),e=await fetch(`?qfunc=${a}`,{method:"POST",headers:{"Content-Type":"application/qwik-json","X-QRL":a},signal:n,body:await u([s,...l])}),c=e.headers.get("Content-Type");if(e.ok&&c==="text/qwik-json-stream"&&e.body)return async function*(){try{for await(const t of w(e.body,i??document.documentElement,n))yield t}finally{n!=null&&n.aborted||await e.body.cancel()}}();if(c==="application/qwik-json"){const t=await e.text(),r=await d(t,i??document.documentElement);if(e.status===500)throw r;return r}}};export{h as s_wOIPfiQ04l4};
