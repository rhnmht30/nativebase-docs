(window.webpackJsonp=window.webpackJsonp||[]).push([[302,11,389],{373:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(796),c=t(866),s=t(756),m=t(839);a.default=function(e){const{metadata:a,items:t,sidebar:r}=e,{allTagsPath:i,name:o,count:d}=a;return l.a.createElement(n.a,{title:`Posts tagged "${o}"`,description:`Blog | Tagged "${o}"`,wrapperClassName:"blog-wrapper"},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--2"},l.a.createElement(m.a,{sidebar:r})),l.a.createElement("main",{className:"col col--8"},l.a.createElement("h1",null,d," ",function(e,a){return e>1?a+"s":a}(d,"post"),' tagged with "',o,'"'),l.a.createElement(s.a,{href:i},"View All Tags"),l.a.createElement("div",{className:"margin-vert--xl"},t.map(({content:e})=>l.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},l.a.createElement(e,null))))))))}},759:function(e,a){},768:function(e,a,t){"use strict";var r=t(742),l=t(0);a.a=function({fill:e,...a}){return l.createElement("svg",Object(r.a)({width:24,height:24,viewBox:"0 0 16 16"},a),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z",fill:null!=e?e:"#666"}))}},773:function(e,a,t){"use strict";var r=t(742),l=t(0);a.a=function({fill:e,...a}){return l.createElement("svg",Object(r.a)({width:24,height:24,viewBox:"0 0 24.735 20"},a),l.createElement("path",{"data-name":"Path 1",d:"M23.412 57.509a21.754 21.754 0 00-2.112-5.162A13.022 13.022 0 0015.886 49l-.5 1.36a15.246 15.246 0 013.777 1.987 24.881 24.881 0 00-6.8-1.009 24.881 24.881 0 00-6.8 1.009A15.247 15.247 0 019.34 50.36L8.849 49a13.022 13.022 0 00-5.413 3.343 21.751 21.751 0 00-2.113 5.162A47.79 47.79 0 000 65.552C.085 65.684 2.029 69 7.328 69l1.343-1.945a14.284 14.284 0 01-4.253-1.918l.8-1.206a12.921 12.921 0 0014.292 0l.8 1.206a14.284 14.284 0 01-4.253 1.918L17.406 69c5.3 0 7.244-3.32 7.328-3.452a47.793 47.793 0 00-1.322-8.039zM9.017 61.3h-1.45v-2.415h1.45zm8.151 0h-1.45v-2.415h1.449z",fill:null!=e?e:"#666",transform:"translate(0 -49.004)"}))}},776:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(0),l=t.n(r),n=(t(776),t(749));const c=[{name:"Twitter",url:"https://twitter.com/nativebaseio"},{name:"StackOverflow",url:"https://stackoverflow.com/questions/tagged/native-base"},{name:"Discord",url:"https://discord.com/invite/TSgCw2UPmb"},{name:"VS Code Extension",url:"https://marketplace.visualstudio.com/items?itemName=NativeBase.nativebase-v3-vscode-extension&ssr=false#review-details"}],s=[{name:"Introduction",url:"https://alpha-docs.nativebase.io/"},{name:"Examples",url:"https://alpha-docs.nativebase.io/todo-example"},{name:"FAQ",url:"https://alpha-docs.nativebase.io/faq"}],m=[{name:"GitHub",url:"https://github.com/GeekyAnts/NativeBase"},{name:"Contribution Guidelines",url:"https://github.com/GeekyAnts/NativeBase/blob/master/CONTRIBUTING.md"},{name:"Privacy Policy",url:"https://alpha.nativebase.io/privacy-policy"},{name:"Cookie Policy",url:"https://alpha.nativebase.io/cookie-policy"}];function i(){const{isDarkTheme:e,setLightTheme:a,setDarkTheme:t}=Object(n.a)();return l.a.createElement("div",{className:"tailwind"},l.a.createElement("div",{className:`w-full py-8 mt-10 ${e?"bg-coolGray-800":"bg-coolGray-100"} `},l.a.createElement("div",{className:"flex flex-col justify-between w-full px-6 mx-auto text-gray-500 max-w-7xl lg:px-4 md:flex-row gap-y-10"},l.a.createElement("div",{className:""},l.a.createElement("div",{className:"font-semibold  "+(e?"text-gray-100":"text-gray-900")},"Docs"),l.a.createElement("div",{className:"flex flex-col mt-5 space-y-3 list-none"},s.map((a,t)=>l.a.createElement("div",{className:"text-gray-500 hover:underline",key:t},l.a.createElement("a",{className:"hover:text-cyan-500 "+(e?"text-gray-200":"text-gray-500"),rel:"noreferrer",href:a.url},a.name))))),l.a.createElement("div",null,l.a.createElement("div",{className:"font-semibold  "+(e?"text-gray-100":"text-gray-900")},"Community"),l.a.createElement("div",{className:"flex flex-col mt-5 space-y-3 text-gray-500 list-none "},c.map((a,t)=>l.a.createElement("div",{className:"hover:underline ",key:t},l.a.createElement("a",{className:"hover:text-cyan-500 "+(e?"text-gray-200":"text-gray-500"),rel:"noreferrer",target:"_blank",href:a.url},a.name))))),l.a.createElement("div",{className:""},l.a.createElement("div",{className:"font-semibold  "+(e?"text-gray-100":"text-gray-900")},"More"),l.a.createElement("div",{className:"flex flex-col mt-5 space-y-3 text-gray-500 list-none "},m.map((a,t)=>l.a.createElement("div",{className:"hover:underline",key:t},l.a.createElement("a",{className:`hover:text-cyan-500 ${e?"text-gray-200":"text-gray-500"} `,rel:"noreferrer",target:"_blank",href:a.url},a.name))))),l.a.createElement("div",{className:"flex flex-col space-y-5 text-gray-500 list-none"},l.a.createElement("div",{className:"hover:underline"},l.a.createElement("a",{className:"hover:text-cyan-500 "+(e?"text-gray-200":"text-gray-500"),href:"https://geekyants.com/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=NativeBase_3",target:"_blank",rel:"noreferrer"},"Built with",l.a.createElement("span",{className:"text-red-500"}," \u2764\ufe0f ")," at GeekyAnts.")),l.a.createElement("div",{className:"flex space-x-4"},l.a.createElement("a",{rel:"noreferrer",target:"_blank",href:"https://www.linkedin.com/company/nativebase/about/?viewAsMember=true"},l.a.createElement("svg",{className:`w-6 h-6 ${e?"text-gray-200":"text-gray-500 "}  fill-current`,"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin-in",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512","data-fa-i2svg":""},l.a.createElement("path",{fill:"currentColor",d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}))),l.a.createElement("a",{rel:"noreferrer",target:"_blank",href:"https://www.instagram.com/nativebaseio/?hl=en"},l.a.createElement("svg",{className:`w-6 h-6 ${e?"text-gray-200":"text-gray-500 "}  fill-current`,xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"}))),l.a.createElement("a",{rel:"noreferrer",target:"_blank",href:"https://www.youtube.com/channel/UCoL_iTwpY07vDs91974z3xA/about"},l.a.createElement("svg",{className:`w-6 h-6 ${e?"text-gray-200":"text-gray-500 "}  fill-current`,version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet"},l.a.createElement("metadata",null,"Created by potrace 1.16, written by Peter Selinger 2001-2019"),l.a.createElement("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",stroke:"none"},l.a.createElement("path",{d:"M1625 4339 c-482 -16 -845 -44 -1015 -79 -239 -49 -431 -217 -501 -440 -44 -142 -80 -424 -100 -789 -13 -242 -7 -932 10 -1131 28 -322 61 -525 104 -640 65 -177 232 -331 415 -385 472 -140 3309 -153 3982 -19 203 41 378 178 463 364 50 111 88 328 119 695 17 202 18 1107 0 1305 -29 336 -68 562 -117 667 -72 157 -201 279 -361 339 -153 57 -510 91 -1194 114 -338 11 -1463 11 -1805 -1z m1084 -1391 c355 -204 652 -376 658 -382 10 -9 -137 -98 -620 -376 -347 -200 -647 -373 -664 -383 l-33 -19 0 766 c0 421 3 766 6 766 3 0 297 -167 653 -372z"}))))))),l.a.createElement("div",{className:"mt-10 text-center text-gray-500 md:mt-5"},"Copyright \xa9 2021 NativeBase")))}},817:function(e,a,t){"use strict";var r=t(3),l=t(0),n=t.n(l),c=t(743),s=t(816),m=t(749),i=t(765),o=t(807),d=t(790),v=t(791),u=t(819),g=t(797),b=t(792),h=t(742);var E=function({fill:e,...a}){return l.createElement("svg",Object(h.a)({width:22,height:22,viewBox:"0 0 20 20"},a),l.createElement("path",{d:"M10.01 20.021a9.747 9.747 0 008.942-5.641 7.643 7.643 0 01-3.223.636 7.874 7.874 0 01-7.864-7.865A8.151 8.151 0 0112.106.12 14.946 14.946 0 0010.01 0a10.01 10.01 0 000 20.019z",fill:null!=e?e:"#666"}))};var A=function({fill:e,...a}){return l.createElement("svg",Object(h.a)({width:22,height:22,viewBox:"0 0 20 20"},a),l.createElement("path",{d:"M43.237 32h-1.956v2.964h1.956zm5.914 2.024l-1.76 1.776 1.37 1.385 1.759-1.779zm-13.779 0L34 35.409l1.759 1.779L37.13 35.8zm6.889 2.422a5.929 5.929 0 105.863 5.929 5.914 5.914 0 00-5.863-5.929zm10.261 4.942H49.59v1.978h2.932zm-17.59 0H32v1.978h2.932zm13.829 6.174l-1.37 1.385 1.759 1.779 1.37-1.385zm-13 0L34 49.341l1.37 1.385 1.759-1.779zm7.476 2.223h-1.956v2.965h1.956z",transform:"translate(-32 -32)",fill:null!=e?e:"#666"}))},p=t(768),f=t(773);var y=t(57),x=t.n(y);a.a=function(){n.a.useEffect(()=>{document.getElementsByClassName("main-wrapper")[0].className+=" main-wrapper-docs",J(!1)},[]);const{navbar:{items:e,hideOnScroll:a,style:t},colorMode:{disableSwitch:h}}=Object(i.useThemeConfig)(),[y,k]=Object(l.useState)(!1),[N,w]=Object(l.useState)(!1),{isDarkTheme:L,setLightTheme:C,setDarkTheme:B}=Object(m.a)(),{navbarRef:M,isNavbarVisible:G}=Object(o.a)(a),[O,J]=Object(l.useState)(!0);Object(d.a)(y);const W=Object(l.useCallback)(()=>{k(!0)},[k]),X=Object(l.useCallback)(()=>{k(!1)},[k]),H=Object(l.useCallback)(()=>L?C():B(),[L,C,B]),V=Object(v.a)();Object(l.useEffect)(()=>{V===v.b.desktop&&k(!1)},[V]);const{leftItems:T,rightItems:F}=function(e){return{leftItems:e.filter(e=>{var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:"left")}),rightItems:e.filter(e=>{var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:"left")})}}(e),Z=L?"text-gray-100":"text-gray-800";return n.a.createElement("nav",{ref:M,className:Object(c.a)("navbar","tailwind","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":y,[x.a.navbarHideable]:a,[x.a.navbarHidden]:!G})},n.a.createElement("div",{className:"navbar__inner bg-transparent backdrop-blur-sm lg:px-2 "+(O?"lg:px-4":"")},n.a.createElement("div",{className:"flex px-4 navbar-small bg-blueGray-50 justify-around mx-auto md:px-6 lg:px-0 w-full  "+(O?"max-w-6xl":"")},n.a.createElement("div",{className:"navbar__items "},null!=e&&0!==e.length&&n.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:W,onKeyDown:W},n.a.createElement(b.a,null)),n.a.createElement(g.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",{[x.a.hideLogoText]:N})}),T.map((e,a)=>"Looking for v2.0"===e.label?n.a.createElement("div",{key:a,className:"hidden xl:block text-base "+Z},"Looking for"," ",n.a.createElement("a",{href:"https://v2.nativebase.io/",target:"_blank",className:"leading-5 text-secondary-50"},"v2.0"),n.a.createElement("span",null,"?")):n.a.createElement(u.a,Object(r.a)({},e,{key:a})))),n.a.createElement("div",{className:"max-w-3xl navbar__items navbar__items--right"},n.a.createElement(s.a,{handleSearchBarToggle:w,isSearchBarExpanded:N}),F.map((e,a)=>{switch(e.label){case"GitHub":return n.a.createElement("a",{target:"_blank",key:a,href:e.to,className:"hidden px-0 mr-4 lg:px-3 lg:mr-0 md:flex navbar__item navbar__link"},n.a.createElement(p.a,{fill:L?"#EAEAEA":"#777e86"}));case"Docs":return n.a.createElement("a",{href:e.to,key:a,className:`${L?"text-white hover:bg-gray-600":"text-gray-500 hover:bg-gray-100"} px-0 border border-solid ${L?"border-gray-600":"border-gray-200"}  font-semibold py-1 px-5 rounded no-underline hidden md:inline-block`},"Docs");case"HireUs":return n.a.createElement("a",{href:e.to,key:a,className:`border-0 ${L?"text-white hover:bg-gray-600":"text-gray-500 hover:bg-gray-100"}\n                       px-0 border border-solid ${L?"border-gray-600":"border-gray-200"}  font-semibold py-1 rounded no-underline hidden md:inline-block px-2 ml-4`},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:"w-2 h-2 mr-2 -mb-1 fill-current md:h-5 md:w-5 flex-no-shrink",viewBox:"0 0 41.5 41.265"},n.a.createElement("image",{id:"Image_25","data-name":"Image 25",width:"41.5",height:"41.265",xlinkHref:"data:image/png;base64,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"})),n.a.createElement("span",null,"Hire Us"));case"Theme":return!h&&n.a.createElement("button",{key:a,onClick:H,className:"hidden px-0 mr-3 bg-transparent border-0 lg:px-3 md:flex navbar__item navbar__link"},L?n.a.createElement(A,{key:a,fill:L?"#EAEAEA":"#777e86"}):n.a.createElement(E,{key:a,fill:L?"#EAEAEA":"#777e86"}));case"Discord":return n.a.createElement("a",{key:a,target:"_blank",href:e.to,className:"hidden px-0 mr-4 border-0 lg:mr-0 lg:px-3 md:flex navbar__item navbar__link"},n.a.createElement(f.a,{key:a,fill:L?"#EAEAEA":"#777e86"}));case"Market":default:return n.a.createElement(u.a,Object(r.a)({key:a},e,{key:a}))}}))),n.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:X}),n.a.createElement("div",{className:"navbar-sidebar"},n.a.createElement("div",{className:"navbar-sidebar__brand"},n.a.createElement(g.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:X}),!h&&n.a.createElement("button",{onClick:H,className:"p-0 ml-3 bg-transparent border-0"},L?n.a.createElement(A,null):n.a.createElement(E,null))),n.a.createElement("div",{className:"navbar-sidebar__items"},n.a.createElement("div",{className:"menu"},n.a.createElement("ul",{className:"menu__list"},e.slice(0).map((e,a)=>"Looking for v2.0"===e.label?n.a.createElement("div",{key:a,className:"text-base px-4 py-1",style:{color:L?"#DADDE1":"#606770"}},"Looking for"," ",n.a.createElement("a",{href:"https://v2.nativebase.io/",target:"_blank",className:"leading-5 text-secondary-50"},"v2.0"),n.a.createElement("span",null,"?")):n.a.createElement(u.a,Object(r.a)({mobile:!0},e,{onClick:X,key:a})))))))))}},839:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(0),l=t.n(r),n=t(743),c=t(756),s=t(59),m=t.n(s);function i({sidebar:e}){return 0===e.items.length?null:l.a.createElement("div",{className:Object(n.a)(m.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:m.a.sidebarItemTitle},e.title),l.a.createElement("ul",{className:m.a.sidebarItemList},e.items.map(e=>l.a.createElement("li",{key:e.permalink,className:m.a.sidebarItem},l.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:m.a.sidebarItemLink,activeClassName:m.a.sidebarItemLinkActive},e.title)))))}},841:function(e,a,t){"use strict";var r=t(742),l=t(0),n=t.n(l),c=t(756),s=t(763),m=t(743),i=t(765),o=(t(60),t(61)),d=t.n(o);var v=e=>function({id:a,...t}){const{navbar:{hideOnScroll:r}}=Object(i.useThemeConfig)();return a?n.a.createElement(e,t,n.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(m.a)("anchor",{[d.a.enhancedAnchor]:!r}),id:a}),t.children,n.a.createElement("a",{className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):n.a.createElement(e,t)},u=t(62),g=t.n(u);const b={code:e=>{const{children:a}=e;return"string"==typeof a?a.includes("\n")?n.a.createElement(s.a,e):n.a.createElement("code",e):a},a:e=>n.a.createElement(c.a,e),pre:e=>n.a.createElement("div",Object(r.a)({className:g.a.mdxCodeBlock},e)),h1:v("h1"),h2:v("h2"),h3:v("h3"),h4:v("h4"),h5:v("h5"),h6:v("h6")};a.a=b},866:function(e,a,t){"use strict";var r=t(0),l=t.n(r),n=t(743),c=t(741),s=t(24),m=t(756),i=t(841),o=t(778),d=t(63),v=t.n(d);const u=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:r,truncated:d,isBlogPostPage:g=!1}=e,{date:b,permalink:h,tags:E,readingTime:A}=r,{author:p,title:f,image:y,keywords:x}=t,k=t.author_url||t.authorURL,N=t.author_title||t.authorTitle,w=t.author_image_url||t.authorImageURL,L=Object(o.a)(y,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,x&&x.length&&l.a.createElement("meta",{name:"keywords",content:x.join(",")}),y&&l.a.createElement("meta",{property:"og:image",content:L}),y&&l.a.createElement("meta",{name:"twitter:image",content:L}),y&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+f})),l.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(()=>{const e=g?"h1":"h2",a=b.substring(0,10).split("-"),t=a[0],r=u[parseInt(a[1],10)-1],c=parseInt(a[2],10);return l.a.createElement("header",null,l.a.createElement(e,{className:Object(n.a)("margin-bottom--sm",v.a.blogPostTitle)},g?f:l.a.createElement(m.a,{to:h},f)),l.a.createElement("div",{className:"margin-vert--md"},l.a.createElement("time",{dateTime:b,className:v.a.blogPostDate},r," ",c,", ",t," ",A&&l.a.createElement(l.a.Fragment,null," \xb7 ",Math.ceil(A)," min read"))),l.a.createElement("div",{className:"avatar margin-vert--md"},w&&l.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:k,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("img",{src:w,alt:p})),l.a.createElement("div",{className:"avatar__intro"},p&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"avatar__name"},l.a.createElement("a",{href:k,target:"_blank",rel:"noreferrer noopener"},p)),l.a.createElement("small",{className:"avatar__subtitle"},N)))))})(),l.a.createElement("section",{className:"markdown"},l.a.createElement(c.a,{components:i.a},a)),(E.length>0||d)&&l.a.createElement("footer",{className:"row margin-vert--lg"},E.length>0&&l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,"Tags:"),E.map(({label:e,permalink:a})=>l.a.createElement(m.a,{key:a,className:"margin-horiz--sm",to:a},e))),d&&l.a.createElement("div",{className:"col text--right"},l.a.createElement(m.a,{to:r.permalink,"aria-label":"Read more about "+f},l.a.createElement("strong",null,"Read More"))))))}}}]);