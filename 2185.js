(self["webpackChunk"]=self["webpackChunk"]||[]).push([[2185],{52185:function(t,e,n){"use strict";n.r(e),n.d(e,{taro_textarea_core:function(){return r}});var a=n(41674),o="taro-textarea-core{display:block;width:300px;height:150px}.taro-textarea{-webkit-appearance:none;cursor:auto;width:100%;height:100%;border:0;display:block;position:relative}.taro-textarea:focus{outline:none}";function u(t){return null!==t&&void 0!==t?t:""}var r=function(){function t(t){var e=this;(0,a.r)(this,t),this.onInput=(0,a.c)(this,"input",7),this.onFocus=(0,a.c)(this,"focus",7),this.onBlur=(0,a.c)(this,"blur",7),this.onChange=(0,a.c)(this,"change",7),this.disabled=!1,this.maxlength=140,this.autoFocus=!1,this.hanldeInput=function(t){t.stopPropagation(),e.onInput.emit({value:t.target.value,cursor:t.target.value.length})},this.handleFocus=function(t){e.onFocus.emit({value:t.target.value})},this.handleBlur=function(t){e.onBlur.emit({value:t.target.value})},this.handleChange=function(t){t.stopPropagation(),e.onChange.emit({value:t.target.value})}}return t.prototype.componentDidLoad=function(){var t=this;Object.defineProperty(this.el,"value",{get:function(){return t.textareaRef.value},set:function(e){return t.value=e},configurable:!0}),this.autoFocus&&this.textareaRef.focus()},t.prototype.render=function(){var t=this,e=this,n=e.value,o=e.placeholder,r=e.disabled,i=e.maxlength,l=e.autoFocus,s=e.name,h=e.hanldeInput,c=e.handleFocus,p=e.handleBlur,f=e.handleChange;return(0,a.h)("textarea",{ref:function(e){e&&(t.textareaRef=e)},class:"taro-textarea",value:u(n),placeholder:o,name:s,disabled:r,maxlength:i,autofocus:l,onInput:h,onFocus:c,onBlur:p,onChange:f})},Object.defineProperty(t.prototype,"el",{get:function(){return(0,a.g)(this)},enumerable:!1,configurable:!0}),t}();r.style=o}}]);