"use strict";(()=>{var e={};e.id=786,e.ids=[786],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8227:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>l,originalPathname:()=>g,patchFetch:()=>f,requestAsyncStorage:()=>u,routeModule:()=>p,serverHooks:()=>d,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>h});var o={};r.r(o),r.d(o,{GET:()=>i});var a=r(5419),s=r(9108),n=r(9678);async function i(e,{params:t}){let r=process.env.API_URL,o=process.env.API_TOKEN,a=t.product;try{let e=await fetch(`${r}/products?filters[slug][$eq]=${a}&populate=image,categories`,{headers:{Authorization:`Bearer ${o}`}});if(!e.ok)throw Error(`Error: ${e.status}`);let t=await e.json();return new Response(JSON.stringify(t),{status:200,headers:{"Content-Type":"application/json"}})}catch(e){return new Response(JSON.stringify({message:"Error fetching products"}),{status:500,headers:{"Content-Type":"application/json"}})}}let p=new a.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/[product]/route",pathname:"/api/[product]",filename:"route",bundlePath:"app/api/[product]/route"},resolvedPagePath:"/Users/ception/Documents/repos.nosync/alohakush/app/api/[product]/route.tsx",nextConfigOutput:"",userland:o}),{requestAsyncStorage:u,staticGenerationAsyncStorage:c,serverHooks:d,headerHooks:l,staticGenerationBailout:h}=p,g="/api/[product]/route";function f(){return(0,n.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:c})}},5419:(e,t,r)=>{e.exports=r(517)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[638],()=>r(8227));module.exports=o})();