/*! For license information please see 20.a46ea545.chunk.js.LICENSE.txt */
(this.webpackJsonpexplaincodeapp=this.webpackJsonpexplaincodeapp||[]).push([[20],{110:function(e,t,n){"use strict";var r=n(3),o=n(8),i=n(58),a=n(4),u=n(0),c=n.n(u),s=n(7),f=n.n(s),l=n(55),p=n.n(l),d=n(56),m={children:f.a.node,inline:f.a.bool,tag:d.tagPropType,innerRef:f.a.oneOfType([f.a.object,f.a.func,f.a.string]),className:f.a.string,cssModule:f.a.object},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(i.a)(n)),n.submit=n.submit.bind(Object(i.a)(n)),n}Object(a.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,i=e.inline,a=e.tag,u=e.innerRef,s=Object(o.a)(e,["className","cssModule","inline","tag","innerRef"]),f=Object(d.mapToCssModules)(p()(t,!!i&&"form-inline"),n);return c.a.createElement(a,Object(r.a)({},s,{ref:u,className:f}))},t}(u.Component);y.propTypes=m,y.defaultProps={tag:"form"},t.a=y},55:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},56:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return a})),n.d(t,"setScrollbarWidth",(function(){return u})),n.d(t,"isBodyOverflowing",(function(){return c})),n.d(t,"getOriginalBodyPadding",(function(){return s})),n.d(t,"conditionallyUpdateScrollbar",(function(){return f})),n.d(t,"setGlobalCssModule",(function(){return l})),n.d(t,"mapToCssModules",(function(){return p})),n.d(t,"omit",(function(){return d})),n.d(t,"pick",(function(){return m})),n.d(t,"warnOnce",(function(){return b})),n.d(t,"deprecated",(function(){return g})),n.d(t,"DOMElement",(function(){return h})),n.d(t,"targetPropType",(function(){return x})),n.d(t,"tagPropType",(function(){return O})),n.d(t,"TransitionTimeouts",(function(){return j})),n.d(t,"TransitionPropTypeKeys",(function(){return T})),n.d(t,"TransitionStatuses",(function(){return w})),n.d(t,"keyCodes",(function(){return E})),n.d(t,"PopperPlacements",(function(){return P})),n.d(t,"canUseDOM",(function(){return k})),n.d(t,"isReactRefObj",(function(){return M})),n.d(t,"toNumber",(function(){return S})),n.d(t,"isObject",(function(){return A})),n.d(t,"isFunction",(function(){return R})),n.d(t,"findDOMElements",(function(){return C})),n.d(t,"isArrayOrNodeList",(function(){return W})),n.d(t,"getTarget",(function(){return _})),n.d(t,"defaultToggleEvents",(function(){return I})),n.d(t,"addMultipleEventListeners",(function(){return z})),n.d(t,"focusableElements",(function(){return D}));var r,o=n(7),i=n.n(o);function a(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function u(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function s(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function f(){var e=a(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;c()&&u(n+e)}function l(e){r=e}function p(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function d(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function m(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,i={};o>0;)i[n=r[o-=1]]=e[n];return i}var y={};function b(e){y[e]||("undefined"!==typeof console&&console.error(e),y[e]=!0)}function g(e,t){return function(n,r,o){null!==n[r]&&"undefined"!==typeof n[r]&&b('"'+r+'" property of "'+o+'" has been deprecated.\n'+t);for(var i=arguments.length,a=new Array(i>3?i-3:0),u=3;u<i;u++)a[u-3]=arguments[u];return e.apply(void 0,[n,r,o].concat(a))}}var v="object"===typeof window&&window.Element||function(){};function h(e,t,n){if(!(e[t]instanceof v))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var x=i.a.oneOfType([i.a.string,i.a.func,h,i.a.shape({current:i.a.any})]),O=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),j={Fade:150,Collapse:350,Modal:300,Carousel:600},T=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],w={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},E={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},P=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],k=!("undefined"===typeof window||!window.document||!window.document.createElement);function M(e){return!(!e||"object"!==typeof e)&&"current"in e}function N(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function S(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===N(e))return NaN;if(A(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=A(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(e);return r||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function A(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function R(e){if(!A(e))return!1;var t=N(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function C(e){if(M(e))return e.current;if(R(e))return e();if("string"===typeof e&&k){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function W(e){return null!==e&&(Array.isArray(e)||k&&"number"===typeof e.length)}function _(e,t){var n=C(e);return t?W(n)?n:null===n?[]:[n]:W(n)?n[0]:n}var I=["touchstart","click"];function z(e,t,n,r){var o=e;W(o)||(o=[o]);var i=n;if("string"===typeof i&&(i=i.split(/\s+/)),!W(o)||"function"!==typeof t||!Array.isArray(i))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(i,(function(e){Array.prototype.forEach.call(o,(function(n){n.addEventListener(e,t,r)}))})),function(){Array.prototype.forEach.call(i,(function(e){Array.prototype.forEach.call(o,(function(n){n.removeEventListener(e,t,r)}))}))}}var D=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},58:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},75:function(e,t,n){"use strict";var r=n(3),o=n(8),i=n(0),a=n.n(i),u=n(7),c=n.n(u),s=n(55),f=n.n(s),l=n(56),p={tag:l.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},d=function(e){var t=e.className,n=e.cssModule,i=e.color,u=e.body,c=e.inverse,s=e.outline,p=e.tag,d=e.innerRef,m=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),y=Object(l.mapToCssModules)(f()(t,"card",!!c&&"text-white",!!u&&"card-body",!!i&&(s?"border":"bg")+"-"+i),n);return a.a.createElement(p,Object(r.a)({},m,{className:y,ref:d}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},79:function(e,t,n){"use strict";var r=n(3),o=n(8),i=n(0),a=n.n(i),u=n(7),c=n.n(u),s=n(55),f=n.n(s),l=n(56),p={tag:l.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},d=function(e){var t=e.className,n=e.cssModule,i=e.innerRef,u=e.tag,c=Object(o.a)(e,["className","cssModule","innerRef","tag"]),s=Object(l.mapToCssModules)(f()(t,"card-body"),n);return a.a.createElement(u,Object(r.a)({},c,{className:s,ref:i}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},91:function(e,t,n){"use strict";var r=n(3),o=n(8),i=n(0),a=n.n(i),u=n(7),c=n.n(u),s=n(55),f=n.n(s),l=n(56),p={tag:l.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},d=function(e){var t=e.className,n=e.cssModule,i=e.fluid,u=e.tag,c=Object(o.a)(e,["className","cssModule","fluid","tag"]),s="container";!0===i?s="container-fluid":i&&(s="container-"+i);var p=Object(l.mapToCssModules)(f()(t,s),n);return a.a.createElement(u,Object(r.a)({},c,{className:p}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},92:function(e,t,n){"use strict";var r=n(3),o=n(8),i=n(0),a=n.n(i),u=n(7),c=n.n(u),s=n(55),f=n.n(s),l=n(56),p=c.a.oneOfType([c.a.number,c.a.string]),d={tag:l.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},m={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e){var t=e.className,n=e.cssModule,i=e.noGutters,u=e.tag,c=e.form,s=e.widths,p=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),d=[];s.forEach((function(t,n){var r=e[t];if(delete p[t],r){var o=!n;d.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var m=Object(l.mapToCssModules)(f()(t,i?"no-gutters":null,c?"form-row":"row",d),n);return a.a.createElement(u,Object(r.a)({},p,{className:m}))};y.propTypes=d,y.defaultProps=m,t.a=y},93:function(e,t,n){"use strict";var r=n(3),o=n(8),i=n(0),a=n.n(i),u=n(7),c=n.n(u),s=n(55),f=n.n(s),l=n(56),p=c.a.oneOfType([c.a.number,c.a.string]),d=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:p,offset:p})]),m={tag:l.tagPropType,xs:d,sm:d,md:d,lg:d,xl:d,className:c.a.string,cssModule:c.a.object,widths:c.a.array},y={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,i=e.widths,u=e.tag,c=Object(o.a)(e,["className","cssModule","widths","tag"]),s=[];i.forEach((function(t,r){var o=e[t];if(delete c[t],o||""===o){var i=!r;if(Object(l.isObject)(o)){var a,u=i?"-":"-"+t+"-",p=b(i,t,o.size);s.push(Object(l.mapToCssModules)(f()(((a={})[p]=o.size||""===o.size,a["order"+u+o.order]=o.order||0===o.order,a["offset"+u+o.offset]=o.offset||0===o.offset,a)),n))}else{var d=b(i,t,o);s.push(d)}}})),s.length||s.push("col");var p=Object(l.mapToCssModules)(f()(t,s),n);return a.a.createElement(u,Object(r.a)({},c,{className:p}))};g.propTypes=m,g.defaultProps=y,t.a=g},932:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=n(0)},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";var r=n(3);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="object"===("undefined"==typeof window?"undefined":u(window))&&"object"===("undefined"==typeof document?"undefined":u(document))&&9===document.nodeType;var s="",f="",l="";if(c){var p={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},d=document.createElement("p").style;for(var m in p)if(m+"Transform"in d){s=m,f=p[m];break}"Webkit"===s&&"msHyphens"in d&&(s="ms",f=p.ms),"Webkit"===s&&"-apple-trailing-word"in d&&(l="apple")}var y=s,b=f,g=l;var v={noPrefill:["appearance"],supportedProperty:function(e){return"appearance"===e&&("ms"===y?"-webkit-"+e:b+e)}},h=/[-\s]+(.)?/g;function x(e,t){return t?t.toUpperCase():""}function O(e){return e.replace(h,x)}function j(e){return O("-"+e)}var T,w={supportedProperty:function(e,t){return!!/^break-/.test(e)&&("Webkit"===y?"WebkitColumn"+j(e)in t&&b+"column-"+e:"Moz"===y&&"page"+j(e)in t&&"page-"+e)}},E={noPrefill:["text-decoration-skip-ink"],supportedProperty:function(e){return"text-decoration-skip-ink"===e&&("apple"===g?""+b+e:"Webkit"===y||"Moz"===y?e:b+e)}},P={noPrefill:["color-adjust"],supportedProperty:function(e){return"color-adjust"===e&&("Webkit"===y?b+"print-"+e:e)}},k={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},M=Object.keys(k),N=function(e){return b+e},S={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},A=[v,{noPrefill:["transform"],supportedProperty:function(e,t,n){return"transform"===e&&(n.transform?e:b+e)}},{noPrefill:["transition"],supportedProperty:function(e,t,n){return"transition"===e&&(n.transition?e:b+e)}},{noPrefill:["mask"],supportedProperty:function(e,t){if(!/^mask/.test(e))return!1;if("Webkit"===y){if(O("mask-image")in t)return e;if(y+j("mask-image")in t)return b+e}return e}},{noPrefill:["writing-mode"],supportedProperty:function(e){return"writing-mode"===e&&("Webkit"===y||"ms"===y?b+e:e)}},P,E,w,{supportedProperty:function(e,t){if(!/^(border|margin|padding)-inline/.test(e))return!1;if("Moz"===y)return e;var n=e.replace("-inline","");return y+j(n)in t&&b+n}},{supportedProperty:function(e,t){return O(e)in t&&e}},{supportedProperty:function(e,t){var n=j(e);return y+n in t?b+e:"Webkit"!==y&&"Webkit"+n in t&&e}},{supportedProperty:function(e){return"scroll-snap"===e.substring(0,11)&&("ms"===y?""+b+e:e)}},{supportedProperty:function(e){return"overscroll-behavior"===e&&("ms"===y?b+"scroll-chaining":e)}},{supportedProperty:function(e,t){var n=S[e];return!!n&&y+j(n)in t&&b+n}},{supportedProperty:function(e,t,n){var r=n.multiple;if(M.indexOf(e)>-1){var o=k[e];if(!Array.isArray(o))return y+j(o)in t&&b+o;if(!r)return!1;for(var i=0;i<o.length;i++)if(!(y+j(o[0])in t))return!1;return o.map(N)}return!1}}],R=A.filter((function(e){return e.supportedProperty})).map((function(e){return e.supportedProperty})),C=A.filter((function(e){return e.noPrefill})).reduce((function(e,t){return e.push.apply(e,function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t.noPrefill)),e}),[]),W={};if(c){T=document.createElement("p");var _=window.getComputedStyle(document.documentElement,"");for(var I in _)isNaN(I)||(W[_[I]]=_[I]);C.forEach((function(e){return delete W[e]}))}function z(e,t){if(void 0===t&&(t={}),!T)return e;if(null!=W[e])return W[e];"transition"!==e&&"transform"!==e||(t[e]=e in T.style);for(var n=0;n<R.length&&(W[e]=R[n](e,T.style,t),!W[e]);n++);try{T.style[e]=""}catch(e){return!1}return W[e]}c&&document.createElement("p");var D=function(e){var t=e.imagesCount,n=e.duration,r=e.transition,o=t*(n+r),i=Math.round(r/o*100),a=Math.round((n+r)/o*100),u=Math.round(1.1*a),c=z("backface-visibility"),s=z("animation"),f=function(e){return"-"===e[1]||"ms"===y?e:"@"+b+"keyframes"+e.substr(10)}("@keyframes"),l="",p="";return s&&c&&f&&(l="".concat(c,": hidden;\n        ").concat(s,": imageAnimation ").concat(o,"s linear infinite -0.5s;"),p="".concat(f," imageAnimation {\n          0% {\n            opacity: 0;\n            animation-timing-function: ease-in;\n          }\n          ").concat(i,"% {\n            opacity: 1;\n            animation-timing-function: ease-out;\n          }\n          ").concat(a,"% {\n            opacity: 1;\n          }\n          ").concat(u,"% {\n            opacity: 0\n          }\n          100% {\n            opacity: 0\n          }\n        }")),"#ReactBackgroundSlider > figure {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        color: transparent;\n        background-size: cover;\n        background-position: center center;\n        background-repeat: no-repeat;\n        opacity: 0;\n        z-index: -1000;\n        margin: 0;\n        ".concat(l,"\n      }\n      ").concat(p,"\n    ")},$="ReactBackgroundSlider";function G(e){var t=e.images,n=e.duration,r=e.transition;return o.a.useEffect((function(){!function(e,t){var n=document.getElementsByTagName("head")[0],r=document.createElement("style");r.setAttribute("type","text/css"),r.setAttribute("data-meta",t),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)),n.appendChild(r)}(D({imagesCount:t.length,duration:n,transition:r}),$)})),o.a.createElement("div",{id:$},t.map((function(e,t){return o.a.createElement("figure",{key:t,style:{backgroundImage:"url(".concat(e,")"),animationDelay:"".concat((n+r)*t,"s")}})})))}G.defaultProps={duration:10,transition:2},G.propTypes={images:a.a.array.isRequired,duration:a.a.number,transition:a.a.number};var L=G;t.default=L}])}}]);
//# sourceMappingURL=20.a46ea545.chunk.js.map