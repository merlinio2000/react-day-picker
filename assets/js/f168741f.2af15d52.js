"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9436],{9201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=n(2685),o=n(1244),r=(n(7378),n(5318)),i=["components"],l={},p="Navigating Months",s={unversionedId:"basics/navigation",id:"basics/navigation",title:"Navigating Months",description:"Change the default month",source:"@site/docs/basics/navigation.md",sourceDirName:"basics",slug:"/basics/navigation",permalink:"/basics/navigation",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/start"},next:{title:"Customization",permalink:"/basics/customization"}},c={},m=[{value:"Change the default month",id:"change-the-default-month",level:2},{value:"Controlling the current month",id:"controlling-the-current-month",level:2},{value:"Limiting the month navigation",id:"limiting-the-month-navigation",level:2},{value:"Between months or dates",id:"between-months-or-dates",level:3},{value:"Using a drop-down to change the month",id:"using-a-drop-down-to-change-the-month",level:2},{value:"Disabling navigation",id:"disabling-navigation",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"navigating-months"},"Navigating Months"),(0,r.kt)("h2",{id:"change-the-default-month"},"Change the default month"),(0,r.kt)("p",null,"DayPicker displays the month of the current day. To change the\ndefault month, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultMonth")," prop."),(0,r.kt)("p",null,"For example, to set the default month to September 1979:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include-example"},"default-month\n")),(0,r.kt)("h2",{id:"controlling-the-current-month"},"Controlling the current month"),(0,r.kt)("p",null,'DayPicker controls the displayed month and stores it in its internal state. To\ncontrol the current month \u2013 for example, to implement a "Go to today" button \u2013\nset the month in the parent component\u2019s state.'),(0,r.kt)("p",null,"To control the current month, use ",(0,r.kt)("inlineCode",{parentName:"p"},"month")," (as opposed to ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultMonth"),") and\n",(0,r.kt)("inlineCode",{parentName:"p"},"onMonthChange")," to handle the current month."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include-example"},"controlled\n")),(0,r.kt)("h2",{id:"limiting-the-month-navigation"},"Limiting the month navigation"),(0,r.kt)("p",null,"As default, DayPicker can navigate indefinitely in the past or in the future."),(0,r.kt)("p",null,"To limit the navigable months between two years, use ",(0,r.kt)("inlineCode",{parentName:"p"},"fromYear")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"toYear"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include-example"},"from-to-year\n")),(0,r.kt)("h3",{id:"between-months-or-dates"},"Between months or dates"),(0,r.kt)("p",null,"You can also limit the navigation with ",(0,r.kt)("inlineCode",{parentName:"p"},"fromDate"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"toDate")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fromMonth")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"toMonth"),". For example, to limit the calendar between June 2015 and the 20th\nNov, 2015:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include-example"},"from-to-month\n")),(0,r.kt)("h2",{id:"using-a-drop-down-to-change-the-month"},"Using a drop-down to change the month"),(0,r.kt)("p",null,"When limiting the navigable months, use ",(0,r.kt)("inlineCode",{parentName:"p"},"captionLayout")," to display a drop-down\n(a select HTML element) for navigating between months \u2013 instead of the previous\n/ next buttons."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include-example"},"dropdown\n")),(0,r.kt)("h2",{id:"disabling-navigation"},"Disabling navigation"),(0,r.kt)("p",null,"To disable the navigation between months, use ",(0,r.kt)("inlineCode",{parentName:"p"},"disableNavigation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include-example"},"disabled\n")))}d.isMDXComponent=!0},5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);