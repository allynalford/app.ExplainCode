(this.webpackJsonpexplaincodeapp=this.webpackJsonpexplaincodeapp||[]).push([[172],{140:function(e,t,s){"use strict";var i=s(12),a=s(13),n=s(21),c=s(15),r=s(14),l=s(0),o=s.n(l),d=s(92),m=s(93),j=s(120),b=s.n(j),h=s(1),u=function(e){Object(c.a)(s,e);var t=Object(r.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).updateWindowSize=function(){window.outerWidth>=1230||window.outerWidth>=970&&window.outerWidth<1230?a.setState({itemCount:3,cols:4}):window.outerWidth<=970&&a.setState({itemCount:1,cols:12})},a.state={cols:4,step1:!0,step2:!1},a.updateWindowSize.bind(Object(n.a)(a)),a}return Object(a.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWindowSize),this.updateWindowSize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowSize)}},{key:"render",value:function(){var e=this;return Object(h.jsx)(o.a.Fragment,{children:Object(h.jsx)(d.a,{className:"justify-content-center",children:Object(h.jsxs)(m.a,{lg:"12",className:"mt-4",children:[Object(h.jsx)("div",{id:"customer-testi",className:"tiny-three-item",children:Object(h.jsx)("div",{className:"tiny-slide",children:Object(h.jsx)(d.a,{children:!0===this.state.step1?this.props.reviews.map((function(t,s){return s>=0&&s<=2?Object(h.jsx)(m.a,{md:e.state.cols,className:"mb-1",children:Object(h.jsxs)("div",{className:"d-flex client-testi",name:"clientsreview",children:[Object(h.jsx)("img",{src:t.img,style:{height:65,width:65},className:"avatar avatar-small client-image rounded shadow",alt:""}),Object(h.jsxs)("div",{className:"flex-1 content p-3 shadow rounded bg-white position-relative",children:[Object(h.jsx)(b.a,{items:3,rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",starSpacing:"3px"}),Object(h.jsxs)("p",{className:"text-muted mt-2",children:['" ',t.desc,' "']}),Object(h.jsxs)("h6",{className:"text-primary",children:["- ",t.name," ",Object(h.jsx)("small",{className:"text-muted",children:t.post})]})]})]})},s):null})):this.props.reviews.map((function(t,s){return s>=3&&s<=5?Object(h.jsx)(m.a,{md:e.state.cols,className:"mb-1",children:Object(h.jsxs)("div",{className:"d-flex client-testi",name:"clientsreview",children:[Object(h.jsx)("img",{src:t.img,style:{height:65,width:65},className:"avatar avatar-small client-image rounded shadow",alt:""}),Object(h.jsxs)("div",{className:"flex-1 content p-3 shadow rounded bg-white position-relative",children:[Object(h.jsx)(b.a,{items:3,rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",starSpacing:"3px",className:"mb-0"}),Object(h.jsxs)("p",{className:"text-muted mt-2",children:['" ',t.desc,' "']}),Object(h.jsxs)("h6",{className:"text-primary",children:["- ",t.name," ",Object(h.jsx)("small",{className:"text-muted",children:t.post})]})]})]})},s):null}))})})}),Object(h.jsxs)("div",{className:"tns-nav",children:[Object(h.jsx)("button",{type:"button",onClick:function(){e.setState({step1:!0,step2:!1})},className:this.state.step1?"tns-nav-active":"tns-nav-inactive"}),Object(h.jsx)("button",{type:"button",onClick:function(){e.setState({step1:!1,step2:!0})},className:this.state.step2?"tns-nav-active":"tns-nav-inactive"})]})]})})})}}]),s}(l.Component);t.a=u},1494:function(e,t,s){"use strict";s.r(t);var i=s(12),a=s(13),n=s(15),c=s(14),r=s(0),l=s.n(r),o=s(9),d=s(91),m=s(92),j=s(93),b=s.p+"static/media/bg.472d2b3e.png",h=s(1),u=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(h.jsxs)(l.a.Fragment,{children:[Object(h.jsxs)("section",{className:"bg-half-260 bg-primary d-table w-100",style:{background:"url(".concat(b,") center center")},id:"home",children:[Object(h.jsx)("div",{className:"bg-overlay"}),Object(h.jsx)(d.a,{children:Object(h.jsx)(m.a,{className:"row mt-5 justify-content-center",children:Object(h.jsx)(j.a,{lg:12,children:Object(h.jsxs)("div",{className:"title-heading text-center",children:[Object(h.jsx)("h1",{className:"heading title-dark text-white mb-3",children:"Cloud Services & Web Hosting Solution"}),Object(h.jsx)("p",{className:"para-desc para-dark mx-auto text-muted",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."}),Object(h.jsx)("div",{className:"mt-4 pt-2",children:Object(h.jsx)(o.b,{to:"#",className:"btn btn-primary",children:"Get Started"})})]})})})})]}),Object(h.jsx)("div",{className:"position-relative",children:Object(h.jsx)("div",{className:"shape overflow-hidden text-light",children:Object(h.jsx)("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})})})})]})}}]),s}(r.Component),p=s(110),x=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={},a}return Object(a.a)(s,[{key:"render",value:function(){return Object(h.jsx)(l.a.Fragment,{children:Object(h.jsx)("section",{className:"section-two bg-light",children:Object(h.jsx)(d.a,{children:Object(h.jsx)(m.a,{className:"justify-content-center",children:Object(h.jsx)(j.a,{lg:"10",children:Object(h.jsxs)(p.a,{className:"p-4 shadow bg-white rounded",children:[Object(h.jsx)("h4",{className:"mb-3",children:"Search Your Domain Now"}),Object(h.jsx)(m.a,{children:Object(h.jsx)(j.a,{xs:"12",children:Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("input",{name:"name",id:"name",type:"text",className:"form-control rounded-left",placeholder:"Your domain name :"}),Object(h.jsx)("div",{className:"input-group-append",id:"button-addon4",children:Object(h.jsxs)("select",{className:"form-control rounded-0",id:"domain_list",children:[Object(h.jsx)("option",{children:".in"}),Object(h.jsx)("option",{children:".com"}),Object(h.jsx)("option",{children:".org"}),Object(h.jsx)("option",{children:".net"}),Object(h.jsx)("option",{children:".info"}),Object(h.jsx)("option",{children:".me"})]})}),Object(h.jsx)("input",{type:"submit",id:"search",name:"search",className:"searchbtn btn btn-primary",value:"Search"})]})})}),Object(h.jsxs)(m.a,{children:[Object(h.jsx)(j.a,{lg:"2",md:"4",xs:"6",className:"mt-4",children:Object(h.jsx)(o.b,{to:"#",className:"text-dark",children:Object(h.jsx)("div",{className:"rounded shadow bg-white p-1 text-center",children:Object(h.jsxs)("h6",{className:"mb-0",children:[".in ",Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"text-primary",children:"$4.99"}),"/year"]})})})}),Object(h.jsx)(j.a,{lg:"2",md:"4",xs:"6",className:"mt-4",children:Object(h.jsx)(o.b,{to:"#",className:"text-dark",children:Object(h.jsx)("div",{className:"rounded shadow bg-white p-1 text-center",children:Object(h.jsxs)("h6",{className:"mb-0",children:[".com ",Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"text-primary",children:"$5.99"}),"/year"]})})})}),Object(h.jsx)(j.a,{lg:"2",md:"4",xs:"6",className:"mt-4",children:Object(h.jsx)(o.b,{to:"#",className:"text-dark",children:Object(h.jsx)("div",{className:"rounded shadow bg-white p-1 text-center",children:Object(h.jsxs)("h6",{className:"mb-0",children:[".org ",Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"text-primary",children:"$6.99"}),"/year"]})})})}),Object(h.jsx)(j.a,{lg:"2",md:"4",xs:"6",className:"mt-4",children:Object(h.jsx)(o.b,{to:"#",className:"text-dark",children:Object(h.jsx)("div",{className:"rounded shadow bg-white p-1 text-center",children:Object(h.jsxs)("h6",{className:"mb-0",children:[".net ",Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"text-primary",children:"$7.99"}),"/year"]})})})}),Object(h.jsx)(j.a,{lg:"2",md:"4",xs:"6",className:"mt-4",children:Object(h.jsx)(o.b,{to:"#",className:"text-dark",children:Object(h.jsx)("div",{className:"rounded shadow bg-white p-1 text-center",children:Object(h.jsxs)("h6",{className:"mb-0",children:[".info ",Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"text-primary",children:"$3.99"}),"/year"]})})})}),Object(h.jsx)(j.a,{lg:"2",md:"4",xs:"6",className:"mt-4",children:Object(h.jsx)(o.b,{to:"#",className:"text-dark",children:Object(h.jsx)("div",{className:"rounded shadow bg-white p-1 text-center",children:Object(h.jsxs)("h6",{className:"mb-0",children:[".me ",Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"text-primary",children:"$2.99"}),"/year"]})})})})]})]})})})})})})}}]),s}(r.Component),O=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={features:[{icon:"uil uil-browser h1 text-primary",title:"Domain Name",desc:"Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",link:"#"},{icon:"uil uil-cloud-computing h1 text-primary",title:"Cloud Hosting",desc:"Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.",link:"#"},{icon:"uil uil-server h1 text-primary",title:"Shared Hosting",desc:"It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.",link:"#"},{icon:"uil uil-server-network h1 text-primary ",title:"VPS Hosting",desc:"Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",link:"#"},{icon:"uil uil-database-alt h1 text-primary",title:"Reseller Hosting",desc:"Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.",link:"#"},{icon:"uil uil-code-branch h1 text-primary",title:"Web Hosting",desc:"It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.",link:"#"}]},a}return Object(a.a)(s,[{key:"render",value:function(){return Object(h.jsxs)(l.a.Fragment,{children:[Object(h.jsx)("section",{className:"section",children:Object(h.jsxs)(d.a,{className:"pb-lg-4 mb-md-5 mb-4",children:[Object(h.jsxs)(m.a,{className:"align-items-center mb-4",children:[Object(h.jsx)(j.a,{lg:"9",md:"8",className:"text-sm-start",children:Object(h.jsxs)("div",{className:"section-title",children:[Object(h.jsx)("h4",{className:"title mb-4",children:"Cloud Hosting Services"}),Object(h.jsxs)("p",{className:"text-muted para-desc mb-0",children:["Start working with"," ",Object(h.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ","that can provide everything you need to generate awareness, drive traffic, connect."]})]})}),Object(h.jsx)(j.a,{lg:"3",md:"4",className:"mt-4 mt-sm-0 text-sm-end pt-2 pt-sm-0",children:Object(h.jsxs)(o.b,{to:"#",className:"btn btn-outline-primary",children:["Read more ",Object(h.jsx)("i",{className:"mdi mdi-chevron-right"})]})})]}),Object(h.jsx)(m.a,{children:this.state.features.map((function(e,t){return Object(h.jsx)(j.a,{lg:"4",md:"6",xs:"12",className:"mt-5 pt-3",children:Object(h.jsxs)("div",{className:"features",children:[Object(h.jsx)("div",{className:"image position-relative d-inline-block",children:Object(h.jsx)("i",{className:e.icon})}),Object(h.jsxs)("div",{className:"content mt-4",children:[Object(h.jsx)("h5",{className:"title-2",children:e.title}),Object(h.jsx)("p",{className:"text-muted",children:e.desc}),Object(h.jsxs)(o.b,{to:e.link,className:"text-primary",children:["Read more ",Object(h.jsx)("i",{className:"mdi mdi-chevron-right"})]})]})]})},t)}))})]})}),Object(h.jsx)("div",{className:"position-relative",children:Object(h.jsx)("div",{className:"shape overflow-hidden text-light",children:Object(h.jsx)("svg",{viewBox:"0 0 2880 250",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M720 125L2160 0H2880V250H0V125H720Z",fill:"currentColor"})})})})]})}}]),s}(r.Component),g=s(274),N=s.p+"static/media/1.350f6788.png",v=s.p+"static/media/2.99581e4d.png",f=s.p+"static/media/deal-hend.98a4be62.svg",y=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={features1:[{title:"Digital Marketing Solutions for Tomorrow"},{title:"Our Talented & Experienced Marketing Agency"},{title:"Create your own skin to match your brand"}],features2:[{title:"Digital Marketing Solutions for Tomorrow"},{title:"Our Talented & Experienced Marketing Agency"},{title:"Create your own skin to match your brand"}],features3:[{title:"Digital Marketing Solutions for Tomorrow"},{title:"Our Talented & Experienced Marketing Agency"},{title:"Create your own skin to match your brand"}]},a}return Object(a.a)(s,[{key:"render",value:function(){return Object(h.jsxs)(l.a.Fragment,{children:[Object(h.jsxs)("section",{className:"section bg-light",children:[Object(h.jsx)(d.a,{children:Object(h.jsxs)(m.a,{className:"align-items-center",children:[Object(h.jsx)(j.a,{lg:5,md:6,children:Object(h.jsx)("img",{src:N,className:"img-fluid",alt:""})}),Object(h.jsx)(j.a,{lg:7,md:6,className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(h.jsxs)("div",{className:"section-title ms-lg-5",children:[Object(h.jsx)(g.a,{title:"Get best plan for more power with cloud Hosting",desc:"You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.",features:this.state.features1,class:""}),Object(h.jsxs)(o.b,{to:"#",className:"btn btn-primary mt-3",children:["Get Started ",Object(h.jsx)("i",{className:"uil uil-angle-right-b"})]})]})})]})}),Object(h.jsx)(d.a,{className:"mt-100 mt-60",children:Object(h.jsxs)(m.a,{className:"align-items-center",children:[Object(h.jsx)(j.a,{lg:6,md:{size:6,order:1},xs:{order:2},className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(h.jsxs)("div",{className:"section-title",children:[Object(h.jsx)(g.a,{title:"Don't Compromise with the best web hosting solutions",desc:"Using Landrick to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.",features:this.state.features2,class:""}),Object(h.jsxs)(o.b,{to:"#",className:"btn btn-primary mt-3",children:["Get Started ",Object(h.jsx)("i",{className:"uil uil-angle-right-b"})]})]})}),Object(h.jsx)(j.a,{lg:6,md:{size:6,order:2},xs:{order:1},children:Object(h.jsx)("img",{src:f,className:"img-fluid",alt:""})})]})}),Object(h.jsx)(d.a,{className:"mt-100 mt-60",children:Object(h.jsxs)(m.a,{className:"align-items-center",children:[Object(h.jsx)(j.a,{lg:5,md:6,children:Object(h.jsx)("img",{src:v,className:"img-fluid",alt:""})}),Object(h.jsx)(j.a,{lg:7,md:6,className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(h.jsxs)("div",{className:"section-title ms-lg-5",children:[Object(h.jsx)(g.a,{title:"Powerful Server & Web Hosting Plateform",desc:"You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.",features:this.state.features3,class:""}),Object(h.jsxs)(o.b,{to:"#",className:"btn btn-primary mt-3",children:["Get Started ",Object(h.jsx)("i",{className:"uil uil-angle-right-b"})]})]})})]})})]}),Object(h.jsx)("div",{className:"position-relative",children:Object(h.jsx)("div",{className:"shape overflow-hidden text-white",children:Object(h.jsx)("svg",{viewBox:"0 0 2880 250",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M720 125L2160 0H2880V250H0V125H720Z",fill:"currentColor"})})})})]})}}]),s}(r.Component),w=s(21),k=s(176),C=s(161),S=s(162),T=s(166),L=s(167),H=s(75),I=s(79),B=s(55),z=s.n(B),M=s(60),D=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={pricings1:[{id:1,title:"CLOUD HOSTING",price:0,duration:"mo",buttonText:"Buy Now",btnLink:"",features:[{title:"2 GB Memory"},{title:"10 Free Optimization"},{title:"24/7 support"},{title:"Content Optimization"}]},{id:2,title:"DEDICATED HOSTING",price:39,duration:"mo",buttonText:"Get Started",btnLink:"",isActive:!0,features:[{title:"2 GB Memory"},{title:"10 Free Optimization"},{title:"24/7 support"},{title:"Content Optimization"}]},{id:3,title:"VPS HOSTING",price:59,duration:"mo",buttonText:"Buy Now",btnLink:"",features:[{title:"2 GB Memory"},{title:"10 Free Optimization"},{title:"24/7 support"},{title:"Content Optimization"}]},{id:4,title:"SHARED HOSTING",price:79,duration:"mo",buttonText:"Buy Now",btnLink:"",features:[{title:"2 GB Memory"},{title:"10 Free Optimization"},{title:"24/7 support"},{title:"Content Optimization"}]}],pricings2:[{id:1,title:"CLOUD HOSTING",price:29,duration:"mo",buttonText:"Buy Now",btnLink:"",features:[{title:"2 GB Memory"},{title:"10 Free Optimization"},{title:"24/7 support"},{title:"Content Optimization"}]},{id:2,title:"DEDICATED HOSTING",price:239,duration:"mo",buttonText:"Get Started",btnLink:"",isActive:!0,features:[{title:"2 GB Memory"},{title:"10 Free Optimization"},{title:"24/7 support"},{title:"Content Optimization"}]},{id:3,title:"VPS HOSTING",price:259,duration:"mo",buttonText:"Buy Now",btnLink:"",features:[{title:"2 GB Memory"},{title:"10 Free Optimization"},{title:"24/7 support"},{title:"Content Optimization"}]},{id:4,title:"SHARED HOSTING",price:479,duration:"mo",buttonText:"Buy Now",btnLink:"",features:[{title:"2 GB Memory"},{title:"10 Free Optimization"},{title:"24/7 support"},{title:"Content Optimization"}]}],activeTab:"1",activeIndex1:1,activeIndex2:5},a.toggleTab.bind(Object(w.a)(a)),a}return Object(a.a)(s,[{key:"toggleTab",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)(l.a.Fragment,{children:[Object(h.jsx)("section",{className:"section",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(M.a,{title:"Our Hosting Rates",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(h.jsx)(m.a,{className:"align-items-center",children:Object(h.jsxs)(j.a,{xs:"12",className:"mt-4 pt-2",children:[Object(h.jsx)("div",{className:"text-center",children:Object(h.jsxs)(k.a,{pills:!0,justified:!0,className:"rounded-pill justify-content-center d-inline-block border py-1 px-2",children:[Object(h.jsx)(C.a,{className:"d-inline-block",children:Object(h.jsx)(S.a,{className:z()({active:"1"===this.state.activeTab},"px-3","rounded-pill","monthly"),onClick:function(){e.toggleTab("1")},children:"Monthly"})}),Object(h.jsx)(C.a,{className:"d-inline-block",children:Object(h.jsxs)(S.a,{className:z()({active:"2"===this.state.activeTab},"px-3","rounded-pill","yearly"),onClick:function(){e.toggleTab("2")},children:["Yearly"," ",Object(h.jsx)("span",{className:"badge rounded-pill bg-success",children:"15% Off "})]})})]})}),Object(h.jsxs)(T.a,{activeTab:this.state.activeTab,children:[Object(h.jsx)(L.a,{tabId:"1",children:Object(h.jsx)(m.a,{children:this.state.pricings1.map((function(e,t){return Object(h.jsx)(j.a,{lg:3,md:6,xs:12,className:"mt-4 pt-2",children:Object(h.jsx)(H.a,{className:e.isActive?"pricing-rates bg-white rounded border-0 shadow":"pricing-rates bg-light rounded border-0 shadow",children:Object(h.jsxs)(I.a,{className:"py-5",children:[Object(h.jsx)("h6",{className:e.isActive?"title text-uppercase mb-4 text-primary":"title text-uppercase mb-4",children:e.title}),Object(h.jsxs)("div",{className:"d-flex mb-4",children:[Object(h.jsx)("span",{className:"h4 mb-0 mt-2",children:"$"}),Object(h.jsx)("span",{className:"price h1 mb-0",children:e.price}),Object(h.jsxs)("span",{className:"h4 align-self-end mb-1",children:["/",e.duration]})]}),Object(h.jsx)("ul",{className:"list-unstyled mb-0 ps-0",children:e.features.map((function(e,t){return Object(h.jsxs)("li",{className:"text-muted mb-0",children:[Object(h.jsx)("span",{className:"text-primary h5 me-2",children:Object(h.jsx)("i",{className:"uil uil-check-circle align-middle"})}),e.title]},t)}))}),Object(h.jsx)(o.b,{to:"#",className:"btn btn-primary mt-4",children:"Buy Now"})]})})},t)}))})}),Object(h.jsx)(L.a,{tabId:"2",children:Object(h.jsx)(m.a,{children:this.state.pricings2.map((function(e,t){return Object(h.jsx)(j.a,{lg:3,md:6,xs:12,className:"mt-4 pt-2",children:Object(h.jsxs)("div",{className:e.isActive?"pricing-rates bg-white py-5 p-4 rounded":"pricing-rates bg-light py-5 p-4 rounded",children:[Object(h.jsx)("h6",{className:e.isActive?"title text-uppercase fw-bold mb-4 text-primary":"title text-uppercase fw-bold mb-4",children:e.title}),Object(h.jsxs)("div",{className:"d-flex mb-4",children:[Object(h.jsx)("span",{className:"h4 mb-0 mt-2",children:"$"}),Object(h.jsx)("span",{className:"price h1 mb-0",children:e.price}),Object(h.jsxs)("span",{className:"h4 align-self-end mb-1",children:["/",e.duration]})]}),Object(h.jsx)("ul",{className:"list-unstyled mb-0 ps-0",children:e.features.map((function(e,t){return Object(h.jsxs)("li",{className:"text-muted mb-0",children:[Object(h.jsx)("span",{className:"text-primary h5 me-2",children:Object(h.jsx)("i",{className:"uil uil-check-circle align-middle"})}),e.title]},t)}))}),Object(h.jsx)(o.b,{to:"#",className:"btn btn-primary mt-4",children:"Buy Now"})]})},t)}))})})]})]})})]})}),Object(h.jsx)("div",{className:"position-relative",children:Object(h.jsx)("div",{className:"shape overflow-hidden text-light",children:Object(h.jsx)("svg",{viewBox:"0 0 2880 250",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M720 125L2160 0H2880V250H0V125H720Z",fill:"currentColor"})})})})]})}}]),s}(r.Component),G=s(140),A=s(65),E=s(66),F=s(72),W=s(70),V=s(71),R=s(84),$=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={reviews:[{id:1,img:A.a,name:"Thomas Israel",post:"C.E.O",desc:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",rating:5},{id:2,img:E.a,name:"Barbara McIntosh",post:"M.D",desc:"One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",rating:4},{id:3,img:F.a,name:"Carl Oliver",post:"P.A",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",rating:3},{id:4,img:W.a,name:"Christa Smith",post:"Manager",desc:"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",rating:5},{id:5,img:V.a,name:"Dean Tolle",post:"Developer",desc:"There is now an abundance of readable dummy texts. These are usually used when a text is required.",rating:5},{id:6,img:R.a,name:"ill Webb",post:"Designer",desc:"Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",rating:4}]},a}return Object(a.a)(s,[{key:"render",value:function(){return Object(h.jsxs)(l.a.Fragment,{children:[Object(h.jsx)("section",{className:"section pt-md-4 pt-5 pt-sm-0 bg-light",children:Object(h.jsxs)(d.a,{className:"pb-lg-4 mb-md-5 mb-4",children:[Object(h.jsx)(M.a,{title:"Client Reviews",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(h.jsx)(G.a,{reviews:this.state.reviews,colClass:"mt-4"})]})}),Object(h.jsx)("div",{className:"position-relative",children:Object(h.jsx)("div",{className:"shape overflow-hidden text-footer",children:Object(h.jsx)("svg",{viewBox:"0 0 2880 250",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M720 125L2160 0H2880V250H0V125H720Z",fill:"currentColor"})})})})]})}}]),s}(r.Component),Y=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?(document.getElementById("topnav").classList.add("nav-sticky"),document.getElementById("buyButton").className="btn btn-primary"):(document.getElementById("topnav").classList.remove("nav-sticky"),document.getElementById("buyButton").className="btn btn-light")},a.state={},a}return Object(a.a)(s,[{key:"componentDidMount",value:function(){document.body.classList="",document.getElementById("top-menu").classList.add("nav-light"),document.getElementById("buyButton").className="btn btn-light",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(h.jsxs)(l.a.Fragment,{children:[Object(h.jsx)(u,{}),Object(h.jsx)(x,{}),Object(h.jsx)(O,{}),Object(h.jsx)(y,{}),Object(h.jsx)(D,{}),Object(h.jsx)($,{})]})}}]),s}(r.Component);t.default=Y},274:function(e,t,s){"use strict";var i=s(12),a=s(13),n=s(15),c=s(14),r=s(0),l=s.n(r),o=s(1),d=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){var e=this;return Object(o.jsxs)(l.a.Fragment,{children:[this.props.children?this.props.children:Object(o.jsx)("h4",{className:"title mb-4",children:this.props.title}),Object(o.jsxs)("p",{className:"text-muted",children:["You can combine all the ",Object(o.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," "," ",this.props.desc," "]}),Object(o.jsx)("ul",{className:"list-unstyled text-muted",name:"featurelines",children:this.props.features.map((function(t,s){return Object(o.jsxs)("li",{className:"mb-0",children:[Object(o.jsx)("span",{className:"text-primary h5 me-2",children:Object(o.jsx)("i",{className:"uil uil-check-circle align-middle"+e.props.class})}),t.title]},s)}))})]})}}]),s}(r.Component);t.a=d},60:function(e,t,s){"use strict";var i=s(12),a=s(13),n=s(15),c=s(14),r=s(0),l=s.n(r),o=s(92),d=s(93),m=s(1),j=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(m.jsx)(l.a.Fragment,{children:Object(m.jsx)(o.a,{className:"justify-content-center",children:Object(m.jsx)(d.a,{xs:"12",className:this.props.isLeft?"":"text-center",children:Object(m.jsxs)("div",{className:"section-title mb-4 pb-2",name:"maintitle",children:[Object(m.jsxs)("h4",{className:"title mb-4",name:"sectiontitle",children:[" ",this.props.title," "]}),Object(m.jsxs)("p",{className:this.props.isLeft?"text-muted para-desc mb-0":"text-muted para-desc mx-auto mb-0",name:"sectiondesc",children:["Start working with"," ",Object(m.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ",this.props.desc," "]})]})})})})}}]),s}(r.Component);t.a=j},65:function(e,t,s){"use strict";t.a=s.p+"static/media/01.6ac85de7.jpg"},66:function(e,t,s){"use strict";t.a=s.p+"static/media/02.7df14e12.jpg"},70:function(e,t,s){"use strict";t.a=s.p+"static/media/04.35463172.jpg"},71:function(e,t,s){"use strict";t.a=s.p+"static/media/05.a7ab2c82.jpg"},72:function(e,t,s){"use strict";t.a=s.p+"static/media/03.ba5f8794.jpg"},84:function(e,t,s){"use strict";t.a=s.p+"static/media/06.7365b7fa.jpg"}}]);
//# sourceMappingURL=172.41172002.chunk.js.map