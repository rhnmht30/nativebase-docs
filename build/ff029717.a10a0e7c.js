(window.webpackJsonp=window.webpackJsonp||[]).push([[1501],{1572:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(1583)),i=n(1587),c=n(1588),s={},l={unversionedId:"migration/FABs",id:"version-3.0.0-next.31/migration/FABs",isDocsHomePage:!1,title:"FABs",description:"Migrating to v3 will provide a lot more design, size, color and customisation option.",source:"@site/versioned_docs/version-3.0.0-next.31/migration/FABs.md",slug:"/migration/FABs",permalink:"/3.0.0-next.31/migration/FABs",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.31/migration/FABs.md",version:"3.0.0-next.31",sidebar:"version-3.0.0-next.31/componentsSidebar",previous:{title:"Checkbox",permalink:"/3.0.0-next.31/migration/Checkbox"},next:{title:"Footer Tab",permalink:"/3.0.0-next.31/migration/Footer Tab"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Code Comparison",id:"code-comparison",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Migrating to v3 will provide a lot more ",Object(a.b)("strong",{parentName:"p"},"design"),", ",Object(a.b)("strong",{parentName:"p"},"size"),", ",Object(a.b)("strong",{parentName:"p"},"color")," and ",Object(a.b)("strong",{parentName:"p"},"customisation")," option."),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Migrating Badge components can broadly described in these points:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Instead of Passing Icon as child, use ",Object(a.b)("inlineCode",{parentName:"li"},"icon")," prop.")),Object(a.b)("h2",{id:"code-comparison"},"Code Comparison"),Object(a.b)(i.a,{defaultValue:"v2",values:[{label:"v2",value:"v2"},{label:"v3",value:"v3"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React, { Component } from 'react';\nimport { Container, Header, View, Icon, Fab } from 'native-base';\nexport default function () {\n  return (\n    <Container>\n      <Header />\n      <View style={{ flex: 1 }}>\n        <Fab\n          direction='up'\n          style={{ backgroundColor: '#5067FF' }}\n          position='bottomRight'\n        >\n          <Icon name='share' />\n        </Fab>\n      </View>\n    </Container>\n  );\n}\n"))),Object(a.b)(c.a,{value:"v3",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { Fab, Icon } from 'native-base';\n\nexport default function () {\n  return (\n    <Fab\n      placement='bottomRight'\n      colorScheme='blue'\n      size='lg'\n      icon={<Icon name='share' type='Entypo' />}\n    />\n  );\n}\n")))))}b.isMDXComponent=!0},1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1584:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},1585:function(e,t,n){"use strict";var r=n(0),o=n(1586);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1586:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o},1587:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1585),i=n(1584),c=n(56),s=n.n(c);const l=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:p,groupId:b,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(a.a)(),[v,O]=Object(r.useState)(c),g=r.Children.toArray(e.children);if(null!=b){const e=d[b];null!=e&&e!==v&&p.some((t=>t.value===e))&&O(e)}const y=e=>{O(e),null!=b&&f(b,e)},j=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},p.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},t)))),t?Object(r.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},1588:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);