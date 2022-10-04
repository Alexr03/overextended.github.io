"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4431],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=l,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3645:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(9496),l=a(5924);const r="tabItem_x3QN";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},537:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(6600),l=a(9496),r=a(5924),o=a(6885),i=a(6878),s=a(7496),c=a(8906);const u="tabList_HjGn",p="tabItem_R6JG";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:m,groupId:b,className:f}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,i.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[x,T]=(0,l.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=b){const e=y[b];null!=e&&e!==x&&g.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=w.indexOf(t),n=g[a].value;n!==x&&(C(t),T(n),null!=b&&N(b,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},f)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:D,onFocus:O,onClick:O},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,l.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,o.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(6600),l=(a(9496),a(9613)),r=a(537),o=a(3645);const i={title:"Alert Dialog"},s=void 0,c={unversionedId:"ox_lib/Interface/Client/alert",id:"ox_lib/Interface/Client/alert",title:"Alert Dialog",description:"Simple alert dialog that can display a message to the player.",source:"@site/docs/ox_lib/Interface/Client/alert.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/alert",permalink:"/docs/ox_lib/Interface/Client/alert",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/alert.md",tags:[],version:"current",lastUpdatedAt:1664887382,formattedLastUpdatedAt:"Oct 4, 2022",frontMatter:{title:"Alert Dialog"},sidebar:"ox_lib",previous:{title:"Client",permalink:"/docs/ox_lib/GetNearbyVehicles/Client"},next:{title:"Clipboard",permalink:"/docs/ox_lib/Interface/Client/clipboard"}},u={},p=[{value:"lib.alertDialog",id:"libalertdialog",level:3},{value:"lib.closeAlertDialog",id:"libclosealertdialog",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Simple alert dialog that can display a message to the player.",(0,l.kt)("br",{parentName:"p"}),"\n","Returns whether the player pressed the confirm button or canceled the dialog."),(0,l.kt)("h3",{id:"libalertdialog"},"lib.alertDialog"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.alertDialog(data)\n"))),(0,l.kt)(o.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This function is ",(0,l.kt)("strong",{parentName:"p"},"asynchronous")," requiring you to do a ",(0,l.kt)("inlineCode",{parentName:"p"},".then")," callback on the promise or make your function ",(0,l.kt)("inlineCode",{parentName:"p"},"async"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.alertDialog(data)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"data: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"header: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Dialog title."))),(0,l.kt)("li",{parentName:"ul"},"content: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Dialog body content, supports markdown."))),(0,l.kt)("li",{parentName:"ul"},"centered?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Centers the dialog vertically and horizontally."))),(0,l.kt)("li",{parentName:"ul"},"cancel?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Displays a cancel button (ESC is still available if this is not defined).")))))),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"confirm")," if the player pressed the confirm button, otherwise if the player pressed the cancel button\nor has exited the dialog with ESC the return will be ",(0,l.kt)("inlineCode",{parentName:"p"},"cancel"),"."),(0,l.kt)("h3",{id:"libclosealertdialog"},"lib.closeAlertDialog"),(0,l.kt)("p",null,"Force closes the active alert dialog and sets its return data as ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.closeAlertDialog()\n"))),(0,l.kt)(o.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.closeAlertDialog()\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local alert = lib.alertDialog({\n    header = 'Hello there',\n    content = 'General Kenobi  \\n Markdown support!',\n    centered = true,\n    cancel = true\n})\n\nprint(alert)\n"))),(0,l.kt)(o.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nconst alert = await lib.alertDialog({\n  header: 'Hello there',\n  content: 'General Kenobi  \\n Markdown support!',\n  centered: true,\n  cancel: true\n})\n\nconsole.log(alert)\n")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/TnUT3S1.png",alt:"alert_dialog"})))}m.isMDXComponent=!0}}]);