(function(){"use strict";var e={8071:function(e,t,n){var s=n(9242),o=n(3396),i=n(7139);function l(e,t){const n=(0,o.up)("router-link"),s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",null,[(0,o._)("nav",{class:(0,i.C_)(e.$style.nav)},[(0,o.Wm)(n,{to:{name:"home"},class:(0,i.C_)([e.$style.link,e.$style.linkHome])},{default:(0,o.w5)((()=>[(0,o.Uk)(" Мои расходы ")])),_:1},8,["class"]),(0,o.Wm)(n,{to:{name:"family"},class:(0,i.C_)([e.$style.link,e.$style.linkDefault])},{default:(0,o.w5)((()=>[(0,o.Uk)(" Семья ")])),_:1},8,["class"]),(0,o.Wm)(n,{to:{name:"categories"},class:(0,i.C_)([e.$style.link,e.$style.linkDefault])},{default:(0,o.w5)((()=>[(0,o.Uk)(" Категории ")])),_:1},8,["class"])],2)]),(0,o._)("main",null,[(0,o.Wm)(s)])],64)}var r={nav:"App_nav_wpvVx",link:"App_link_vUNmf",linkHome:"App_linkHome_HdWBI",linkDefault:"App_linkDefault_CNvp6"},a=n(89);const c={},u={};u["$style"]=r;const f=(0,a.Z)(c,[["render",l],["__cssModules",u]]);var p=f,_=n(2483),m=n(4870),d=n(1020);const g=()=>{let e=0;return()=>e++},v=(e,t)=>Math.random()*(t-e)+e,y=(e,t)=>Math.floor(v(e,t)),h=e=>e[y(0,e.length)],b=(e,t)=>{const n=e.slice().sort((()=>Math.random()-.5));return n.slice(0,Math.max(t,e.length)-1)},w=g(),k=e=>{const t=e.id??w();return{id:t,title:`Категория # ${t}`,color:h(["red","blue","green","orange"]),...e}},x=(0,d.Q_)("expense-categories",{state:()=>({items:[k({title:"Развлечения",color:"red"}),k({title:"Магазины",color:"orange"}),k({title:"Аптеки",color:"green"})]}),actions:{}});var C=(0,o.aZ)({__name:"ExpensesListItemCategories",props:{categories:null},setup(e){const t=e,n=x(),s=(0,o.Fl)((()=>n.items.filter((e=>t.categories?.includes(e.id)))));return(e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(e.$style.el)},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,m.SU)(s),(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.id,class:(0,i.C_)(e.$style.category)},[(0,o._)("div",{class:(0,i.C_)(e.$style.color),style:(0,i.j5)({"--color":t.color})},null,6),(0,o._)("span",{class:(0,i.C_)(e.$style.title)},(0,i.zw)(t.title),3)],2)))),128))],2))}}),$={el:"ExpensesListItemCategories_el_xVzcK",category:"ExpensesListItemCategories_category_G9jt_",color:"ExpensesListItemCategories_color_TfPBW",title:"ExpensesListItemCategories_title_oylUD"};const E={};E["$style"]=$;const L=(0,a.Z)(C,[["__cssModules",E]]);var I=L,O=(0,o.aZ)({__name:"ExpensesListItem",props:{item:null},setup(e){return(t,n)=>((0,o.wg)(),(0,o.iD)("li",{class:(0,i.C_)(t.$style.el)},[(0,o._)("div",{class:(0,i.C_)(t.$style.head)},[(0,o._)("div",{class:(0,i.C_)(t.$style.title)},(0,i.zw)(e.item.title),3),(0,o.Wm)(I,{categories:e.item?.categories},null,8,["categories"])],2),(0,o._)("div",{class:(0,i.C_)(t.$style.total)},[(0,o._)("span",null,(0,i.zw)(e.item.total)+" ₽",1)],2)],2))}}),j={el:"ExpensesListItem_el_PzhGT",head:"ExpensesListItem_head_QbNlu",title:"ExpensesListItem_title_Pf0fi",categories:"ExpensesListItem_categories_cWOHl",category:"ExpensesListItem_category_QzkQP",categoryColor:"ExpensesListItem_categoryColor_TRm_f",categoryTitle:"ExpensesListItem_categoryTitle_BhGoS",total:"ExpensesListItem_total_wsIV6"};const D={};D["$style"]=j;const W=(0,a.Z)(O,[["__cssModules",D]]);var M=W,P=(0,o.aZ)({__name:"ExpensesList",props:{items:null},setup(e){return(t,n)=>((0,o.wg)(),(0,o.iD)("ul",{class:(0,i.C_)(t.$style.el)},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.items,(e=>((0,o.wg)(),(0,o.j4)(M,{key:e.id,item:e},null,8,["item"])))),128))],2))}}),T={el:"ExpensesList_el_xcPq6"};const Z={};Z["$style"]=T;const U=(0,a.Z)(P,[["__cssModules",Z]]);var A=U;const H=g(),S=e=>{const t=e.id??H(),n=x();return console.log(h(n.items),n.items),{id:t,title:`Расход # ${t}`,total:Number((1e3*Math.random()).toFixed(2)),categories:b(n.items,y(0,n.items.length)).map((e=>e.id)),...e}},z=(0,d.Q_)("expenses",{state:()=>({items:[S({title:"Ипотека"}),S({title:"Магазин"}),S({title:"Шиномонтаж"}),S({title:"Кино"}),S({title:"Аптека"})]}),actions:{}});function B(e,t){return(0,o.wg)(),(0,o.iD)("button",{class:(0,i.C_)(e.$style.el)},[(0,o.WI)(e.$slots,"default")],2)}var N={el:"BaseButton_el_wnAsg"};const F={},Q={};Q["$style"]=N;const V=(0,a.Z)(F,[["render",B],["__cssModules",Q]]);var Y=V,G=(0,o.aZ)({__name:"ExpensesFilter",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(e.$style.el)},[(0,o.Wm)(Y,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Категории")])),_:1}),(0,o.Wm)(Y,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Семья")])),_:1}),(0,o.Wm)(Y,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Дата")])),_:1})],2))}}),K={el:"ExpensesFilter_el_zfQR6"};const q={};q["$style"]=K;const R=(0,a.Z)(G,[["__cssModules",q]]);var J=R,X=(0,o.aZ)({__name:"ExpensesView",setup(e){const t=z();return(e,n)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(J),(0,o.Wm)(A,{items:(0,m.SU)(t).items},null,8,["items"])],64))}});const ee=X;var te=ee;const ne=[{path:"/",name:"home",component:te},{path:"/categories",name:"categories",component:()=>n.e(267).then(n.bind(n,2333))},{path:"/family",name:"family",component:()=>n.e(471).then(n.bind(n,4992))}],se=(0,_.p7)({history:(0,_.PO)("/tf-app/"),routes:ne});var oe=se;const ie=(0,d.WB)();(0,s.ri)(p).use(oe).use(ie).mount("#app")}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,s,o,i){if(!s){var l=1/0;for(u=0;u<e.length;u++){s=e[u][0],o=e[u][1],i=e[u][2];for(var r=!0,a=0;a<s.length;a++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](s[a])}))?s.splice(a--,1):(r=!1,i<l&&(l=i));if(r){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[s,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,s){return n.f[s](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{267:"categories",471:"family"}[e]+"."+{267:"6918c761",471:"d669bd2b"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="tf-app:";n.l=function(s,o,i,l){if(e[s])e[s].push(o);else{var r,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var f=c[u];if(f.getAttribute("src")==s||f.getAttribute("data-webpack")==t+i){r=f;break}}r||(a=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+i),r.src=s),e[s]=[o];var p=function(t,n){r.onerror=r.onload=null,clearTimeout(_);var o=e[s];if(delete e[s],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(e){return e(n)})),t)return t(n)},_=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),a&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/tf-app/"}(),function(){var e={143:0};n.f.j=function(t,s){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)s.push(o[2]);else{var i=new Promise((function(n,s){o=e[t]=[n,s]}));s.push(o[2]=i);var l=n.p+n.u(t),r=new Error,a=function(s){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=s&&("load"===s.type?"missing":s.type),l=s&&s.target&&s.target.src;r.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",r.name="ChunkLoadError",r.type=i,r.request=l,o[1](r)}};n.l(l,a,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,i,l=s[0],r=s[1],a=s[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(a)var u=a(n)}for(t&&t(s);c<l.length;c++)i=l[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},s=self["webpackChunktf_app"]=self["webpackChunktf_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(8071)}));s=n.O(s)})();
//# sourceMappingURL=app.38fe14d0.js.map