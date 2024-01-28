(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{9332:function(e,t,r){Promise.resolve().then(r.bind(r,7938))},7938:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7437),a=r(6691),i=r.n(a),s=r(1396),o=r.n(s),c=r(2265),l=r(922);async function u(e){try{let t=await fetch("/api/products/".concat(e));if(!t.ok)throw Error("Error: ".concat(t.status));return(await t.json()).data.map(t=>{var r,n,a;return{id:t.id,price:t.attributes.price,smallImageUrl:null!==(a=null===(n=t.attributes.image)||void 0===n?void 0:null===(r=n.data[0])||void 0===r?void 0:r.attributes.formats.small.url)&&void 0!==a?a:"DefaultImageUrl",slug:t.attributes.slug,name:t.attributes.name,categoryName:e}})}catch(e){return console.error("Error fetching products:",e),[]}}function d(e){let{params:t}=e,[r,a]=(0,c.useState)([]),[s,d]=(0,c.useState)(!0);return((0,c.useEffect)(()=>{d(!0),async function(){try{let e=await u(t.category);a(e),d(!1)}catch(e){console.error("Error fetching products:",e),d(!1)}}()},[t.category]),s)?(0,n.jsx)(l.Z,{}):(0,n.jsx)("div",{className:"bg-white",children:(0,n.jsxs)("div",{className:"mx-auto w-full p-12",children:[(0,n.jsx)("div",{className:"flex justify-between items-center",children:(0,n.jsxs)("h2",{className:"text-2xl tracking-tight text-gray-900",children:["All things ",t.category,"!"]})}),s?(0,n.jsx)(l.Z,{}):(0,n.jsx)("div",{className:"mt-6 grid grid-cols-4 gap-x-6 gap-y-10",children:r.map(e=>(0,n.jsxs)("div",{className:"group relative",children:[(0,n.jsx)("div",{className:"aspect-square w-full overflow-hidden rounded bg-gray-200 group-hover:opacity-75 lg:h-80 cursor-pointer",children:(0,n.jsx)(o(),{href:"/shop/product/".concat(e.slug),children:(0,n.jsx)(i(),{src:"https://cms.alohakush.ca".concat(e.smallImageUrl),alt:"Product image",width:300,height:300,loading:"lazy",className:"w-full h-full object-cover object-center custom-object-fit lg:h-full lg:w-full"})})}),(0,n.jsxs)("div",{className:"mt-4 flex justify-between",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-sm text-gray-700",children:(0,n.jsx)(o(),{href:"/shop/product/".concat(e.slug),children:(0,n.jsx)("span",{className:"hover:underline",children:e.name})})}),(0,n.jsx)("p",{className:"mt-1 text-xs text-gray-500",children:e.categoryName})]}),(0,n.jsxs)("p",{className:"text-sm text-gray-900",children:["$",e.price]})]})]},e.id))})]})})}},922:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7437),a=r(9692),i=r.n(a);function s(){return(0,n.jsx)("div",{className:"w-full flex justify-center items-center relative",children:(0,n.jsx)("div",{className:"w-1/2 flex flex-col justify-center items-center",children:(0,n.jsx)("div",{className:"self-center",children:(0,n.jsx)(i(),{color:"#fe8c00",loading:!0,size:5})})})})}},7447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return c},default:function(){return l}});let n=r(1024),a=r(8630),i=r(6184),s=r(1749),o=n._(r(536)),c=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=s.Image},622:function(e,t,r){"use strict";var n=r(2265),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:u,props:i,_owner:o.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},7437:function(e,t,r){"use strict";e.exports=r(622)},6691:function(e,t,r){e.exports=r(7447)},1396:function(e,t,r){e.exports=r(5250)},9692:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return i(t,e),t},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var c=s(r(2265)),l=r(581),u=(0,r(9981).createAnimation)("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");t.default=function(e){var t=e.loading,r=e.color,a=void 0===r?"#000000":r,i=e.speedMultiplier,s=void 0===i?1:i,d=e.cssOverride,f=e.size,p=void 0===f?15:f,m=e.margin,h=void 0===m?2:m,v=o(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),g=n({display:"inherit"},void 0===d?{}:d),y=function(e){return{display:"inline-block",backgroundColor:a,width:(0,l.cssValue)(p),height:(0,l.cssValue)(p),margin:(0,l.cssValue)(h),borderRadius:"100%",animation:"".concat(u," ").concat(.7/s,"s ").concat(e%2?"0s":"".concat(.35/s,"s")," infinite linear"),animationFillMode:"both"}};return void 0===t||t?c.createElement("span",n({style:g},v),c.createElement("span",{style:y(1)}),c.createElement("span",{style:y(2)}),c.createElement("span",{style:y(3)})):null}},9981:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0,t.createAnimation=function(e,t,r){var n="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return n;var a=document.createElement("style");document.head.appendChild(a);var i=a.sheet,s="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(s,0),n}},581:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){if("number"==typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var a=(e.match(/[^0-9]*$/)||"").toString();return r[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=n,t.cssValue=function(e){var t=n(e);return"".concat(t.value).concat(t.unit)}}},function(e){e.O(0,[749,250,971,938,744],function(){return e(e.s=9332)}),_N_E=e.O()}]);