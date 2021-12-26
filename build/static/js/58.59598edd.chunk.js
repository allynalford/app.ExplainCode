/*! For license information please see 58.59598edd.chunk.js.LICENSE.txt */
(this.webpackJsonpexplaincodeapp=this.webpackJsonpexplaincodeapp||[]).push([[58],{106:function(e,t,n){"use strict";var a=n(3),r=n(8),i=n(0),o=n.n(i),s=n(7),c=n.n(s),l=n(55),u=n.n(l),d=n(56),f={tag:d.tagPropType,listTag:d.tagPropType,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},p=function(e){var t=e.className,n=e.listClassName,i=e.cssModule,s=e.children,c=e.tag,l=e.listTag,f=e["aria-label"],p=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(d.mapToCssModules)(u()(t),i),g=Object(d.mapToCssModules)(u()("breadcrumb",n),i);return o.a.createElement(c,Object(a.a)({},p,{className:m,"aria-label":f}),o.a.createElement(l,{className:g},s))};p.propTypes=f,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=p},107:function(e,t,n){"use strict";var a=n(3),r=n(8),i=n(0),o=n.n(i),s=n(7),c=n.n(s),l=n(55),u=n.n(l),d=n(56),f={tag:d.tagPropType,active:c.a.bool,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,n=e.cssModule,i=e.active,s=e.tag,c=Object(r.a)(e,["className","cssModule","active","tag"]),l=Object(d.mapToCssModules)(u()(t,!!i&&"active","breadcrumb-item"),n);return o.a.createElement(s,Object(a.a)({},c,{className:l,"aria-current":i?"page":void 0}))};p.propTypes=f,p.defaultProps={tag:"li"},t.a=p},1442:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(13),i=n(21),o=n(15),s=n(14),c=n(0),l=n.n(c),u=n(91),d=n(92),f=n(93),p=n(75),m=n(79),g=n(9),b=n(645),h=n.n(b),y=n(95),j=n(285),v=n(277),O=n(278),x=n(286),N=n(462),w=n(456),T=n(463),C=n(474),k=n(492),E=n(516),M=n(662),P=n(572),A=n(1),D=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement,t=(window.pageYOffset||e.scrollTop)-(e.clientTop||0),n=document.getElementById("topnav");t>80&&n?n.classList.add("nav-sticky"):n&&n.classList.remove("nav-sticky")},r.state={pathItems:[{id:1,name:"Landrick",link:"/index"},{id:2,name:"Pages",link:"#"},{id:3,name:"Work",link:"#"},{id:4,name:"Classic"}],works:[{image:j.a,title:"Iphone mockup",subtitle:"Branding",category:"Branding"},{image:v.a,title:"Mockup Collection",subtitle:"Mockup",category:"Designing"},{image:O.a,title:"Abstract images",subtitle:"Abstract",category:"Photography"},{image:x.a,title:"Yellow bg with Books",subtitle:"Company V-card",category:"Development"},{image:N.a,title:"Company V-card",subtitle:"V-card",category:"Branding"},{image:w.a,title:"Mockup box with paints",subtitle:"Photography",category:"Branding"},{image:T.a,title:"Coffee cup",subtitle:"Cups",category:"Designing"},{image:C.a,title:"Pen and article",subtitle:"Article",category:"Development"},{image:k.a,title:"White mockup box",subtitle:"Color",category:"Photography"},{image:E.a,title:"Logo Vectors",subtitle:"Logos",category:"Photography"},{image:M.a,title:"Black and white T-shirt",subtitle:"Clothes",category:"Branding"},{image:P.a,title:"Yellow bg with cellphone",subtitle:"Cellphone",category:"Branding"}],displayCategory:"All"},r.setCategory.bind(Object(i.a)(r)),r}return Object(r.a)(n,[{key:"setCategory",value:function(e){this.setState({displayCategory:e})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){var e=this;return Object(A.jsxs)(l.a.Fragment,{children:[Object(A.jsx)(y.a,{title:"Work Classic",pathItems:this.state.pathItems}),Object(A.jsx)("div",{className:"position-relative",children:Object(A.jsx)("div",{className:"shape overflow-hidden text-white",children:Object(A.jsx)("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(A.jsx)("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})})})}),Object(A.jsx)("section",{className:"section",children:Object(A.jsxs)(u.a,{children:[Object(A.jsx)(d.a,{className:"justify-content-center",children:Object(A.jsx)("div",{className:"col-12 filters-group-wrap",children:Object(A.jsx)("div",{className:"filters-group",children:Object(A.jsxs)("ul",{className:"container-filter list-inline mb-0 filter-options text-center",id:"filter",children:[Object(A.jsx)("li",{onClick:function(){return e.setCategory("All")},className:"All"===this.state.displayCategory?"list-inline-item categories-name border text-dark rounded active":"list-inline-item categories-name border text-dark rounded",children:"All"})," ",Object(A.jsx)("li",{onClick:function(){return e.setCategory("Branding")},className:"Branding"===this.state.displayCategory?"list-inline-item categories-name border text-dark rounded active":"list-inline-item categories-name border text-dark rounded",children:"Branding"})," ",Object(A.jsx)("li",{onClick:function(){return e.setCategory("Designing")},className:"Designing"===this.state.displayCategory?"list-inline-item categories-name border text-dark rounded active":"list-inline-item categories-name border text-dark rounded",children:"Designing"})," ",Object(A.jsx)("li",{onClick:function(){return e.setCategory("Photography")},className:"Photography"===this.state.displayCategory?"list-inline-item categories-name border text-dark rounded active":"list-inline-item categories-name border text-dark rounded",children:"Photography"})," ",Object(A.jsx)("li",{onClick:function(){return e.setCategory("Development")},className:"Development"===this.state.displayCategory?"list-inline-item categories-name border text-dark rounded active":"list-inline-item categories-name border text-dark rounded",children:"Development"})]})})})}),Object(A.jsx)(d.a,{className:"projects-wrapper",children:this.state.works.filter((function(t){var n=t.category;return e.state.displayCategory===n||"All"===e.state.displayCategory})).map((function(e,t){var n=e.title,a=e.image,r=e.subtitle;return Object(A.jsx)(f.a,{lg:4,md:6,xs:12,className:"mt-4 pt-2",children:Object(A.jsx)(h.a,{delay:100,children:Object(A.jsx)(p.a,{className:"border-0 work-container work-classic",children:Object(A.jsxs)(m.a,{className:"p-0",children:[Object(A.jsx)(g.b,{to:"page-work-detail",children:Object(A.jsx)("img",{src:a,className:"img-fluid rounded work-image",alt:"Landrick"})}),Object(A.jsxs)("div",{className:"content pt-3",children:[Object(A.jsx)("h5",{className:"mb-0",children:Object(A.jsx)(g.b,{to:"page-work-detail",className:"text-dark title",children:n})}),Object(A.jsx)("h6",{className:"text-muted tag mb-0",children:r})]})]})})})},t)}))})]})})]})}}]),n}(c.Component);t.default=D},277:function(e,t,n){"use strict";t.a=n.p+"static/media/2.183f34cb.jpg"},278:function(e,t,n){"use strict";t.a=n.p+"static/media/3.1a057574.jpg"},285:function(e,t,n){"use strict";t.a=n.p+"static/media/1.812bb19e.jpg"},286:function(e,t,n){"use strict";t.a=n.p+"static/media/4.e0c71c30.jpg"},456:function(e,t,n){"use strict";t.a=n.p+"static/media/6.6775924a.jpg"},462:function(e,t,n){"use strict";t.a=n.p+"static/media/5.2461b67b.jpg"},463:function(e,t,n){"use strict";t.a=n.p+"static/media/7.340868a6.jpg"},474:function(e,t,n){"use strict";t.a=n.p+"static/media/8.9d3c67af.jpg"},492:function(e,t,n){"use strict";t.a=n.p+"static/media/9.4edb435e.jpg"},516:function(e,t,n){"use strict";t.a=n.p+"static/media/10.7629c7ed.jpg"},55:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var o=r.apply(null,a);o&&e.push(o)}}else if("object"===i)if(a.toString===Object.prototype.toString)for(var s in a)n.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},56:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return o})),n.d(t,"setScrollbarWidth",(function(){return s})),n.d(t,"isBodyOverflowing",(function(){return c})),n.d(t,"getOriginalBodyPadding",(function(){return l})),n.d(t,"conditionallyUpdateScrollbar",(function(){return u})),n.d(t,"setGlobalCssModule",(function(){return d})),n.d(t,"mapToCssModules",(function(){return f})),n.d(t,"omit",(function(){return p})),n.d(t,"pick",(function(){return m})),n.d(t,"warnOnce",(function(){return b})),n.d(t,"deprecated",(function(){return h})),n.d(t,"DOMElement",(function(){return j})),n.d(t,"targetPropType",(function(){return v})),n.d(t,"tagPropType",(function(){return O})),n.d(t,"TransitionTimeouts",(function(){return x})),n.d(t,"TransitionPropTypeKeys",(function(){return N})),n.d(t,"TransitionStatuses",(function(){return w})),n.d(t,"keyCodes",(function(){return T})),n.d(t,"PopperPlacements",(function(){return C})),n.d(t,"canUseDOM",(function(){return k})),n.d(t,"isReactRefObj",(function(){return E})),n.d(t,"toNumber",(function(){return P})),n.d(t,"isObject",(function(){return A})),n.d(t,"isFunction",(function(){return D})),n.d(t,"findDOMElements",(function(){return B})),n.d(t,"isArrayOrNodeList",(function(){return S})),n.d(t,"getTarget",(function(){return _})),n.d(t,"defaultToggleEvents",(function(){return I})),n.d(t,"addMultipleEventListeners",(function(){return L})),n.d(t,"focusableElements",(function(){return R}));var a,r=n(7),i=n.n(r);function o(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function s(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function l(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=o(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;c()&&s(n+e)}function d(e){a=e}function f(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function p(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function m(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,i={};r>0;)i[n=a[r-=1]]=e[n];return i}var g={};function b(e){g[e]||("undefined"!==typeof console&&console.error(e),g[e]=!0)}function h(e,t){return function(n,a,r){null!==n[a]&&"undefined"!==typeof n[a]&&b('"'+a+'" property of "'+r+'" has been deprecated.\n'+t);for(var i=arguments.length,o=new Array(i>3?i-3:0),s=3;s<i;s++)o[s-3]=arguments[s];return e.apply(void 0,[n,a,r].concat(o))}}var y="object"===typeof window&&window.Element||function(){};function j(e,t,n){if(!(e[t]instanceof y))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var v=i.a.oneOfType([i.a.string,i.a.func,j,i.a.shape({current:i.a.any})]),O=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),x={Fade:150,Collapse:350,Modal:300,Carousel:600},N=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],w={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},T={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},C=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],k=!("undefined"===typeof window||!window.document||!window.document.createElement);function E(e){return!(!e||"object"!==typeof e)&&"current"in e}function M(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function P(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===M(e))return NaN;if(A(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=A(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var a=/^0b[01]+$/i.test(e);return a||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),a?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function A(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function D(e){if(!A(e))return!1;var t=M(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function B(e){if(E(e))return e.current;if(D(e))return e();if("string"===typeof e&&k){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function S(e){return null!==e&&(Array.isArray(e)||k&&"number"===typeof e.length)}function _(e,t){var n=B(e);return t?S(n)?n:null===n?[]:[n]:S(n)?n[0]:n}var I=["touchstart","click"];function L(e,t,n,a){var r=e;S(r)||(r=[r]);var i=n;if("string"===typeof i&&(i=i.split(/\s+/)),!S(r)||"function"!==typeof t||!Array.isArray(i))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(i,(function(e){Array.prototype.forEach.call(r,(function(n){n.addEventListener(e,t,a)}))})),function(){Array.prototype.forEach.call(i,(function(e){Array.prototype.forEach.call(r,(function(n){n.removeEventListener(e,t,a)}))}))}}var R=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},572:function(e,t,n){"use strict";t.a=n.p+"static/media/12.6b500bce.jpg"},645:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(646);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},646:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(0));t.default=function(e){var t=o.useState(0),n=t[0],a=t[1],r=e.transitionDuration||400,i=e.delay||50,s=e.wrapperTag||"div",c=e.childTag||"div",l="undefined"===typeof e.visible||e.visible;return o.useEffect((function(){var t=o.default.Children.count(e.children);if(l||(t=0),t==n){var s=setTimeout((function(){e.onComplete&&e.onComplete()}),r);return function(){return clearTimeout(s)}}var c=t>n?1:-1,u=setTimeout((function(){a(n+c)}),i);return function(){return clearTimeout(u)}}),[o.default.Children.count(e.children),i,n,l,r]),o.default.createElement(s,{className:e.className},o.default.Children.map(e.children,(function(t,a){return o.default.createElement(c,{className:e.childClassName,style:{transition:"opacity "+r+"ms, transform "+r+"ms",transform:n>a?"none":"translateY(20px)",opacity:n>a?1:0}},t)})))}},662:function(e,t,n){"use strict";t.a=n.p+"static/media/11.ab814eb7.jpg"},75:function(e,t,n){"use strict";var a=n(3),r=n(8),i=n(0),o=n.n(i),s=n(7),c=n.n(s),l=n(55),u=n.n(l),d=n(56),f={tag:d.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var t=e.className,n=e.cssModule,i=e.color,s=e.body,c=e.inverse,l=e.outline,f=e.tag,p=e.innerRef,m=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(d.mapToCssModules)(u()(t,"card",!!c&&"text-white",!!s&&"card-body",!!i&&(l?"border":"bg")+"-"+i),n);return o.a.createElement(f,Object(a.a)({},m,{className:g,ref:p}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},79:function(e,t,n){"use strict";var a=n(3),r=n(8),i=n(0),o=n.n(i),s=n(7),c=n.n(s),l=n(55),u=n.n(l),d=n(56),f={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var t=e.className,n=e.cssModule,i=e.innerRef,s=e.tag,c=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.mapToCssModules)(u()(t,"card-body"),n);return o.a.createElement(s,Object(a.a)({},c,{className:l,ref:i}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},91:function(e,t,n){"use strict";var a=n(3),r=n(8),i=n(0),o=n.n(i),s=n(7),c=n.n(s),l=n(55),u=n.n(l),d=n(56),f={tag:d.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,n=e.cssModule,i=e.fluid,s=e.tag,c=Object(r.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===i?l="container-fluid":i&&(l="container-"+i);var f=Object(d.mapToCssModules)(u()(t,l),n);return o.a.createElement(s,Object(a.a)({},c,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},92:function(e,t,n){"use strict";var a=n(3),r=n(8),i=n(0),o=n.n(i),s=n(7),c=n.n(s),l=n(55),u=n.n(l),d=n(56),f=c.a.oneOfType([c.a.number,c.a.string]),p={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},m={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,n=e.cssModule,i=e.noGutters,s=e.tag,c=e.form,l=e.widths,f=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,n){var a=e[t];if(delete f[t],a){var r=!n;p.push(r?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var m=Object(d.mapToCssModules)(u()(t,i?"no-gutters":null,c?"form-row":"row",p),n);return o.a.createElement(s,Object(a.a)({},f,{className:m}))};g.propTypes=p,g.defaultProps=m,t.a=g},93:function(e,t,n){"use strict";var a=n(3),r=n(8),i=n(0),o=n.n(i),s=n(7),c=n.n(s),l=n(55),u=n.n(l),d=n(56),f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),m={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},h=function(e){var t=e.className,n=e.cssModule,i=e.widths,s=e.tag,c=Object(r.a)(e,["className","cssModule","widths","tag"]),l=[];i.forEach((function(t,a){var r=e[t];if(delete c[t],r||""===r){var i=!a;if(Object(d.isObject)(r)){var o,s=i?"-":"-"+t+"-",f=b(i,t,r.size);l.push(Object(d.mapToCssModules)(u()(((o={})[f]=r.size||""===r.size,o["order"+s+r.order]=r.order||0===r.order,o["offset"+s+r.offset]=r.offset||0===r.offset,o)),n))}else{var p=b(i,t,r);l.push(p)}}})),l.length||l.push("col");var f=Object(d.mapToCssModules)(u()(t,l),n);return o.a.createElement(s,Object(a.a)({},c,{className:f}))};h.propTypes=m,h.defaultProps=g,t.a=h},95:function(e,t,n){"use strict";var a=n(12),r=n(13),i=n(15),o=n(14),s=n(0),c=n.n(s),l=n(9),u=n(91),d=n(92),f=n(93),p=n(106),m=n(107),g=n(1),b=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.pathItems.length;return Object(g.jsx)(c.a.Fragment,{children:Object(g.jsx)("section",{className:"bg-half bg-light d-table w-100",children:Object(g.jsx)(u.a,{children:Object(g.jsx)(d.a,{className:"justify-content-center",children:Object(g.jsx)(f.a,{lg:"12",className:"text-center",children:Object(g.jsxs)("div",{className:"page-next-level",children:[this.props.title?Object(g.jsxs)("h4",{className:"title",children:[" ",this.props.title]}):null,this.props.children?this.props.children:null,Object(g.jsx)("div",{className:"page-next",children:Object(g.jsx)("nav",{className:"d-inline-block",children:Object(g.jsx)(p.a,{"aria-label":"breadcrumb",listClassName:"bg-white rounded shadow mb-0",children:this.props.pathItems.map((function(t,n){return t.id!==e?Object(g.jsx)(m.a,{children:Object(g.jsx)(l.b,{to:t.link,className:"text-uppercase fw-bold text-dark me-1",children:t.name})},n):Object(g.jsx)(m.a,{active:!0,"aria-current":"page",children:t.name},n)}))})})})]})})})})})})}}]),n}(s.Component);t.a=b}}]);
//# sourceMappingURL=58.59598edd.chunk.js.map