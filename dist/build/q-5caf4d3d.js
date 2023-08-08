import{l as r,O as d,c as t,_ as u,N as _,h as c,$ as l,w as n,v,x as p}from"./q-2d5edf8f.js";const g=s=>{const[e]=r();return e.message.template_params.userName=s.target.value},h=s=>{const[e]=r();return e.message.template_params.message=s.target.value},m=class m{};m.sendEmail=e=>{try{fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.message)}).then(a=>{a.ok?(e.showLoader=!1,e.response=e.response_success,setTimeout(()=>{e.response=e.default_response},3e3)):(e.showLoader=!1,e.response=e.response_error,setTimeout(()=>{e.response=e.default_response},3e3))}).catch(()=>{e.showLoader=!1,e.response=e.response_error,setTimeout(()=>{e.response=e.default_response},3e3)})}catch{e.showLoader=!1,e.response=e.response_error,setTimeout(()=>{e.response=e.default_response},3e3)}};let i=m;const y=s=>{const[e]=r();e.message.template_params.userName==""||e.message.template_params.email==""||e.message.template_params.subject==""||e.message.template_params.message==""?console.log("Please fill all the fields"):(e.showLoader=!0,i.sendEmail(e))},f=s=>{const[e]=r();return e.message.template_params.subject=s.target.value},b=d(t(()=>u(()=>import("./q-f36029de.js"),["build/q-f36029de.js","build/q-2d5edf8f.js"]),"s_UI0cm5mLn3k")),E=()=>{const s=_({showLoader:!1,response_error:{value:"Failed to send message",color:"alert alert-danger",style:""},response_success:{value:"Message sent successfully",color:"alert alert-success",style:""},default_response:{value:"",color:"",style:"display: none"},response:{value:"",color:"",style:"display: none"},message:{service_id:"service_i3c391e",template_id:"template_rsw31wh",user_id:"-s6-Kbh5QA1q6DwpV",template_params:{userName:"",email:"",subject:"",message:""}}}),e=d(t(()=>u(()=>Promise.resolve().then(()=>o),void 0),"s_FMm8O91E00Y",[s]));return c(p,{children:l("section",null,{class:"contact",id:"contact"},[l("div",null,{class:"container section-title","data-aos":"fade-up"},[l("h2",null,null,"Contact",3,null),l("p",null,null,"Get In Touch",3,null)],3,null),l("div",null,{class:"container","data-aos":"fade-up","data-aos-delay":"100"},l("div",null,{class:"row gy-4"},[l("div",null,{class:"col-lg-6"},l("div",null,{class:"row gy-4"},[l("div",null,{class:"col-md-6"},l("div",null,{class:"info-item","data-aos":"fade","data-aos-delay":"200"},[l("i",null,{class:"bi bi-geo-alt"},null,3,null),l("h3",null,null,"Address",3,null),l("p",null,null,"90372, Dar es Salaam Temeke, Mwapemba street",3,null),l("p",null,null,"Dar es salaam, Tanzania",3,null)],3,null),3,null),l("div",null,{class:"col-md-6"},l("div",null,{class:"info-item","data-aos":"fade","data-aos-delay":"300"},[l("i",null,{class:"bi bi-telephone"},null,3,null),l("h3",null,null,"Call Us",3,null),l("p",null,null,"+255 710 896 052",3,null)],3,null),3,null),l("div",null,{class:"col-md-6"},l("div",null,{class:"info-item","data-aos":"fade","data-aos-delay":"400"},[l("i",null,{class:"bi bi-envelope"},null,3,null),l("h3",null,null,"Email Us",3,null),l("p",null,null,"ps@ohs-health.org",3,null)],3,null),3,null),l("div",null,{class:"col-md-6"},l("div",null,{class:"info-item","data-aos":"fade","data-aos-delay":"500"},[l("i",null,{class:"bi bi-clock"},null,3,null),l("h3",null,null,"Open Hours",3,null),l("p",null,null,"Monday - Friday",3,null),l("p",null,null,"8:00AM - 03:30PM",3,null)],3,null),3,null)],3,null),3,null),l("div",null,{class:"col-lg-6"},l("form",null,{class:"php-email-form","data-aos":"fade-up","data-aos-delay":"200"},l("div",null,{class:"row gy-4"},[l("div",null,{class:"col-md-6"},l("input",null,{class:"form-control",name:"name",onChange$:t(()=>u(()=>Promise.resolve().then(()=>o),void 0),"s_eLTD2LJ000Y",[s]),placeholder:"Your Name",required:!0,type:"text",value:n(a=>a.message.template_params.userName,[s])},null,3,null),3,null),l("div",null,{class:"col-md-6 "},l("input",null,{class:"form-control",name:"email",onChange$:t(()=>u(()=>Promise.resolve().then(()=>o),void 0),"s_dl0eZpkD8uE",[s]),placeholder:"Your Email",required:!0,type:"email",value:n(a=>a.message.template_params.email,[s])},null,3,null),3,null),l("div",null,{class:"col-md-12"},l("input",null,{class:"form-control",name:"subject",onChange$:t(()=>u(()=>Promise.resolve().then(()=>o),void 0),"s_0y6jEBHEg5k",[s]),placeholder:"Subject",required:!0,type:"text",value:n(a=>a.message.template_params.subject,[s])},null,3,null),3,null),l("div",null,{class:"col-md-12"},l("textarea",null,{class:"form-control",name:"message",onChange$:t(()=>u(()=>Promise.resolve().then(()=>o),void 0),"s_00xeyOvcJ1I",[s]),placeholder:"Message",required:!0,rows:6,value:n(a=>a.message.template_params.message,[s])},null,3,null),3,null),l("div",null,{class:"col-md-12 text-center"},[c(b,{get value(){return s.response.value},get color(){return s.response.color},get style(){return s.response.style},[v]:{color:n(a=>a.response.color,[s]),style:n(a=>a.response.style,[s]),value:n(a=>a.response.value,[s])}},3,"0S_2"),c(e,null,3,"0S_3")],1,null)],1,null),1,null),1,null)],1,null),1,null)],1,null)},1,"0S_4")},L=s=>{const[e]=r();return e.message.template_params.email=s.target.value},T=()=>{const[s]=r();return s.showLoader?l("button",null,{type:"submit"},l("div",null,{class:"spinner-border",role:"status"},l("span",null,{class:"sr-only"},null,3,null),3,null),3,"0S_0"):c(p,{children:l("button",null,{onClick$:t(()=>u(()=>Promise.resolve().then(()=>o),void 0),"s_MJHRlNHpr28",[s]),type:"submit"},"Send Message",3,null)},3,"0S_1")},o=Object.freeze(Object.defineProperty({__proto__:null,s_00xeyOvcJ1I:h,s_0y6jEBHEg5k:f,s_FMm8O91E00Y:T,s_MJHRlNHpr28:y,s_dl0eZpkD8uE:L,s_eLTD2LJ000Y:g,s_qyNCd0m81sw:E},Symbol.toStringTag,{value:"Module"}));export{h as s_00xeyOvcJ1I,f as s_0y6jEBHEg5k,T as s_FMm8O91E00Y,y as s_MJHRlNHpr28,L as s_dl0eZpkD8uE,g as s_eLTD2LJ000Y,E as s_qyNCd0m81sw};
