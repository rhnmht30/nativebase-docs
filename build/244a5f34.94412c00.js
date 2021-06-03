(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),b=n,u=d["".concat(o,".").concat(b)]||d[b]||m[b]||i;return a?r.a.createElement(u,c(c({ref:t},p),{},{components:a})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},292:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(1583)),o={id:"spinner",title:"Spinner"},c={unversionedId:"spinner",id:"version-3.0.0-next.27/spinner",isDocsHomePage:!1,title:"Spinner",description:"Implements",source:"@site/versioned_docs/version-3.0.0-next.27/spinner.md",slug:"/spinner",permalink:"/3.0.0-next.27/spinner",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.27/spinner.md",version:"3.0.0-next.27",sidebar:"version-3.0.0-next.27/componentsSidebar",previous:{title:"SnackBar",permalink:"/3.0.0-next.27/snackBar"},next:{title:"Toast",permalink:"/3.0.0-next.27/toast"}},s=[{value:"Implements",id:"implements",children:[]},{value:"Example",id:"example",children:[]},{value:"Example (Colors)",id:"example-colors",children:[]},{value:"Example (Sizes)",id:"example-sizes",children:[]},{value:"Example (Variant)",id:"example-variant",children:[]},{value:"Example (Duration)",id:"example-duration",children:[]},{value:"Props",id:"props",children:[]}],p={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ActivityIndicator")," from react-native"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"color"))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Spinner Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Spinner%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20SpinnerComponent%20()%20%7B%0A%20%20return%20%3CSpinner%20%2F%3E%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSpinnerComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"example-colors"},"Example (Colors)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Spinner Example(colors)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Spinner%2C%20HStack%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20SpinnerComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CSpinner%20color%3D%22danger.500%22%20%2F%3E%0A%20%20%20%20%20%20%3CSpinner%20color%3D%22green.500%22%20%2F%3E%0A%20%20%20%20%20%20%3CSpinner%20color%3D%22blue.500%22%20%2F%3E%0A%20%20%20%20%20%20%3CSpinner%20color%3D%22warning.100%22%20%2F%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSpinnerComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"example-sizes"},"Example (Sizes)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Spinner Example(Sizes)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Spinner%2C%20HStack%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20SpinnerComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%20space%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CSpinner%20size%3D%22sm%22%20%2F%3E%0A%20%20%20%20%20%20%3CSpinner%20size%3D%22lg%22%20%2F%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSpinnerComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"example-variant"},"Example (Variant)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Spinner Example(Variant)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Spinner%2C%20HStack%2C%20Icon%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20SpinnerComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%3CHStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CSpinner%20%2F%3E%0A%20%20%20%20%20%20%3CSpinner%20color%3D%22danger.400%22%20variant%3D%22dotted%22%20%2F%3E%0A%20%20%20%20%20%20%3CSpinner%20color%3D%22blue.500%22%20variant%3D%22stroked%22%20%2F%3E%0A%20%20%20%20%20%20%3CSpinner%20color%3D%22gray.900%22%20variant%3D%22multiColorDotted%22%20%2F%3E%0A%20%20%20%20%20%20%3CSpinner%20color%3D%22yellow.500%22%20variant%3D%22squareDotted%22%20%2F%3E%0A%20%20%20%20%20%20%3CSpinner%0A%20%20%20%20%20%20%20%20variant%3D%22custom%22%0A%20%20%20%20%20%20%20%20renderProp%3D%7B%3CIcon%20name%3D%22bat%22%20type%3D%22MaterialCommunityIcons%22%20size%3D%7B12%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSpinnerComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"example-duration"},"Example (Duration)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Spinner Example(Duration)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Spinner%2C%20HStack%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20SpinnerComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%3CSpinner%20color%3D%22danger.400%22%20variant%3D%22dotted%22%20size%3D%22lg%22%20duration%3D%7B1000%7D%20%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSpinnerComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"sm")," , ",Object(i.b)("inlineCode",{parentName:"td"},"lg")," , ",Object(i.b)("inlineCode",{parentName:"td"},"small")," , ",Object(i.b)("inlineCode",{parentName:"td"},"large")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Applies box shadow and accepts a number from 0 to 9"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"style"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"stylesheet"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Applies user-defined styles and accepts a stylesheet."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"variant"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"'custom', 'dotted', 'multiColorDotted', 'stroked', 'squareDotted'"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Variant of spinner to use."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(i.b)("p",null,"| duration | number | Time(in ms) for spinner to complete a rotation | 1900 |\n| renderProp | JSX.Element | Manual component to be rendered as a Spinner | - |"))}l.isMDXComponent=!0}}]);