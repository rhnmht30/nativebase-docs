(window.webpackJsonp=window.webpackJsonp||[]).push([[835],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,b=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),o=i(n),s=a,d=o["".concat(b,".").concat(s)]||o[s]||m[s]||p;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,b=new Array(p);b[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var l=2;l<p;l++)b[l]=n[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},908:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(7),p=(n(0),n(1583)),b={id:"numberInput",title:"NumberInput"},c={unversionedId:"numberInput",id:"version-3.0.0-next.36/numberInput",isDocsHomePage:!1,title:"NumberInput",description:"The NumberInput component is similar to the Input component, but it has controls for incrementing or decrementing numeric values.",source:"@site/versioned_docs/version-3.0.0-next.36/numberInput.md",slug:"/numberInput",permalink:"/3.0.0-next.36/numberInput",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/numberInput.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"Input",permalink:"/3.0.0-next.36/input"},next:{title:"Link",permalink:"/3.0.0-next.36/link"}},u=[{value:"Implements",id:"implements",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Basic",id:"basic",children:[{value:"Default Value",id:"default-value",children:[]},{value:"Min Max",id:"min-max",children:[]},{value:"Steps",id:"steps",children:[]},{value:"Form Controlled",id:"form-controlled",children:[]}]},{value:"Props",id:"props",children:[{value:"NumberInputField",id:"numberinputfield",children:[]},{value:"NumberInputStepper",id:"numberinputstepper",children:[]},{value:"NumberDecrementStepper and NumberIncrementStepper",id:"numberdecrementstepper-and-numberincrementstepper",children:[]},{value:"NumberDecrementStepper and NumberIncrementStepper",id:"numberdecrementstepper-and-numberincrementstepper-1",children:[]}]}],l={toc:u};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"NumberInput")," component is similar to the ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"/3.0.0-next.36/input"}),Object(p.b)("inlineCode",{parentName:"a"},"Input"))," component, but it has controls for incrementing or decrementing numeric values."),Object(p.b)("h2",{id:"implements"},"Implements"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"/3.0.0-next.36/input"}),Object(p.b)("inlineCode",{parentName:"a"},"Input")))),Object(p.b)("h2",{id:"examples"},"Examples"),Object(p.b)("h2",{id:"basic"},"Basic"),Object(p.b)("div",{className:"snack-player","data-snack-name":"NumberInput Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20NumberInput%2C%0A%20%20NumberInputField%2C%0A%20%20NumberInputStepper%2C%0A%20%20NumberIncrementStepper%2C%0A%20%20NumberDecrementStepper%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20NumberInputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNumberInput%3E%0A%20%20%20%20%20%20%3CNumberInputField%20%2F%3E%0A%20%20%20%20%20%20%3CNumberInputStepper%3E%0A%20%20%20%20%20%20%20%20%3CNumberIncrementStepper%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CNumberDecrementStepper%20%2F%3E%0A%20%20%20%20%20%20%3C%2FNumberInputStepper%3E%0A%20%20%20%20%3C%2FNumberInput%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CNumberInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(p.b)("h3",{id:"default-value"},"Default Value"),Object(p.b)("div",{className:"snack-player","data-snack-name":"NumberInput Default Value","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20NumberInput%2C%0A%20%20NumberInputField%2C%0A%20%20NumberInputStepper%2C%0A%20%20NumberIncrementStepper%2C%0A%20%20NumberDecrementStepper%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0Afunction%20NumberInputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNumberInput%20defaultValue%3D%225%22%3E%0A%20%20%20%20%20%20%3CNumberInputField%20%2F%3E%0A%20%20%20%20%20%20%3CNumberInputStepper%3E%0A%20%20%20%20%20%20%20%20%3CNumberIncrementStepper%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CNumberDecrementStepper%20%2F%3E%0A%20%20%20%20%20%20%3C%2FNumberInputStepper%3E%0A%20%20%20%20%3C%2FNumberInput%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CNumberInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(p.b)("h3",{id:"min-max"},"Min Max"),Object(p.b)("div",{className:"snack-player","data-snack-name":"NumberInput Min Max","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20NumberInput%2C%0A%20%20NumberInputField%2C%0A%20%20NumberInputStepper%2C%0A%20%20NumberIncrementStepper%2C%0A%20%20NumberDecrementStepper%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0Afunction%20NumberInputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNumberInput%20defaultValue%3D%2210%22%20min%3D%7B5%7D%20max%3D%7B20%7D%3E%0A%20%20%20%20%20%20%3CNumberInputField%20%2F%3E%0A%20%20%20%20%20%20%3CNumberInputStepper%3E%0A%20%20%20%20%20%20%20%20%3CNumberIncrementStepper%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CNumberDecrementStepper%20%2F%3E%0A%20%20%20%20%20%20%3C%2FNumberInputStepper%3E%0A%20%20%20%20%3C%2FNumberInput%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CNumberInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(p.b)("h3",{id:"steps"},"Steps"),Object(p.b)("div",{className:"snack-player","data-snack-name":"NumberInput Steps","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20NumberInput%2C%0A%20%20NumberInputField%2C%0A%20%20NumberInputStepper%2C%0A%20%20NumberIncrementStepper%2C%0A%20%20NumberDecrementStepper%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0Afunction%20NumberInputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNumberInput%20defaultValue%3D%2210%22%20min%3D%7B5%7D%20max%3D%7B20%7D%20step%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CNumberInputField%20%2F%3E%0A%20%20%20%20%20%20%3CNumberInputStepper%3E%0A%20%20%20%20%20%20%20%20%3CNumberIncrementStepper%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CNumberDecrementStepper%20%2F%3E%0A%20%20%20%20%20%20%3C%2FNumberInputStepper%3E%0A%20%20%20%20%3C%2FNumberInput%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CNumberInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(p.b)("h3",{id:"form-controlled"},"Form Controlled"),Object(p.b)("div",{className:"snack-player","data-snack-name":"NumberInput Form Controlled","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20FormControl%2C%0A%20%20NumberInput%2C%0A%20%20NumberInputField%2C%0A%20%20NumberInputStepper%2C%0A%20%20NumberIncrementStepper%2C%0A%20%20NumberDecrementStepper%2C%0A%20%20Container%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20NumberInputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CContainer%3E%0A%20%20%20%20%20%20%3CFormControl%20isRequired%20isInvalid%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3ENumber%20of%20components%3F%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CNumberInput%3E%0A%20%20%20%20%20%20%20%20%20%20%3CNumberInputField%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CNumberInputStepper%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CNumberIncrementStepper%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CNumberDecrementStepper%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FNumberInputStepper%3E%0A%20%20%20%20%20%20%20%20%3C%2FNumberInput%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%3EYou%20can%20make%20a%20guess.%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3EDon't%20worry%2C%20it's%20just%20an%20example.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%3C%2FContainer%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CNumberInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(p.b)("h2",{id:"props"},"Props"),Object(p.b)("h3",{id:"numberinputfield"},"NumberInputField"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(p.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(p.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(p.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"value"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The value of the input for controlled usage. Should be less than max and greater than min."),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"defaultValue"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The initial value of the input. Should be less than max and greater than min."),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onChange"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The callback fired when the value changes."),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"min"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The minimum value of the input."),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"max"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The maximum value of the input."),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"step"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The step used to increment or decrement the value."),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If true, the input will be disabled."),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"keepWithinRange"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If true and you use the stepper or up/down arrow keys, the value will not exceed the max or go lower than min."),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"focusInputOnChange"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If true, the input will be focused as you increment or decrement the value with the stepper."),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"NumberInput"),"\xa0composes\xa0",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"/3.0.0-next.36/input"}),Object(p.b)("inlineCode",{parentName:"a"},"Input")),"\xa0so you can pass all the\xa0",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"/3.0.0-next.36/input#props"}),Object(p.b)("inlineCode",{parentName:"a"},"Input props")),"."),Object(p.b)("h3",{id:"numberinputstepper"},"NumberInputStepper"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"NumberInputStepper"),"\xa0composes\xa0",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"/3.0.0-next.36/VStack"}),Object(p.b)("inlineCode",{parentName:"a"},"VStack")),"\xa0so you can pass all the\xa0",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"/3.0.0-next.36/VStack#props"}),Object(p.b)("inlineCode",{parentName:"a"},"VStack props")),"."),Object(p.b)("h3",{id:"numberdecrementstepper-and-numberincrementstepper"},"NumberDecrementStepper and NumberIncrementStepper"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"NumberDecrementStepper"),"\xa0and\xa0",Object(p.b)("inlineCode",{parentName:"p"},"NumberIncrementStepper"),"\xa0composes the\xa0",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"/3.0.0-next.36/box"}),Object(p.b)("inlineCode",{parentName:"a"},"Box")),"\xa0props so you can pass all the\xa0",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"/3.0.0-next.36/box#props"}),Object(p.b)("inlineCode",{parentName:"a"},"Box props")),"."),Object(p.b)("h3",{id:"numberdecrementstepper-and-numberincrementstepper-1"},"NumberDecrementStepper and NumberIncrementStepper"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(p.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(p.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(p.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"_","disabled"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"StyleProps"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pass custom style object for disabled state"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"_","active"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"StyleProps"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pass custom style object for active state"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))))}i.isMDXComponent=!0}}]);