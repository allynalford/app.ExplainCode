(this.webpackJsonpexplaincodeapp=this.webpackJsonpexplaincodeapp||[]).push([[209],{1447:function(e,t,c){"use strict";c.r(t);var s=c(12),a=c(13),i=c(21),n=c(15),l=c(14),r=c(0),m=c.n(r),d=c(9),o=c(91),j=c(92),b=c(93),h=c(106),x=c(107),O=c(75),u=c(79),p=c(113),N=c(110),v=c(130),f=c(133),g=c(20),w=c.n(g),y=c(852),k=c(1),C=function(e){Object(n.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(s.a)(this,c),(a=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},a.state={pathItems:[{id:1,name:"Landrick",link:"/index"},{id:2,name:"Page",link:"#"},{id:3,name:"Contact",link:"#"},{id:4,name:"Contact Three"}],Contactvisible:!1},a.handleSubmit=a.handleSubmit.bind(Object(i.a)(a)),a.sendMail.bind(Object(i.a)(a)),a.callNumber.bind(Object(i.a)(a)),a}return Object(a.a)(c,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({Contactvisible:!0})}},{key:"componentDidMount",value:function(){document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"sendMail",value:function(){window.location.href="mailto:contact@example.com"}},{key:"callNumber",value:function(){window.location.href="tel:+152534-468-854"}},{key:"render",value:function(){var e=this,t=this.state.pathItems.length;return Object(k.jsxs)(m.a.Fragment,{children:[Object(k.jsx)("section",{className:"bg-half bg-light d-table w-100",style:{background:"url(".concat(y.a,") center center")},children:Object(k.jsx)(o.a,{children:Object(k.jsx)(j.a,{className:"justify-content-center",children:Object(k.jsx)(b.a,{lg:"12",className:"text-center",children:Object(k.jsxs)("div",{className:"page-next-level",children:[Object(k.jsx)("h4",{className:"title",children:" Contact Us"}),Object(k.jsx)("div",{className:"page-next",children:Object(k.jsx)("nav",{className:"d-inline-block",children:Object(k.jsx)(h.a,{"aria-label":"breadcrumb",listClassName:"bg-white rounded shadow mb-0",children:this.state.pathItems.map((function(e,c){return e.id!==t?Object(k.jsx)(x.a,{children:Object(k.jsx)(d.b,{to:e.link,className:"text-uppercase fw-bold text-dark me-1",children:e.name})},c):Object(k.jsx)(x.a,{active:!0,"aria-current":"page",children:e.name},c)}))})})})]})})})})}),Object(k.jsx)("div",{className:"form-icon position-relative",children:Object(k.jsx)("div",{className:"shape overflow-hidden text-white",children:Object(k.jsx)("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(k.jsx)("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})})})}),Object(k.jsxs)("section",{className:"section",children:[Object(k.jsx)(o.a,{children:Object(k.jsxs)(j.a,{children:[Object(k.jsx)(b.a,{lg:4,md:6,className:"mt-4 pt-2",children:Object(k.jsx)(O.a,{className:"shadow rounded border-0",children:Object(k.jsxs)(u.a,{className:"py-5",children:[Object(k.jsx)("h4",{className:"card-title",children:"Get In Touch !"}),Object(k.jsxs)("div",{className:"custom-form mt-3",children:[Object(k.jsx)("div",{id:"message"}),Object(k.jsx)(p.a,{color:"info",isOpen:this.state.Contactvisible,toggle:function(){e.setState({Contactvisible:!e.state.Contactvisible})},children:"Contact details send successfully."}),Object(k.jsxs)(N.a,{method:"post",onSubmit:this.handleSubmit,name:"contact-form",id:"contact-form",children:[Object(k.jsxs)(j.a,{children:[Object(k.jsx)(b.a,{md:6,children:Object(k.jsxs)("div",{className:"mb-3",children:[Object(k.jsxs)(v.a,{className:"form-label",children:["Your Name ",Object(k.jsx)("span",{className:"text-danger",children:"*"})]}),Object(k.jsx)("div",{className:"form-icon position-relative",children:Object(k.jsx)("i",{children:Object(k.jsx)(w.a,{icon:"user",className:"fea icon-sm icons"})})}),Object(k.jsx)(f.a,{name:"name",id:"name",type:"text",className:"form-control ps-5",placeholder:"First Name :",required:!0})]})}),Object(k.jsx)(b.a,{md:6,children:Object(k.jsxs)("div",{className:"mb-3",children:[Object(k.jsxs)(v.a,{className:"form-label",children:["Your Email"," ",Object(k.jsx)("span",{className:"text-danger",children:"*"})]}),Object(k.jsx)("div",{className:"form-icon position-relative",children:Object(k.jsx)("i",{children:Object(k.jsx)(w.a,{icon:"mail",className:"fea icon-sm icons"})})}),Object(k.jsx)(f.a,{name:"email",id:"email",type:"email",className:"form-control ps-5",placeholder:"Your email :",required:!0})]})}),Object(k.jsx)(b.a,{md:12,children:Object(k.jsxs)("div",{className:"mb-3",children:[Object(k.jsx)(v.a,{className:"form-label",children:"Subject "}),Object(k.jsx)("div",{className:"form-icon position-relative",children:Object(k.jsx)("i",{children:Object(k.jsx)(w.a,{icon:"book",className:"fea icon-sm icons"})})}),Object(k.jsx)(f.a,{name:"subject",id:"subject",type:"text",className:"form-control ps-5",placeholder:"Subject",required:!0})]})}),Object(k.jsx)(b.a,{md:12,children:Object(k.jsxs)("div",{className:"mb-3",children:[Object(k.jsx)(v.a,{className:"form-label",children:"Comments"}),Object(k.jsx)("div",{className:"form-icon position-relative",children:Object(k.jsx)("i",{children:Object(k.jsx)(w.a,{icon:"message-circle",className:"fea icon-sm icons"})})}),Object(k.jsx)("textarea",{name:"comments",id:"comments",rows:"4",className:"form-control ps-5",placeholder:"Your Message :"})]})})]}),Object(k.jsx)(j.a,{children:Object(k.jsxs)(b.a,{sm:12,className:"text-center",children:[Object(k.jsx)("div",{className:"d-grid",children:Object(k.jsx)("input",{type:"submit",id:"submit",name:"send",className:"submitBnt btn btn-primary btn-block",value:"Send Message"})}),Object(k.jsx)("div",{id:"simple-msg"})]})})]})]})]})})}),Object(k.jsx)(b.a,{lg:8,md:6,className:"ps-md-3 pe-md-3 mt-4 pt-2",children:Object(k.jsx)(O.a,{className:"map map-height-two rounded map-gray border-0",children:Object(k.jsx)(u.a,{className:"p-0",children:Object(k.jsx)("iframe",{title:"test",src:"//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin",style:{border:0},className:"rounded",allowFullScreen:""})})})})]})}),Object(k.jsx)(o.a,{className:"mt-100 mt-60",children:Object(k.jsxs)(j.a,{children:[Object(k.jsx)(b.a,{md:4,children:Object(k.jsxs)(O.a,{className:"border-0 text-center features feature-clean",children:[Object(k.jsx)("div",{className:"icons text-primary text-center mx-auto",children:Object(k.jsx)("i",{className:"uil uil-phone d-block rounded h3 mb-0"})}),Object(k.jsxs)("div",{className:"content mt-3",children:[Object(k.jsx)("h5",{className:"fw-bold",children:"Phone"}),Object(k.jsx)("p",{className:"text-muted",children:"Start working with Landrick that can provide everything"}),Object(k.jsx)(d.b,{to:"#",onClick:this.callNumber,className:"text-primary",children:"+152 534-468-854"})]})]})}),Object(k.jsx)(b.a,{md:4,className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(k.jsxs)(O.a,{className:"border-0 text-center features feature-clean",children:[Object(k.jsx)("div",{className:"icons text-primary text-center mx-auto",children:Object(k.jsx)("i",{className:"uil uil-envelope d-block rounded h3 mb-0"})}),Object(k.jsxs)("div",{className:"content mt-3",children:[Object(k.jsx)("h5",{className:"fw-bold",children:"Email"}),Object(k.jsx)("p",{className:"text-muted",children:"Start working with Landrick that can provide everything"}),Object(k.jsx)(d.b,{to:"#",onClick:this.sendMail,className:"text-primary",children:"contact@example.com"})]})]})}),Object(k.jsx)(b.a,{md:4,className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(k.jsxs)(O.a,{className:"border-0 text-center features feature-clean",children:[Object(k.jsx)("div",{className:"icons text-primary text-center mx-auto",children:Object(k.jsx)("i",{className:"uil uil-map-marker d-block rounded h3 mb-0"})}),Object(k.jsxs)("div",{className:"content mt-3",children:[Object(k.jsx)("h5",{className:"fw-bold",children:"Location"}),Object(k.jsxs)("p",{className:"text-muted",children:["C/54 Northwest Freeway, Suite 558, ",Object(k.jsx)("br",{}),"Houston, USA 485"]}),Object(k.jsx)(d.b,{to:"#",className:"video-play-icon text-primary lightbox",children:"View on Google map"})]})]})})]})})]})]})}}]),c}(r.Component);t.default=C},852:function(e,t,c){"use strict";t.a=c.p+"static/media/contact-detail.093590b1.jpg"}}]);
//# sourceMappingURL=209.a4f950e1.chunk.js.map