/*! For license information please see 201.0dc52238.chunk.js.LICENSE.txt */
(this.webpackJsonpexplaincodeapp=this.webpackJsonpexplaincodeapp||[]).push([[201],{1521:function(e,t,n){"use strict";n.r(t);var r=n(12),o=n(13),i=n(21),a=n(15),c=n(14),s=n(0),l=n.n(s),u=n(9),d=n(91),f=n(1),p=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).scrollSection=function(){var e;o.scrollTargetIds.forEach((function(t,n){e=document.getElementById(t).offsetTop-(o.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0),window.pageYOffset>=e&&window.pageYOffset<e+document.getElementById(t).scrollHeight?(o.getNavLinkElement(t).classList.add(o.activeNavClass),o.getNavLinkElement(t).parentNode.classList.add(o.activeNavClass),o.clearOtherNavLinkActiveStyle(t)):(o.getNavLinkElement(t).classList.remove(o.activeNavClass),o.getNavLinkElement(t).parentNode.classList.remove(o.activeNavClass)),window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&n===o.scrollTargetIds.length-1&&(o.getNavLinkElement(t).classList.add(o.activeNavClass),o.getNavLinkElement(t).parentNode.classList.add(o.activeNavClass),o.clearOtherNavLinkActiveStyle(t))}))},o.props=e,o.scrollTargetIds=o.props.scrollTargetIds,o.activeNavClass=o.props.activeNavClass,o.scrollDuration=Number(o.props.scrollDuration)||1e3,o.headerBackground="true"===o.props.headerBackground,o.props.router&&"HashRouter"===o.props.router?(o.homeDefaultLink="#/",o.hashIdentifier="#/#"):(o.homeDefaultLink="/",o.hashIdentifier="#"),o.scrollSection.bind(Object(i.a)(o)),o}return Object(o.a)(n,[{key:"easeInOutQuad",value:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},{key:"scrollTo",value:function(e,t,n){var r=this,o=t-e,i=0;!function t(){i+=10;var a=r.easeInOutQuad(i,e,o,n);window.scrollTo(0,a),i<n&&setTimeout(t,10)}()}},{key:"getNavLinkElement",value:function(e){return document.querySelector("a[href='".concat(this.hashIdentifier).concat(e,"']"))}},{key:"getNavToSectionID",value:function(e){return e.includes(this.hashIdentifier)?e.replace(this.hashIdentifier,""):""}},{key:"componentDidMount",value:function(){var e=this;document.querySelector("a[href='".concat(this.homeDefaultLink,"']"))&&document.querySelector("a[href='".concat(this.homeDefaultLink,"']")).addEventListener("click",(function(t){t.preventDefault(),e.scrollTo(window.pageYOffset,0,e.scrollDuration),window.location.hash=""})),document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((function(t){t.addEventListener("click",(function(n){n.preventDefault();var r=e.getNavToSectionID(t.getAttribute("href"));if(r){var o=document.getElementById(r).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0);e.scrollTo(window.pageYOffset,o,e.scrollDuration)}else e.scrollTo(window.pageYOffset,0,e.scrollDuration)}))})),window.addEventListener("scroll",this.scrollSection,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollSection,!0)}},{key:"clearOtherNavLinkActiveStyle",value:function(e){var t=this;this.scrollTargetIds.forEach((function(n,r){n!==e&&(t.getNavLinkElement(n).classList.remove(t.activeNavClass),t.getNavLinkElement(n).parentNode.classList.remove(t.activeNavClass))}))}},{key:"render",value:function(){return Object(f.jsx)("div",{"data-nav":"list",className:this.props.className,children:this.props.children})}}]),n}(s.Component),v=n.p+"static/media/logo-dark.fb945915.png",h=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={navItems:[{id:1,idnm:"home",navheading:"Home"},{id:3,idnm:"service",navheading:"Feature"},{id:3,idnm:"testimonial",navheading:"Review"},{id:4,idnm:"pricing",navheading:"Price"},{id:6,idnm:"contact",navheading:"Contact"}],isOpen:!1},o.toggleLine=o.toggleLine.bind(Object(i.a)(o)),o}return Object(o.a)(n,[{key:"toggleLine",value:function(){this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){var e=this.state.navItems.map((function(e){return e.idnm}));return Object(f.jsx)(l.a.Fragment,{children:Object(f.jsx)("header",{id:"topnav",className:"defaultscroll sticky",children:Object(f.jsxs)(d.a,{children:[Object(f.jsx)("div",{children:Object(f.jsx)(u.b,{className:"logo",to:"#",children:Object(f.jsx)("img",{src:v,height:"24",alt:""})})}),Object(f.jsx)("div",{className:"buy-button",children:Object(f.jsx)(u.b,{to:"https://1.envato.market/landrickreactjs",target:"_blank",className:"btn btn-primary",children:"Join Waitlist"})}),Object(f.jsx)("div",{className:"menu-extras",children:Object(f.jsx)("div",{className:"menu-item",children:Object(f.jsx)(u.b,{to:"#",onClick:this.toggleLine,className:this.state.isOpen?"navbar-toggle open":"navbar-toggle",children:Object(f.jsxs)("div",{className:"lines",children:[Object(f.jsx)("span",{}),Object(f.jsx)("span",{}),Object(f.jsx)("span",{})]})})})}),Object(f.jsx)(p,{scrollTargetIds:e,scrollDuration:"800",headerBackground:"false",activeNavClass:"active",children:Object(f.jsx)("div",{id:"navigation",style:{display:this.state.isOpen?"block":"none"},children:Object(f.jsx)("ul",{className:"navigation-menu",children:this.state.navItems.map((function(e,t){return Object(f.jsx)("li",{className:"Home"===e.navheading?"has-submenu active":"has-submenu",children:Object(f.jsxs)("a",{href:"#"+e.idnm,children:[" ",e.navheading]})},t)}))})})})]})})})}}]),n}(s.Component);t.default=h},55:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},56:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return a})),n.d(t,"setScrollbarWidth",(function(){return c})),n.d(t,"isBodyOverflowing",(function(){return s})),n.d(t,"getOriginalBodyPadding",(function(){return l})),n.d(t,"conditionallyUpdateScrollbar",(function(){return u})),n.d(t,"setGlobalCssModule",(function(){return d})),n.d(t,"mapToCssModules",(function(){return f})),n.d(t,"omit",(function(){return p})),n.d(t,"pick",(function(){return v})),n.d(t,"warnOnce",(function(){return m})),n.d(t,"deprecated",(function(){return g})),n.d(t,"DOMElement",(function(){return y})),n.d(t,"targetPropType",(function(){return j})),n.d(t,"tagPropType",(function(){return O})),n.d(t,"TransitionTimeouts",(function(){return N})),n.d(t,"TransitionPropTypeKeys",(function(){return E})),n.d(t,"TransitionStatuses",(function(){return w})),n.d(t,"keyCodes",(function(){return k})),n.d(t,"PopperPlacements",(function(){return x})),n.d(t,"canUseDOM",(function(){return T})),n.d(t,"isReactRefObj",(function(){return L})),n.d(t,"toNumber",(function(){return I})),n.d(t,"isObject",(function(){return C})),n.d(t,"isFunction",(function(){return A})),n.d(t,"findDOMElements",(function(){return D})),n.d(t,"isArrayOrNodeList",(function(){return M})),n.d(t,"getTarget",(function(){return P})),n.d(t,"defaultToggleEvents",(function(){return q})),n.d(t,"addMultipleEventListeners",(function(){return B})),n.d(t,"focusableElements",(function(){return H}));var r,o=n(7),i=n.n(o);function a(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function c(e){document.body.style.paddingRight=e>0?e+"px":null}function s(){return document.body.clientWidth<window.innerWidth}function l(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=a(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;s()&&c(n+e)}function d(e){r=e}function f(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function p(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function v(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,i={};o>0;)i[n=r[o-=1]]=e[n];return i}var h={};function m(e){h[e]||("undefined"!==typeof console&&console.error(e),h[e]=!0)}function g(e,t){return function(n,r,o){null!==n[r]&&"undefined"!==typeof n[r]&&m('"'+r+'" property of "'+o+'" has been deprecated.\n'+t);for(var i=arguments.length,a=new Array(i>3?i-3:0),c=3;c<i;c++)a[c-3]=arguments[c];return e.apply(void 0,[n,r,o].concat(a))}}var b="object"===typeof window&&window.Element||function(){};function y(e,t,n){if(!(e[t]instanceof b))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var j=i.a.oneOfType([i.a.string,i.a.func,y,i.a.shape({current:i.a.any})]),O=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),N={Fade:150,Collapse:350,Modal:300,Carousel:600},E=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],w={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},k={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},x=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],T=!("undefined"===typeof window||!window.document||!window.document.createElement);function L(e){return!(!e||"object"!==typeof e)&&"current"in e}function S(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function I(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===S(e))return NaN;if(C(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=C(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(e);return r||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function C(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function A(e){if(!C(e))return!1;var t=S(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function D(e){if(L(e))return e.current;if(A(e))return e();if("string"===typeof e&&T){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function M(e){return null!==e&&(Array.isArray(e)||T&&"number"===typeof e.length)}function P(e,t){var n=D(e);return t?M(n)?n:null===n?[]:[n]:M(n)?n[0]:n}var q=["touchstart","click"];function B(e,t,n,r){var o=e;M(o)||(o=[o]);var i=n;if("string"===typeof i&&(i=i.split(/\s+/)),!M(o)||"function"!==typeof t||!Array.isArray(i))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(i,(function(e){Array.prototype.forEach.call(o,(function(n){n.addEventListener(e,t,r)}))})),function(){Array.prototype.forEach.call(i,(function(e){Array.prototype.forEach.call(o,(function(n){n.removeEventListener(e,t,r)}))}))}}var H=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},91:function(e,t,n){"use strict";var r=n(3),o=n(8),i=n(0),a=n.n(i),c=n(7),s=n.n(c),l=n(55),u=n.n(l),d=n(56),f={tag:d.tagPropType,fluid:s.a.oneOfType([s.a.bool,s.a.string]),className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,n=e.cssModule,i=e.fluid,c=e.tag,s=Object(o.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===i?l="container-fluid":i&&(l="container-"+i);var f=Object(d.mapToCssModules)(u()(t,l),n);return a.a.createElement(c,Object(r.a)({},s,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=201.0dc52238.chunk.js.map