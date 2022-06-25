"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7653],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6469:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:2},c="Configuration",l={unversionedId:"ox_inventory/config",id:"ox_inventory/config",title:"Configuration",description:"You can add these settings directly to your 'server.cfg', or add them to a separate file (i.e. inventory.cfg) and call it with exec.",source:"@site/docs/ox_inventory/config.md",sourceDirName:"ox_inventory",slug:"/ox_inventory/config",permalink:"/docs/ox_inventory/config",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/ox_inventory/"},next:{title:"Search",permalink:"/docs/ox_inventory/Functions/Client/Inventory/Search"}},d={},u=[],p={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You can add these settings directly to your 'server.cfg', or add them to a separate file (i.e. inventory.cfg) and call it with ",(0,a.kt)("inlineCode",{parentName:"p"},"exec"),"."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Convars ",(0,a.kt)("strong",{parentName:"p"},"must")," be set before starting ox_inventory."))),(0,a.kt)("p",null,"The values below are ",(0,a.kt)("em",{parentName:"p"},"defaults")," and should not be explicitly set unless changing the value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'# Activate specific event handlers and functions (supported: ox, esx)\nsetr inventory:framework "esx"\n\n# Load specific language file from data/locales\nsetr inventory:locale "en"\n\n# Number of slots for player inventories\nsetr inventory:slots 50\n\n# Maximum carry capacity for players, in kilograms\nsetr inventory:weight 30000\n\n# Weapons will reload after reaching 0 ammo\nsetr inventory:autoreload false\n\n# Weapons must be aimed before shooting\nsetr aimedfiring false\n\n# Blur the screen while accessing the inventory\nsetr inventory:screenblur true\n\n# Trim whitespace from vehicle plates when checking owned vehicles\nsetr inventory:trimplate true\n\n# Integrated support for qtarget stashes, shops, etc\nsetr inventory:qtarget false\n\n# Default hotkeys to access primary and secondary inventories, and hotbar\nsetr inventory:keys ["F2", "K", "TAB"]\n\n# Enable control action when inventory is open\nsetr inventory:enablekeys [249]\n\n# Jobs with access to police armoury, evidence lockers, etc\nsetr inventory:police ["police", "sheriff"]\n\n# Item prices fluctuate in shops\nset inventory:randomprices true\n\n# Compare current version to latest release on GitHub\nset inventory:versioncheck true\n\n# Loot will randomly generate inside unowned vehicles and dumpsters\nset inventory:randomloot true\n\n# Minimum job grade to remove items from evidence lockers\nset inventory:evidencegrade 2\n\n# Stashes will be wiped after remaining unchanged for the given time\nset inventory:clearstashes "6 MONTH"\n\n# Set the contents of randomly generated inventories\n# [item name, minimum, maximum, loot chance]\nset inventory:vehicleloot [\n    ["cola", 1, 1],\n    ["water", 1, 1],\n    ["garbage", 1, 2, 50],\n    ["panties", 1, 1, 5],\n    ["money", 1, 50],\n    ["money", 200, 400, 5],\n    ["bandage", 1, 1]\n]\n\nset inventory:dumpsterloot [\n    ["mustard", 1, 1],\n    ["garbage", 1, 3],\n    ["money", 1, 10],\n    ["burger", 1, 1]\n]\n\n# Set datadog API key for inventory logging (https://app.datadoghq.com/organization-settings/api-keys)\nset datadog:key ""\n\n# Set server intake (https://docs.datadoghq.com/api/latest/logs/#send-logs)\nset datadog:site "datadoghq.com"\n\n# Set server hostname\nset datadog:hostname "FXServer"\n')))}m.isMDXComponent=!0}}]);