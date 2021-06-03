(window.webpackJsonp=window.webpackJsonp||[]).push([[1246],{1317:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(1583)),i=n(1587),c=n(1588),l={},s={unversionedId:"migration/Badge",id:"version-3.0.0-next.35/migration/Badge",isDocsHomePage:!1,title:"Badge",description:"Migrating to v3 will provide a lot more design, size, variant, color and customisation option.",source:"@site/versioned_docs/version-3.0.0-next.35/migration/Badge.md",slug:"/migration/Badge",permalink:"/3.0.0-next.35/migration/Badge",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.35/migration/Badge.md",version:"3.0.0-next.35",sidebar:"version-3.0.0-next.35/componentsSidebar",previous:{title:"Actionsheet",permalink:"/3.0.0-next.35/migration/Actionsheet"},next:{title:"Button",permalink:"/3.0.0-next.35/migration/Button"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Code Comparison",id:"code-comparison",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Migrating to v3 will provide a lot more ",Object(o.b)("strong",{parentName:"p"},"design"),", ",Object(o.b)("strong",{parentName:"p"},"size, variant"),", ",Object(o.b)("strong",{parentName:"p"},"color")," and ",Object(o.b)("strong",{parentName:"p"},"customisation")," option."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Migrating Badge components can broadly described in these points:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"No need to wrap you text inside text component anymore."),Object(o.b)("li",{parentName:"ul"},"In v3 the color is controlled by ",Object(o.b)("inlineCode",{parentName:"li"},"colorScheme")," prop. And it accepts all the color available in the theme.")),Object(o.b)("h2",{id:"code-comparison"},"Code Comparison"),Object(o.b)(i.a,{defaultValue:"v2",values:[{label:"v2",value:"v2"},{label:"v3",value:"v3"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<Badge success>\n  <Text>Success</Text>\n</Badge>\n"))),Object(o.b)(c.a,{value:"v3",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<Badge colorScheme='success'>\n  <Text>Success</Text>\n</Badge>\n")))))}b.isMDXComponent=!0},1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1584:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},1585:function(e,t,n){"use strict";var r=n(0),a=n(1586);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1586:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},1587:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1585),i=n(1584),c=n(56),l=n.n(c);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:p,groupId:b,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[v,g]=Object(r.useState)(c),O=r.Children.toArray(e.children);if(null!=b){const e=m[b];null!=e&&e!==v&&p.some((t=>t.value===e))&&g(e)}const y=e=>{g(e),null!=b&&f(b,e)},j=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},t)))),t?Object(r.cloneElement)(O.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},1588:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function({children:e,hidden:t,className:n}){return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);