(this.webpackJsonpexplaincodeapp=this.webpackJsonpexplaincodeapp||[]).push([[148],{1419:function(e,s,t){"use strict";t.r(s);var c=t(664),a=t(12),i=t(13),l=t(21),n=t(15),r=t(14),o=t(0),m=t.n(o),d=t(9),j=t(91),b=t(92),h=t(93),x=t(75),u=t(79),O=t(270),p=t(291),f=t(268),N=t(287),g=t(110),v=t(171),y=t(130),w=t(133),k=t(138),C=t(281),S=t(282),D=t(288),A=t(20),M=t.n(A),T=t(493),F=t(71),q=t(65),I=t(66),L=t(72),E=t(70),P=t(84),J=t(573),Y=t(574),B=t(1),U=function(e){Object(n.a)(t,e);var s=Object(r.a)(t);function t(e){var i;return Object(a.a)(this,t),(i=s.call(this,e)).togglemodal=function(){i.setState((function(e){return{modal:!e.modal}}))},i.toggleDropdown=function(){i.setState({dropdownOpen:!i.state.dropdownOpen})},i.scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},i.onChangeCheckbox=function(e,s){var t=Object(c.a)(i.state.selectedContacts);if(e)t.push(s),i.setState({selectedContacts:t});else{var a=t.filter((function(e){return e.id!==s.id}));i.setState({selectedContacts:a})}},i.onSelectAll=function(e){e?i.setState({selectedContacts:i.state.members}):i.setState({selectedContacts:[]})},i.state={members:[{id:1,img:q.a,title:"Calvin Carlo",desc:"This is required when, for example, the final text is not yet available. Dummy"},{id:2,img:I.a,title:"Miriam Walya",desc:"This is required when, for example, the final text is not yet available. Dummy"},{id:3,img:L.a,title:"Jenelia Parker",desc:"This is required when, for example, the final text is not yet available. Dummy"},{id:4,img:E.a,title:"Jack Deo",desc:"This is required when, for example, the final text is not yet available. Dummy"},{id:5,img:F.a,title:"Marya Joseph",desc:"This is required when, for example, the final text is not yet available. Dummy"},{id:6,img:P.a,title:"Maninder Khan",desc:"This is required when, for example, the final text is not yet available. Dummy"},{id:7,img:J.a,title:"Pitambar Das",desc:"This is required when, for example, the final text is not yet available. Dummy"},{id:8,img:Y.a,title:"Cristino Murfy",desc:"This is required when, for example, the final text is not yet available. Dummy"}],widgets:[{id:1,icon:"uil uil-dashboard",className:"navbar-item account-menu px-0",title:"Profile",link:"/page-profile"},{id:2,icon:"uil uil-users-alt",className:"navbar-item account-menu px-0 mt-2",title:"Members",link:"/page-members"},{id:3,icon:"uil uil-file",className:"navbar-item account-menu px-0 mt-2",title:"Portfolio",link:"/page-works"},{id:4,icon:"uil uil-envelope-star",className:"navbar-item account-menu px-0 mt-2 active",title:"Messages",link:"/page-messages"},{id:5,icon:"uil uil-transaction",className:"navbar-item account-menu px-0 mt-2",title:"Payments",link:"/page-payments"},{id:6,icon:"uil uil-setting",className:"navbar-item account-menu px-0 mt-2",title:"Settings",link:"/page-profile-edit"},{id:7,icon:"uil uil-dashboard",className:"navbar-item account-menu px-0 mt-2",title:"Logout",link:"/auth-login-three"}],modal:!1,dropdownOpen:!1,selectedContacts:[]},i.togglemodal.bind(Object(l.a)(i)),i.toggleDropdown.bind(Object(l.a)(i)),i.onChangeCheckbox.bind(Object(l.a)(i)),i}return Object(i.a)(t,[{key:"componentDidMount",value:function(){document.body.classList="",document.getElementById("top-menu").classList.add("nav-light"),window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){var e=this;return Object(B.jsxs)(m.a.Fragment,{children:[Object(B.jsx)("section",{className:"bg-profile d-table w-100 bg-primary",style:{background:"url(".concat(T.a,") center center")},children:Object(B.jsx)(j.a,{children:Object(B.jsx)(b.a,{children:Object(B.jsx)(h.a,{lg:"12",children:Object(B.jsx)(x.a,{className:"public-profile border-0 rounded shadow",style:{zIndex:"1"},children:Object(B.jsx)(u.a,{children:Object(B.jsxs)(b.a,{className:"align-items-center",children:[Object(B.jsx)(h.a,{lg:"2",md:"3",className:"text-md-start text-center",children:Object(B.jsx)("img",{src:F.a,className:"avatar avatar-large rounded-circle shadow d-block mx-auto",alt:""})}),Object(B.jsx)(h.a,{lg:"10",md:"9",children:Object(B.jsxs)(b.a,{className:"align-items-end",children:[Object(B.jsxs)(h.a,{md:"7",className:"text-md-start text-center mt-4 mt-sm-0",children:[Object(B.jsx)("h3",{className:"title mb-0",children:"Krista Joseph"}),Object(B.jsx)("small",{className:"text-muted h6 me-2",children:"Web Developer"}),Object(B.jsxs)("ul",{className:"list-inline mb-0 mt-3",children:[Object(B.jsx)("li",{className:"list-inline-item me-2",children:Object(B.jsxs)(d.b,{to:"#",className:"text-muted",title:"Linkedin",children:[Object(B.jsx)("i",{children:Object(B.jsx)(M.a,{icon:"instagram",className:"fea icon-sm me-2"})}),"krista_joseph"]})}),Object(B.jsx)("li",{className:"list-inline-item ms-1",children:Object(B.jsxs)(d.b,{to:"#",className:"text-muted",title:"Skype",children:[Object(B.jsx)("i",{children:Object(B.jsx)(M.a,{icon:"linkedin",className:"fea icon-sm me-2"})}),"krista_joseph"]})})]})]}),Object(B.jsx)(h.a,{md:"5",className:"text-md-end text-center",children:Object(B.jsxs)("ul",{className:"list-unstyled social-icon social mb-0 mt-4",children:[Object(B.jsx)("li",{className:"list-inline-item me-1",children:Object(B.jsx)(d.b,{to:"#",className:"rounded",children:Object(B.jsx)("i",{children:Object(B.jsx)(M.a,{icon:"user-plus",className:"fea icon-sm fea-social"})})})}),Object(B.jsx)("li",{className:"list-inline-item me-1",children:Object(B.jsx)(d.b,{to:"#",className:"rounded",children:Object(B.jsx)("i",{children:Object(B.jsx)(M.a,{icon:"message-circle",className:"fea icon-sm fea-social"})})})}),Object(B.jsx)("li",{className:"list-inline-item me-1",children:Object(B.jsx)(d.b,{to:"#",className:"rounded",children:Object(B.jsx)("i",{children:Object(B.jsx)(M.a,{icon:"bell",className:"fea icon-sm fea-social"})})})}),Object(B.jsx)("li",{className:"list-inline-item me-1",children:Object(B.jsx)(d.b,{to:"/page-profile-edit",className:"rounded",children:Object(B.jsx)("i",{children:Object(B.jsx)(M.a,{icon:"settings",className:"fea icon-sm fea-social"})})})})]})})]})})]})})})})})})}),Object(B.jsx)("section",{className:"section mt-60",children:Object(B.jsx)(j.a,{className:"mt-lg-3",children:Object(B.jsxs)(b.a,{children:[Object(B.jsx)(h.a,{lg:"4",md:"6",xs:"12",className:"d-lg-block d-none",children:Object(B.jsxs)("div",{className:"sidebar sticky-bar p-4 rounded shadow",children:[Object(B.jsxs)("div",{className:"widget",children:[Object(B.jsx)("h5",{className:"widget-title",children:"Followers :"}),Object(B.jsxs)("div",{className:"row mt-4",children:[Object(B.jsxs)("div",{className:"col-6 text-center",children:[Object(B.jsx)(M.a,{icon:"user-plus",className:"fea icon-ex-md text-primary mb-1"}),Object(B.jsx)("h5",{className:"mb-0",children:"2588"}),Object(B.jsx)("p",{className:"text-muted mb-0",children:"Followers"})]}),Object(B.jsxs)("div",{className:"col-6 text-center",children:[Object(B.jsx)(M.a,{icon:"users",className:"fea icon-ex-md text-primary mb-1"}),Object(B.jsx)("h5",{className:"mb-0",children:"454"}),Object(B.jsx)("p",{className:"text-muted mb-0",children:"Following"})]})]})]}),Object(B.jsxs)("div",{className:"widget mt-4 pt-2",children:[Object(B.jsx)("h5",{className:"widget-title",children:"Projects :"}),Object(B.jsxs)("div",{className:"progress-box mt-4",children:[Object(B.jsx)("h6",{className:"title text-muted",children:"Progress"}),Object(B.jsx)(O.a,{value:50,color:"primary",barClassName:"position-relative",children:Object(B.jsx)("div",{className:"progress-value d-block text-muted h6",children:"24 / 48"})})]})]}),Object(B.jsx)("div",{className:"widget mt-4",children:Object(B.jsx)("ul",{className:"list-unstyled sidebar-nav mb-0",id:"navmenu-nav",children:this.state.widgets.map((function(e,s){return Object(B.jsx)("li",{className:e.className,children:Object(B.jsxs)(d.b,{to:e.link,className:"navbar-link d-flex rounded shadow align-items-center py-2 px-4",children:[Object(B.jsx)("span",{className:"h4 mb-0",children:Object(B.jsx)("i",{className:e.icon})}),Object(B.jsx)("h6",{className:"mb-0 ms-2",children:e.title})]})},s)}))})}),Object(B.jsxs)("div",{className:"widget mt-4 pt-2",children:[Object(B.jsx)("h5",{className:"widget-title",children:"Follow me :"}),Object(B.jsxs)("ul",{className:"list-unstyled social-icon mb-0 mt-4",children:[Object(B.jsx)("li",{className:"list-inline-item me-1",children:Object(B.jsx)(d.b,{to:"#",className:"rounded",children:Object(B.jsx)("i",{children:Object(B.jsx)(M.a,{icon:"facebook",className:"fea icon-sm fea-social"})})})}),Object(B.jsx)("li",{className:"list-inline-item me-1",children:Object(B.jsx)(d.b,{to:"#",className:"rounded",children:Object(B.jsx)("i",{children:Object(B.jsx)(M.a,{icon:"instagram",className:"fea icon-sm fea-social"})})})}),Object(B.jsx)("li",{className:"list-inline-item me-1",children:Object(B.jsx)(d.b,{to:"#",className:"rounded",children:Object(B.jsx)("i",{children:Object(B.jsx)(M.a,{icon:"twitter",className:"fea icon-sm fea-social"})})})}),Object(B.jsx)("li",{className:"list-inline-item me-1",children:Object(B.jsx)(d.b,{to:"#",className:"rounded",children:Object(B.jsx)("i",{children:Object(B.jsx)(M.a,{icon:"linkedin",className:"fea icon-sm fea-social"})})})}),Object(B.jsx)("li",{className:"list-inline-item me-1",children:Object(B.jsx)(d.b,{to:"#",className:"rounded",children:Object(B.jsx)("i",{children:Object(B.jsx)(M.a,{icon:"github",className:"fea icon-sm fea-social"})})})}),Object(B.jsx)("li",{className:"list-inline-item me-1",children:Object(B.jsx)(d.b,{to:"#",className:"rounded",children:Object(B.jsx)("i",{children:Object(B.jsx)(M.a,{icon:"youtube",className:"fea icon-sm fea-social"})})})}),Object(B.jsx)("li",{className:"list-inline-item me-1",children:Object(B.jsx)(d.b,{to:"#",className:"rounded",children:Object(B.jsx)("i",{children:Object(B.jsx)(M.a,{icon:"gitlab",className:"fea icon-sm fea-social"})})})})]})]})]})}),Object(B.jsx)(h.a,{lg:8,xs:12,children:Object(B.jsxs)("div",{className:"rounded shadow p-4",children:[Object(B.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(B.jsx)("h5",{className:"mb-0",children:"Messages:"}),Object(B.jsxs)(d.b,{to:"#",className:"btn btn-primary",onClick:this.togglemodal,children:[Object(B.jsx)("i",{children:Object(B.jsx)(M.a,{icon:"plus",className:"fea icon-sm"})})," ","Compose"]})]}),Object(B.jsxs)(p.a,{tabIndex:"-1",centered:!0,isOpen:this.state.modal,toggle:this.togglemodal,contentClassName:"rounded shadow border-0",children:[Object(B.jsx)(f.a,{toggle:this.togglemodal,children:"New Message"}),Object(B.jsx)(N.a,{className:"p-4",children:Object(B.jsx)(g.a,{children:Object(B.jsxs)(b.a,{children:[Object(B.jsx)(h.a,{md:12,children:Object(B.jsxs)(v.a,{children:[Object(B.jsxs)(y.a,{className:"form-label",children:["Your Name ",Object(B.jsx)("span",{className:"text-danger",children:"*"})]}),Object(B.jsxs)("div",{className:"position-relative",children:[Object(B.jsx)(M.a,{icon:"user",className:"fea icon-sm icons"}),Object(B.jsx)(w.a,{name:"name",id:"name",type:"text",className:"form-control ps-5",placeholder:"First Name :"})]})]})}),Object(B.jsx)(h.a,{md:12,children:Object(B.jsxs)(v.a,{children:[Object(B.jsx)(y.a,{className:"form-label",children:"Subject"}),Object(B.jsxs)("div",{className:"position-relative",children:[Object(B.jsx)(M.a,{icon:"book",className:"fea icon-sm icons"}),Object(B.jsx)("input",{name:"subject",id:"subject",className:"form-control ps-5",placeholder:"Your subject :"})]})]})}),Object(B.jsx)(h.a,{md:12,children:Object(B.jsxs)(v.a,{className:"mb-0",children:[Object(B.jsx)(y.a,{className:"form-label",children:"Comments"}),Object(B.jsxs)("div",{className:"position-relative",children:[Object(B.jsx)(M.a,{icon:"message-circle",className:"fea icon-sm icons"}),Object(B.jsx)("textarea",{name:"comments",id:"comments",rows:"4",className:"form-control ps-5",placeholder:"Your Message :"})]})]})})]})})}),Object(B.jsx)("div",{className:"border-top p-4",children:Object(B.jsx)("button",{type:"button",className:"btn btn-primary",children:"Send Now"})})]}),Object(B.jsxs)("div",{className:"d-flex border-bottom align-items-center justify-content-between bg-light mt-4 p-3",children:[Object(B.jsx)("div",{className:"form-check ps-0",children:Object(B.jsx)("div",{className:"mb-0",children:Object(B.jsxs)("div",{className:"form-check",children:[Object(B.jsx)("input",{type:"checkbox",className:"form-check-input",id:"checkAll",onChange:function(s){e.onSelectAll(s.target.checked)}}),Object(B.jsx)("label",{className:"form-check-label",htmlFor:"checkAll",children:"Select all"})]})})}),Object(B.jsxs)(k.a,{color:"primary",className:"btn-group me-2 mt-2",isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown,children:[Object(B.jsx)(C.a,{caret:!0,color:"primary",children:"Action"}),Object(B.jsxs)(S.a,{children:[Object(B.jsxs)(D.a,{children:[Object(B.jsx)(M.a,{icon:"eye-off",className:"fea icon-sm"}),"Mark Unread"]}),Object(B.jsxs)(D.a,{children:[Object(B.jsx)(M.a,{icon:"corner-up-left",className:"fea icon-sm"}),"Reply"]}),Object(B.jsxs)(D.a,{children:[Object(B.jsx)(M.a,{icon:"corner-up-right",className:"fea icon-sm"}),"Forward"]}),Object(B.jsx)("div",{className:"dropdown-divider"}),Object(B.jsxs)(d.b,{to:"#",className:"dropdown-item text-danger",children:[Object(B.jsx)(M.a,{icon:"trash-2",className:"fea icon-sm"}),"Delete"]})]})]})]}),this.state.members.map((function(s,t){return Object(B.jsxs)("div",{className:"d-flex border-bottom p-3",children:[Object(B.jsx)("div",{className:"form-check ps-0",children:Object(B.jsx)("div",{className:"mb-0",children:Object(B.jsxs)("div",{className:"form-check",children:[Object(B.jsx)("input",{type:"checkbox",className:"form-check-input",id:"mail"+t,checked:e.state.selectedContacts.includes(s),onChange:function(t){e.onChangeCheckbox(t.target.checked,s)}}),Object(B.jsx)("label",{className:"form-check-label",htmlFor:"mail"+t})]})})}),Object(B.jsx)(d.b,{to:"#",children:Object(B.jsxs)("div",{className:"d-flex ms-2",children:[Object(B.jsx)("img",{src:s.img,className:"avatar avatar-md-sm rounded-pill shadow",alt:""}),Object(B.jsxs)("div",{className:"flex-1 ms-3",children:[Object(B.jsx)("h6",{className:"text-dark",children:s.title}),Object(B.jsx)("p",{className:"text-muted mb-0",children:s.desc})]})]})})]},t)})),Object(B.jsxs)("div",{className:"d-flex align-items-center justify-content-between mt-4",children:[Object(B.jsx)("span",{className:"text-muted h6 mb-0",children:"Showing 8 out of 33"}),Object(B.jsx)(d.b,{to:"#",className:"btn btn-primary",children:"See more"})]})]})})]})})})]})}}]),t}(o.Component);s.default=U},475:function(e,s,t){"use strict";function c(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,c=new Array(s);t<s;t++)c[t]=e[t];return c}t.d(s,"a",(function(){return c}))},493:function(e,s,t){"use strict";s.a=t.p+"static/media/bg.7fe61454.png"},494:function(e,s,t){"use strict";t.d(s,"a",(function(){return a}));var c=t(475);function a(e,s){if(e){if("string"===typeof e)return Object(c.a)(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(c.a)(e,s):void 0}}},573:function(e,s,t){"use strict";s.a=t.p+"static/media/07.e3f0e9f9.jpg"},574:function(e,s,t){"use strict";s.a=t.p+"static/media/08.28396265.jpg"},65:function(e,s,t){"use strict";s.a=t.p+"static/media/01.6ac85de7.jpg"},66:function(e,s,t){"use strict";s.a=t.p+"static/media/02.7df14e12.jpg"},664:function(e,s,t){"use strict";t.d(s,"a",(function(){return i}));var c=t(475);var a=t(494);function i(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},70:function(e,s,t){"use strict";s.a=t.p+"static/media/04.35463172.jpg"},71:function(e,s,t){"use strict";s.a=t.p+"static/media/05.a7ab2c82.jpg"},72:function(e,s,t){"use strict";s.a=t.p+"static/media/03.ba5f8794.jpg"},84:function(e,s,t){"use strict";s.a=t.p+"static/media/06.7365b7fa.jpg"}}]);
//# sourceMappingURL=148.bde992b7.chunk.js.map