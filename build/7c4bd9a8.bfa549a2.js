(window.webpackJsonp=window.webpackJsonp||[]).push([[719],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},791:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(1583)),i={id:"hook",title:"Hook"},c={unversionedId:"hook",id:"version-3.0.0-next.21/hook",isDocsHomePage:!1,title:"Hook",description:"useTheme",source:"@site/versioned_docs/version-3.0.0-next.21/hook.md",slug:"/hook",permalink:"/3.0.0-next.21/hook",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.21/hook.md",version:"3.0.0-next.21"},s=[{value:"useTheme",id:"usetheme",children:[]},{value:"Import",id:"import",children:[]},{value:"Example",id:"example",children:[{value:"useToken",id:"usetoken",children:[]}]},{value:"Import",id:"import-1",children:[]},{value:"Example",id:"example-1",children:[]},{value:"useDisclose",id:"usedisclose",children:[]},{value:"Import",id:"import-2",children:[{value:"Usage",id:"usage",children:[]}]},{value:"Return value",id:"return-value",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"usetheme"},"useTheme"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"useTheme")," is a custom hook used to get the theme object from context."),Object(r.b)("h2",{id:"import"},"Import"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { useTheme } from 'native-base';\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function Example() {\n  const theme = useTheme();\n\n  return <Box>{/* Do something with the theme */}</Box>;\n}\n")),Object(r.b)("h3",{id:"usetoken"},"useToken"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"useToken")," is a custom hook used to resolve design tokens from the theme."),Object(r.b)("h2",{id:"import-1"},"Import"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { useToken } from 'native-base';\n")),Object(r.b)("h2",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function Example() {\n  const [warning1, red2] = useToken(\n    // the key within the theme, in this case `theme.colors`\n    'colors',\n    // the subkey(s), resolving to `theme.colors.warning.1`\n    ['warning.100', 'red.200']\n    // a single fallback or fallback array matching the length of the previous arg\n  );\n\n  return (\n    <Box bg={warning1}>\n      <Text color={red2}>wonderful gradients</Text>\n    </Box>\n  );\n}\n")),Object(r.b)("h2",{id:"usedisclose"},"useDisclose"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"useDisclosure")," is a custom hook used to help handle common ",Object(r.b)("inlineCode",{parentName:"p"},"open"),", ",Object(r.b)("inlineCode",{parentName:"p"},"close"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"toggle")," scenarios. It can be used to control feedback component such as ",Object(r.b)("strong",{parentName:"p"},"Modal"),", ",Object(r.b)("strong",{parentName:"p"},"AlertDialog"),", ",Object(r.b)("strong",{parentName:"p"},"Drawer"),", etc."),Object(r.b)("h2",{id:"import-2"},"Import"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { useDisclose } from 'native-base';\n")),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Hook Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Modal%2C%0A%20%20ModalBody%2C%0A%20%20ModalCloseButton%2C%0A%20%20ModalContent%2C%0A%20%20ModalFooter%2C%0A%20%20ModalHeader%2C%0A%20%20ModalOverlay%2C%0A%20%20Button%2C%0A%20%20Center%2C%0A%20%20Input%2C%0A%20%20useDisclose%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20UseDiscloseExample()%20%7B%0A%20%20const%20%7B%20isOpen%2C%20onOpen%2C%20onClose%20%7D%20%3D%20useDisclose()%3B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CModal%20isCentered%20isOpen%3D%7BisOpen%7D%20onClose%3D%7BonClose%7D%3E%0A%20%20%20%20%20%20%20%20%3CModalOverlay%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CModalContent%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModalCloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModalHeader%20fontSize%3D%224xl%22%20fontWeight%3D%22bold%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Hello%20World%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModalHeader%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModalBody%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%20consectetur%20adipisicing%20elit.%20Quos%20quasi%0A%20%20%20%20%20%20%20%20%20%20%20%20cupiditate%20expedita%2C%20ipsa%20corporis%20officia%20totam%20similique%20delectus!%0A%20%20%20%20%20%20%20%20%20%20%20%20Debitis%20esse%2C%20ea%20blanditiis%20iste%20enim%20iure%20at%20odit%20fugiat%20autem.%0A%20%20%20%20%20%20%20%20%20%20%20%20Accusamus%3F%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CInput%20mt%3D%7B4%7D%20placeholder%3D%22Lorem%20ipsum%20dolor%20sit%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModalBody%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModalFooter%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20colorScheme%3D%22blue%22%20mr%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Save%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7BonClose%7D%3EClose%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModalFooter%3E%0A%20%20%20%20%20%20%20%20%3C%2FModalContent%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonOpen%7D%3EOpen%20Modal%3C%2FButton%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CUseDiscloseExample%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"return-value"},"Return value"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useDisclosure")," hook returns an object with the following fields:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"isOpen"),": ( ",Object(r.b)("strong",{parentName:"p"},"boolean")," ) Show the component; triggers the enter or exit states."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"onClose"),": ( ",Object(r.b)("strong",{parentName:"p"},"function")," ) Callback function to set a falsy value for the ",Object(r.b)("inlineCode",{parentName:"p"},"isOpen")," parameter."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"onOpen"),": ( ",Object(r.b)("strong",{parentName:"p"},"function")," ) Callback function to set a truthy value for the ",Object(r.b)("inlineCode",{parentName:"p"},"isOpen")," parameter."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"onToggle"),": ( ",Object(r.b)("strong",{parentName:"p"},"function")," ) Callback function to toggle the value of the ",Object(r.b)("inlineCode",{parentName:"p"},"isOpen")," parameter."))}p.isMDXComponent=!0}}]);