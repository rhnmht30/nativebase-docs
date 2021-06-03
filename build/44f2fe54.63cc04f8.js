(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),A=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=A(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=A(a),b=r,u=p["".concat(i,".").concat(b)]||p[b]||d[b]||l;return a?n.a.createElement(u,o(o({ref:t},s),{},{components:a})):n.a.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},502:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return A}));var r=a(3),n=a(7),l=(a(0),a(1583)),i={id:"alert",title:"Alert"},o={unversionedId:"alert",id:"version-3.0.0-next.21/alert",isDocsHomePage:!1,title:"Alert",description:"Alerts are used to communicate a state that affects a system, feature or page.",source:"@site/versioned_docs/version-3.0.0-next.21/alert.md",slug:"/alert",permalink:"/3.0.0-next.21/alert",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.21/alert.md",version:"3.0.0-next.21",sidebar:"version-3.0.0-next.21/componentsSidebar",previous:{title:"Tag",permalink:"/3.0.0-next.21/tag"},next:{title:"CircularProgress",permalink:"/3.0.0-next.21/circularProgress"}},c=[{value:"Import",id:"import",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Status",id:"status",children:[]},{value:"Variant",id:"variant",children:[]},{value:"Composition",id:"composition",children:[]},{value:"Props",id:"props",children:[{value:"Alert",id:"alert",children:[]},{value:"AlertIcon",id:"alerticon",children:[]},{value:"AlertTitle",id:"alerttitle",children:[]},{value:"AlertDescription",id:"alertdescription",children:[]}]}],s={toc:c};function A(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Alerts are used to communicate a state that affects a system, feature or page."),Object(l.b)("h2",{id:"import"},"Import"),Object(l.b)("p",null,"NativeBase exports 5 modal-related components:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Alert"),": The wrapper for alert components."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"AlertIcon"),": The visual icon for the alert that changes based on the ",Object(l.b)("inlineCode",{parentName:"li"},"status")," prop."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"AlertTitle"),": The title of the alert to be announced by screen readers."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"AlertDescription"),": The description of the alert to be announced by screen readers.")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  Alert,\n  AlertIcon,\n  AlertTitle,\n  AlertDescription,\n  AlertCloseButton,\n} from 'native-base';\n")),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Alert Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Alert%2C%0A%20%20AlertDescription%2C%0A%20%20AlertTitle%2C%0A%20%20AlertIcon%2C%0A%20%20Box%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0Afunction%20AlertComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%20%20%3CAlert%20status%3D%22error%22%3E%0A%20%20%20%20%20%20%20%20%3CAlertIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlertTitle%3EError%20Alert%3C%2FAlertTitle%3E%0A%20%20%20%20%20%20%20%20%3CAlertDescription%3Edescription%20goes%20here%3C%2FAlertDescription%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAlertComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h2",{id:"status"},"Status"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Alert Status","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Stack%2C%0A%20%20AlertDescription%2C%0A%20%20Alert%2C%0A%20%20AlertIcon%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AlertComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B3%7D%20mx%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CAlert%20status%3D%22error%22%3E%0A%20%20%20%20%20%20%20%20%3CAlertIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlertDescription%3E%0A%20%20%20%20%20%20%20%20%20%20There%20was%20an%20error%20processing%20your%20request%0A%20%20%20%20%20%20%20%20%3C%2FAlertDescription%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%0A%20%20%20%20%20%20%3CAlert%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20%3CAlertIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlertDescription%3E%0A%20%20%20%20%20%20%20%20%20%20Data%20uploaded%20to%20the%20server.%20Fire%20on!%0A%20%20%20%20%20%20%20%20%3C%2FAlertDescription%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%0A%20%20%20%20%20%20%3CAlert%20status%3D%22warning%22%3E%0A%20%20%20%20%20%20%20%20%3CAlertIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlertDescription%3ESeems%20your%20account%20is%20about%20expire%3C%2FAlertDescription%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%0A%20%20%20%20%20%20%3CAlert%20status%3D%22default%22%3E%0A%20%20%20%20%20%20%20%20%3CAlertIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlertDescription%3E%0A%20%20%20%20%20%20%20%20%20%20NativeBase%20is%20going%20live%20soon%20.%20Get%20ready!%0A%20%20%20%20%20%20%20%20%3C%2FAlertDescription%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAlertComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h2",{id:"variant"},"Variant"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Alert Variant","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Alert%2C%0A%20%20Stack%2C%0A%20%20AlertTitle%2C%0A%20%20AlertIcon%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AlertComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%20mx%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CAlert%20variant%3D%22solid%22%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20%3CAlertIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlertTitle%3EAlert%20Solid%20Variant%3C%2FAlertTitle%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20variant%3D%22left-accent%22%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20%3CAlertIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlertTitle%3EAlert%20Left%20Accent%20Variant%3C%2FAlertTitle%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20variant%3D%22top-accent%22%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20%3CAlertIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlertTitle%3EAlert%20Top%20Accent%20Variant%3C%2FAlertTitle%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20%3CAlertIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlertTitle%3EAlert%20Default%2FSubtle%20Variant%3C%2FAlertTitle%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAlertComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h2",{id:"composition"},"Composition"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Alert Composition","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Alert%2C%0A%20%20Stack%2C%0A%20%20AlertTitle%2C%0A%20%20AlertIcon%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AlertComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%20mx%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CAlert%20variant%3D%22solid%22%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20%3CAlertIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlertTitle%3EAlert%20Solid%20Variant%3C%2FAlertTitle%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20variant%3D%22left-accent%22%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20%3CAlertIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlertTitle%3EAlert%20Left%20Accent%20Variant%3C%2FAlertTitle%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20variant%3D%22top-accent%22%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20%3CAlertIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlertTitle%3EAlert%20Top%20Accent%20Variant%3C%2FAlertTitle%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20%3CAlertIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlertTitle%3EAlert%20Default%2FSubtle%20Variant%3C%2FAlertTitle%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAlertComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"alert"},"Alert"),Object(l.b)("p",null,"Implement ",Object(l.b)("inlineCode",{parentName:"p"},"Box"),", all props of Box can be passed."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"status"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"error, info, success, warning"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The status of the alert."),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"info")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"variant"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"left-accent, solid, subtle, top-accent"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The variant of the alert style to use."),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"subtle")))),Object(l.b)("h3",{id:"alerticon"},"AlertIcon"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"AlertIcon")," composes ",Object(l.b)("inlineCode",{parentName:"p"},"Icon")," and changes the icon based on the status prop."),Object(l.b)("h3",{id:"alerttitle"},"AlertTitle"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"AlertTitle")," composes the ",Object(l.b)("inlineCode",{parentName:"p"},"Box")," component."),Object(l.b)("h3",{id:"alertdescription"},"AlertDescription"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"AlertDescription")," composes the ",Object(l.b)("inlineCode",{parentName:"p"},"Box")," component."))}A.isMDXComponent=!0}}]);