"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1543],{9739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=r(2685),a=r(1244),o=(r(7378),r(5318)),i=["components"],c={hide_table_of_contents:!0},l="Getting Started",p={unversionedId:"start",id:"start",title:"Getting Started",description:"1. Add react-day-picker and date-fns to your dependencies:",source:"@site/docs/start.md",sourceDirName:".",slug:"/start",permalink:"/start",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"README",permalink:"/"},next:{title:"Navigating Months",permalink:"/basics/navigation"}},s={},u=[{value:"Example",id:"example",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"react-day-picker")," and ",(0,o.kt)("a",{parentName:"li",href:"https://date-fns.org"},"date-fns")," to your dependencies:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install date-fns react-day-picker@next\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"When importing, include the DayPicker CSS in your component:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { DayPicker } from 'react-day-picker';\nimport 'react-day-picker/dist/style.css';\n\nfunction Component() {\n  return <DayPicker />;\n}\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-include-example"},"start\n")))}m.isMDXComponent=!0},5318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);