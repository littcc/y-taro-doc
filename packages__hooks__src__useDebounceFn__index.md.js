(self["webpackChunk"]=self["webpackChunk"]||[]).push([[9951],{63465:function(){},2224:function(){},27832:function(e,t,n){"use strict";n.r(t);var l=n(13378),r=n(3911),a=n(67294),c=n(40175);t["default"]=e=>{var t=e.hidden,n=(0,r.Z)(e,["hidden"]);return a.createElement(c.Z,(0,l.Z)({className:t?"__dumi_taro-hook-hidden":""},n))}},73602:function(e,t,n){"use strict";n.d(t,{m:function(){return l.m}});var l=n(67624);n(93142)},9601:function(e,t,n){"use strict";n.r(t);var l=n(67294),r=n(96089),a=n(27832),c=n(35713),u=n(65659),o=n(4187),m=l.memo((e=>{var t=e.demos,n=t["pages-usedebouncefn"].component;return l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("p",null,l.createElement(c.Z,null,"\u6ce8\u610f: \u8be5 Hook \u662f\u6539\u5199\u81ea",l.createElement(r.Link,{to:"https://ahooks.js.org/zh-CN/hooks/use-debounce-fn",target:"__blank"},"ahook useDebounceFn"))),l.createElement("h1",{id:"usedebouncefn"},l.createElement(r.AnchorLink,{to:"#usedebouncefn","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useDebounceFn"),l.createElement("p",null,"\u7528\u6765\u5904\u7406\u9632\u6296\u51fd\u6570\u7684 Hook\u3002"),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(r.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u5f53\u9700\u5904\u7406\u9632\u6296\u51fd\u6570\u3002"),l.createElement("h2",{id:"api"},l.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(u.Z,{code:"const {\n  run,\n  cancel,\n  flush\n} = useDebounceFn(\n  fn: (...args: any[]) => any,\n  options?: Options\n);",lang:"jsx"}),l.createElement("h3",{id:"params"},l.createElement(r.AnchorLink,{to:"#params","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Params"),l.createElement(o.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u53c2\u6570"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"fn"),l.createElement("td",null,"\u9700\u8981\u9632\u6296\u6267\u884c\u7684\u51fd\u6570"),l.createElement("td",null,l.createElement("code",null,"(...args: any[]) => any")),l.createElement("td",null,"-")),l.createElement("tr",null,l.createElement("td",null,"options"),l.createElement("td",null,"\u914d\u7f6e\u9632\u6296\u7684\u884c\u4e3a"),l.createElement("td",null,l.createElement("code",null,"Options")),l.createElement("td",null,"-")))),l.createElement("h3",{id:"options"},l.createElement(r.AnchorLink,{to:"#options","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Options"),l.createElement(o.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u53c2\u6570"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"wait"),l.createElement("td",null,"\u7b49\u5f85\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2"),l.createElement("td",null,l.createElement("code",null,"number")),l.createElement("td",null,l.createElement("code",null,"1000"))),l.createElement("tr",null,l.createElement("td",null,"leading"),l.createElement("td",null,"\u662f\u5426\u5728\u5ef6\u8fdf\u5f00\u59cb\u524d\u8c03\u7528\u51fd\u6570"),l.createElement("td",null,l.createElement("code",null,"boolean")),l.createElement("td",null,l.createElement("code",null,"false"))),l.createElement("tr",null,l.createElement("td",null,"trailing"),l.createElement("td",null,"\u662f\u5426\u5728\u5ef6\u8fdf\u5f00\u59cb\u540e\u8c03\u7528\u51fd\u6570"),l.createElement("td",null,l.createElement("code",null,"boolean")),l.createElement("td",null,l.createElement("code",null,"true"))),l.createElement("tr",null,l.createElement("td",null,"maxWait"),l.createElement("td",null,"\u6700\u5927\u7b49\u5f85\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2"),l.createElement("td",null,l.createElement("code",null,"number")),l.createElement("td",null,"-")))),l.createElement("h3",{id:"result"},l.createElement(r.AnchorLink,{to:"#result","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Result"),l.createElement(o.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u53c2\u6570"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"run"),l.createElement("td",null,"\u89e6\u53d1\u6267\u884c fn\uff0c\u51fd\u6570\u53c2\u6570\u5c06\u4f1a\u4f20\u9012\u7ed9 fn"),l.createElement("td",null,l.createElement("code",null,"(...args: any[]) => any"))),l.createElement("tr",null,l.createElement("td",null,"cancel"),l.createElement("td",null,"\u53d6\u6d88\u5f53\u524d\u9632\u6296"),l.createElement("td",null,l.createElement("code",null,"() => void"))),l.createElement("tr",null,l.createElement("td",null,"flush"),l.createElement("td",null,"\u7acb\u5373\u8c03\u7528\u5f53\u524d\u9632\u6296\u51fd\u6570"),l.createElement("td",null,l.createElement("code",null,"() => void"))))),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(r.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(a.default,t["pages-usedebouncefn"].previewerProps,l.createElement(n,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(r.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement(o.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f")))))))}));t["default"]=e=>{var t=l.useContext(r.context),n=t.demos;return l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(m,{demos:n})}},35713:function(e,t,n){"use strict";var l=n(67294);n(63465);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}t["Z"]=function(e){return l.createElement("div",r({className:"__dumi-default-alert"},e))}},4187:function(e,t,n){"use strict";var l=n(67294),r=n(97397),a=n.n(r);n(2224);function c(e,t){return d(e)||i(e,t)||o(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function i(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(a.push(l.value),t&&a.length===t)break}catch(o){u=!0,r=o}finally{try{c||null==n["return"]||n["return"]()}finally{if(u)throw r}}return a}}function d(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=(0,l.useRef)(),r=(0,l.useState)(!1),u=c(r,2),o=u[0],m=u[1],i=(0,l.useState)(!1),d=c(i,2),E=d[0],s=d[1];return(0,l.useEffect)((function(){var e=n.current,t=a()((function(){m(e.scrollLeft>0),s(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.createElement("div",{className:"__dumi-default-table"},l.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":o||void 0,"data-right-folded":E||void 0},l.createElement("table",null,t)))};t["Z"]=E}}]);