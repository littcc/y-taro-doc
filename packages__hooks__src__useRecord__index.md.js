(self["webpackChunk"]=self["webpackChunk"]||[]).push([[5773],{2224:function(){},27832:function(e,t,n){"use strict";n.r(t);var l=n(13378),r=n(3911),a=n(67294),c=n(40175);t["default"]=e=>{var t=e.hidden,n=(0,r.Z)(e,["hidden"]);return a.createElement(c.Z,(0,l.Z)({className:t?"__dumi_taro-hook-hidden":""},n))}},73602:function(e,t,n){"use strict";n.d(t,{m:function(){return l.m}});var l=n(67624);n(93142)},26218:function(e,t,n){"use strict";n.r(t);var l=n(67294),r=n(96089),a=n(27832),c=n(65659),o=n(4187),u=l.memo((e=>{var t=e.demos,n=t["pages-useaudio"].component;return l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"userecord"},l.createElement(r.AnchorLink,{to:"#userecord","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useRecord"),l.createElement("p",null,"\u5f55\u97f3\u64cd\u4f5c\u7b49."),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(r.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u5f53\u9700\u8981\u8fdb\u884c\u5f55\u97f3\u64cd\u4f5c\u65f6"),l.createElement("h2",{id:"api"},l.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(c.Z,{code:"const [\n  recorderManager,\n  recorderManagerStatus,\n  {\n    onError,\n    onFrameRecorded,\n    onInterruptionBegin,\n    onInterruptionEnd,\n    onPause,\n    onResume,\n    onStart,\n    onStop,\n    startRecord,\n    stopRecord,\n    pauseRecord,\n    resumeRecord,\n  },\n] = useRecord();",lang:"jsx"}),l.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},l.createElement(r.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),l.createElement("p",null,"\u65e0"),l.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},l.createElement(r.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),l.createElement(o.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"recorderManager"),l.createElement("td",null,"\u5168\u5c40\u552f\u4e00\u5f55\u97f3\u7ba1\u7406\u5668"),l.createElement("td",null,l.createElement("code",null,"RecorderManager | undefined"))),l.createElement("tr",null,l.createElement("td",null,"recorderManagerStatus"),l.createElement("td",null,"\u5f53\u524d\u5f55\u97f3\u7ba1\u7406\u5668\u72b6\u6001"),l.createElement("td",null,l.createElement("code",null,"RecordStatus | undefined"))),l.createElement("tr",null,l.createElement("td",null,"onError"),l.createElement("td",null,"\u76d1\u542c\u5f55\u97f3\u9519\u8bef\u4e8b\u4ef6"),l.createElement("td",null,l.createElement("code",null,"(callback: RecorderManager.OnErrorCallback) => void"))),l.createElement("tr",null,l.createElement("td",null,"onFrameRecorded"),l.createElement("td",null,"\u76d1\u542c\u5df2\u5f55\u5236\u5b8c\u6307\u5b9a\u5e27\u5927\u5c0f\u7684\u6587\u4ef6\u4e8b\u4ef6\u3002"),l.createElement("td",null,l.createElement("code",null,"(callback: RecorderManager.OnFrameRecordedCallback) => void"))),l.createElement("tr",null,l.createElement("td",null,"onInterruptionBegin"),l.createElement("td",null,"\u76d1\u542c\u5f55\u97f3\u56e0\u4e3a\u53d7\u5230\u7cfb\u7edf\u5360\u7528\u800c\u88ab\u4e2d\u65ad\u5f00\u59cb\u4e8b\u4ef6"),l.createElement("td",null,l.createElement("code",null,"(callback: General.EventCallback) => void"))),l.createElement("tr",null,l.createElement("td",null,"onInterruptionEnd"),l.createElement("td",null,"\u76d1\u542c\u5f55\u97f3\u4e2d\u65ad\u7ed3\u675f\u4e8b\u4ef6"),l.createElement("td",null,l.createElement("code",null,"(callback: General.EventCallback) => void"))),l.createElement("tr",null,l.createElement("td",null,"onPause"),l.createElement("td",null,"\u76d1\u542c\u5f55\u97f3\u6682\u505c\u4e8b\u4ef6"),l.createElement("td",null,l.createElement("code",null,"(callback: General.EventCallback) => void"))),l.createElement("tr",null,l.createElement("td",null,"onResume"),l.createElement("td",null,"\u76d1\u542c\u5f55\u97f3\u7ee7\u7eed\u4e8b\u4ef6"),l.createElement("td",null,l.createElement("code",null,"(callback: General.EventCallback) => void"))),l.createElement("tr",null,l.createElement("td",null,"onStart"),l.createElement("td",null,"\u76d1\u542c\u5f55\u97f3\u5f00\u59cb\u4e8b\u4ef6"),l.createElement("td",null,l.createElement("code",null,"(callback: General.EventCallback) => void"))),l.createElement("tr",null,l.createElement("td",null,"onStop"),l.createElement("td",null,"\u76d1\u542c\u5f55\u97f3\u7ed3\u675f\u4e8b\u4ef6"),l.createElement("td",null,l.createElement("code",null,"(callback: RecorderManager.OnStopCallback) => void"))),l.createElement("tr",null,l.createElement("td",null,"startRecord"),l.createElement("td",null,"\u5f00\u59cb\u5f55\u97f3"),l.createElement("td",null,l.createElement("code",null,"(option: RecorderManager.StartOption) => Promise<General.CallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"stopRecord"),l.createElement("td",null,"\u7ed3\u675f\u5f55\u97f3"),l.createElement("td",null,l.createElement("code",null,"() => Promise<General.CallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"pauseRecord"),l.createElement("td",null,"\u6682\u505c\u5f55\u97f3"),l.createElement("td",null,l.createElement("code",null,"() => Promise<General.CallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"resumeRecord"),l.createElement("td",null,"\u7ee7\u7eed\u5f55\u97f3"),l.createElement("td",null,l.createElement("code",null,"() => Promise<General.CallbackResult>"))))),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(r.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(a.default,t["pages-useaudio"].previewerProps,l.createElement(n,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(r.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement(o.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"}),l.createElement("td",{align:"center"},"\u2714\ufe0f")))))))}));t["default"]=e=>{var t=l.useContext(r.context),n=t.demos;return l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(u,{demos:n})}},4187:function(e,t,n){"use strict";var l=n(67294),r=n(97397),a=n.n(r);n(2224);function c(e,t){return i(e)||m(e,t)||u(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(a.push(l.value),t&&a.length===t)break}catch(u){o=!0,r=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return a}}function i(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=(0,l.useRef)(),r=(0,l.useState)(!1),o=c(r,2),u=o[0],d=o[1],m=(0,l.useState)(!1),i=c(m,2),E=i[0],s=i[1];return(0,l.useEffect)((function(){var e=n.current,t=a()((function(){d(e.scrollLeft>0),s(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.createElement("div",{className:"__dumi-default-table"},l.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":E||void 0},l.createElement("table",null,t)))};t["Z"]=E}}]);