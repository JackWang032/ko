"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83],{4852:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(9231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},318:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(4197),i=n(9567),o=(n(9231),n(4852)),a=["components"],l={sidebar_position:6,title:"ko-lint-config"},s=void 0,p={unversionedId:"cli/ko-lint-config",id:"version-5.x/cli/ko-lint-config",title:"ko-lint-config",description:"ko-lint-config saves time in three ways for you:",source:"@site/versioned_docs/version-5.x/cli/ko-lint-config.md",sourceDirName:"cli",slug:"/cli/ko-lint-config",permalink:"/ko/docs/5.x/cli/ko-lint-config",editUrl:"https://github.com/DTStack/ko/website/versioned_docs/version-5.x/cli/ko-lint-config.md",tags:[],version:"5.x",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"ko-lint-config"},sidebar:"tutorialSidebar",previous:{title:"ko stylelint",permalink:"/ko/docs/5.x/cli/ko-stylelint"},next:{title:"FAQ",permalink:"/ko/docs/5.x/FAQ"}},c={},u=[{value:"Detailed rules",id:"detailed-rules",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"How do I disable a eslint rule?",id:"how-do-i-disable-a-eslint-rule",level:2},{value:"Looking for something easier than this?",id:"looking-for-something-easier-than-this",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ko-lint-config")," saves time in three ways for you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"No configuration")," - The easier way to enforce code quality in your\nproject. No configuration rules. It just works."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Automatically format code")," - Just run ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm lint-fix")," and say goodbye to\nmessy or inconsistent code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Catch style issues & programmer errors early")," - Reduce manual review in the code review process, and leave simple things to tools to save time.")),(0,o.kt)("p",null,"No hesitation. No more maintenance ",(0,o.kt)("inlineCode",{parentName:"p"},".eslintrc"),". Give it a try right now!"),(0,o.kt)("h2",{id:"detailed-rules"},"Detailed rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"four spaces are required")," \u2013 indent"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"single quotation marks are required for string")," \u2013 except where escape is need"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"require keyword followed by space")," - ",(0,o.kt)("inlineCode",{parentName:"li"}," if (condition) {...}")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"requires no spaces after the function name")," - ",(0,o.kt)("inlineCode",{parentName:"li"}," function name (arg) {...}")," except anonymous functions and async ",(0,o.kt)("inlineCode",{parentName:"li"}," function (arg) {...} `` async () { ... }")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"semicolons are not mandatory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"not mandatory = = =")," - the field type returned by the backend cannot be guaranteed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"do not force ternary operators to wrap")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"allow but do not require trailing commas")," - when the last element or attribute is on a different line from the end or attribute"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"function content is allowed to be empty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"allow this alias")," - alias optional ",(0,o.kt)("inlineCode",{parentName:"li"},"self")," ",(0,o.kt)("inlineCode",{parentName:"li"},"_this")," `that', cannot be deconstructed from this"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"no debugger required")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"no console is recommended"))),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add ko-lint-config -D\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"\u2003","\u2003","How to get Code Style Guide: ",(0,o.kt)("a",{href:"https://dtstack.yuque.com/rd-center/sm6war/eeyxxe",target:"_black"},"\u5982\u4f55\u5f15\u5165 Code Style Guide")),(0,o.kt)("p",null,"1\u3001Then, add this to your ",(0,o.kt)("inlineCode",{parentName:"p"},".eslintrc.js"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},".prettierrc.js"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},".stylelintrc.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  extends: [require.resolve('ko-lint-config')],\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const prettier = require('ko-lint-config/.prettierrc')\n\nmodule.exports = {\n  ...prettier,\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  extends: [require.resolve('ko-lint-config/.stylelintrc')],\n}\n")),(0,o.kt)("p",null,"You should not override settings. Because this is a Code Style Guide for group."),(0,o.kt)("p",null,"2\u3001Add script to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "lint": "npx eslint \'./src/**/*.ts\' \'./src/**/*.tsx\'",\n  "lint-fix": "npx eslint \'./src/**/*.ts\' \'./src/**/*.tsx\' --fix",\n  "lint-css": "npx stylelint \'./src/**/*.scss\' \'./src/**/*.css\'",\n  "lint-css-fix": "npx stylelint \'./src/**/*.scss\' \'./src/**/*.css\' --fix"\n},\n')),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm lint-fix")," to correct most code style problems."),(0,o.kt)("h2",{id:"how-do-i-disable-a-eslint-rule"},"How do I disable a eslint rule?"),(0,o.kt)("p",null,"In rare cases, you'll need to break a rule and hide the error generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"Code Style Guide"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ko-lint-config")," uses ",(0,o.kt)("a",{parentName:"p",href:"http://eslint.org/"},"ESLint")," under-the-hood and\nyou can hide errors as you normally would if you used ESLint directly. stylelint is same to eslint."),(0,o.kt)("p",null,"Disable ",(0,o.kt)("strong",{parentName:"p"},"all rules")," on a specific line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"file = 'I know what I am doing' // eslint-disable-line\n")),(0,o.kt)("p",null,"Or, disable ",(0,o.kt)("strong",{parentName:"p"},"only")," the ",(0,o.kt)("inlineCode",{parentName:"p"},'"no-use-before-define"')," rule:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"file = 'I know what I am doing' // eslint-disable-line no-use-before-define\n")),(0,o.kt)("p",null,"Or, disable the ",(0,o.kt)("inlineCode",{parentName:"p"},'"no-use-before-define"')," rule for ",(0,o.kt)("strong",{parentName:"p"},"multiple lines"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable no-use-before-define */\nconsole.log('offending code goes here...')\nconsole.log('offending code goes here...')\nconsole.log('offending code goes here...')\n/* eslint-enable no-use-before-define */\n")),(0,o.kt)("h3",{id:"looking-for-something-easier-than-this"},"Looking for something easier than this?"),(0,o.kt)("p",null,"You can add to your ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm lint")," script and install eslint plugin for vscode."))}m.isMDXComponent=!0}}]);