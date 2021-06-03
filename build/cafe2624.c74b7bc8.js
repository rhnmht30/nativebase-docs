(window.webpackJsonp=window.webpackJsonp||[]).push([[1206],{1278:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return d}));var a=r(3),n=r(7),s=(r(0),r(1583)),i={id:"circularProgress",title:"CircularProgress"},c={unversionedId:"circularProgress",id:"version-3.0.0-next.33/circularProgress",isDocsHomePage:!1,title:"CircularProgress",description:"Circular Progress is used to indicate the progress for determinate and indeterminate processes.",source:"@site/versioned_docs/version-3.0.0-next.33/circularProgress.md",slug:"/circularProgress",permalink:"/3.0.0-next.33/circularProgress",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.33/circularProgress.md",version:"3.0.0-next.33",sidebar:"version-3.0.0-next.33/componentsSidebar",previous:{title:"Alert",permalink:"/3.0.0-next.33/alert"},next:{title:"Progress",permalink:"/3.0.0-next.33/progress"}},o=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Usage",id:"usage",children:[]},{value:"CircularProgress Sizes",id:"circularprogress-sizes",children:[]},{value:"CircularProgress Thickness",id:"circularprogress-thickness",children:[]},{value:"CircularProgress Color",id:"circularprogress-color",children:[]},{value:"CircularProgress Label",id:"circularprogress-label",children:[]},{value:"Indeterminate Progress",id:"indeterminate-progress",children:[]}]},{value:"Props",id:"props",children:[]}],l={toc:o};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Circular Progress is used to indicate the progress for determinate and indeterminate processes."),Object(s.b)("h2",{id:"import"},"Import"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { CircularProgress } from 'native-base';\n")),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)("h3",{id:"usage"},"Usage"),Object(s.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20CircularProgress%2C%20Heading%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EDefault%20CircularProgress%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B80%7D%20%2F%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(s.b)("h3",{id:"circularprogress-sizes"},"CircularProgress Sizes"),Object(s.b)("p",null,"You can add a size prop to the CircularProgress to add a custom size or choose from defined sizes."),Object(s.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Sizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20CircularProgress%2C%20Heading%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EChanging%20the%20size%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B60%7D%20size%3D%7B60%7D%20%2F%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(s.b)("h3",{id:"circularprogress-thickness"},"CircularProgress Thickness"),Object(s.b)("p",null,"You can add the thickness prop to update the thickness of the progress ring."),Object(s.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Thickness","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20CircularProgress%2C%20Heading%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EChanging%20the%20thickness%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B30%7D%20thickness%3D%7B7%7D%20%2F%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(s.b)("h3",{id:"circularprogress-color"},"CircularProgress Color"),Object(s.b)("p",null,"You can add the color prop to apply any color that the theme contains."),Object(s.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Color","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20CircularProgress%2C%20Heading%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EChanging%20the%20color%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B50%7D%20color%3D%22red.200%22%20%2F%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(s.b)("h3",{id:"circularprogress-label"},"CircularProgress Label"),Object(s.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Label","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Heading%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EAdding%20label%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B45%7D%20size%3D%7B60%7D%20color%3D%22red.200%22%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgress.Label%3E45%25%3C%2FCircularProgress.Label%3E%0A%20%20%20%20%20%20%3C%2FCircularProgress%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(s.b)("h3",{id:"indeterminate-progress"},"Indeterminate Progress"),Object(s.b)("p",null,"Setting the progress to indeterminate means that the value can't be determined upfront. Pass the isIndeterminate prop to activate this state."),Object(s.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Indeterminate Progress","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Center%2C%0A%20%20Heading%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EIndeterminate%20Progress%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B50%7D%20isIndeterminate%20color%3D%22red.200%22%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgress.Label%3E50%25%3C%2FCircularProgress.Label%3E%0A%20%20%20%20%20%20%3C%2FCircularProgress%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(s.b)("h2",{id:"props"},"Props"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"size"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"4xl"),",",Object(s.b)("inlineCode",{parentName:"td"},"3xl"),",",Object(s.b)("inlineCode",{parentName:"td"},"2xl"),", ",Object(s.b)("inlineCode",{parentName:"td"},"xl"),",",Object(s.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(s.b)("inlineCode",{parentName:"td"},"md"),", ",Object(s.b)("inlineCode",{parentName:"td"},"sm"),", ",Object(s.b)("inlineCode",{parentName:"td"},"xs"),", number"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The size of circular progress."),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"lg"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"max"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Maximum value defining 100% progress made (must be higher than 'min')"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"min"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Minimum value defining 'no progress' (must be lower than 'max')"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"value"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Current progress (must be between min/max)"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isIndeterminate"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Puts the component into indeterminate state. When passed, the 'value' prop is ignored"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"thickness"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number, string"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The thickness of the progress indicator"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"trackColor"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The color name of the progress track. Use a color key from the theme object"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"color"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The color of the progress indicator. Use a color key from the theme object"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))))}d.isMDXComponent=!0},1583:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=d(r),u=a,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||s;return r?n.a.createElement(m,c(c({ref:t},l),{},{components:r})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<s;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);