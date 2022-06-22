"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[957],{4852:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(9231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3399:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(4197),i=n(9567),o=(n(9231),n(4852)),a=["components"],l={sidebar_position:5,title:"ko stylelint"},s=void 0,p={unversionedId:"cli/ko-stylelint",id:"cli/ko-stylelint",title:"ko stylelint",description:"ko stylelint has been moved into package ko-lints, so if you want use this feature, please run pnpm add ko-lints -D in your terminal",source:"@site/docs/cli/ko-stylelint.md",sourceDirName:"cli",slug:"/cli/ko-stylelint",permalink:"/ko/docs/cli/ko-stylelint",editUrl:"https://github.com/DTStack/ko/website/docs/cli/ko-stylelint.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"ko stylelint"},sidebar:"tutorialSidebar",previous:{title:"ko prettier",permalink:"/ko/docs/cli/ko-prettier"},next:{title:"FAQ",permalink:"/ko/docs/FAQ"}},c={},u=[{value:"How to Use",id:"how-to-use",level:2},{value:"Optional arguments:",id:"optional-arguments",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"ko stylelint")," has been moved into package ",(0,o.kt)("inlineCode",{parentName:"p"},"ko-lints"),", so if you want use this feature, please run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm add ko-lints -D")," in your terminal"))),(0,o.kt)("p",null,"Alias ",(0,o.kt)("inlineCode",{parentName:"p"},"ko sl")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please note that ",(0,o.kt)("inlineCode",{parentName:"strong"},"ko stylelint")," is experimental")),(0,o.kt)("p",null,"use ",(0,o.kt)("strong",{parentName:"p"},"stylelint")," to format your codes, we collate an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DTStack/ko/blob/master/packages/ko-config/stylelint.js"},"stylelint configuration")," and use it as default stylelint configuration, you can override it via cli arguments. "),(0,o.kt)("h2",{id:"how-to-use"},"How to Use"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"npx")," to run ",(0,o.kt)("inlineCode",{parentName:"p"},"ko stylelint")," on the command like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Run on files:\nnpx stylelint file1.js\n# Run on multiple files via glob syntax\nnpx ko stylelint "src/**"\n')),(0,o.kt)("h2",{id:"optional-arguments"},"Optional arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-f, --fix"),":  Fix problems automatically"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-c, --config <path>"),": overriding default eslint config path, and use this configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--ignore-path <ignorePath>"),": Specify path of ignore file")))}d.isMDXComponent=!0}}]);