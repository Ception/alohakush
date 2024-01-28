exports.id=128,exports.ids=[128],exports.modules={2029:(e,t,s)=>{Promise.resolve().then(s.bind(s,1052)),Promise.resolve().then(s.bind(s,2202))},7542:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},2202:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>A});var a=s(5344),r=s(3729),n=s(783),o=s.n(n),i=s(2254),l=s(4996),d=s(3714),c=s(946),x=s(8720),m=s(4513),h=s(1626);let u=c.fC;c.xz,c.x8;let p=c.h_,f=r.forwardRef(({className:e,...t},s)=>a.jsx(c.aV,{className:(0,h.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:s}));f.displayName=c.aV.displayName;let g=(0,x.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),b=r.forwardRef(({side:e="right",className:t,children:s,...r},n)=>(0,a.jsxs)(p,{children:[a.jsx(f,{}),(0,a.jsxs)(c.VY,{ref:n,className:(0,h.cn)(g({side:e}),t),...r,children:[s,(0,a.jsxs)(c.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[a.jsx(m.Z,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));b.displayName=c.VY.displayName;let v=({className:e,...t})=>a.jsx("div",{className:(0,h.cn)("flex flex-col space-y-2 text-center sm:text-left",e),...t});v.displayName="SheetHeader";let y=r.forwardRef(({className:e,...t},s)=>a.jsx(c.Dx,{ref:s,className:(0,h.cn)("text-lg font-semibold text-foreground",e),...t}));y.displayName=c.Dx.displayName,r.forwardRef(({className:e,...t},s)=>a.jsx(c.dk,{ref:s,className:(0,h.cn)("text-sm text-muted-foreground",e),...t})).displayName=c.dk.displayName;var j=s(1052),N=s(1991),w=s(8452),C=s(1838),k=s(8271),P=s(1223),S=s.n(P);function q({isOpen:e,setCartOpen:t}){let{cartItems:s,removeFromCart:n,clearCart:i,addToCart:l}=(0,j.useCart)(),[d,c]=(0,r.useState)(""),x=e=>{t(e)},m=e=>{e.quantityInCart<e.quantity?l(e):(c(`Sorry, there are only ${e.quantity} "${e.name}" items in stock.`),setTimeout(()=>c(""),5e3))},h=e=>{n(e)},p=s.reduce((e,t)=>e+t.price*t.quantityInCart,0);return a.jsx(u,{open:e,onOpenChange:x,children:(0,a.jsxs)(b,{className:"sm:max-w-lg w-[90vw] bg-slate-200 p-4",onOpenAutoFocus:e=>{e.preventDefault()},onCloseAutoFocus:e=>{e.preventDefault()},children:[a.jsx(v,{children:a.jsx(y,{className:"text-gray-700 mb-8",children:"Your Shopping Bag"})}),d?(0,a.jsxs)("div",{className:"transition-all transform ease-in-out duration-500 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded flex items-center",children:[a.jsx(N.Z,{className:"h-5 w-5 text-red-500 mr-3"}),a.jsx("p",{children:d})]}):(0,a.jsxs)("div",{className:"transition-all transform ease-in-out duration-500 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-4 rounded flex items-center",children:[a.jsx(N.Z,{className:"h-5 w-5 text-orange-500 mr-3"}),a.jsx("p",{children:"As soon as we receive your order, we'll be in touch!"})]}),a.jsx("div",{className:"overflow-auto max-h-[calc(100vh - 200px)]",children:0===s.length?(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center h-full",children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Your bag is empty"}),a.jsx("p",{className:"text-sm text-gray-500",children:"You haven't added anything to your bag yet."})]}):(0,a.jsxs)("div",{className:"flex flex-col",children:[s.map(e=>(0,a.jsxs)("div",{className:"mb-4 flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[a.jsx(S(),{src:`https://cms.alohakush.ca${e.thumbnailImageUrl}`,alt:e.name,width:64,height:64,className:"h-16 w-16 mr-4 object-cover rounded"}),(0,a.jsxs)("div",{children:[a.jsx("h3",{className:"text-xl font-bold",children:e.name}),(0,a.jsxs)("div",{className:"flex items-center",children:[a.jsx("button",{onClick:()=>h(e.id),className:"p-2",children:a.jsx(w.Z,{className:"h-5 w-5 text-orange-500 hover:text-orange-400"})}),(0,a.jsxs)("span",{className:"mx-2",children:["Qty: ",e.quantityInCart]}),a.jsx("button",{onClick:()=>m(e),className:"p-2",children:a.jsx(C.Z,{className:"h-5 w-5 text-green-500 hover:text-green-700"})})]}),(0,a.jsxs)("p",{children:["Price: $",e.price]})]})]}),a.jsx("button",{onClick:()=>n(e.id),className:"p-2",children:a.jsx(k.Z,{className:"h-5 w-5 text-red-400 hover:text-orange-400"})})]},e.id)),(0,a.jsxs)("div",{className:"mt-4 p-4 border-t border-gray-300",children:[(0,a.jsxs)("p",{className:"text-lg font-bold",children:["Total: $",p.toFixed(2)]}),(0,a.jsxs)("div",{className:"flex justify-between mt-4",children:[a.jsx("button",{onClick:i,className:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600",children:"Clear Cart"}),a.jsx(o(),{href:"/checkout",className:"bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600",onClick:()=>x(!1),children:"Checkout"})]})]})]})})]})})}var I=s(3608);let D=[{name:"Home",href:"/"},{name:"Shop",href:"/shop"},{name:"About",href:"/about"}];function A(){let[e,t]=(0,r.useState)(!1),[s,n]=(0,r.useState)(!1),[c,x]=(0,r.useState)([]),[m,h]=(0,r.useState)(!1);(0,r.useEffect)(()=>{I.Z.get("https://cms.alohakush.ca/api/categories").then(e=>{x(e.data.data.map(e=>e.attributes.name))}).catch(e=>{console.error("Error fetching categories:",e)})},[]);let u=(0,i.usePathname)();return(0,a.jsxs)(a.Fragment,{children:[a.jsx("header",{className:"fixed top-0 left-0 w-full z-50 bg-white border-b",children:(0,a.jsxs)("div",{className:"flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl",children:[a.jsx(o(),{href:"/",children:(0,a.jsxs)("h1",{className:"md:text-4xl text-2xl text-black",children:["ALOHA",a.jsx("span",{className:"text-primary",children:"KUSH"})]})}),a.jsx("nav",{className:"hidden gap-6 lg:flex 2xl:ml-16",children:D.map((e,t)=>a.jsx("div",{children:"Shop"===e.name?(0,a.jsxs)("div",{className:"relative",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[a.jsx(o(),{href:e.href,children:a.jsx("span",{className:"text-lg text-gray-600 transition duration-100 hover:text-primary",children:e.name})}),m&&a.jsx("div",{className:"absolute left-0 w-56 py-2 bg-white rounded shadow-xl",children:c.map(e=>a.jsx(o(),{href:`/shop/${e.toLowerCase().replace(/\s+/g,"-")}`,children:a.jsx("span",{className:"block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white",children:e})},e))})]}):a.jsx(o(),{href:e.href,children:a.jsx("span",{className:`text-lg ${u===e.href?"text-primary":"text-gray-600 transition duration-100 hover:text-primary"}`,children:e.name})})},t))}),a.jsx("div",{className:"flex divide-x",children:(0,a.jsxs)(l.z,{variant:"link",className:"flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onClick:()=>{t(!e)},children:[a.jsx(d.Z,{color:s?"#0284c7":"#fe8c00"}),a.jsx("span",{className:"hidden text-xs text-gray-500 sm:block",children:"Cart"})]})})]})}),a.jsx(q,{isOpen:e,setCartOpen:t})]})}},1052:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CartContext:()=>n,CartProvider:()=>i,useCart:()=>o});var a=s(5344),r=s(3729);let n=(0,r.createContext)({cartItems:[],addToCart:e=>{},removeFromCart:e=>{},clearCart:()=>{}}),o=()=>(0,r.useContext)(n),i=({children:e})=>{let[t,s]=(0,r.useState)([]);return a.jsx(n.Provider,{value:{cartItems:t,addToCart:e=>{s(t=>t.find(t=>t.id===e.id)?t.map(t=>t.id===e.id?{...t,quantityInCart:t.quantityInCart+1}:t):[...t,{...e,quantityInCart:1}])},removeFromCart:e=>{s(t=>{let s=t.findIndex(t=>t.id===e);return s>-1&&t[s].quantityInCart>1?t.map((e,t)=>t===s?{...e,quantityInCart:e.quantityInCart-1}:e):t.filter(t=>t.id!==e)})},clearCart:()=>{s([])}},children:e})}},4996:(e,t,s)=>{"use strict";s.d(t,{z:()=>d});var a=s(5344),r=s(3729),n=s(2751),o=s(8720),i=s(1626);let l=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef(({className:e,variant:t,size:s,asChild:r=!1,...o},d)=>{let c=r?n.g7:"button";return a.jsx(c,{className:(0,i.cn)(l({variant:t,size:s,className:e})),ref:d,...o})});d.displayName="Button"},1626:(e,t,s)=>{"use strict";s.d(t,{cn:()=>n});var a=s(6815),r=s(9377);function n(...e){return(0,r.m6)((0,a.W)(e))}},6980:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f,metadata:()=>p});var a=s(5036),r=s(653),n=s.n(r);s(7272);var o=s(6843);let i=(0,o.createProxy)(String.raw`/Users/ception/Documents/repos.nosync/alohakush/app/_components/Header.tsx`),{__esModule:l,$$typeof:d}=i,c=i.default,x=(0,o.createProxy)(String.raw`/Users/ception/Documents/repos.nosync/alohakush/app/_components/cart/CartContext.tsx`),{__esModule:m,$$typeof:h}=x;x.default,(0,o.createProxy)(String.raw`/Users/ception/Documents/repos.nosync/alohakush/app/_components/cart/CartContext.tsx#CartContext`),(0,o.createProxy)(String.raw`/Users/ception/Documents/repos.nosync/alohakush/app/_components/cart/CartContext.tsx#useCart`);let u=(0,o.createProxy)(String.raw`/Users/ception/Documents/repos.nosync/alohakush/app/_components/cart/CartContext.tsx#CartProvider`),p={title:"AlohaKush — Premium Cannabis Delivery",description:"Discover AlohaKush, Ontario's premier cannabis delivery service. Offering a diverse selection of high-quality strains, edibles, and accessories, we bring the best of cannabis right to your doorstep. Experience fast, discreet, and reliable delivery across Ontario with AlohaKush. Shop now for an exceptional cannabis journey!"};function f({children:e}){return a.jsx(u,{children:a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{className:n().className,children:[a.jsx(c,{}),a.jsx("main",{className:"relative flex px-24 pt-24 min-h-screen w-full overflow-auto",children:e})]})})})}},7272:()=>{}};