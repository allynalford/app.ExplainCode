(this.webpackJsonpexplaincodeapp=this.webpackJsonpexplaincodeapp||[]).push([[139],{130:function(e,a,s){"use strict";var t=s(3),c=s(8),l=s(0),i=s.n(l),r=s(7),n=s.n(r),o=s(55),m=s.n(o),d=s(56),b=n.a.oneOfType([n.a.number,n.a.string]),j=n.a.oneOfType([n.a.bool,n.a.string,n.a.number,n.a.shape({size:b,order:b,offset:b})]),u={children:n.a.node,hidden:n.a.bool,check:n.a.bool,size:n.a.string,for:n.a.string,tag:d.tagPropType,className:n.a.string,cssModule:n.a.object,xs:j,sm:j,md:j,lg:j,xl:j,widths:n.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},p=function(e,a,s){return!0===s||""===s?e?"col":"col-"+a:"auto"===s?e?"col-auto":"col-"+a+"-auto":e?"col-"+s:"col-"+a+"-"+s},x=function(e){var a=e.className,s=e.cssModule,l=e.hidden,r=e.widths,n=e.tag,o=e.check,b=e.size,j=e.for,u=Object(c.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];r.forEach((function(a,t){var c=e[a];if(delete u[a],c||""===c){var l,i=!t;if(Object(d.isObject)(c)){var r,n=i?"-":"-"+a+"-";l=p(i,a,c.size),h.push(Object(d.mapToCssModules)(m()(((r={})[l]=c.size||""===c.size,r["order"+n+c.order]=c.order||0===c.order,r["offset"+n+c.offset]=c.offset||0===c.offset,r))),s)}else l=p(i,a,c),h.push(l)}}));var x=Object(d.mapToCssModules)(m()(a,!!l&&"sr-only",!!o&&"form-check-label",!!b&&"col-form-label-"+b,h,!!h.length&&"col-form-label"),s);return i.a.createElement(n,Object(t.a)({htmlFor:j},u,{className:x}))};x.propTypes=u,x.defaultProps=h,a.a=x},1538:function(e,a,s){"use strict";s.r(a);var t=s(12),c=s(13),l=s(21),i=s(15),r=s(14),n=s(0),o=s.n(n),m=s(9),d=s(91),b=s(92),j=s(93),u=s(75),h=s(79),p=s(270),x=s(291),O=s(268),g=s(287),N=s(110),f=s(171),v=s(130),y=s(133),w=s(20),k=s.n(w),C=s.p+"static/media/candidate.c4ae4122.jpg",T=s(65),M=s(464),P=s(506),E=s(285),A=s(277),B=s(278),L=s(286),S=s(1),D=function(e){Object(i.a)(s,e);var a=Object(r.a)(s);function s(e){var c;return Object(t.a)(this,s),(c=a.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?(document.getElementById("topnav").classList.add("nav-sticky"),document.getElementById("buyButton").className="btn btn-primary"):(document.getElementById("topnav").classList.remove("nav-sticky"),document.getElementById("buyButton").className="btn btn-light")},c.togglemodal=function(){c.setState((function(e){return{modal:!e.modal}}))},c.state={experiences:[{title:"Back-end Developer",image:P.a,cmpName:"Codepen",location:"CHINA",duration:"2017-18",desc:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text."},{title:"Senior Web Designer",image:M.a,cmpName:"CircleCi",location:"SAN FRANCISCO",duration:"2014-17",desc:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text."}],projects:[{image:E.a,title:"Iphone mockup",subtitle:"Branding",category:"Branding"},{image:A.a,title:"Mockup Collection",subtitle:"Mockup",category:"Designing"},{image:B.a,title:"Abstract images",subtitle:"Abstract",category:"Photography"},{image:L.a,title:"Yellow bg with Books",subtitle:"Books",category:"Development"}],modal:!1,photoIndex:0,isOpen:!1},c.togglemodal.bind(Object(l.a)(c)),c}return Object(c.a)(s,[{key:"componentDidMount",value:function(){document.body.classList="",document.getElementById("top-menu").classList.add("nav-light"),document.getElementById("buyButton").className="btn btn-light",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(S.jsxs)(o.a.Fragment,{children:[Object(S.jsx)("section",{className:"bg-half-260 d-table w-100",style:{background:"url(".concat(C,")")},children:Object(S.jsx)("div",{className:"bg-overlay"})}),Object(S.jsx)("section",{className:"section",children:Object(S.jsx)(d.a,{children:Object(S.jsxs)(b.a,{children:[Object(S.jsx)(j.a,{lg:"4",md:"5",xs:"12",children:Object(S.jsxs)(u.a,{className:"job-profile shadow border-0",children:[Object(S.jsxs)("div",{className:"text-center py-5 border-bottom rounded-top",children:[Object(S.jsx)("img",{src:T.a,className:"avatar avatar-medium mx-auto rounded-circle shadow d-block",alt:"profile"}),Object(S.jsx)("h5",{className:"mt-3 mb-0",children:"Thomas Brewer"}),Object(S.jsx)("p",{className:"text-muted mb-0",children:"Senior Web Developer"})]}),Object(S.jsxs)(h.a,{children:[Object(S.jsx)("h5",{className:"card-title",children:"Personal Details :"}),Object(S.jsxs)("ul",{className:"list-unstyled",children:[Object(S.jsxs)("li",{className:"h6",children:[Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"mail",className:"fea icon-sm text-warning me-3"})}),Object(S.jsx)("span",{className:"text-muted",children:"Email :"})," ","thomas@mail.com"]}),Object(S.jsxs)("li",{className:"h6",children:[Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"gift",className:"fea icon-sm text-warning me-3"})}),Object(S.jsx)("span",{className:"text-muted",children:"D.O.B. :"})," 31st Dec, 1996"]}),Object(S.jsxs)("li",{className:"h6",children:[Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"home",className:"fea icon-sm text-warning me-3"})}),Object(S.jsx)("span",{className:"text-muted",children:"Address :"})," 15 Razy street"]}),Object(S.jsxs)("li",{className:"h6",children:[Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"map-pin",className:"fea icon-sm text-warning me-3"})}),Object(S.jsx)("span",{className:"text-muted",children:"City :"})," London"]}),Object(S.jsxs)("li",{className:"h6",children:[Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"globe",className:"fea icon-sm text-warning me-3"})}),Object(S.jsx)("span",{className:"text-muted",children:"Country :"})," UK"]}),Object(S.jsxs)("li",{className:"h6",children:[Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"server",className:"fea icon-sm text-warning me-3"})}),Object(S.jsx)("span",{className:"text-muted",children:"Postal Code :"})," 521452"]}),Object(S.jsxs)("li",{className:"h6",children:[Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"phone",className:"fea icon-sm text-warning me-3"})}),Object(S.jsx)("span",{className:"text-muted",children:"Mobile :"})," (+125) 1542-8452"]}),Object(S.jsx)("li",{children:Object(S.jsxs)("ul",{className:"list-unstyled social-icon mb-0 mt-4",children:[Object(S.jsx)("li",{className:"list-inline-item",children:Object(S.jsx)(m.b,{to:"#",className:"rounded",children:Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"facebook",className:"fea icon-sm fea-social"})})})})," ",Object(S.jsx)("li",{className:"list-inline-item",children:Object(S.jsx)(m.b,{to:"#",className:"rounded",children:Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"instagram",className:"fea icon-sm fea-social"})})})})," ",Object(S.jsx)("li",{className:"list-inline-item",children:Object(S.jsx)(m.b,{to:"#",className:"rounded",children:Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"twitter",className:"fea icon-sm fea-social"})})})})," ",Object(S.jsx)("li",{className:"list-inline-item",children:Object(S.jsx)(m.b,{to:"#",className:"rounded",children:Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"linkedin",className:"fea icon-sm fea-social"})})})})," ",Object(S.jsx)("li",{className:"list-inline-item",children:Object(S.jsx)(m.b,{to:"#",className:"rounded",children:Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"github",className:"fea icon-sm fea-social"})})})})," ",Object(S.jsx)("li",{className:"list-inline-item",children:Object(S.jsx)(m.b,{to:"#",className:"rounded",children:Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"youtube",className:"fea icon-sm fea-social"})})})})," ",Object(S.jsx)("li",{className:"list-inline-item",children:Object(S.jsx)(m.b,{to:"#",className:"rounded",children:Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"gitlab",className:"fea icon-sm fea-social"})})})})]})})]}),Object(S.jsx)("div",{className:"d-grid",children:Object(S.jsxs)(m.b,{to:"#",onClick:this.togglemodal,className:"btn btn-block btn-primary",children:[Object(S.jsx)("i",{className:"uil uil-envelope align-middle"})," Contact Me"]})})]})]})}),Object(S.jsx)(j.a,{lg:"8",md:"7",xs:"12",className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(S.jsxs)("div",{className:"ms-lg-4",children:[Object(S.jsx)("h4",{children:"About us :"}),Object(S.jsx)("p",{className:"text-muted",children:"Obviously I'M Web Developer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English."}),Object(S.jsx)("p",{className:"text-muted mb-0",children:"Data Structures and Algorithms are the heart of programming. Initially most of the developers do not realize its importance but when you will start your career in software development, you will find your code is either taking too much time or taking too much space."}),Object(S.jsx)("h4",{className:"mt-lg-5 mt-4",children:"Skills :"}),Object(S.jsxs)("div",{className:"progress-box mt-4",children:[Object(S.jsx)("h6",{className:"title text-muted",children:"WordPress"}),Object(S.jsx)(p.a,{value:84,color:"primary",barClassName:"position-relative",children:Object(S.jsx)("div",{className:"progress-value d-block text-muted h6",children:"84%"})})]}),Object(S.jsxs)("div",{className:"progress-box mt-4",children:[Object(S.jsx)("h6",{className:"title text-muted",children:"PHP / MYSQL"}),Object(S.jsx)(p.a,{value:75,color:"primary",barClassName:"position-relative",children:Object(S.jsx)("div",{className:"progress-value d-block text-muted h6",children:"75%"})})]}),Object(S.jsxs)("div",{className:"progress-box mt-4",children:[Object(S.jsx)("h6",{className:"title text-muted",children:"Angular / JavaScript"}),Object(S.jsx)(p.a,{value:79,color:"primary",barClassName:"position-relative",children:Object(S.jsx)("div",{className:"progress-value d-block text-muted h6",children:"79%"})})]}),Object(S.jsxs)("div",{className:"progress-box mt-4",children:[Object(S.jsx)("h6",{className:"title text-muted",children:"HTML"}),Object(S.jsx)(p.a,{value:95,color:"primary",barClassName:"position-relative",children:Object(S.jsx)("div",{className:"progress-value d-block text-muted h6",children:"95%"})})]}),Object(S.jsx)("h4",{className:"mt-lg-5 mt-4",children:"Experience :"}),Object(S.jsx)(b.a,{children:this.state.experiences.map((function(e,a){return Object(S.jsx)(j.a,{lg:"12",className:"mt-4 pt-2",children:Object(S.jsxs)("div",{className:"d-flex",children:[Object(S.jsxs)("div",{className:"company-logo text-muted h6 me-3 text-center",children:[Object(S.jsx)("img",{src:e.image,className:"avatar avatar-md-sm mx-auto d-block mb-2",alt:"experience"}),e.duration]}),Object(S.jsxs)("div",{className:"flex-1",children:[Object(S.jsx)("h5",{className:"title mb-0",children:e.title}),Object(S.jsxs)("small",{className:"text-muted company-university",children:[e.cmpName," - ",e.location]}),Object(S.jsx)("p",{className:"text-muted mt-2 mb-0",children:e.desc})]})]})},a)}))}),Object(S.jsx)("h4",{className:"mt-lg-5 mt-4",children:"Projects :"}),Object(S.jsx)(b.a,{children:this.state.projects.map((function(e,a){return Object(S.jsx)(j.a,{md:6,xs:12,className:"mt-4 pt-2",children:Object(S.jsx)(u.a,{className:"border-0 work-container work-classic",children:Object(S.jsxs)(h.a,{className:"p-0",children:[Object(S.jsx)(m.b,{to:"page-work-detail",children:Object(S.jsx)("img",{src:e.image,className:"img-fluid rounded work-image",alt:"Landrick"})}),Object(S.jsxs)("div",{className:"content pt-3",children:[Object(S.jsx)("h5",{className:"mb-0",children:Object(S.jsx)(m.b,{to:"page-work-detail",className:"text-dark title",children:e.title})}),Object(S.jsx)("h6",{className:"text-muted tag mb-0",children:e.subtitle})]})]})})},a)}))}),Object(S.jsxs)("div",{className:"mt-4 pt-2",children:[Object(S.jsxs)(m.b,{to:"#",className:"btn btn-primary me-2",children:[Object(S.jsx)("i",{className:"uil uil-user-check"})," Hire me"]}),Object(S.jsxs)(m.b,{to:"#",className:"btn btn-outline-primary ms-1",children:[Object(S.jsx)("i",{className:"uil uil-print"})," Print CV"]})]})]})})]})})}),Object(S.jsxs)(x.a,{isOpen:this.state.modal,role:"dialog",centered:!0,id:"trialform",children:[Object(S.jsx)(O.a,{toggle:this.togglemodal,children:"Apply now"}),Object(S.jsx)(g.a,{className:"p-4",children:Object(S.jsxs)("div",{className:"custom-form",children:[Object(S.jsx)("div",{id:"message"}),Object(S.jsxs)(N.a,{name:"contact-form",id:"contact-form",children:[Object(S.jsxs)(b.a,{children:[Object(S.jsx)(j.a,{md:"6",children:Object(S.jsxs)(f.a,{className:"position-relative",children:[Object(S.jsxs)(v.a,{className:"form-label",children:["Your Name ",Object(S.jsx)("span",{className:"text-danger",children:"*"})]}),Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"user",className:"fea icon-sm icons"})}),Object(S.jsx)(y.a,{name:"name",id:"name",type:"text",className:"form-control ps-5",placeholder:"First Name :"})]})}),Object(S.jsx)(j.a,{md:"6",children:Object(S.jsxs)(f.a,{className:"position-relative",children:[Object(S.jsxs)(v.a,{className:"form-label",children:["Your Email ",Object(S.jsx)("span",{className:"text-danger",children:"*"})]}),Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"mail",className:"fea icon-sm icons"})}),Object(S.jsx)(y.a,{name:"email",id:"email",type:"email",className:"form-control ps-5",placeholder:"Your email :"})]})}),Object(S.jsx)(j.a,{md:"12",children:Object(S.jsxs)(f.a,{className:"position-relative",children:[Object(S.jsx)(v.a,{className:"form-label",children:"Subject"}),Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"book",className:"fea icon-sm icons"})}),Object(S.jsx)(y.a,{name:"subject",id:"subject",className:"form-control ps-5",placeholder:"Your subject :"})]})}),Object(S.jsx)(j.a,{md:"12",children:Object(S.jsxs)(f.a,{className:"position-relative",children:[Object(S.jsx)(v.a,{className:"form-label",children:"Comments"}),Object(S.jsx)("i",{children:Object(S.jsx)(k.a,{icon:"message-circle",className:"fea icon-sm icons"})}),Object(S.jsx)("textarea",{name:"comments",id:"comments",rows:"4",className:"form-control ps-5",placeholder:"Your Message :"})]})})]}),Object(S.jsx)(b.a,{children:Object(S.jsxs)(j.a,{sm:"12",className:"text-center",children:[Object(S.jsx)("input",{type:"submit",id:"submit",name:"send",className:"submitBnt btn btn-primary btn-block",value:"Send Message"}),Object(S.jsx)("div",{id:"simple-msg"})]})})]})]})})]})]})}}]),s}(n.Component);a.default=D},171:function(e,a,s){"use strict";var t=s(3),c=s(8),l=s(0),i=s.n(l),r=s(7),n=s.n(r),o=s(55),m=s.n(o),d=s(56),b={children:n.a.node,row:n.a.bool,check:n.a.bool,inline:n.a.bool,disabled:n.a.bool,tag:d.tagPropType,className:n.a.string,cssModule:n.a.object},j=function(e){var a=e.className,s=e.cssModule,l=e.row,r=e.disabled,n=e.check,o=e.inline,b=e.tag,j=Object(c.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),u=Object(d.mapToCssModules)(m()(a,!!l&&"row",n?"form-check":"form-group",!(!n||!o)&&"form-check-inline",!(!n||!r)&&"disabled"),s);return"fieldset"===b&&(j.disabled=r),i.a.createElement(b,Object(t.a)({},j,{className:u}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j},268:function(e,a,s){"use strict";var t=s(3),c=s(8),l=s(0),i=s.n(l),r=s(7),n=s.n(r),o=s(55),m=s.n(o),d=s(56),b={tag:d.tagPropType,wrapTag:d.tagPropType,toggle:n.a.func,className:n.a.string,cssModule:n.a.object,children:n.a.node,closeAriaLabel:n.a.string,charCode:n.a.oneOfType([n.a.string,n.a.number]),close:n.a.object},j=function(e){var a,s=e.className,l=e.cssModule,r=e.children,n=e.toggle,o=e.tag,b=e.wrapTag,j=e.closeAriaLabel,u=e.charCode,h=e.close,p=Object(c.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),x=Object(d.mapToCssModules)(m()(s,"modal-header"),l);if(!h&&n){var O="number"===typeof u?String.fromCharCode(u):u;a=i.a.createElement("button",{type:"button",onClick:n,className:Object(d.mapToCssModules)("close",l),"aria-label":j},i.a.createElement("span",{"aria-hidden":"true"},O))}return i.a.createElement(b,Object(t.a)({},p,{className:x}),i.a.createElement(o,{className:Object(d.mapToCssModules)("modal-title",l)},r),h||a)};j.propTypes=b,j.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},a.a=j},270:function(e,a,s){"use strict";var t=s(3),c=s(59),l=s(8),i=s(0),r=s.n(i),n=s(7),o=s.n(n),m=s(55),d=s.n(m),b=s(56);function j(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,t)}return s}function u(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?j(Object(s),!0).forEach((function(a){Object(c.a)(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):j(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}var h={children:o.a.node,bar:o.a.bool,multi:o.a.bool,tag:b.tagPropType,value:o.a.oneOfType([o.a.string,o.a.number]),min:o.a.oneOfType([o.a.string,o.a.number]),max:o.a.oneOfType([o.a.string,o.a.number]),animated:o.a.bool,striped:o.a.bool,color:o.a.string,className:o.a.string,barClassName:o.a.string,cssModule:o.a.object,style:o.a.object,barStyle:o.a.object,barAriaValueText:o.a.string,barAriaLabelledBy:o.a.string},p=function(e){var a=e.children,s=e.className,c=e.barClassName,i=e.cssModule,n=e.value,o=e.min,m=e.max,j=e.animated,h=e.striped,p=e.color,x=e.bar,O=e.multi,g=e.tag,N=e.style,f=e.barStyle,v=e.barAriaValueText,y=e.barAriaLabelledBy,w=Object(l.a)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barStyle","barAriaValueText","barAriaLabelledBy"]),k=Object(b.toNumber)(n)/Object(b.toNumber)(m)*100,C=Object(b.mapToCssModules)(d()(s,"progress"),i),T={className:Object(b.mapToCssModules)(d()("progress-bar",x&&s||c,j?"progress-bar-animated":null,p?"bg-"+p:null,h||j?"progress-bar-striped":null),i),style:u(u(u({},x?N:{}),f),{},{width:k+"%"}),role:"progressbar","aria-valuenow":n,"aria-valuemin":o,"aria-valuemax":m,"aria-valuetext":v,"aria-labelledby":y,children:a};return x?r.a.createElement(g,Object(t.a)({},w,T)):r.a.createElement(g,Object(t.a)({},w,{style:N,className:C}),O?a:r.a.createElement("div",T))};p.propTypes=h,p.defaultProps={tag:"div",value:0,min:0,max:100,style:{},barStyle:{}},a.a=p},277:function(e,a,s){"use strict";a.a=s.p+"static/media/2.183f34cb.jpg"},278:function(e,a,s){"use strict";a.a=s.p+"static/media/3.1a057574.jpg"},285:function(e,a,s){"use strict";a.a=s.p+"static/media/1.812bb19e.jpg"},286:function(e,a,s){"use strict";a.a=s.p+"static/media/4.e0c71c30.jpg"},464:function(e,a,s){"use strict";a.a=s.p+"static/media/Circleci.21dabe0d.svg"},506:function(e,a,s){"use strict";a.a=s.p+"static/media/Codepen.34544ba7.svg"},65:function(e,a,s){"use strict";a.a=s.p+"static/media/01.6ac85de7.jpg"},75:function(e,a,s){"use strict";var t=s(3),c=s(8),l=s(0),i=s.n(l),r=s(7),n=s.n(r),o=s(55),m=s.n(o),d=s(56),b={tag:d.tagPropType,inverse:n.a.bool,color:n.a.string,body:n.a.bool,outline:n.a.bool,className:n.a.string,cssModule:n.a.object,innerRef:n.a.oneOfType([n.a.object,n.a.string,n.a.func])},j=function(e){var a=e.className,s=e.cssModule,l=e.color,r=e.body,n=e.inverse,o=e.outline,b=e.tag,j=e.innerRef,u=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(d.mapToCssModules)(m()(a,"card",!!n&&"text-white",!!r&&"card-body",!!l&&(o?"border":"bg")+"-"+l),s);return i.a.createElement(b,Object(t.a)({},u,{className:h,ref:j}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j},79:function(e,a,s){"use strict";var t=s(3),c=s(8),l=s(0),i=s.n(l),r=s(7),n=s.n(r),o=s(55),m=s.n(o),d=s(56),b={tag:d.tagPropType,className:n.a.string,cssModule:n.a.object,innerRef:n.a.oneOfType([n.a.object,n.a.string,n.a.func])},j=function(e){var a=e.className,s=e.cssModule,l=e.innerRef,r=e.tag,n=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(d.mapToCssModules)(m()(a,"card-body"),s);return i.a.createElement(r,Object(t.a)({},n,{className:o,ref:l}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j}}]);
//# sourceMappingURL=139.8585c95c.chunk.js.map