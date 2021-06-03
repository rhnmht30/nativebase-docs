(window.webpackJsonp=window.webpackJsonp||[]).push([[1330],{1401:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return T})),t.d(a,"default",(function(){return c}));var b=t(3),s=t(7),n=(t(0),t(1583)),r={id:"tabs",title:"Tabs"},i={unversionedId:"tabs",id:"version-3.0.0-next.30/tabs",isDocsHomePage:!1,title:"Tabs",description:"Tabs are used to communicate a state that affects a system, feature or page.",source:"@site/versioned_docs/version-3.0.0-next.30/tabs.md",slug:"/tabs",permalink:"/3.0.0-next.30/tabs",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.30/tabs.md",version:"3.0.0-next.30",sidebar:"version-3.0.0-next.30/componentsSidebar",previous:{title:"Collapse",permalink:"/3.0.0-next.30/collapse"},next:{title:"Avatar",permalink:"/3.0.0-next.30/avatar"}},T=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Usage",id:"usage",children:[]},{value:"Composition",id:"composition",children:[]},{value:"Variant",id:"variant",children:[]},{value:"TabsAlignment",id:"tabsalignment",children:[]},{value:"Colors",id:"colors",children:[]},{value:"Sizes",id:"sizes",children:[]},{value:"FittedTabs",id:"fittedtabs",children:[]},{value:"TabBarOnly",id:"tabbaronly",children:[]}]},{value:"Props",id:"props",children:[{value:"Tabs",id:"tabs",children:[]}]}],o={toc:T};function c(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(n.b)("wrapper",Object(b.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Tabs are used to communicate a state that affects a system, feature or page."),Object(n.b)("h2",{id:"import"},"Import"),Object(n.b)("p",null,"NativeBase exports 5 modal-related components:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Tabs"),": Provides context and state for all components"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Tabs.Bar"),": Wrapper for the\xa0",Object(n.b)("inlineCode",{parentName:"li"},"Tab"),"\xa0components"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Tabs.Tab"),": element that serves as a label for one of the tab view and can be activated to display that panel."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Tabs.Views"),": Wrapper for the\xa0",Object(n.b)("inlineCode",{parentName:"li"},"Tabs.View"),"\xa0components"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Tabs.View"),": element that contains the content associated with a tab")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-jsx"}),"import { Tabs } from 'native-base';\n")),Object(n.b)("h2",{id:"examples"},"Examples"),Object(n.b)("h3",{id:"usage"},"Usage"),Object(n.b)("div",{className:"snack-player","data-snack-name":"Tab Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tabs%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CTabs%3E%0A%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%3C%2FTabs%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(n.b)("h3",{id:"composition"},"Composition"),Object(n.b)("div",{className:"snack-player","data-snack-name":"Tab Composition","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Box%2C%0A%20%20Heading%2C%0A%20%20Tabs%2C%0A%20%20Text%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20width%3D%22100%25%22%20p%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CHeading%3EThis%20is%20an%20example%20for%20Tabs%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CTabs%20my%3D%7B10%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CText%3ETo%20show%20how%20tabs%20behaves%20around%20other%20components.%3C%2FText%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(n.b)("h3",{id:"variant"},"Variant"),Object(n.b)("div",{className:"snack-player","data-snack-name":"Tab Variant","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20VStack%2C%20Tabs%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20width%3D%22100%25%22%20p%3D%7B3%7D%20space%3D%7B7%7D%3E%0A%20%20%20%20%20%20%3CTabs%20variant%3D%22line%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20variant%3D%22enclosed%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20variant%3D%22enclosed-colored%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20variant%3D%22soft-rounded%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20variant%3D%22solid-rounded%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(n.b)("h3",{id:"tabsalignment"},"TabsAlignment"),Object(n.b)("div",{className:"snack-player","data-snack-name":"Tab TabsAlignment","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20VStack%2C%20Tabs%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20width%3D%22100%25%22%20p%3D%7B3%7D%20space%3D%7B7%7D%3E%0A%20%20%20%20%20%20%3CTabs%20align%3D%22start%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20align%3D%22center%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20align%3D%22end%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(n.b)("h3",{id:"colors"},"Colors"),Object(n.b)("div",{className:"snack-player","data-snack-name":"Tab Colors","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20VStack%2C%20Tabs%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20width%3D%22100%25%22%20p%3D%7B3%7D%20space%3D%7B7%7D%3E%0A%20%20%20%20%20%20%3CTabs%20colorScheme%3D%22danger%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20colorScheme%3D%22warning%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20colorScheme%3D%22teal%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20colorScheme%3D%22orange%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20colorScheme%3D%22info%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(n.b)("h3",{id:"sizes"},"Sizes"),Object(n.b)("div",{className:"snack-player","data-snack-name":"Tab Sizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20VStack%2C%20Tabs%2C%20NativeBaseProvider%2C%20Center%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20width%3D%22100%25%22%20p%3D%7B3%7D%20space%3D%7B7%7D%3E%0A%20%20%20%20%20%20%7B%2F*%20Small%20Tabs%20*%2F%7D%0A%20%20%20%20%20%20%3CTabs%20size%3D%22sm%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%7B%2F*%20Medium%20Tabs%20(default)%20*%2F%7D%0A%20%20%20%20%20%20%3CTabs%20size%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%7B%2F*%20Large%20Tabs%20(default)%20*%2F%7D%0A%20%20%20%20%20%20%3CTabs%20size%3D%22lg%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(n.b)("h3",{id:"fittedtabs"},"FittedTabs"),Object(n.b)("div",{className:"snack-player","data-snack-name":"Tab FittedTabs","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Tabs%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20width%3D%22100%25%22%20p%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CTabs%20isFitted%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(n.b)("h3",{id:"tabbaronly"},"TabBarOnly"),Object(n.b)("div",{className:"snack-player","data-snack-name":"Tab TabBarOnly","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tabs%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CTabs%3E%0A%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Tab%3EFour%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%3C%2FTabs%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(n.b)("h2",{id:"props"},"Props"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Tabs")," implements ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",Object(b.a)({parentName:"strong"},{href:"/3.0.0-next.30/box"}),"Box")),", so all the Box Props can be passed to it."),Object(n.b)("h3",{id:"tabs"},"Tabs"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"align"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"center"),", ",Object(n.b)("inlineCode",{parentName:"td"},"end"),", ",Object(n.b)("inlineCode",{parentName:"td"},"start")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The alignments of the tab."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"start"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),'The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").'),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"defaultIndex"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The index of the open tab."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"index"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"If given, update the default open tab."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"0")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"size"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(n.b)("inlineCode",{parentName:"td"},"md"),", ",Object(n.b)("inlineCode",{parentName:"td"},"sm")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The size of the tab."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"md"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"isFitted"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The tabs will spread in the TabBar."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"onChange"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"function"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The callback invoked when tab is changed."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"variant"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"enclosed"),", ",Object(n.b)("inlineCode",{parentName:"td"},"enclosed-colored"),", ",Object(n.b)("inlineCode",{parentName:"td"},"line"),", ",Object(n.b)("inlineCode",{parentName:"td"},"soft-rounded"),", ",Object(n.b)("inlineCode",{parentName:"td"},"solid-box"),", ",Object(n.b)("inlineCode",{parentName:"td"},"solid-rounded")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The variant of the tabs style to use."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"line"))))),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Tabs.Bar"),", ",Object(n.b)("inlineCode",{parentName:"p"},"Tabs.Tab"),", ",Object(n.b)("inlineCode",{parentName:"p"},"Tabs.Views"),", ",Object(n.b)("inlineCode",{parentName:"p"},"Tabs.View")," all implement ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/3.0.0-next.30/box"}),Object(n.b)("inlineCode",{parentName:"a"},"Box")),", all the props of Box can be passed to it."))}c.isMDXComponent=!0},1583:function(e,a,t){"use strict";t.d(a,"a",(function(){return C})),t.d(a,"b",(function(){return d}));var b=t(0),s=t.n(b);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);a&&(b=b.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,b)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function T(e,a){if(null==e)return{};var t,b,s=function(e,a){if(null==e)return{};var t,b,s={},n=Object.keys(e);for(b=0;b<n.length;b++)t=n[b],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(b=0;b<n.length;b++)t=n[b],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=s.a.createContext({}),c=function(e){var a=s.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},C=function(e){var a=c(e.components);return s.a.createElement(o.Provider,{value:a},e.children)},E={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},l=s.a.forwardRef((function(e,a){var t=e.components,b=e.mdxType,n=e.originalType,r=e.parentName,o=T(e,["components","mdxType","originalType","parentName"]),C=c(t),l=b,d=C["".concat(r,".").concat(l)]||C[l]||E[l]||n;return t?s.a.createElement(d,i(i({ref:a},o),{},{components:t})):s.a.createElement(d,i({ref:a},o))}));function d(e,a){var t=arguments,b=a&&a.mdxType;if("string"==typeof e||b){var n=t.length,r=new Array(n);r[0]=l;var i={};for(var T in a)hasOwnProperty.call(a,T)&&(i[T]=a[T]);i.originalType=e,i.mdxType="string"==typeof e?e:b,r[1]=i;for(var o=2;o<n;o++)r[o]=t[o];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);