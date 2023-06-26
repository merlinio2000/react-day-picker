"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4535],{5018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=n(6302),a=n(217),i=(n(7503),n(9538)),o=["components"],p={},c="Working with the source",s={unversionedId:"development/source",id:"development/source",title:"Working with the source",description:"The DayPicker monorepo contains two workspaces setup with pnpm:",source:"@site/docs/development/source.md",sourceDirName:"development",slug:"/development/source",permalink:"/development/source",draft:!1,editUrl:"https://github.com/gpbl/react-day-picker/edit/master/website/docs/development/source.md",tags:[],version:"current",frontMatter:{},sidebar:"developmentSidebar",previous:{title:"Contributing",permalink:"/development"},next:{title:"Documenting DayPicker",permalink:"/development/docs"}},l={},u=[{value:"Getting started",id:"getting-started",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setup",id:"setup",level:3},{value:"Development scripts",id:"development-scripts",level:2},{value:"Testing",id:"testing",level:2}],m={toc:u},d="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"working-with-the-source"},"Working with the source"),(0,i.kt)("p",null,"The DayPicker monorepo contains two workspaces setup with ",(0,i.kt)("a",{parentName:"p",href:"https://pnpm.io"},"pnpm"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"./package/react-day-picker"),": this workspace contains the DayPicker source code and the development tools"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"./website"),": the ",(0,i.kt)("a",{parentName:"li",href:"http://v2.docusaurus.io"},"Docusaurus")," app for ",(0,i.kt)("a",{parentName:"li",href:"http://react-day-picker-next.netlify.app"},"the documentation website"))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node 18.16 and later. To set the version via ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," run:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ nvm use\n"))),(0,i.kt)("li",{parentName:"ul"},"To enable pnpm, make sure corepack is enabled:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ corepack enabled\n")))),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Clone the monorepo and install the dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git clone git@github.com:gpbl/react-day-picker.git\n$ cd react-day-picker\n$ pnpm\n")),(0,i.kt)("p",null,"If you use ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code"),", open the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/blob/master/react-day-picker.code-workspace"},"react-day-picker.code-workspace")," with for the development environment."),(0,i.kt)("h2",{id:"development-scripts"},"Development scripts"),(0,i.kt)("p",null,"While working with the source code you will find useful these scripts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm -F react-day-picker typecheck-watch # start the typecheck in watch mode\n$ pnpm -F react-day-picker develop         # start the build in watch mode\n$ pnpm -F website start                    # start the website in watch mode\n$ pnpm -F website typecheck-watch          # start the typecheck in watch mode for website\n")),(0,i.kt)("p",null,"These are configured to start when opening the vscode project. If they won't, enable ",(0,i.kt)("em",{parentName:"p"},"Manage Automatic Tasks In Folder")," from the ",(0,i.kt)("kbd",null,"Cmd+Shift+P")," menu."),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"In DayPicker we run unit tests and integration tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm -F react-day-picker test  # run the unit tests\n$ pnpm -F website test           # run the integration tests\n")),(0,i.kt)("p",null,"Run the relative watch script to run the test in watch mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm -F react-day-picker test-watch  # run the unit tests\n$ pnpm -F website test-watch           # run the integration tests\n")))}h.isMDXComponent=!0},9538:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7503);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=bf5aa2b2.8706e7ce.js.map