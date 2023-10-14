"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8375],{2621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(3618),a=n(5123),i=(n(6504),n(5180)),o=["components"],l={id:"useDayRender",title:"Function: useDayRender",sidebar_label:"useDayRender",sidebar_position:0,custom_edit_url:null},p=void 0,d={unversionedId:"api/functions/useDayRender",id:"api/functions/useDayRender",title:"Function: useDayRender",description:"\u25b8 useDayRender(day, displayMonth, buttonRef): DayRender",source:"@site/docs/api/functions/useDayRender.md",sourceDirName:"api/functions",slug:"/api/functions/useDayRender",permalink:"/api/functions/useDayRender",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"useDayRender",title:"Function: useDayRender",sidebar_label:"useDayRender",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"useDayPicker",permalink:"/api/functions/useDayPicker"},next:{title:"useFocusContext",permalink:"/api/functions/useFocusContext"}},s={},u=[{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useDayRender"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"day"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"displayMonth"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"buttonRef"),"): ",(0,i.kt)("a",{parentName:"p",href:"/api/types/DayRender"},(0,i.kt)("inlineCode",{parentName:"a"},"DayRender"))),(0,i.kt)("p",null,"Return props and data used to render the ",(0,i.kt)("a",{parentName:"p",href:"/api/functions/Day"},"Day")," component."),(0,i.kt)("p",null,"Use this hook when creating a component to replace the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"Day"),"\ncomponent."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"day")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Date")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The date to render.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"displayMonth")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Date")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The month where the date is displayed (if not the same as ",(0,i.kt)("inlineCode",{parentName:"td"},"date"),', it means it is an "outside" day).')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"buttonRef")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"RefObject"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"HTMLButtonElement"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A ref to the button element that will be target of focus when rendered (if required).")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/types/DayRender"},(0,i.kt)("inlineCode",{parentName:"a"},"DayRender"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/blob/d55014a/src/hooks/useDayRender/useDayRender.tsx#L43"},"src/hooks/useDayRender/useDayRender.tsx:43")))}f.isMDXComponent=!0},5180:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(6504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=c663868a.b79741b5.js.map