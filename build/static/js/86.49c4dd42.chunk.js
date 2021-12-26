(this.webpackJsonpexplaincodeapp=this.webpackJsonpexplaincodeapp||[]).push([[86],{104:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}(),c=l(s(0)),i=l(s(114));function l(e){return e&&e.__esModule?e:{default:e}}var n=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return s.state={isOpen:!1},s.closeModal=s.closeModal.bind(s),s.updateFocus=s.updateFocus.bind(s),s}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"getQueryString",value:function(e){var t="";for(var s in e)e.hasOwnProperty(s)&&null!==e[s]&&(t+=s+"="+e[s]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):"custom"===e.channel?e.url:void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),s=Number(t[0]);return 100*Number(t[1])/s+"%"}},{key:"render",value:function(){var e=this,t={paddingBottom:this.getPadding(this.props.ratio)};return c.default.createElement(i.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},(function(){return e.state.isOpen?c.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},c.default.createElement("div",{className:e.props.classNames.modalVideoBody},c.default.createElement("div",{className:e.props.classNames.modalVideoInner},c.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:t},c.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),e.props.children||c.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null}))}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),t}(c.default.Component);t.default=n,n.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},105:function(e,t,s){},115:function(e,t,s){"use strict";t.a=s.p+"static/media/google.fc295ce9.svg"},116:function(e,t,s){"use strict";t.a=s.p+"static/media/lenovo.b0f22f8b.svg"},117:function(e,t,s){"use strict";t.a=s.p+"static/media/amazon.b99a7cc4.svg"},118:function(e,t,s){"use strict";t.a=s.p+"static/media/paypal.2a7be383.svg"},121:function(e,t,s){"use strict";t.a=s.p+"static/media/shopify.a3ea7712.svg"},131:function(e,t,s){"use strict";t.a=s.p+"static/media/spotify.8f600330.svg"},140:function(e,t,s){"use strict";var a=s(12),c=s(13),i=s(21),l=s(15),n=s(14),r=s(0),m=s.n(r),d=s(92),o=s(93),j=s(120),b=s.n(j),h=s(1),u=function(e){Object(l.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).updateWindowSize=function(){window.outerWidth>=1230||window.outerWidth>=970&&window.outerWidth<1230?c.setState({itemCount:3,cols:4}):window.outerWidth<=970&&c.setState({itemCount:1,cols:12})},c.state={cols:4,step1:!0,step2:!1},c.updateWindowSize.bind(Object(i.a)(c)),c}return Object(c.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWindowSize),this.updateWindowSize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowSize)}},{key:"render",value:function(){var e=this;return Object(h.jsx)(m.a.Fragment,{children:Object(h.jsx)(d.a,{className:"justify-content-center",children:Object(h.jsxs)(o.a,{lg:"12",className:"mt-4",children:[Object(h.jsx)("div",{id:"customer-testi",className:"tiny-three-item",children:Object(h.jsx)("div",{className:"tiny-slide",children:Object(h.jsx)(d.a,{children:!0===this.state.step1?this.props.reviews.map((function(t,s){return s>=0&&s<=2?Object(h.jsx)(o.a,{md:e.state.cols,className:"mb-1",children:Object(h.jsxs)("div",{className:"d-flex client-testi",name:"clientsreview",children:[Object(h.jsx)("img",{src:t.img,style:{height:65,width:65},className:"avatar avatar-small client-image rounded shadow",alt:""}),Object(h.jsxs)("div",{className:"flex-1 content p-3 shadow rounded bg-white position-relative",children:[Object(h.jsx)(b.a,{items:3,rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",starSpacing:"3px"}),Object(h.jsxs)("p",{className:"text-muted mt-2",children:['" ',t.desc,' "']}),Object(h.jsxs)("h6",{className:"text-primary",children:["- ",t.name," ",Object(h.jsx)("small",{className:"text-muted",children:t.post})]})]})]})},s):null})):this.props.reviews.map((function(t,s){return s>=3&&s<=5?Object(h.jsx)(o.a,{md:e.state.cols,className:"mb-1",children:Object(h.jsxs)("div",{className:"d-flex client-testi",name:"clientsreview",children:[Object(h.jsx)("img",{src:t.img,style:{height:65,width:65},className:"avatar avatar-small client-image rounded shadow",alt:""}),Object(h.jsxs)("div",{className:"flex-1 content p-3 shadow rounded bg-white position-relative",children:[Object(h.jsx)(b.a,{items:3,rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",starSpacing:"3px",className:"mb-0"}),Object(h.jsxs)("p",{className:"text-muted mt-2",children:['" ',t.desc,' "']}),Object(h.jsxs)("h6",{className:"text-primary",children:["- ",t.name," ",Object(h.jsx)("small",{className:"text-muted",children:t.post})]})]})]})},s):null}))})})}),Object(h.jsxs)("div",{className:"tns-nav",children:[Object(h.jsx)("button",{type:"button",onClick:function(){e.setState({step1:!0,step2:!1})},className:this.state.step1?"tns-nav-active":"tns-nav-inactive"}),Object(h.jsx)("button",{type:"button",onClick:function(){e.setState({step1:!1,step2:!0})},className:this.state.step2?"tns-nav-active":"tns-nav-inactive"})]})]})})})}}]),s}(r.Component);t.a=u},1503:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return G}));var a=s(12),c=s(13),i=s(15),l=s(14),n=s(0),r=s.n(n),m=s(91),d=s(92),o=s(93),j=s.p+"static/media/home.f794f7ed.png",b=s(1),h=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(b.jsx)(r.a.Fragment,{children:Object(b.jsx)("section",{className:"bg-home d-flex align-items-center",style:{height:"auto"},id:"home",children:Object(b.jsx)(m.a,{children:Object(b.jsx)(d.a,{className:"justify-content-center",children:Object(b.jsxs)(o.a,{lg:12,className:"text-center mt-0 mt-md-5 pt-0 pt-md-5",children:[Object(b.jsxs)("div",{className:"title-heading margin-top-100",children:[Object(b.jsxs)("h1",{className:"heading fw-bold mb-3",children:["We Build A Design ",Object(b.jsx)("br",{})," For Email Inbox"]}),Object(b.jsx)("p",{className:"para-desc mx-auto text-muted",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."}),Object(b.jsx)("div",{className:"mt-4 pt-2",children:Object(b.jsxs)("a",{href:"#about",className:"btn btn-primary",children:["Start Free Trial ",Object(b.jsx)("i",{className:"mdi mdi-chevron-right"})]})})]}),Object(b.jsx)(d.a,{className:"justify-content-center",children:Object(b.jsx)(o.a,{lg:10,children:Object(b.jsx)("div",{className:"home-dashboard",children:Object(b.jsx)("img",{src:j,alt:"",className:"img-fluid rounded-md shadow-lg",style:{zIndex:"-1"}})})})})]})})})})})}}]),s}(n.Component),u=s(823),x=s(21),p=s(9),O=s(20),N=s.n(O),g=s(104),f=s.n(g),y=(s(105),function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={isOpen:!1,features:[{id:1,icon:"uil uil-comment-verify d-block rounded h3 mb-0",title:"Instant Chat"},{id:2,icon:"uil uil-image d-block rounded h3 mb-0",title:"Media Messages"},{id:3,icon:"uil uil-video d-block rounded h3 mb-0",title:"Video Messages"},{id:4,icon:"uil uil-database-alt d-block rounded h3 mb-0",title:"Dedicated Server"},{id:5,icon:"uil uil-users-alt d-block rounded h3 mb-0",title:"Team Collaboration"},{id:6,icon:"uil uil-apps d-block rounded h3 mb-0",title:"Responsive App"}]},c.openModal=c.openModal.bind(Object(x.a)(c)),c}return Object(c.a)(s,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"render",value:function(){var e=this;return Object(b.jsx)(r.a.Fragment,{children:Object(b.jsxs)("section",{className:"section border-bottom",children:[Object(b.jsxs)(m.a,{children:[Object(b.jsx)(d.a,{className:"justify-content-center",children:Object(b.jsx)(o.a,{xs:12,children:Object(b.jsxs)("div",{className:"section-title text-center mb-4 pb-2",children:[Object(b.jsx)("h4",{className:"title mb-4",children:"Our Features"}),Object(b.jsxs)("p",{className:"text-muted para-desc mb-0 mx-auto",children:["Start working with"," ",Object(b.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ","that can provide everything you need to generate awareness, drive traffic, connect."]})]})})}),Object(b.jsx)(d.a,{children:this.state.features.map((function(e,t){return Object(b.jsx)(o.a,{lg:4,md:6,className:"mt-5",children:Object(b.jsxs)("div",{className:"d-flex features feature-clean",children:[Object(b.jsx)("div",{className:"icons text-primary text-center mx-auto",children:Object(b.jsx)("i",{className:e.icon})}),Object(b.jsxs)("div",{className:"flex-1 content ms-4",children:[Object(b.jsx)("h5",{className:"mb-1",children:Object(b.jsx)(p.b,{to:"#",className:"text-dark",children:e.title})}),Object(b.jsx)("p",{className:"text-muted mb-0",children:"The most well-known dummy text is the, which is said to have originated in the 16th century."})]})]})},t)}))}),Object(b.jsx)(d.a,{className:"justify-content-center",children:Object(b.jsx)("div",{className:"col-12 mt-5",children:Object(b.jsxs)("div",{className:"watch-video text-center",children:[Object(b.jsxs)(p.b,{to:"#",className:"btn btn-primary m-1",children:["Get Started ",Object(b.jsx)("i",{className:"mdi mdi-chevron-right"})]}),Object(b.jsx)(p.b,{to:"#",onClick:this.openModal,className:"btn btn-icon btn-pills video-play-icon btn-primary m-1",children:Object(b.jsx)("i",{children:Object(b.jsx)(N.a,{icon:"video",className:"fea icon-sm text-white title-dark"})})}),Object(b.jsx)("span",{className:"fw-bold text-uppercase small align-middle ms-1",children:"Watch Now"})]})})})]}),Object(b.jsx)(f.a,{channel:"vimeo",isOpen:this.state.isOpen,videoId:"287684225",onClose:function(){return e.setState({isOpen:!1})}})]})})}}]),s}(n.Component)),v=s(547),w=s.p+"static/media/inbox-cleanup.b6f8282d.svg",k=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(b.jsx)(r.a.Fragment,{children:Object(b.jsxs)("section",{className:"section",children:[Object(b.jsx)(m.a,{children:Object(b.jsxs)(d.a,{className:"align-items-center",children:[Object(b.jsx)(o.a,{md:6,children:Object(b.jsx)("img",{src:v.a,className:"img-fluid",alt:""})}),Object(b.jsx)(o.a,{md:6,className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(b.jsxs)("div",{className:"section-title ms-lg-5",children:[Object(b.jsxs)("h4",{className:"title mb-4",children:["Make your website ",Object(b.jsx)("br",{})," growth with next level visitors"]}),Object(b.jsx)("p",{className:"text-muted",children:"You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."}),Object(b.jsxs)("ul",{className:"list-unstyled text-muted",children:[Object(b.jsxs)("li",{className:"mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Digital Marketing Solutions for Tomorrow"]}),Object(b.jsxs)("li",{className:"mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Our Talented & Experienced Marketing Agency"]}),Object(b.jsxs)("li",{className:"mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Create your own skin to match your brand"]})]}),Object(b.jsxs)(p.b,{to:"#",className:"mt-3 h6 text-primary",children:["Find Out More ",Object(b.jsx)("i",{className:"mdi mdi-chevron-right"})]})]})})]})}),Object(b.jsx)(m.a,{className:"mt-100 mt-60",children:Object(b.jsxs)(d.a,{className:"align-items-center",children:[Object(b.jsx)(o.a,{md:6,className:"order-1 order-md-2",children:Object(b.jsx)("img",{src:w,alt:""})}),Object(b.jsx)(o.a,{md:6,className:"order-2 order-md-1",children:Object(b.jsxs)("div",{className:"section-title ms-lg-5",children:[Object(b.jsxs)("h4",{className:"title mb-4",children:["Meet our business ",Object(b.jsx)("br",{})," partner who work behind the scene"]}),Object(b.jsx)("p",{className:"text-muted",children:"You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."}),Object(b.jsxs)("ul",{className:"list-unstyled text-muted",children:[Object(b.jsxs)("li",{className:"mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Digital Marketing Solutions for Tomorrow"]}),Object(b.jsxs)("li",{className:"mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Our Talented & Experienced Marketing Agency"]}),Object(b.jsxs)("li",{className:"mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Create your own skin to match your brand"]})]}),Object(b.jsxs)(p.b,{to:"#",className:"mt-3 h6 text-primary",children:["Find Out More ",Object(b.jsx)("i",{className:"mdi mdi-chevron-right"})]})]})})]})})]})})}}]),s}(n.Component),S=s(161),F=s(162),C=s(166),M=s(167),T=s(75),E=s(79),I=s(55),L=s.n(I),D=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={activeTab:"1"},c.toggleTab=c.toggleTab.bind(Object(x.a)(c)),c}return Object(c.a)(s,[{key:"toggleTab",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return Object(b.jsx)(r.a.Fragment,{children:Object(b.jsxs)(m.a,{children:[Object(b.jsxs)(d.a,{className:"align-items-end mb-4 pb-2",children:[Object(b.jsx)(o.a,{md:8,children:Object(b.jsxs)("div",{className:"section-title text-center text-md-start",children:[Object(b.jsxs)("h4",{className:"title mb-4",children:["Choose the best ",Object(b.jsx)("br",{})," one for you"]}),Object(b.jsxs)("p",{className:"text-muted mb-0 para-desc",children:["Start working with"," ",Object(b.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ","that can provide everything you need to generate awareness, drive traffic, connect."]})]})}),Object(b.jsx)(o.a,{md:4,className:"mt-4 mt-sm-0",children:Object(b.jsx)("div",{className:"text-center text-md-end",children:Object(b.jsxs)("ul",{className:"nav nav-pills bg-white rounded-lg justify-content-center d-inline-block shadow py-1 px-2 mb-0",id:"pills-tab",role:"tablist",children:[Object(b.jsx)(S.a,{className:"d-inline-block",children:Object(b.jsx)(F.a,{to:"#",className:L()({active:"1"===this.state.activeTab},"px-3 rounded-lg monthly "),onClick:function(){e.toggleTab("1")},children:"Monthly"})}),Object(b.jsx)(S.a,{className:"d-inline-block",children:Object(b.jsx)(F.a,{to:"#",className:L()({active:"2"===this.state.activeTab},"px-3 rounded-lg yearly"),onClick:function(){e.toggleTab("2")},children:"Yearly"})})]})})})]}),Object(b.jsx)(d.a,{children:Object(b.jsx)(o.a,{xs:12,children:Object(b.jsxs)(C.a,{activeTab:this.state.activeTab,children:[Object(b.jsx)(M.a,{className:"fade show",tabId:"1",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(o.a,{lg:3,md:6,xs:12,className:"mt-4 pt-2",children:Object(b.jsx)(T.a,{className:"pricing-rates business-rate shadow bg-light border-0 rounded",children:Object(b.jsxs)(E.a,{children:[Object(b.jsx)("h6",{className:"title fw-bold text-uppercase text-primary mb-4",children:"Free"}),Object(b.jsxs)("div",{className:"d-flex mb-4",children:[Object(b.jsx)("span",{className:"h6 mb-0 mt-2",children:"$"}),Object(b.jsx)("span",{className:"price h1 mb-0",children:"0"}),Object(b.jsx)("span",{className:"h5 align-self-end mb-1",children:" /mo"})]}),Object(b.jsxs)("ul",{className:"list-unstyled mb-0 ps-0",children:[Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Full Access"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Source Files"]})]}),Object(b.jsx)(p.b,{to:"#",className:"btn btn-primary mt-4",children:"Buy Now"})]})})}),Object(b.jsx)(o.a,{lg:3,md:6,xs:12,className:"mt-4 pt-2",children:Object(b.jsxs)(T.a,{className:"pricing-rates business-rate shadow bg-white border-0 rounded",children:[Object(b.jsx)("div",{className:"ribbon ribbon-right ribbon-warning overflow-hidden",children:Object(b.jsx)("span",{className:"text-center d-block shadow small h6",children:"Best"})}),Object(b.jsxs)(E.a,{children:[Object(b.jsx)("h6",{className:"title fw-bold text-uppercase text-primary mb-4",children:"Starter"}),Object(b.jsxs)("div",{className:"d-flex mb-4",children:[Object(b.jsx)("span",{className:"h6 mb-0 mt-2",children:"$"}),Object(b.jsx)("span",{className:"price h1 mb-0",children:"39"}),Object(b.jsx)("span",{className:"h5 align-self-end mb-1",children:" /mo"})]}),Object(b.jsxs)("ul",{className:"list-unstyled mb-0 ps-0",children:[Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Full Access"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Source Files"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Free Appointments"]})]}),Object(b.jsx)(p.b,{to:"#",className:"btn btn-primary mt-4",children:"Get Started"})]})]})}),Object(b.jsx)(o.a,{lg:3,md:6,xs:12,className:"mt-4 pt-2",children:Object(b.jsx)(T.a,{className:"pricing-rates business-rate shadow bg-light border-0 rounded",children:Object(b.jsxs)(E.a,{children:[Object(b.jsx)("h6",{className:"title fw-bold text-uppercase text-primary mb-4",children:"Professional"}),Object(b.jsxs)("div",{className:"d-flex mb-4",children:[Object(b.jsx)("span",{className:"h6 mb-0 mt-2",children:"$"}),Object(b.jsx)("span",{className:"price h1 mb-0",children:"59"}),Object(b.jsx)("span",{className:"h5 align-self-end mb-1",children:" /mo"})]}),Object(b.jsxs)("ul",{className:"list-unstyled mb-0 ps-0",children:[Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Full Access"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Source Files"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"1 Domain Free"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Enhanced Security"]})]}),Object(b.jsx)(p.b,{to:"#",className:"btn btn-primary mt-4",children:"Try It Now"})]})})}),Object(b.jsx)(o.a,{lg:3,md:6,xs:12,className:"mt-4 pt-2",children:Object(b.jsx)(T.a,{className:"pricing-rates business-rate shadow bg-light border-0 rounded",children:Object(b.jsxs)(E.a,{children:[Object(b.jsx)("h6",{className:"title fw-bold text-uppercase text-primary mb-4",children:"Ultimate"}),Object(b.jsxs)("div",{className:"d-flex mb-4",children:[Object(b.jsx)("span",{className:"h6 mb-0 mt-2",children:"$"}),Object(b.jsx)("span",{className:"price h1 mb-0",children:"79"}),Object(b.jsx)("span",{className:"h5 align-self-end mb-1",children:" /mo"})]}),Object(b.jsxs)("ul",{className:"list-unstyled mb-0 ps-0",children:[Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Full Access"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Enhanced Security"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Source Files"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"1 Domain Free"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Free Installment"]})]}),Object(b.jsx)(p.b,{to:"#",className:"btn btn-primary mt-4",children:"Started Now"})]})})})]})}),Object(b.jsx)(M.a,{className:"fade show",tabId:"2",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(o.a,{lg:3,md:6,xs:12,className:"mt-4 pt-2",children:Object(b.jsx)(T.a,{className:"pricing-rates business-rate shadow bg-light border-0 rounded",children:Object(b.jsxs)(E.a,{children:[Object(b.jsx)("h6",{className:"title fw-bold text-uppercase text-primary mb-4",children:"Free"}),Object(b.jsxs)("div",{className:"d-flex mb-4",children:[Object(b.jsx)("span",{className:"h6 mb-0 mt-2",children:"$"}),Object(b.jsx)("span",{className:"price h1 mb-0",children:"0"}),Object(b.jsx)("span",{className:"h5 align-self-end mb-1",children:" /mo"})]}),Object(b.jsxs)("ul",{className:"list-unstyled mb-0 ps-0",children:[Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Full Access"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Source Files"]})]}),Object(b.jsx)(p.b,{to:"#",className:"btn btn-primary mt-4",children:"Buy Now"})]})})}),Object(b.jsx)(o.a,{lg:3,md:6,xs:12,className:"mt-4 pt-2",children:Object(b.jsxs)(T.a,{className:"pricing-rates business-rate shadow bg-white border-0 rounded",children:[Object(b.jsx)("div",{className:"ribbon ribbon-right ribbon-warning overflow-hidden",children:Object(b.jsx)("span",{className:"text-center d-block shadow small h6",children:"Best"})}),Object(b.jsxs)(E.a,{children:[Object(b.jsx)("h6",{className:"title fw-bold text-uppercase text-primary mb-4",children:"Starter"}),Object(b.jsxs)("div",{className:"d-flex mb-4",children:[Object(b.jsx)("span",{className:"h6 mb-0 mt-2",children:"$"}),Object(b.jsx)("span",{className:"price h1 mb-0",children:"29"}),Object(b.jsx)("span",{className:"h5 align-self-end mb-1",children:" /mo"})]}),Object(b.jsxs)("ul",{className:"list-unstyled mb-0 ps-0",children:[Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Full Access"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Source Files"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Free Appointments"]})]}),Object(b.jsx)(p.b,{to:"#",className:"btn btn-primary mt-4",children:"Get Started"})]})]})}),Object(b.jsx)(o.a,{lg:3,md:6,xs:12,className:"mt-4 pt-2",children:Object(b.jsx)(T.a,{className:"pricing-rates business-rate shadow bg-light border-0 rounded",children:Object(b.jsxs)(E.a,{children:[Object(b.jsx)("h6",{className:"title fw-bold text-uppercase text-primary mb-4",children:"Professional"}),Object(b.jsxs)("div",{className:"d-flex mb-4",children:[Object(b.jsx)("span",{className:"h6 mb-0 mt-2",children:"$"}),Object(b.jsx)("span",{className:"price h1 mb-0",children:"45"}),Object(b.jsx)("span",{className:"h5 align-self-end mb-1",children:" /mo"})]}),Object(b.jsxs)("ul",{className:"list-unstyled mb-0 ps-0",children:[Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Full Access"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Source Files"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"1 Domain Free"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Enhanced Security"]})]}),Object(b.jsx)(p.b,{to:"#",className:"btn btn-primary mt-4",children:"Try It Now"})]})})}),Object(b.jsx)(o.a,{lg:3,md:6,xs:12,className:"mt-4 pt-2",children:Object(b.jsx)(T.a,{className:"pricing-rates business-rate shadow bg-light border-0 rounded",children:Object(b.jsxs)(E.a,{children:[Object(b.jsx)("h6",{className:"title fw-bold text-uppercase text-primary mb-4",children:"Ultimate"}),Object(b.jsxs)("div",{className:"d-flex mb-4",children:[Object(b.jsx)("span",{className:"h6 mb-0 mt-2",children:"$"}),Object(b.jsx)("span",{className:"price h1 mb-0",children:"69"}),Object(b.jsx)("span",{className:"h5 align-self-end mb-1",children:" /mo"})]}),Object(b.jsxs)("ul",{className:"list-unstyled mb-0 ps-0",children:[Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Full Access"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Enhanced Security"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Source Files"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"1 Domain Free"]}),Object(b.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(b.jsx)("span",{className:"text-primary h5 me-2",children:Object(b.jsx)("i",{className:"uil uil-check-circle align-middle"})}),"Free Installment"]})]}),Object(b.jsx)(p.b,{to:"#",className:"btn btn-primary mt-4",children:"Started Now"})]})})})]})})]})})})]})})}}]),s}(n.Component),A=s(824),W=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(b.jsx)(r.a.Fragment,{children:Object(b.jsx)(m.a,{className:"mt-100 mt-60",children:Object(b.jsxs)(d.a,{className:"align-items-center",children:[Object(b.jsx)(o.a,{lg:5,md:5,xs:12,children:Object(b.jsx)("img",{src:A.a,className:"img-fluid mx-auto d-block",alt:""})}),Object(b.jsx)("div",{className:"col-lg-7 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(b.jsxs)("div",{className:"section-title",children:[Object(b.jsxs)("div",{className:"alert alert-light alert-pills",role:"alert",children:[Object(b.jsx)("span",{className:"badge bg-primary rounded-pill me-1",children:"Apps"}),Object(b.jsxs)("span",{className:"content",children:["Download now"," ",Object(b.jsxs)("i",{children:[Object(b.jsx)(N.a,{icon:"chevron-right",className:"fea icon-sm"})," "]})]})]}),Object(b.jsxs)("h4",{className:"title mb-4",children:["Available for your ",Object(b.jsx)("br",{})," Smartphones"]}),Object(b.jsxs)("p",{className:"text-muted para-desc mb-0",children:["Start working with"," ",Object(b.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ","that can provide everything you need to generate awareness, drive traffic, connect."]}),Object(b.jsxs)("div",{className:"my-4",children:[Object(b.jsxs)(p.b,{to:"#",className:"btn btn-lg btn-dark mt-2 me-2",children:[Object(b.jsx)("i",{className:"uil uil-apple"})," App Store"]}),Object(b.jsxs)(p.b,{to:"#",className:"btn btn-lg btn-dark mt-2",children:[Object(b.jsx)("i",{className:"uil uil-google-play"})," Play Store"]})]}),Object(b.jsx)("div",{className:"d-inline-block",children:Object(b.jsxs)("div",{className:"pt-4 d-flex align-items-center border-top",children:[Object(b.jsxs)("i",{children:[Object(b.jsx)(N.a,{icon:"smartphone",className:"fea icon-md me-2 text-primary"})," "]}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h6",{className:"mb-0",children:"Install app now on your cellphones"}),Object(b.jsxs)(p.b,{to:"#",className:"text-primary",children:["Learn More ",Object(b.jsx)("i",{className:"mdi mdi-arrow-right"})]})]})]})})]})})]})})})}}]),s}(n.Component),V=s(60),_=s(140),B=s(65),P=s(66),U=s(72),z=s(70),Y=s(71),$=s(84),G=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},c.state={reviews:[{id:1,img:B.a,name:"Thomas Israel",post:"C.E.O",desc:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",rating:5},{id:2,img:P.a,name:"Barbara McIntosh",post:"M.D",desc:"One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",rating:4},{id:3,img:U.a,name:"Carl Oliver",post:"P.A",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",rating:3},{id:4,img:z.a,name:"Christa Smith",post:"Manager",desc:"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",rating:5},{id:5,img:Y.a,name:"Dean Tolle",post:"Developer",desc:"There is now an abundance of readable dummy texts. These are usually used when a text is required.",rating:5},{id:6,img:$.a,name:"Jill Webb",post:"Designer",desc:"Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",rating:4}]},c}return Object(c.a)(s,[{key:"componentDidMount",value:function(){document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0);for(var e=document.getElementsByName("featurebox"),t=0;t<e.length;t++)0!==t&&(e[t].classList.add("mt-5"),e[t].classList.add("mt-sm-0"))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(b.jsxs)(r.a.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsx)(u.a,{}),Object(b.jsx)(y,{}),Object(b.jsxs)("section",{className:"section",children:[Object(b.jsx)(k,{}),Object(b.jsxs)(m.a,{className:" mt-100 mt-60",children:[Object(b.jsx)(V.a,{title:"Whats Our Clients Said About Landrick Project",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(b.jsx)(_.a,{reviews:this.state.reviews,colClass:"mt-4"})]})]}),Object(b.jsxs)("section",{className:"section bg-light",children:[Object(b.jsx)(D,{}),Object(b.jsx)(W,{})]})]})}}]),s}(n.Component)},547:function(e,t,s){"use strict";t.a=s.p+"static/media/classic01.b3e371cd.png"},60:function(e,t,s){"use strict";var a=s(12),c=s(13),i=s(15),l=s(14),n=s(0),r=s.n(n),m=s(92),d=s(93),o=s(1),j=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(o.jsx)(r.a.Fragment,{children:Object(o.jsx)(m.a,{className:"justify-content-center",children:Object(o.jsx)(d.a,{xs:"12",className:this.props.isLeft?"":"text-center",children:Object(o.jsxs)("div",{className:"section-title mb-4 pb-2",name:"maintitle",children:[Object(o.jsxs)("h4",{className:"title mb-4",name:"sectiontitle",children:[" ",this.props.title," "]}),Object(o.jsxs)("p",{className:this.props.isLeft?"text-muted para-desc mb-0":"text-muted para-desc mx-auto mb-0",name:"sectiondesc",children:["Start working with"," ",Object(o.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ",this.props.desc," "]})]})})})})}}]),s}(n.Component);t.a=j},65:function(e,t,s){"use strict";t.a=s.p+"static/media/01.6ac85de7.jpg"},66:function(e,t,s){"use strict";t.a=s.p+"static/media/02.7df14e12.jpg"},70:function(e,t,s){"use strict";t.a=s.p+"static/media/04.35463172.jpg"},71:function(e,t,s){"use strict";t.a=s.p+"static/media/05.a7ab2c82.jpg"},72:function(e,t,s){"use strict";t.a=s.p+"static/media/03.ba5f8794.jpg"},823:function(e,t,s){"use strict";s.d(t,"a",(function(){return x}));var a=s(12),c=s(13),i=s(15),l=s(14),n=s(0),r=s.n(n),m=s(117),d=s(115),o=s(116),j=s(118),b=s(121),h=s(131),u=s(1),x=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={partners:[{id:1,img:m.a},{id:2,img:d.a},{id:3,img:o.a},{id:4,img:j.a},{id:5,img:b.a},{id:6,img:h.a}]},c}return Object(c.a)(s,[{key:"render",value:function(){return Object(u.jsx)(r.a.Fragment,{children:Object(u.jsx)("section",{className:"py-4 border-top bg-light",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row justify-content-center",children:this.state.partners.map((function(e,t){return Object(u.jsx)("div",{className:"col-lg-2 col-md-2 col-6 text-center py-4",children:Object(u.jsx)("img",{src:e.img,className:"avatar avatar-ex-sm",alt:""})},t)}))})})})})}}]),s}(n.Component)},824:function(e,t,s){"use strict";t.a=s.p+"static/media/envelope.156b07b9.svg"},84:function(e,t,s){"use strict";t.a=s.p+"static/media/06.7365b7fa.jpg"}}]);
//# sourceMappingURL=86.49c4dd42.chunk.js.map