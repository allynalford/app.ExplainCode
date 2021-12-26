/*! For license information please see 141.5577eba4.chunk.js.LICENSE.txt */
(this.webpackJsonpexplaincodeapp=this.webpackJsonpexplaincodeapp||[]).push([[141],{1518:function(e,t,n){"use strict";n.r(t);var o=n(12),r=n(13),a=n(15),i=n(14),s=n(0),c=n.n(s),l=n(91),u=n(92),d=n(93),p=n.p+"static/media/bg-portfolio.9fae24c3.jpg",f=n(1),m=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsxs)("section",{className:"bg-half-260 d-table w-100",style:{background:"url(".concat(p,") center center")},children:[Object(f.jsx)("div",{className:"bg-overlay bg-overlay-white"}),Object(f.jsx)(l.a,{children:Object(f.jsx)(u.a,{className:"justify-content-center",children:Object(f.jsx)(d.a,{xs:"12",children:Object(f.jsxs)("div",{className:"title-heading text-center mt-5 pt-4",children:[Object(f.jsx)("h1",{className:"display-1 fw-bold mb-3",children:"Minimal Portfolio"}),Object(f.jsx)("p",{className:"para-desc mx-auto h6",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."})]})})})})]}),Object(f.jsx)("div",{className:"position-relative",children:Object(f.jsx)("div",{className:"shape overflow-hidden text-white",children:Object(f.jsx)("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(f.jsx)("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})})})})]})}}]),n}(s.Component),g=n(21),h=n(75),b=n(79),y=n(9),j=n(700),v=(n(588),n.p+"static/media/20.c209fa62.jpg"),x=n(554),O=n(511),w=n(512),N=n(555),E=n(556),k=n(557),C=n(558),S=[v,x.a,O.a,w.a,N.a,E.a,k.a,C.a],T=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={projects:[{image:v,title:"Iphone mockup",subtitle:"Branding",category:"Branding"},{image:x.a,title:"Mockup Collection",subtitle:"Mockup",category:"Designing"},{image:O.a,title:"Abstract images",subtitle:"Abstract",category:"Photography"},{image:w.a,title:"Yellow bg with Books",subtitle:"Company V-card",category:"Development"},{image:N.a,title:"Company V-card",subtitle:"V-card",category:"Branding"},{image:E.a,title:"Mockup box with paints",subtitle:"Photography",category:"Branding"},{image:k.a,title:"Coffee cup",subtitle:"Cups",category:"Designing"},{image:C.a,title:"Pen and article",subtitle:"Article",category:"Development"}],displayCategory:"All",photoIndex:0,isOpen:!1},r.setCategory.bind(Object(g.a)(r)),r}return Object(r.a)(n,[{key:"setCategory",value:function(e){this.setState({displayCategory:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.photoIndex,o=t.isOpen;return Object(f.jsx)(c.a.Fragment,{children:Object(f.jsxs)("section",{className:"section",children:[Object(f.jsx)(l.a,{children:Object(f.jsx)(u.a,{className:"justify-content-center",children:Object(f.jsx)("div",{className:"filters-group",children:Object(f.jsxs)("ul",{className:"container-filter list-inline mb-0 filter-options text-center",id:"filter",children:[Object(f.jsx)("li",{onClick:function(){return e.setCategory("All")},className:"All"===this.state.displayCategory?"list-inline-item categories-name border text-dark rounded active":"list-inline-item categories-name border text-dark rounded ",children:"All"}),Object(f.jsx)("li",{onClick:function(){return e.setCategory("Branding")},className:"Branding"===this.state.displayCategory?"list-inline-item categories-name border text-dark rounded active":"list-inline-item categories-name border text-dark rounded",children:"Branding"}),Object(f.jsx)("li",{onClick:function(){return e.setCategory("Designing")},className:"Designing"===this.state.displayCategory?"list-inline-item categories-name border text-dark rounded active":"list-inline-item categories-name border text-dark rounded",children:"Designing"}),Object(f.jsx)("li",{onClick:function(){return e.setCategory("Photography")},className:"Photography"===this.state.displayCategory?"list-inline-item categories-name border text-dark rounded active":"list-inline-item categories-name border text-dark rounded",children:"Photography"}),Object(f.jsx)("li",{onClick:function(){return e.setCategory("Development")},className:"Development"===this.state.displayCategory?"list-inline-item categories-name border text-dark rounded active":"list-inline-item categories-name border text-dark rounded",children:"Development"})]})})})}),Object(f.jsxs)(l.a,{fluid:!0,children:[Object(f.jsx)(u.a,{className:"container-grid projects-wrapper",children:this.state.projects.filter((function(t){var n=t.category;return e.state.displayCategory===n||"All"===e.state.displayCategory})).map((function(t,n){var o=t.title,r=t.image,a=t.subtitle;return Object(f.jsx)(d.a,{lg:3,md:6,xs:12,className:"spacing mt-3",children:Object(f.jsx)(h.a,{className:"border-0 work-container work-grid position-relative d-block overflow-hidden rounded",children:Object(f.jsxs)(b.a,{className:"p-0",children:[Object(f.jsx)(y.b,{to:"#",className:"mfp-image d-inline-block",onClick:function(t){t.preventDefault(),e.setState({isOpen:!0,photoIndex:n})},children:Object(f.jsx)("img",{src:r,className:"img-fluid",alt:"work"})}),Object(f.jsxs)("div",{className:"content bg-white p-3",children:[Object(f.jsx)("h5",{className:"mb-0",children:Object(f.jsx)(y.b,{to:"page-work-detail",className:"text-dark title",children:o})}),Object(f.jsx)("h6",{className:"text-muted tag mb-0",children:a})]})]})})},n)}))}),o&&Object(f.jsx)(j.a,{mainSrc:S[n],nextSrc:S[(n+1)%S.length],prevSrc:S[(n+S.length-1)%S.length],imagePadding:100,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(n+S.length-1)%S.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(n+1)%S.length})}})]}),Object(f.jsx)(l.a,{className:"mt-100 mt-60",children:Object(f.jsx)(u.a,{className:"justify-content-center",children:Object(f.jsx)(d.a,{xs:"12",className:"text-center",children:Object(f.jsxs)("div",{className:"section-title",children:[Object(f.jsx)("h4",{className:"title mb-4",children:"Let's talk about your portfolio"}),Object(f.jsxs)("p",{className:"text-muted para-desc mx-auto",children:["Start working with ",Object(f.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," that can provide everything you need to generate awareness, drive traffic, connect."]}),Object(f.jsx)("div",{className:"mt-4 pt-2",children:Object(f.jsx)(y.b,{to:"#",className:"btn btn-primary",children:"Get Started Now"})})]})})})})]})})}}]),n}(s.Component),M=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsx)(m,{}),Object(f.jsx)(T,{})]})}}]),n}(s.Component);t.default=M},179:function(e,t,n){"use strict";function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function r(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function a(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function i(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,i=null,s=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?s="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==i||null!==s){var c=e.displayName||e.name,l="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+c+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==i?"\n  "+i:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=r),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;u.call(this,e,t,o)}}return e}n.r(t),n.d(t,"polyfill",(function(){return i})),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},511:function(e,t,n){"use strict";t.a=n.p+"static/media/14.d80492dc.jpg"},512:function(e,t,n){"use strict";t.a=n.p+"static/media/15.143a6637.jpg"},55:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var i=r.apply(null,o);i&&e.push(i)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var s in o)n.call(o,s)&&o[s]&&e.push(s);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},554:function(e,t,n){"use strict";t.a=n.p+"static/media/13.5b5018ae.jpg"},555:function(e,t,n){"use strict";t.a=n.p+"static/media/16.0831adb4.jpg"},556:function(e,t,n){"use strict";t.a=n.p+"static/media/17.30406e31.jpg"},557:function(e,t,n){"use strict";t.a=n.p+"static/media/18.6575ea27.jpg"},558:function(e,t,n){"use strict";t.a=n.p+"static/media/19.654f2a91.jpg"},56:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return i})),n.d(t,"setScrollbarWidth",(function(){return s})),n.d(t,"isBodyOverflowing",(function(){return c})),n.d(t,"getOriginalBodyPadding",(function(){return l})),n.d(t,"conditionallyUpdateScrollbar",(function(){return u})),n.d(t,"setGlobalCssModule",(function(){return d})),n.d(t,"mapToCssModules",(function(){return p})),n.d(t,"omit",(function(){return f})),n.d(t,"pick",(function(){return m})),n.d(t,"warnOnce",(function(){return h})),n.d(t,"deprecated",(function(){return b})),n.d(t,"DOMElement",(function(){return j})),n.d(t,"targetPropType",(function(){return v})),n.d(t,"tagPropType",(function(){return x})),n.d(t,"TransitionTimeouts",(function(){return O})),n.d(t,"TransitionPropTypeKeys",(function(){return w})),n.d(t,"TransitionStatuses",(function(){return N})),n.d(t,"keyCodes",(function(){return E})),n.d(t,"PopperPlacements",(function(){return k})),n.d(t,"canUseDOM",(function(){return C})),n.d(t,"isReactRefObj",(function(){return S})),n.d(t,"toNumber",(function(){return M})),n.d(t,"isObject",(function(){return P})),n.d(t,"isFunction",(function(){return A})),n.d(t,"findDOMElements",(function(){return D})),n.d(t,"isArrayOrNodeList",(function(){return U})),n.d(t,"getTarget",(function(){return W})),n.d(t,"defaultToggleEvents",(function(){return F})),n.d(t,"addMultipleEventListeners",(function(){return I})),n.d(t,"focusableElements",(function(){return _}));var o,r=n(7),a=n.n(r);function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function s(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function l(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;c()&&s(n+e)}function d(e){o=e}function p(e,t){return void 0===e&&(e=""),void 0===t&&(t=o),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function f(e,t){var n={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(n[o]=e[o])})),n}function m(e,t){for(var n,o=Array.isArray(t)?t:[t],r=o.length,a={};r>0;)a[n=o[r-=1]]=e[n];return a}var g={};function h(e){g[e]||("undefined"!==typeof console&&console.error(e),g[e]=!0)}function b(e,t){return function(n,o,r){null!==n[o]&&"undefined"!==typeof n[o]&&h('"'+o+'" property of "'+r+'" has been deprecated.\n'+t);for(var a=arguments.length,i=new Array(a>3?a-3:0),s=3;s<a;s++)i[s-3]=arguments[s];return e.apply(void 0,[n,o,r].concat(i))}}var y="object"===typeof window&&window.Element||function(){};function j(e,t,n){if(!(e[t]instanceof y))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var v=a.a.oneOfType([a.a.string,a.a.func,j,a.a.shape({current:a.a.any})]),x=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),O={Fade:150,Collapse:350,Modal:300,Carousel:600},w=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],N={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},E={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},k=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],C=!("undefined"===typeof window||!window.document||!window.document.createElement);function S(e){return!(!e||"object"!==typeof e)&&"current"in e}function T(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function M(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===T(e))return NaN;if(P(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=P(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var o=/^0b[01]+$/i.test(e);return o||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),o?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function P(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function A(e){if(!P(e))return!1;var t=T(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function D(e){if(S(e))return e.current;if(A(e))return e();if("string"===typeof e&&C){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function U(e){return null!==e&&(Array.isArray(e)||C&&"number"===typeof e.length)}function W(e,t){var n=D(e);return t?U(n)?n:null===n?[]:[n]:U(n)?n[0]:n}var F=["touchstart","click"];function I(e,t,n,o){var r=e;U(r)||(r=[r]);var a=n;if("string"===typeof a&&(a=a.split(/\s+/)),!U(r)||"function"!==typeof t||!Array.isArray(a))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(r,(function(n){n.addEventListener(e,t,o)}))})),function(){Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(r,(function(n){n.removeEventListener(e,t,o)}))}))}}var _=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},91:function(e,t,n){"use strict";var o=n(3),r=n(8),a=n(0),i=n.n(a),s=n(7),c=n.n(s),l=n(55),u=n.n(l),d=n(56),p={tag:d.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,n=e.cssModule,a=e.fluid,s=e.tag,c=Object(r.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===a?l="container-fluid":a&&(l="container-"+a);var p=Object(d.mapToCssModules)(u()(t,l),n);return i.a.createElement(s,Object(o.a)({},c,{className:p}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},92:function(e,t,n){"use strict";var o=n(3),r=n(8),a=n(0),i=n.n(a),s=n(7),c=n.n(s),l=n(55),u=n.n(l),d=n(56),p=c.a.oneOfType([c.a.number,c.a.string]),f={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},m={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,s=e.tag,c=e.form,l=e.widths,p=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];l.forEach((function(t,n){var o=e[t];if(delete p[t],o){var r=!n;f.push(r?"row-cols-"+o:"row-cols-"+t+"-"+o)}}));var m=Object(d.mapToCssModules)(u()(t,a?"no-gutters":null,c?"form-row":"row",f),n);return i.a.createElement(s,Object(o.a)({},p,{className:m}))};g.propTypes=f,g.defaultProps=m,t.a=g},93:function(e,t,n){"use strict";var o=n(3),r=n(8),a=n(0),i=n.n(a),s=n(7),c=n.n(s),l=n(55),u=n.n(l),d=n(56),p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:p,offset:p})]),m={tag:d.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},b=function(e){var t=e.className,n=e.cssModule,a=e.widths,s=e.tag,c=Object(r.a)(e,["className","cssModule","widths","tag"]),l=[];a.forEach((function(t,o){var r=e[t];if(delete c[t],r||""===r){var a=!o;if(Object(d.isObject)(r)){var i,s=a?"-":"-"+t+"-",p=h(a,t,r.size);l.push(Object(d.mapToCssModules)(u()(((i={})[p]=r.size||""===r.size,i["order"+s+r.order]=r.order||0===r.order,i["offset"+s+r.offset]=r.offset||0===r.offset,i)),n))}else{var f=h(a,t,r);l.push(f)}}})),l.length||l.push("col");var p=Object(d.mapToCssModules)(u()(t,l),n);return i.a.createElement(s,Object(o.a)({},c,{className:p}))};b.propTypes=m,b.defaultProps=g,t.a=b}}]);
//# sourceMappingURL=141.5577eba4.chunk.js.map