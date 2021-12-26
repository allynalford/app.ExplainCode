/*! For license information please see 85.d8a5ffc5.chunk.js.LICENSE.txt */
(this.webpackJsonpexplaincodeapp=this.webpackJsonpexplaincodeapp||[]).push([[85],{106:function(e,t,a){"use strict";var n=a(3),s=a(8),r=a(0),i=a.n(r),o=a(7),c=a.n(o),l=a(55),d=a.n(l),u=a(56),m={tag:u.tagPropType,listTag:u.tagPropType,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},b=function(e){var t=e.className,a=e.listClassName,r=e.cssModule,o=e.children,c=e.tag,l=e.listTag,m=e["aria-label"],b=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(u.mapToCssModules)(d()(t),r),f=Object(u.mapToCssModules)(d()("breadcrumb",a),r);return i.a.createElement(c,Object(n.a)({},b,{className:p,"aria-label":m}),i.a.createElement(l,{className:f},o))};b.propTypes=m,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=b},107:function(e,t,a){"use strict";var n=a(3),s=a(8),r=a(0),i=a.n(r),o=a(7),c=a.n(o),l=a(55),d=a.n(l),u=a(56),m={tag:u.tagPropType,active:c.a.bool,className:c.a.string,cssModule:c.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.active,o=e.tag,c=Object(s.a)(e,["className","cssModule","active","tag"]),l=Object(u.mapToCssModules)(d()(t,!!r&&"active","breadcrumb-item"),a);return i.a.createElement(o,Object(n.a)({},c,{className:l,"aria-current":r?"page":void 0}))};b.propTypes=m,b.defaultProps={tag:"li"},t.a=b},1437:function(e,t,a){"use strict";a.r(t);var n=a(12),s=a(13),r=a(15),i=a(14),o=a(0),c=a.n(o),l=a(91),d=a(92),u=a(93),m=a(75),b=a(79),p=a(173),f=a(174),j=a(175),g=a(9),h=a(95),y=a(554),x=a(511),O=a(512),v=a(555),N=a(556),w=a(557),T=a(558),E=a(1),M=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},s.state={pathItems:[{id:1,name:"Landrick",link:"/index"},{id:2,name:"Page",link:"#"},{id:3,name:"Blog",link:"#"},{id:4,name:"Blog List"}],blogs:[{id:1,image:x.a,title:"Design your apps in your own way",desc:"Due to its widespread use as filler text for layouts, non-readability",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"},{id:2,image:O.a,title:"Design your apps in your own way",desc:"Due to its widespread use as filler text for layouts, non-readability",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"},{id:3,image:v.a,title:"Design your apps in your own way",desc:"Due to its widespread use as filler text for layouts, non-readability",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"},{id:4,image:N.a,title:"Design your apps in your own way",desc:"Due to its widespread use as filler text for layouts, non-readability",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"},{id:5,image:w.a,title:"Design your apps in your own way",desc:"Due to its widespread use as filler text for layouts, non-readability",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"},{id:6,image:T.a,title:"Design your apps in your own way",desc:"Due to its widespread use as filler text for layouts, non-readability",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"},{id:7,image:y.a,title:"Design your apps in your own way",desc:"Due to its widespread use as filler text for layouts, non-readability",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"}]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(E.jsxs)(c.a.Fragment,{children:[Object(E.jsx)(h.a,{title:"Blog Listing",pathItems:this.state.pathItems}),Object(E.jsx)("div",{className:"position-relative",children:Object(E.jsx)("div",{className:"shape overflow-hidden text-white",children:Object(E.jsx)("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(E.jsx)("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})})})}),Object(E.jsx)("section",{className:"section",children:Object(E.jsx)(l.a,{children:Object(E.jsxs)(d.a,{children:[this.state.blogs.map((function(e,t){return t%2===0?Object(E.jsx)(u.a,{lg:6,xs:12,className:"mb-4 pb-2",children:Object(E.jsx)(m.a,{className:"blog rounded border-0 shadow overflow-hidden",children:Object(E.jsxs)(d.a,{className:"align-items-center g-0",children:[Object(E.jsxs)(u.a,{md:6,children:[Object(E.jsx)("img",{src:e.image,className:"img-fluid",alt:"Landrick"}),Object(E.jsx)("div",{className:"overlay bg-dark"}),Object(E.jsxs)("div",{className:"author",children:[Object(E.jsxs)("small",{className:"text-light user d-block",children:[Object(E.jsx)("i",{className:"uil uil-user"})," ",e.autor]}),Object(E.jsxs)("small",{className:"text-light date",children:[Object(E.jsx)("i",{className:"uil uil-calendar-alt"})," ",e.date]})]})]}),Object(E.jsx)(u.a,{md:6,children:Object(E.jsxs)(b.a,{className:"content",children:[Object(E.jsx)("h5",{children:Object(E.jsx)(g.b,{to:"#",className:"card-title title text-dark",children:e.title})}),Object(E.jsx)("p",{className:"text-muted mb-0",children:e.desc}),Object(E.jsxs)("div",{className:"post-meta d-flex justify-content-between mt-3",children:[Object(E.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(E.jsx)("li",{className:"list-inline-item me-2 mb-0",children:Object(E.jsxs)(g.b,{to:"#",className:"text-muted like",children:[Object(E.jsx)("i",{className:"uil uil-heart me-1"}),e.like]})}),Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsxs)(g.b,{to:"#",className:"text-muted comments",children:[Object(E.jsx)("i",{className:"uil uil-comment me-1"}),e.comment]})})]}),Object(E.jsxs)(g.b,{to:"page-blog-detail",className:"text-muted readmore",children:["Read More"," ",Object(E.jsx)("i",{className:"uil uil-angle-right-b align-middle"})]})]})]})})]})})},t):Object(E.jsx)(u.a,{lg:6,xs:12,className:"mb-4 pb-2",children:Object(E.jsx)(m.a,{className:"blog rounded border-0 shadow overflow-hidden",children:Object(E.jsxs)(d.a,{className:"align-items-center g-0",children:[Object(E.jsx)(u.a,{md:{size:6,order:1},xs:{order:2},children:Object(E.jsxs)(b.a,{className:"content",children:[Object(E.jsx)("h5",{children:Object(E.jsx)(g.b,{to:"#",className:"card-title title text-dark",children:e.title})}),Object(E.jsx)("p",{className:"text-muted mb-0",children:e.desc}),Object(E.jsxs)("div",{className:"post-meta d-flex justify-content-between mt-3",children:[Object(E.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(E.jsx)("li",{className:"list-inline-item me-2 mb-0",children:Object(E.jsxs)(g.b,{to:"#",className:"text-muted like",children:[Object(E.jsx)("i",{className:"mdi mdi-heart-outline me-1"}),e.like]})}),Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsxs)(g.b,{to:"#",className:"text-muted comments",children:[Object(E.jsx)("i",{className:"uil uil-comment me-1"}),e.comment]})})]}),Object(E.jsxs)(g.b,{to:"page-blog-detail",className:"text-muted readmore",children:["Read More"," ",Object(E.jsx)("i",{className:"uil uil-angle-right-b align-middle"})]})]})]})}),Object(E.jsxs)(u.a,{md:{size:6,order:2},xs:{order:1},children:[Object(E.jsx)("img",{src:e.image,className:"img-fluid",alt:"Landrick"}),Object(E.jsx)("div",{className:"overlay bg-dark"}),Object(E.jsxs)("div",{className:"author",children:[Object(E.jsxs)("small",{className:"text-light user d-block",children:[Object(E.jsx)("i",{className:"uil uil-user"})," ",e.autor]}),Object(E.jsxs)("small",{className:"text-light date",children:[Object(E.jsx)("i",{className:"uil uil-calendar-alt"})," ",e.date]})]})]})]})})},t)})),Object(E.jsx)(u.a,{xs:12,children:Object(E.jsxs)(p.a,{listClassName:"justify-content-center mb-0",children:[Object(E.jsx)(f.a,{children:Object(E.jsx)(j.a,{href:"#","aria-label":"Previous",children:"Prev"})}),Object(E.jsx)(f.a,{active:!0,children:Object(E.jsx)(j.a,{href:"#",children:"1"})}),Object(E.jsx)(f.a,{children:Object(E.jsx)(j.a,{href:"#",children:"2"})}),Object(E.jsx)(f.a,{children:Object(E.jsx)(j.a,{href:"#",children:"3"})}),Object(E.jsx)(f.a,{children:Object(E.jsx)(j.a,{href:"#","aria-label":"Next",children:"Next"})})]})})]})})})]})}}]),a}(o.Component);t.default=M},173:function(e,t,a){"use strict";var n=a(3),s=a(8),r=a(0),i=a.n(r),o=a(7),c=a.n(o),l=a(55),d=a.n(l),u=a(56),m={children:c.a.node,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,size:c.a.string,tag:u.tagPropType,listTag:u.tagPropType,"aria-label":c.a.string},b=function(e){var t,a=e.className,r=e.listClassName,o=e.cssModule,c=e.size,l=e.tag,m=e.listTag,b=e["aria-label"],p=Object(s.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),f=Object(u.mapToCssModules)(d()(a),o),j=Object(u.mapToCssModules)(d()(r,"pagination",((t={})["pagination-"+c]=!!c,t)),o);return i.a.createElement(l,{className:f,"aria-label":b},i.a.createElement(m,Object(n.a)({},p,{className:j})))};b.propTypes=m,b.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},t.a=b},174:function(e,t,a){"use strict";var n=a(3),s=a(8),r=a(0),i=a.n(r),o=a(7),c=a.n(o),l=a(55),d=a.n(l),u=a(56),m={active:c.a.bool,children:c.a.node,className:c.a.string,cssModule:c.a.object,disabled:c.a.bool,tag:u.tagPropType},b=function(e){var t=e.active,a=e.className,r=e.cssModule,o=e.disabled,c=e.tag,l=Object(s.a)(e,["active","className","cssModule","disabled","tag"]),m=Object(u.mapToCssModules)(d()(a,"page-item",{active:t,disabled:o}),r);return i.a.createElement(c,Object(n.a)({},l,{className:m}))};b.propTypes=m,b.defaultProps={tag:"li"},t.a=b},175:function(e,t,a){"use strict";var n=a(3),s=a(8),r=a(0),i=a.n(r),o=a(7),c=a.n(o),l=a(55),d=a.n(l),u=a(56),m={"aria-label":c.a.string,children:c.a.node,className:c.a.string,cssModule:c.a.object,next:c.a.bool,previous:c.a.bool,first:c.a.bool,last:c.a.bool,tag:u.tagPropType},b=function(e){var t,a=e.className,r=e.cssModule,o=e.next,c=e.previous,l=e.first,m=e.last,b=e.tag,p=Object(s.a)(e,["className","cssModule","next","previous","first","last","tag"]),f=Object(u.mapToCssModules)(d()(a,"page-link"),r);c?t="Previous":o?t="Next":l?t="First":m&&(t="Last");var j,g=e["aria-label"]||t;c?j="\u2039":o?j="\u203a":l?j="\xab":m&&(j="\xbb");var h=e.children;return h&&Array.isArray(h)&&0===h.length&&(h=null),p.href||"a"!==b||(b="button"),(c||o||l||m)&&(h=[i.a.createElement("span",{"aria-hidden":"true",key:"caret"},h||j),i.a.createElement("span",{className:"sr-only",key:"sr"},g)]),i.a.createElement(b,Object(n.a)({},p,{className:f,"aria-label":g}),h)};b.propTypes=m,b.defaultProps={tag:"a"},t.a=b},511:function(e,t,a){"use strict";t.a=a.p+"static/media/14.d80492dc.jpg"},512:function(e,t,a){"use strict";t.a=a.p+"static/media/15.143a6637.jpg"},55:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var i=s.apply(null,n);i&&e.push(i)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var o in n)a.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},554:function(e,t,a){"use strict";t.a=a.p+"static/media/13.5b5018ae.jpg"},555:function(e,t,a){"use strict";t.a=a.p+"static/media/16.0831adb4.jpg"},556:function(e,t,a){"use strict";t.a=a.p+"static/media/17.30406e31.jpg"},557:function(e,t,a){"use strict";t.a=a.p+"static/media/18.6575ea27.jpg"},558:function(e,t,a){"use strict";t.a=a.p+"static/media/19.654f2a91.jpg"},56:function(e,t,a){"use strict";a.r(t),a.d(t,"getScrollbarWidth",(function(){return i})),a.d(t,"setScrollbarWidth",(function(){return o})),a.d(t,"isBodyOverflowing",(function(){return c})),a.d(t,"getOriginalBodyPadding",(function(){return l})),a.d(t,"conditionallyUpdateScrollbar",(function(){return d})),a.d(t,"setGlobalCssModule",(function(){return u})),a.d(t,"mapToCssModules",(function(){return m})),a.d(t,"omit",(function(){return b})),a.d(t,"pick",(function(){return p})),a.d(t,"warnOnce",(function(){return j})),a.d(t,"deprecated",(function(){return g})),a.d(t,"DOMElement",(function(){return y})),a.d(t,"targetPropType",(function(){return x})),a.d(t,"tagPropType",(function(){return O})),a.d(t,"TransitionTimeouts",(function(){return v})),a.d(t,"TransitionPropTypeKeys",(function(){return N})),a.d(t,"TransitionStatuses",(function(){return w})),a.d(t,"keyCodes",(function(){return T})),a.d(t,"PopperPlacements",(function(){return E})),a.d(t,"canUseDOM",(function(){return M})),a.d(t,"isReactRefObj",(function(){return C})),a.d(t,"toNumber",(function(){return P})),a.d(t,"isObject",(function(){return A})),a.d(t,"isFunction",(function(){return D})),a.d(t,"findDOMElements",(function(){return L})),a.d(t,"isArrayOrNodeList",(function(){return I})),a.d(t,"getTarget",(function(){return R})),a.d(t,"defaultToggleEvents",(function(){return S})),a.d(t,"addMultipleEventListeners",(function(){return z})),a.d(t,"focusableElements",(function(){return B}));var n,s=a(7),r=a.n(s);function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function o(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function l(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function d(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;c()&&o(a+e)}function u(e){n=e}function m(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function b(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}function p(e,t){for(var a,n=Array.isArray(t)?t:[t],s=n.length,r={};s>0;)r[a=n[s-=1]]=e[a];return r}var f={};function j(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}function g(e,t){return function(a,n,s){null!==a[n]&&"undefined"!==typeof a[n]&&j('"'+n+'" property of "'+s+'" has been deprecated.\n'+t);for(var r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];return e.apply(void 0,[a,n,s].concat(i))}}var h="object"===typeof window&&window.Element||function(){};function y(e,t,a){if(!(e[t]instanceof h))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")}var x=r.a.oneOfType([r.a.string,r.a.func,y,r.a.shape({current:r.a.any})]),O=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]),v={Fade:150,Collapse:350,Modal:300,Carousel:600},N=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],w={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},T={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},E=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],M=!("undefined"===typeof window||!window.document||!window.document.createElement);function C(e){return!(!e||"object"!==typeof e)&&"current"in e}function k(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function P(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===k(e))return NaN;if(A(e)){var a="function"===typeof e.valueOf?e.valueOf():e;e=A(a)?""+a:a}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var n=/^0b[01]+$/i.test(e);return n||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),n?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function A(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function D(e){if(!A(e))return!1;var t=k(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function L(e){if(C(e))return e.current;if(D(e))return e();if("string"===typeof e&&M){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function I(e){return null!==e&&(Array.isArray(e)||M&&"number"===typeof e.length)}function R(e,t){var a=L(e);return t?I(a)?a:null===a?[]:[a]:I(a)?a[0]:a}var S=["touchstart","click"];function z(e,t,a,n){var s=e;I(s)||(s=[s]);var r=a;if("string"===typeof r&&(r=r.split(/\s+/)),!I(s)||"function"!==typeof t||!Array.isArray(r))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(s,(function(a){a.addEventListener(e,t,n)}))})),function(){Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(s,(function(a){a.removeEventListener(e,t,n)}))}))}}var B=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},75:function(e,t,a){"use strict";var n=a(3),s=a(8),r=a(0),i=a.n(r),o=a(7),c=a.n(o),l=a(55),d=a.n(l),u=a(56),m={tag:u.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},b=function(e){var t=e.className,a=e.cssModule,r=e.color,o=e.body,c=e.inverse,l=e.outline,m=e.tag,b=e.innerRef,p=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(u.mapToCssModules)(d()(t,"card",!!c&&"text-white",!!o&&"card-body",!!r&&(l?"border":"bg")+"-"+r),a);return i.a.createElement(m,Object(n.a)({},p,{className:f,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b},79:function(e,t,a){"use strict";var n=a(3),s=a(8),r=a(0),i=a.n(r),o=a(7),c=a.n(o),l=a(55),d=a.n(l),u=a(56),m={tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},b=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,o=e.tag,c=Object(s.a)(e,["className","cssModule","innerRef","tag"]),l=Object(u.mapToCssModules)(d()(t,"card-body"),a);return i.a.createElement(o,Object(n.a)({},c,{className:l,ref:r}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b},91:function(e,t,a){"use strict";var n=a(3),s=a(8),r=a(0),i=a.n(r),o=a(7),c=a.n(o),l=a(55),d=a.n(l),u=a(56),m={tag:u.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.fluid,o=e.tag,c=Object(s.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===r?l="container-fluid":r&&(l="container-"+r);var m=Object(u.mapToCssModules)(d()(t,l),a);return i.a.createElement(o,Object(n.a)({},c,{className:m}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b},92:function(e,t,a){"use strict";var n=a(3),s=a(8),r=a(0),i=a.n(r),o=a(7),c=a.n(o),l=a(55),d=a.n(l),u=a(56),m=c.a.oneOfType([c.a.number,c.a.string]),b={tag:u.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},p={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,o=e.tag,c=e.form,l=e.widths,m=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];l.forEach((function(t,a){var n=e[t];if(delete m[t],n){var s=!a;b.push(s?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var p=Object(u.mapToCssModules)(d()(t,r?"no-gutters":null,c?"form-row":"row",b),a);return i.a.createElement(o,Object(n.a)({},m,{className:p}))};f.propTypes=b,f.defaultProps=p,t.a=f},93:function(e,t,a){"use strict";var n=a(3),s=a(8),r=a(0),i=a.n(r),o=a(7),c=a.n(o),l=a(55),d=a.n(l),u=a(56),m=c.a.oneOfType([c.a.number,c.a.string]),b=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:m,offset:m})]),p={tag:u.tagPropType,xs:b,sm:b,md:b,lg:b,xl:b,className:c.a.string,cssModule:c.a.object,widths:c.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,r=e.widths,o=e.tag,c=Object(s.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(t,n){var s=e[t];if(delete c[t],s||""===s){var r=!n;if(Object(u.isObject)(s)){var i,o=r?"-":"-"+t+"-",m=j(r,t,s.size);l.push(Object(u.mapToCssModules)(d()(((i={})[m]=s.size||""===s.size,i["order"+o+s.order]=s.order||0===s.order,i["offset"+o+s.offset]=s.offset||0===s.offset,i)),a))}else{var b=j(r,t,s);l.push(b)}}})),l.length||l.push("col");var m=Object(u.mapToCssModules)(d()(t,l),a);return i.a.createElement(o,Object(n.a)({},c,{className:m}))};g.propTypes=p,g.defaultProps=f,t.a=g},95:function(e,t,a){"use strict";var n=a(12),s=a(13),r=a(15),i=a(14),o=a(0),c=a.n(o),l=a(9),d=a(91),u=a(92),m=a(93),b=a(106),p=a(107),f=a(1),j=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.pathItems.length;return Object(f.jsx)(c.a.Fragment,{children:Object(f.jsx)("section",{className:"bg-half bg-light d-table w-100",children:Object(f.jsx)(d.a,{children:Object(f.jsx)(u.a,{className:"justify-content-center",children:Object(f.jsx)(m.a,{lg:"12",className:"text-center",children:Object(f.jsxs)("div",{className:"page-next-level",children:[this.props.title?Object(f.jsxs)("h4",{className:"title",children:[" ",this.props.title]}):null,this.props.children?this.props.children:null,Object(f.jsx)("div",{className:"page-next",children:Object(f.jsx)("nav",{className:"d-inline-block",children:Object(f.jsx)(b.a,{"aria-label":"breadcrumb",listClassName:"bg-white rounded shadow mb-0",children:this.props.pathItems.map((function(t,a){return t.id!==e?Object(f.jsx)(p.a,{children:Object(f.jsx)(l.b,{to:t.link,className:"text-uppercase fw-bold text-dark me-1",children:t.name})},a):Object(f.jsx)(p.a,{active:!0,"aria-current":"page",children:t.name},a)}))})})})]})})})})})})}}]),a}(o.Component);t.a=j}}]);
//# sourceMappingURL=85.d8a5ffc5.chunk.js.map