(window.webpackJsonp=window.webpackJsonp||[]).push([[1318],{1389:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),a=(n(0),n(1583)),o={id:"simpleGrid",title:"SimpleGrid"},s={unversionedId:"simpleGrid",id:"version-3.0.0-next.24/simpleGrid",isDocsHomePage:!1,title:"SimpleGrid",description:"SimpleGrid provides an interface to create responsive grids using simple props.",source:"@site/versioned_docs/version-3.0.0-next.24/simpleGrid.md",slug:"/simpleGrid",permalink:"/3.0.0-next.24/simpleGrid",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.24/simpleGrid.md",version:"3.0.0-next.24",sidebar:"version-3.0.0-next.24/componentsSidebar",previous:{title:"Row",permalink:"/3.0.0-next.24/row"},next:{title:"Stack",permalink:"/3.0.0-next.24/stack"}},c=[{value:"Import",id:"import",children:[]},{value:"Usage",id:"usage",children:[{value:"Using columns",id:"using-columns",children:[]},{value:"Using minChildWidth",id:"using-minchildwidth",children:[]}]},{value:"Props",id:"props",children:[{value:"SimpleGrid",id:"simplegrid",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"SimpleGrid provides an interface to create responsive grids using simple props."),Object(a.b)("h2",{id:"import"},"Import"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import { SimpleGrid } from "native-base";\n')),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("h3",{id:"using-columns"},"Using columns"),Object(a.b)("div",{className:"snack-player","data-snack-name":"SimpleGrid Usage","data-snack-description":"Example usage","data-snack-code":"import%20%7B%20SimpleGrid%2C%20Box%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aimport%20React%20from%20'react'%3B%0A%0Aconst%20items%20%3D%2012%3B%0Aconst%20data%20%3D%20Array(items).fill(0)%3B%0A%0Afunction%20SimpleGridComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CSimpleGrid%20columns%3D%7B3%7D%20spacing%3D%7B4%7D%3E%0A%20%20%20%20%20%20%7Bdata.map((_item%2C%20index)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20%3CBox%20key%3D%7Bindex%7D%20bg%3D%22%23d1d1d1%22%20height%3D%7B100%7D%20width%3D%7B100%7D%3E%3C%2FBox%3E%3B%0A%20%20%20%20%20%20%7D)%7D%0A%20%20%20%20%3C%2FSimpleGrid%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSimpleGridComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(a.b)("h3",{id:"using-minchildwidth"},"Using minChildWidth"),Object(a.b)("div",{className:"snack-player","data-snack-name":"SimpleGrid minWidthChild","data-snack-description":"Example usage","data-snack-code":"import%20%7B%20SimpleGrid%2C%20Box%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aimport%20React%20from%20'react'%3B%0A%0Aconst%20items%20%3D%2012%3B%0Aconst%20data%20%3D%20Array(items).fill(0)%3B%0A%0Afunction%20SimpleGridComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CSimpleGrid%20minChildWidth%3D%7B60%7D%20spacing%3D%7B4%7D%3E%0A%20%20%20%20%20%20%7Bdata.map((_item%2C%20index)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20%3CBox%20key%3D%7Bindex%7D%20bg%3D%22%23d2d2d2%22%20height%3D%7B60%7D%20width%3D%7B60%7D%3E%3C%2FBox%3E%3B%0A%20%20%20%20%20%20%7D)%7D%0A%20%20%20%20%3C%2FSimpleGrid%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSimpleGridComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"simplegrid"},"SimpleGrid"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"columns"),": ( number ",Object(a.b)("strong",{parentName:"p"},"*"),") ","*",Object(a.b)("strong",{parentName:"p"},"*","To ","*","*"),"set minimum child width of a grid item. Default is ",Object(a.b)("strong",{parentName:"p"},"0"),".","*"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"minChildWidth"),": ( number ",Object(a.b)("strong",{parentName:"p"},"*"),") ","*",Object(a.b)("strong",{parentName:"p"},"*","To ","*","*"),"set minimum child width of a grid item. Default is ",Object(a.b)("strong",{parentName:"p"},"0"),".","*"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"spacing"),": ( number ",Object(a.b)("strong",{parentName:"p"},"*"),") ","*",Object(a.b)("strong",{parentName:"p"},"*","To ","*","*"),"set horizontal and vertical spacing between grid items. Default is ",Object(a.b)("strong",{parentName:"p"},"0"),".","*"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"spacingX"),": ( number ",Object(a.b)("strong",{parentName:"p"},"*"),") ","*",Object(a.b)("strong",{parentName:"p"},"*","To ","*","*"),"set horizontal spacing between grid items. Default is ",Object(a.b)("strong",{parentName:"p"},"0"),".","*"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"spacingY"),": ( number ",Object(a.b)("strong",{parentName:"p"},"*"),") ","*",Object(a.b)("strong",{parentName:"p"},"*","To ","*","*"),"set vertical spacing between grid items. Default is ",Object(a.b)("strong",{parentName:"p"},"0"),".","*"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," Either of ",Object(a.b)("inlineCode",{parentName:"p"},"columns")," or ",Object(a.b)("inlineCode",{parentName:"p"},"minChildWidth")," is required."))}d.isMDXComponent=!0},1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),d=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(n),b=r,u=l["".concat(o,".").concat(b)]||l[b]||m[b]||a;return n?i.a.createElement(u,s(s({ref:t},p),{},{components:n})):i.a.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);