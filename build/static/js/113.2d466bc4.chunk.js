(this.webpackJsonpexplaincodeapp=this.webpackJsonpexplaincodeapp||[]).push([[113],{115:function(e,t,s){"use strict";t.a=s.p+"static/media/google.fc295ce9.svg"},116:function(e,t,s){"use strict";t.a=s.p+"static/media/lenovo.b0f22f8b.svg"},117:function(e,t,s){"use strict";t.a=s.p+"static/media/amazon.b99a7cc4.svg"},118:function(e,t,s){"use strict";t.a=s.p+"static/media/paypal.2a7be383.svg"},121:function(e,t,s){"use strict";t.a=s.p+"static/media/shopify.a3ea7712.svg"},131:function(e,t,s){"use strict";t.a=s.p+"static/media/spotify.8f600330.svg"},1489:function(e,t,s){"use strict";s.r(t);var a=s(12),i=s(13),c=s(15),n=s(14),r=s(0),l=s.n(r),o=s(91),d=s(92),m=s(93),j=s(623),h=s.n(j),u=s(1),b=function(e){Object(c.a)(s,e);var t=Object(n.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).props=e,i.scrollTargetIds=i.props.scrollTargetIds,i.activeNavClass=i.props.activeNavClass,i.scrollDuration=Number(i.props.scrollDuration)||1e3,i.headerBackground="true"===i.props.headerBackground,i.props.router&&"HashRouter"===i.props.router?(i.homeDefaultLink="#/",i.hashIdentifier="#/#"):(i.homeDefaultLink="/",i.hashIdentifier="#"),i}return Object(i.a)(s,[{key:"easeInOutQuad",value:function(e,t,s,a){return(e/=a/2)<1?s/2*e*e+t:-s/2*(--e*(e-2)-1)+t}},{key:"scrollTo",value:function(e,t,s){var a=this,i=t-e,c=0;!function t(){c+=10;var n=a.easeInOutQuad(c,e,i,s);window.scrollTo(0,n),c<s&&setTimeout(t,10)}()}},{key:"getNavLinkElement",value:function(e){return document.querySelector("a[href='".concat(this.hashIdentifier).concat(e,"']"))}},{key:"getNavToSectionID",value:function(e){return e.includes(this.hashIdentifier)?e.replace(this.hashIdentifier,""):""}},{key:"componentDidMount",value:function(){var e=this;document.querySelector("a[href='".concat(this.homeDefaultLink,"']"))&&document.querySelector("a[href='".concat(this.homeDefaultLink,"']")).addEventListener("click",(function(t){t.preventDefault(),e.scrollTo(window.pageYOffset,0,e.scrollDuration),window.location.hash=""})),document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((function(t){t.addEventListener("click",(function(s){s.preventDefault();var a=e.getNavToSectionID(t.getAttribute("href"));if(a){var i=document.getElementById(a).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0);e.scrollTo(window.pageYOffset,i,e.scrollDuration)}else e.scrollTo(window.pageYOffset,0,e.scrollDuration)}))})),window.addEventListener("scroll",(function(){var t;e.scrollTargetIds.forEach((function(s,a){document.getElementById(s)&&(t=document.getElementById(s).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0),window.pageYOffset>=t&&window.pageYOffset<t+document.getElementById(s).scrollHeight?(e.getNavLinkElement(s).classList.add(e.activeNavClass),e.getNavLinkElement(s).parentNode.classList.add(e.activeNavClass),e.clearOtherNavLinkActiveStyle(s)):(e.getNavLinkElement(s).classList.remove(e.activeNavClass),e.getNavLinkElement(s).parentNode.classList.remove(e.activeNavClass)),window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&a===e.scrollTargetIds.length-1&&(e.getNavLinkElement(s).classList.add(e.activeNavClass),e.getNavLinkElement(s).parentNode.classList.add(e.activeNavClass),e.clearOtherNavLinkActiveStyle(s)))}))}))}},{key:"clearOtherNavLinkActiveStyle",value:function(e){var t=this;this.scrollTargetIds.forEach((function(s,a){s!==e&&(t.getNavLinkElement(s).classList.remove(t.activeNavClass),t.getNavLinkElement(s).parentNode.classList.remove(t.activeNavClass))}))}},{key:"render",value:function(){return Object(u.jsx)("div",{"data-nav":"list",className:this.props.className,children:this.props.children})}}]),s}(r.Component),x=s.p+"static/media/bg01.fca1b3eb.png",p=function(e){Object(c.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(u.jsx)(l.a.Fragment,{children:Object(u.jsx)("section",{className:"bg-home rtl-personal-hero bg-light d-flex align-items-center",style:{background:"url(".concat(x,") center center")},id:"home",children:Object(u.jsx)(o.a,{children:Object(u.jsx)(d.a,{className:"align-items-center",children:Object(u.jsx)(m.a,{lg:"8",md:"9",children:Object(u.jsxs)("div",{className:"title-heading mt-4",children:[Object(u.jsxs)("h1",{className:"display-3 fw-bold mb-3",children:["Here I'm ",Object(u.jsx)("br",{}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)("span",{className:"text-primary element",children:"Calvin Carlo"}),Object(u.jsx)(h.a.Backspace,{count:15,delay:200}),Object(u.jsx)("span",{className:"text-primary element",children:"UI/UX Designer"}),Object(u.jsx)(h.a.Backspace,{count:15,delay:200}),Object(u.jsx)("span",{className:"text-primary element",children:"Web Developer"})]})]}),Object(u.jsx)("p",{className:"para-desc text-muted",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."}),Object(u.jsx)("div",{className:"mt-4 pt-2",children:Object(u.jsxs)(b,{scrollTargetIds:["portfolio","contact"],activeNavClass:"active",scrollDuration:"800",headerBackground:"true",children:[Object(u.jsxs)("a",{href:"#portfolio",className:"btn btn-primary mt-2 me-2",children:[Object(u.jsx)("i",{className:"uil uil-camera"})," View Portfolio"]}),Object(u.jsxs)("a",{href:"#contact",className:"btn btn-outline-primary mt-2",children:[Object(u.jsx)("i",{className:"uil uil-cloud-download"})," Hire Me"]})]})})]})})})})})})}}]),s}(r.Component),O=s(270),g=s(75),v=s(79),f=s(9),N=s(20),y=s.n(N),k=s(700),w=(s(588),s(60)),I=s(796),L=s.p+"static/media/1.342ebd02.jpg",C=s.p+"static/media/2.49cbf9b8.jpg",S=s.p+"static/media/3.808d058f.jpg",T=s.p+"static/media/4.6f49d200.jpg",E=s.p+"static/media/5.3d09a5fd.jpg",D=s.p+"static/media/6.cf45bd7e.jpg",B=[L,C,S,T,E,D],A=function(e){Object(c.a)(s,e);var t=Object(n.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={projects:[{image:L,title:"Shifting Perspective",subject:"Studio",author:"Thomas Brewer",date:"13th August, 2019"},{image:C,title:"Colors Magazine",subject:"Web Design",author:"Thomas Brewer",date:"13th August, 2019"},{image:S,title:"Spa Cosmetics",subject:"Developing",author:"Thomas Brewer",date:"13th August, 2019"},{image:T,title:"Riser Coffee",subject:"Branding",author:"Thomas Brewer",date:"13th August, 2019"},{image:E,title:"Dancing With My Self",subject:"Photography",author:"Thomas Brewer",date:"13th August, 2019"},{image:D,title:"New Trends in SEO",subject:"Business",author:"Thomas Brewer",date:"13th August, 2019"}],processes:[{id:1,title:"Discuss The Project",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",link:"#"},{id:2,title:"Develop & Elaborate",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",link:"#"},{id:3,title:"Final Approvement",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",link:"#"}],photoIndex:0,isOpen:!1},i}return Object(i.a)(s,[{key:"render",value:function(){var e=this,t=this.state,s=t.photoIndex,a=t.isOpen;return Object(u.jsx)(l.a.Fragment,{children:Object(u.jsxs)("section",{className:"section",children:[Object(u.jsx)(o.a,{children:Object(u.jsxs)(d.a,{className:"align-items-center",children:[Object(u.jsx)(m.a,{md:"6",children:Object(u.jsxs)("div",{className:"section-title",children:[Object(u.jsx)("h4",{className:"title",children:"About Me"}),Object(u.jsx)("h6",{className:"text-primary mb-4",children:"I'm Passionate Web Designer"}),Object(u.jsx)("p",{className:"text-muted mb-0",children:"Start working with landrick that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts."}),Object(u.jsx)("div",{className:"mt-4",children:Object(u.jsxs)(f.b,{to:"#contact",className:"btn btn-primary mouse-down",children:[Object(u.jsx)("i",{className:"uil uil-phone"})," Contact Me"]})})]})}),Object(u.jsx)(m.a,{md:"6",className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(u.jsxs)("div",{className:"ms-md-4",children:[Object(u.jsxs)("div",{className:"progress-box",children:[Object(u.jsx)("h6",{className:"title text-muted",children:"WordPress"}),Object(u.jsx)(O.a,{value:84,color:"primary",barClassName:"position-relative",children:Object(u.jsx)("div",{className:"progress-value d-block text-muted h6",children:"84%"})})]}),Object(u.jsxs)("div",{className:"progress-box mt-4",children:[Object(u.jsx)("h6",{className:"title text-muted",children:"PHP / MYSQL"}),Object(u.jsx)(O.a,{value:75,color:"primary",barClassName:"position-relative",children:Object(u.jsx)("div",{className:"progress-value d-block text-muted h6",children:"75%"})})]}),Object(u.jsxs)("div",{className:"progress-box mt-4",children:[Object(u.jsx)("h6",{className:"title text-muted",children:"Angular / JavaScript"}),Object(u.jsx)(O.a,{value:79,color:"primary",barClassName:"position-relative",children:Object(u.jsx)("div",{className:"progress-value d-block text-muted h6",children:"79%"})})]}),Object(u.jsxs)("div",{className:"progress-box mt-4",children:[Object(u.jsx)("h6",{className:"title text-muted",children:"HTML"}),Object(u.jsx)(O.a,{value:95,color:"primary",barClassName:"position-relative",children:Object(u.jsx)("div",{className:"progress-value d-block text-muted h6",children:"95%"})})]}),Object(u.jsxs)("div",{className:"progress-box mt-4",children:[Object(u.jsx)("h6",{className:"title text-muted",children:"CSS"}),Object(u.jsx)(O.a,{value:93,color:"primary",barClassName:"position-relative",children:Object(u.jsx)("div",{className:"progress-value d-block text-muted h6",children:"93%"})})]})]})})]})}),Object(u.jsxs)(o.a,{className:"mt-100 mt-60",id:"portfolio",children:[Object(u.jsx)(w.a,{isLeft:!0,title:"My Work & Portfolio",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(u.jsxs)(d.a,{children:[this.state.projects.map((function(t,s){return Object(u.jsx)(m.a,{lg:"4",md:"6",className:"mt-4 pt-2",children:Object(u.jsx)(g.a,{className:"border-0 work-container work-modern position-relative d-block overflow-hidden rounded",children:Object(u.jsxs)(v.a,{className:"p-0",children:[Object(u.jsx)("img",{src:t.image,className:"img-fluid",alt:"work"}),Object(u.jsx)("div",{className:"overlay-work bg-dark"}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h5",{className:"mb-0",children:Object(u.jsx)(f.b,{to:"page-work-detail",className:"text-white title",children:t.title})}),Object(u.jsx)("h6",{className:"text-light tag mb-0",children:t.subject})]}),Object(u.jsx)("div",{className:"icons text-center",children:Object(u.jsx)(f.b,{to:"#",onClick:function(){return e.setState({isOpen:!0,photoIndex:s})},className:"text-primary work-icon bg-white d-inline-block rounded-pill mfp-image",children:Object(u.jsx)("i",{children:Object(u.jsx)(y.a,{icon:"camera",className:"fea icon-sm"})})})})]})})},s)})),Object(u.jsx)(m.a,{className:"mt-4 pt-2",children:Object(u.jsxs)(f.b,{to:"page-work-modern",className:"btn btn-outline-primary",children:["See More ",Object(u.jsx)("i",{className:"mdi mdi-chevron-right"})]})})]}),a&&Object(u.jsx)(k.a,{mainSrc:B[s],nextSrc:B[(s+1)%B.length],prevSrc:B[(s+B.length-1)%B.length],imagePadding:100,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(s+B.length-1)%B.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(s+1)%B.length})}})]}),Object(u.jsxs)(o.a,{className:"mt-100 mt-60",children:[Object(u.jsx)(w.a,{isLeft:!0,title:"Work Process",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(u.jsx)(d.a,{children:Object(u.jsx)(I.a,{processes:this.state.processes})})]})]})})}}]),s}(r.Component),M=s(21),q=s(120),P=s.n(q),H=s(172),F=s(132),Y=s(177),W=s.p+"static/media/bg02.70d825ea.jpg",R=s(65),J=s(66),z=s(72),Q=s(70),U=s(71),G=s(84),V=function(e){Object(c.a)(s,e);var t=Object(n.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={clients:[{id:1,image:R.a,name:"Thomas Israel",post:"C.E.O",rating:5,desc:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."},{id:2,image:J.a,name:"Carl Oliver",post:"P.A",rating:4,desc:"There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.."},{id:3,image:z.a,name:"Barbara McIntosh",post:"M.D",rating:3.5,desc:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."},{id:4,image:Q.a,name:"Jill Webb",post:"Manager",rating:4.5,desc:"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find"},{id:5,image:U.a,name:" Dean Tolle",post:"Developer",rating:5,desc:"There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories."},{id:6,image:G.a,name:"Christa Smith",post:"Designer",rating:5,desc:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text."}],activeIndex:0},i.onExiting=i.onExiting.bind(Object(M.a)(i)),i.onExited=i.onExited.bind(Object(M.a)(i)),i.next=i.next.bind(Object(M.a)(i)),i.previous=i.previous.bind(Object(M.a)(i)),i.goToIndex=i.goToIndex.bind(Object(M.a)(i)),i}return Object(i.a)(s,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===this.state.clients.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?this.state.clients.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this;return Object(u.jsx)(l.a.Fragment,{children:Object(u.jsxs)("section",{className:"section",style:{background:"url(".concat(W,") center center")},children:[Object(u.jsx)("div",{className:"bg-overlay"}),Object(u.jsx)(o.a,{children:Object(u.jsx)(d.a,{className:"justify-content-center",children:Object(u.jsx)(m.a,{lg:"7",className:"text-center",children:Object(u.jsxs)(H.a,{activeIndex:this.state.activeIndex,next:this.next,previous:this.previous,children:[this.state.clients.map((function(t,s){return Object(u.jsx)(F.a,{onExiting:e.onExiting(),onExited:e.onExited(),children:Object(u.jsxs)("div",{className:"customer-testi text-center",children:[Object(u.jsxs)("p",{className:"text-light para-dark h6 fst-italic",children:['" ',t.desc,' "']}),Object(u.jsx)(P.a,{rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",className:"list-unstyled mb-0 mt-3"}),Object(u.jsxs)("h6",{className:"text-light title-dark",children:[" ",t.name," "]}),Object(u.jsx)("img",{src:t.image,style:{height:65,width:65},className:"img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow",alt:"testimonial"})]},s)},s+1)})),Object(u.jsxs)(Y.a,{direction:"prev",onClickHandler:this.previous,children:[Object(u.jsx)("span",{className:"carousel-control-prev-icon"}),Object(u.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(u.jsxs)(Y.a,{direction:"next",onClickHandler:this.next,children:[Object(u.jsx)("span",{className:"carousel-control-next-icon"}),Object(u.jsx)("span",{className:"sr-only",children:"Next"})]})]})})})})]})})}}]),s}(r.Component),X=s(113),K=s(110),Z=s(130),$=s(133),_=s(271),ee=function(e){Object(c.a)(s,e);var t=Object(n.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={blogs:[{id:1,image:L,title:"Design your apps in your own way",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"},{id:2,image:C,title:"How apps is changing the IT world",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"},{id:3,image:S,title:"Smartest Applications for Business",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"}],Contactvisible:!1},i.handleSubmit=i.handleSubmit.bind(Object(M.a)(i)),i}return Object(i.a)(s,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({Contactvisible:!0})}},{key:"render",value:function(){var e=this;return Object(u.jsx)(l.a.Fragment,{children:Object(u.jsxs)("section",{className:"section",children:[Object(u.jsxs)(o.a,{children:[Object(u.jsx)(w.a,{isLeft:!0,title:"Latest News",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)(_.a,{blogs:this.state.blogs}),Object(u.jsx)(m.a,{xs:"12",className:"mt-4 pt-2",children:Object(u.jsxs)(f.b,{to:"page-blog-grid",className:"btn btn-primary ",children:["See More ",Object(u.jsx)("i",{className:"mdi mdi-chevron-right"})]})})]})]}),Object(u.jsxs)(o.a,{className:"mt-100 mt-60",id:"contact",children:[Object(u.jsx)(w.a,{isLeft:!0,title:"Contact Me",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)(m.a,{lg:"4",md:"6",className:"mt-4 pt-2",children:Object(u.jsx)(g.a,{className:"rounded shadow border-0",children:Object(u.jsxs)(v.a,{className:"py-5",children:[Object(u.jsx)("h4",{children:"Get In Touch !"}),Object(u.jsxs)("div",{className:"custom-form mt-3",children:[Object(u.jsx)("div",{id:"message"}),Object(u.jsx)(X.a,{color:"primary",isOpen:this.state.Contactvisible,toggle:function(){e.setState({Contactvisible:!e.state.Contactvisible})},children:"Contact details send successfully."}),Object(u.jsxs)(K.a,{method:"post",onSubmit:this.handleSubmit,name:"contact-form",id:"contact-form",children:[Object(u.jsxs)(d.a,{children:[Object(u.jsx)(m.a,{md:"12",children:Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsxs)(Z.a,{className:"form-label",children:["Your Name ",Object(u.jsx)("span",{className:"text-danger",children:"*"})]}),Object(u.jsx)("div",{className:"form-icon position-relative",children:Object(u.jsx)("i",{children:Object(u.jsx)(y.a,{icon:"user",className:"fea icon-sm icons"})})}),Object(u.jsx)($.a,{name:"name",id:"name",type:"text",className:"form-control ps-5",placeholder:"First Name :",required:!0})]})}),Object(u.jsx)(m.a,{md:"12",children:Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsxs)(Z.a,{className:"form-label",children:["Your Email"," ",Object(u.jsx)("span",{className:"text-danger",children:"*"})]}),Object(u.jsx)("div",{className:"form-icon position-relative",children:Object(u.jsx)("i",{children:Object(u.jsx)(y.a,{icon:"mail",className:"fea icon-sm icons"})})}),Object(u.jsx)($.a,{name:"email",id:"email",type:"email",className:"form-control ps-5",placeholder:"Your email :",required:!0})]})}),Object(u.jsx)(m.a,{md:"12",children:Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsxs)(Z.a,{className:"form-label",children:["Subject"," ",Object(u.jsx)("span",{className:"text-danger",children:"*"})]}),Object(u.jsx)("div",{className:"form-icon position-relative",children:Object(u.jsx)("i",{children:Object(u.jsx)(y.a,{icon:"book",className:"fea icon-sm icons"})})}),Object(u.jsx)($.a,{name:"subject",id:"subject",type:"subject",className:"form-control ps-5",placeholder:"Subject :",required:!0})]})}),Object(u.jsx)(m.a,{md:"12",children:Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)(Z.a,{className:"form-label",children:"Comments"}),Object(u.jsx)("div",{className:"form-icon position-relative",children:Object(u.jsx)("i",{children:Object(u.jsx)(y.a,{icon:"message-circle",className:"fea icon-sm icons"})})}),Object(u.jsx)("textarea",{name:"comments",id:"comments",rows:"4",className:"form-control ps-5",placeholder:"Your Message :"})]})})]}),Object(u.jsx)(d.a,{children:Object(u.jsxs)(m.a,{sm:12,className:"text-center",children:[Object(u.jsx)($.a,{type:"submit",id:"submit",name:"send",className:"submitBnt btn btn-primary btn-block",value:"Send Message"}),Object(u.jsx)("div",{id:"simple-msg"})]})})]})]})]})})}),Object(u.jsx)(m.a,{lg:"8",md:"6",className:"ps-md-3 pe-md-3 mt-4 pt-2",children:Object(u.jsx)(g.a,{className:"border-0 shadow rounded",children:Object(u.jsx)("div",{className:"map map-height-two map-gray",children:Object(u.jsx)("iframe",{title:"Landrick",src:"//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin",style:{border:0},className:"rounded",allowFullScreen:""})})})})]})]})]})})}}]),s}(r.Component),te=s(117),se=s(115),ae=s(116),ie=s(118),ce=s(121),ne=s(131),re=function(e){Object(c.a)(s,e);var t=Object(n.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},i.state={partners:[{image:te.a},{image:se.a},{image:ae.a},{image:ie.a},{image:ce.a},{image:ne.a}]},i}return Object(i.a)(s,[{key:"componentDidMount",value:function(){document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(u.jsxs)(l.a.Fragment,{children:[Object(u.jsx)(p,{}),Object(u.jsx)(A,{}),Object(u.jsx)(V,{}),Object(u.jsx)("section",{className:"py-4 border-bottom",children:Object(u.jsx)(o.a,{children:Object(u.jsx)(d.a,{className:"justify-content-center",children:this.state.partners.map((function(e,t){return Object(u.jsx)(m.a,{lg:2,md:2,xs:6,className:"text-center py-4",children:Object(u.jsx)("img",{src:e.image,className:"avatar avatar-ex-sm",alt:"Landrick"})},t)}))})})}),Object(u.jsx)(ee,{})]})}}]),s}(r.Component);t.default=re},271:function(e,t,s){"use strict";var a=s(12),i=s(13),c=s(15),n=s(14),r=s(0),l=s.n(r),o=s(93),d=s(75),m=s(163),j=s(79),h=s(9),u=s(1),b=function(e){Object(c.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(u.jsx)(l.a.Fragment,{children:this.props.blogs.map((function(e,t){return Object(u.jsx)(o.a,{lg:"4",md:"6",className:"mt-4 pt-2",name:"blog",children:Object(u.jsxs)(d.a,{className:"blog rounded border-0 shadow",children:[Object(u.jsxs)("div",{className:"position-relative",children:[Object(u.jsx)(m.a,{top:!0,src:e.image,className:"rounded-top",alt:""}),Object(u.jsx)("div",{className:"overlay rounded-top bg-dark"})]}),Object(u.jsxs)(j.a,{className:"content",children:[Object(u.jsx)("h5",{children:Object(u.jsx)(h.b,{to:"#",className:"card-title title text-dark",children:e.title})}),Object(u.jsxs)("div",{className:"post-meta d-flex justify-content-between mt-3",children:[Object(u.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(u.jsx)("li",{className:"list-inline-item me-2  mb-0",children:Object(u.jsxs)(h.b,{to:"#",className:"text-muted like",children:[Object(u.jsx)("i",{className:"uil uil-heart me-1"}),e.like]})}),Object(u.jsx)("li",{className:"list-inline-item",children:Object(u.jsxs)(h.b,{to:"#",className:"text-muted comments",children:[Object(u.jsx)("i",{className:"uil uil-comment me-1"}),e.comment]})})]}),Object(u.jsxs)(h.b,{to:"/page-blog-detail",className:"text-muted readmore",children:["Read More ",Object(u.jsx)("i",{className:"mdi mdi-chevron-right"})]})]})]}),Object(u.jsxs)("div",{className:"author",children:[Object(u.jsxs)("small",{className:"text-light user d-block",children:[Object(u.jsx)("i",{className:"mdi mdi-account"})," ",e.autor]}),Object(u.jsxs)("small",{className:"text-light date",children:[Object(u.jsx)("i",{className:"mdi mdi-calendar-check"})," ",e.date]})]})]})},t)}))})}}]),s}(r.Component);t.a=b},60:function(e,t,s){"use strict";var a=s(12),i=s(13),c=s(15),n=s(14),r=s(0),l=s.n(r),o=s(92),d=s(93),m=s(1),j=function(e){Object(c.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(m.jsx)(l.a.Fragment,{children:Object(m.jsx)(o.a,{className:"justify-content-center",children:Object(m.jsx)(d.a,{xs:"12",className:this.props.isLeft?"":"text-center",children:Object(m.jsxs)("div",{className:"section-title mb-4 pb-2",name:"maintitle",children:[Object(m.jsxs)("h4",{className:"title mb-4",name:"sectiontitle",children:[" ",this.props.title," "]}),Object(m.jsxs)("p",{className:this.props.isLeft?"text-muted para-desc mb-0":"text-muted para-desc mx-auto mb-0",name:"sectiondesc",children:["Start working with"," ",Object(m.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ",this.props.desc," "]})]})})})})}}]),s}(r.Component);t.a=j},65:function(e,t,s){"use strict";t.a=s.p+"static/media/01.6ac85de7.jpg"},66:function(e,t,s){"use strict";t.a=s.p+"static/media/02.7df14e12.jpg"},70:function(e,t,s){"use strict";t.a=s.p+"static/media/04.35463172.jpg"},71:function(e,t,s){"use strict";t.a=s.p+"static/media/05.a7ab2c82.jpg"},72:function(e,t,s){"use strict";t.a=s.p+"static/media/03.ba5f8794.jpg"},796:function(e,t,s){"use strict";var a=s(12),i=s(13),c=s(15),n=s(14),r=s(0),l=s.n(r),o=s(9),d=s(93),m=s(75),j=s(79),h=s(1),u=function(e){Object(c.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){var e=this.props.processes.length;return Object(h.jsx)(l.a.Fragment,{children:this.props.processes.map((function(t,s){return Object(h.jsx)(d.a,{md:"4",className:"mt-4 pt-2",children:Object(h.jsx)(m.a,{className:"work-process border-0 rounded shadow",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)("h4",{className:"title",children:t.title}),Object(h.jsx)("p",{className:"text-muted para",children:t.desc}),Object(h.jsxs)(o.b,{to:t.link,className:"text-primary",children:["Read more ",Object(h.jsx)("i",{className:"mdi mdi-chevron-right"})]}),Object(h.jsxs)("ul",{className:"list-unstyled d-flex justify-content-between mb-0 mt-2",children:[Object(h.jsxs)("li",{className:"step h1 mb-0 fw-bold",children:["Step ",s+1,"."]}),Object(h.jsx)("li",{className:"step-icon",children:Object(h.jsx)("i",{className:s+1===e?"mdi mdi-check-all mdi-36px":"mdi mdi-chevron-double-right mdi-36px"})})]})]})})},s)}))})}}]),s}(r.Component);t.a=u},84:function(e,t,s){"use strict";t.a=s.p+"static/media/06.7365b7fa.jpg"}}]);
//# sourceMappingURL=113.2d466bc4.chunk.js.map