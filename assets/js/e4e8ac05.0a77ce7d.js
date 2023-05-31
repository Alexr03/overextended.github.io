"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2079],{9613:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var a=t(9496);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,l=function(e,r){if(null==e)return{};var t,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},b=a.forwardRef((function(e,r){var t=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),b=l,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||n;return t?a.createElement(d,i(i({ref:r},p),{},{components:t})):a.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var n=t.length,i=new Array(n);i[0]=b;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<n;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},8186:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var a=t(2564),l=(t(9496),t(9613));const n={},i=void 0,o={unversionedId:"ox_lib/Modules/Callback/JavaScript/Client",id:"ox_lib/Modules/Callback/JavaScript/Client",title:"Client",description:"Trigger Server Callback",source:"@site/docs/ox_lib/Modules/Callback/JavaScript/Client.md",sourceDirName:"ox_lib/Modules/Callback/JavaScript",slug:"/ox_lib/Modules/Callback/JavaScript/Client",permalink:"/docs/ox_lib/Modules/Callback/JavaScript/Client",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Modules/Callback/JavaScript/Client.md",tags:[],version:"current",lastUpdatedAt:1685541824,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Client",permalink:"/docs/ox_lib/Modules/Cache/Client"},next:{title:"Server",permalink:"/docs/ox_lib/Modules/Callback/JavaScript/Server"}},c={},s=[{value:"Trigger Server Callback",id:"trigger-server-callback",level:2},{value:"triggerServerCallback",id:"triggerservercallback",level:3},{value:"Register Client Callback",id:"register-client-callback",level:2},{value:"onServerCallback",id:"onservercallback",level:3},{value:"Usage Example",id:"usage-example",level:2}],p={toc:s},u="wrapper";function m(e){let{components:r,...t}=e;return(0,l.kt)(u,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"trigger-server-callback"},"Trigger Server Callback"),(0,l.kt)("h3",{id:"triggerservercallback"},"triggerServerCallback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"triggerServerCallback(eventName, delay, ...args)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"eventName: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"delay: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"..args: ",(0,l.kt)("inlineCode",{parentName:"li"},"any"))),(0,l.kt)("h2",{id:"register-client-callback"},"Register Client Callback"),(0,l.kt)("h3",{id:"onservercallback"},"onServerCallback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"onServerCallback(eventName, cb)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"eventName: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"cb: ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),"(...args: ",(0,l.kt)("inlineCode",{parentName:"li"},"any"),")")),(0,l.kt)("h2",{id:"usage-example"},"Usage Example"),(0,l.kt)("p",null,"For this example to fully make sense take a look at the example on the ",(0,l.kt)("a",{parentName:"p",href:"./Server#usage-example"},"server")," page for the callbacks."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { onServerCallback, triggerServerCallback } from '@overextended/ox_lib/client'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"onServerCallback('test:client', (...args: [number, number, string]) => {\n  console.log(args);\n  return {\n    clientValue: 'Value from the client',\n  };\n});\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"setTimeout(async () => {\n  const args = [1, null, 3, null, null, 6];\n  const response = await triggerServerCallback<{ serverValue: number }>('test:server', 1, args);\n  if (!response) return;\n  console.log('Response from server', response);\n}, 100);\n")))}m.isMDXComponent=!0}}]);