(this.webpackJsonpconstructapp=this.webpackJsonpconstructapp||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),i=s(17),r=s.n(i),a=(s(23),s(24),s(9)),o=s(2),l=s(0);var j=Object(o.f)((function(e){var t=e.history,s=e.children;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),Object(l.jsx)(n.Fragment,{children:s})})),d=(s(8),s(3));function h(e){var t=Object(n.useRef)(null),s=Object(n.useState)(!1),c=Object(d.a)(s,2),i=c[0],r=c[1],a=function(e){Object(d.a)(e,1)[0].isIntersecting&&r(!0)};return Object(n.useEffect)((function(){var s=new IntersectionObserver(a,e);return t.current&&s.observe(t.current),function(){t.current&&s.unobserve(t.current)}}),[t,e]),[t,i]}var u=function(){var e=h({root:null,rootMargin:"0px",threshold:.2}),t=Object(d.a)(e,2),s=t[0],n=t[1];return Object(l.jsxs)("div",{className:"HomeHeader",ref:s,children:[n&&Object(l.jsx)("h1",{children:" Inspired. Creative. Functional."}),n&&Object(l.jsx)("h2",{children:'"Good buildings come from good people, and all problems are solved by good design."'})]})};var b=function(){var e=h({root:null,rootMargin:"0px",threshold:.4}),t=Object(d.a)(e,2),s=t[0],n=t[1],c=h({root:null,rootMargin:"0px",threshold:1}),i=Object(d.a)(c,2),r=i[0],a=i[1];return Object(l.jsxs)("div",{className:"HomeDescription",ref:s,children:[n&&Object(l.jsx)("h1",{children:" We Take Pride In The Projects We've Done "}),n&&Object(l.jsx)("h2",{ref:r,children:"While our clients\u2019 satisfaction is our primary metric for excellence, we have also been recognized with numerous awards over the years for safety, business practices, and design excellence. We are proud to be at the forefront of green building practices, with dozens of LEED-certified projects, many achieving silver, gold and even platinum LEED certification. We understand that projects represent not only buildings, but the plans for the future of our clients"}),a&&Object(l.jsx)("h1",{children:"We Offer a Wide Range of Services"}),a&&Object(l.jsx)("h2",{children:"From conception to completion, our entire team of estimators, designers, project managers and experienced executives make our clients\u2019 needs a priority. We have experience in a wide variety of projects and delivery methods, and use both time-proven practices and cutting-edge techniques to make sure our customers\u2019 projects meet their maximum potential."})]})};var m=function(e){var t=h({root:null,rootMargin:"0px",threshold:.2}),s=Object(d.a)(t,2),n=s[0],c=s[1];return Object(l.jsx)("div",{className:"servicesList",children:Object(l.jsx)("ul",{children:e.list.map((function(e,t){return Object(l.jsxs)("li",{ref:n,children:[c&&Object(l.jsx)("h1",{style:{animation:"fadeInLeft "+.5*t+"s"},children:e.name}),c&&Object(l.jsx)("p",{children:"Learn More"})]},t)}))})})};var x=function(){var e=h({root:null,rootMargin:"0px",threshold:.2}),t=Object(d.a)(e,2),s=t[0],n=t[1];return Object(l.jsxs)("div",{className:"miniContact",ref:s,children:[Object(l.jsx)("div",{className:"leftCorner"}),Object(l.jsx)("div",{className:"leftCorner2"}),n&&Object(l.jsx)("h1",{children:"Call us today for a free estimate, or to schedule an appointment"}),n&&Object(l.jsx)("h2",{children:"Fill out the form below. If its more urgent you can directly contact us at 0942111222 or email us directly at constructOffice@yahoo.com"}),Object(l.jsxs)("form",{action:"/action_page.php",children:[Object(l.jsxs)("div",{className:"inputText",children:[Object(l.jsx)("input",{type:"text",id:"fname",name:"firstname",placeholder:"Your Name",required:!0}),Object(l.jsx)("input",{type:"text",id:"email",name:"email",placeholder:"Your Email",required:!0})]}),Object(l.jsxs)("div",{className:"textArea",children:[Object(l.jsx)("textarea",{type:"text",placeholder:"Your message",name:"message"}),Object(l.jsx)("input",{type:"submit",value:"Submit Message"})]})]})]})};var O=function(e){console.log(e);var t=Object(n.useState)({id:null,show:!1}),s=Object(d.a)(t,2),c=s[0],i=s[1],r=h({root:null,rootMargin:"0px",threshold:.2}),a=Object(d.a)(r,2),o=a[0],j=a[1];return Object(l.jsxs)("div",{className:"questions",children:[Object(l.jsx)("h1",{children:" Frequently Asked Questions"}),Object(l.jsx)("ul",{ref:o,children:e.list.map((function(e,t){return j&&Object(l.jsxs)("li",{onClick:function(){return i({id:t,show:!0})},children:[Object(l.jsxs)("div",{className:"question",children:[" ",Object(l.jsx)("h1",{children:e.name}),(c.id!==t&&!0===c.show||null===c.id)&&Object(l.jsx)("span",{children:"+"})]}),c.id===t&&!0===c.show&&Object(l.jsx)("p",{children:e.answer})]},t)}))})]})};var p=function(e){var t=h({root:null,rootMargin:"0px",threshold:.2}),s=Object(d.a)(t,2),n=s[0],c=s[1];return Object(l.jsxs)("div",{className:"testimonials",ref:n,children:[Object(l.jsx)("div",{className:"leftCorner"}),Object(l.jsx)("div",{className:"leftCorner2"}),c&&Object(l.jsx)("h1",{children:" Testimonials"}),c&&Object(l.jsx)("ul",{children:e.list.map((function(e,t){return Object(l.jsxs)("li",{style:{animationDuration:1.15*t+"s"},children:[Object(l.jsxs)("div",{className:"Stars",children:[Object(l.jsx)("span",{class:"fa fa-star checked"}),Object(l.jsx)("span",{class:"fa fa-star checked"}),Object(l.jsx)("span",{class:"fa fa-star checked"}),Object(l.jsx)("span",{class:"fa fa-star checked"}),Object(l.jsx)("span",{class:"fa fa-star checked"})]}),Object(l.jsxs)("p",{children:['"',e.opinion,'"']}),Object(l.jsx)("h1",{children:e.name})]},t)}))}),Object(l.jsx)("div",{className:"rightCorner"})]})};var f=function(e){var t=h({root:null,rootMargin:"0px",threshold:1}),s=Object(d.a)(t,2),n=s[0],c=s[1];return Object(l.jsxs)("div",{className:"reasons",children:[Object(l.jsx)("h1",{children:" Why to choose us?"}),Object(l.jsx)("ul",{ref:n,children:e.list.map((function(e,t){return c?Object(l.jsxs)("li",{children:[" ",Object(l.jsx)("img",{src:"./assets/"+e.img,alt:"icons"}),Object(l.jsx)("h2",{children:e.name})," ",Object(l.jsx)("p",{children:e.description})]},t):""}))})]})};s(31);var v=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("button",{className:"ButtonToTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"\u2191"}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("i",{class:"fa",children:"\uf09a"})}),Object(l.jsx)("li",{children:Object(l.jsx)("i",{class:"fa",children:"\uf16d"})}),Object(l.jsx)("li",{children:Object(l.jsx)("i",{class:"fa",children:"\uf167"})})]}),Object(l.jsx)("p",{children:"We look forward to working with clients who have an eye for detail and a love of high quality. If you are searching for a Construction CO builder, we would be delighted to quote for your project."}),Object(l.jsx)("p",{children:"Having a wealth of experience in building and construction management, we can tackle small extensions to large new build projects. We are happy working with both traditional building materials and new construction methods"}),Object(l.jsxs)("div",{className:"details",children:[" ",Object(l.jsxs)("p",{children:[Object(l.jsx)("i",{class:"fas fa-phone"})," 0724122344"," "]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("i",{class:"fas fa-map-marker-alt"})," city. Bucharest, str. Rasaritului nr.24"," "]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("i",{class:"fa fa-envelope"})," ConstructCO@Yahoo.com"]})]})]})]})};var g=function(){return Object(l.jsxs)("div",{className:"Home",children:[Object(l.jsx)(u,{}),Object(l.jsx)(b,{}),Object(l.jsx)(m,{list:[{name:"Multi-family construction"},{name:"Commercial Roofing"},{name:"Residential Roofing"},{name:"Exterior Painting"},{name:"Home Improvements "},{name:"Kitchens & Bathrooms"}]}),Object(l.jsx)(x,{}),Object(l.jsx)(O,{list:[{name:"What will cost us?",answer:"Depending on the size of the project (30.000 $ to 100.000 $)."},{name:"What are the warranty standards?",answer:"It can vary from 5 years to 10 years."},{name:"Can I get replacements even in the winter?",answer:"Usually yes, depending on the case."}]}),Object(l.jsx)(p,{list:[{opinion:"Construction CO would be my recommendation to anyone looking for exterior home improvements",name:"Joel John"},{opinion:"Always the best practises. Will come a second time for sure !",name:"Dora Jova"},{opinion:"Ive worked with them on many projects I am a local builder and business owner who has had a need for a roofer I can trust with my time and money.",name:"Christian Barne"}]}),Object(l.jsx)(f,{list:[{name:"Service Quality",description:"We approach construction differently, delivering value beyond our client\u2019s expectations.",img:"ribbon.png"},{name:"Experts in the Field",description:"Our team is constituted of the best and brightest in the industry.",img:"people.png"},{name:"Bound with the People",description:"We employ an open and cooperative approach with our associates.",img:"business.png"}]}),Object(l.jsx)(v,{})]})};s(32);var w=function(){return Object(l.jsxs)("div",{className:"work",children:[Object(l.jsx)("div",{className:"mainHeaderWork",children:Object(l.jsx)("h1",{children:"Our Work"})}),Object(l.jsx)("div",{className:"workPreview",children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{src:"./assets/demo1.jpg",alt:"images"}),Object(l.jsx)("p",{children:"Home Bourdeux"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{src:"./assets/demo2.jpg",alt:"images"}),Object(l.jsx)("p",{children:"Design of 2 parts"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{src:"./assets/demo3.jpg",alt:"images"}),Object(l.jsx)("p",{children:"Beach Design"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{src:"./assets/demo4.jpg",alt:"images"}),Object(l.jsx)("p",{children:"Semi-Bungalow"})]})]})}),Object(l.jsx)(v,{})]})};s(33);function y(){return Object(l.jsx)("h2",{children:"About"})}var N=function(){return Object(l.jsx)("div",{className:"Routes",children:Object(l.jsxs)(a.a,{children:[Object(l.jsxs)("nav",{children:[Object(l.jsx)(a.b,{to:"/ConstructionCO",exact:!0,activeClassName:"active",className:"inactive",children:Object(l.jsx)("h1",{children:"Construct S"})}),Object(l.jsxs)("ul",{className:"nav-links",children:[Object(l.jsx)(a.b,{to:"/",exact:!0,activeClassName:"active",className:"inactive",children:Object(l.jsx)("li",{children:" What We Do "})}),Object(l.jsx)(a.b,{to:"/demos",activeClassName:"active",className:"inactive",children:Object(l.jsx)("li",{children:" See Our Work"})}),Object(l.jsx)(a.b,{to:"/inspirations",activeClassName:"active",className:"inactive",children:Object(l.jsx)("li",{children:" Be Inspired"})}),Object(l.jsx)(a.b,{to:"/about",activeClassName:"active",className:"inactive",children:Object(l.jsx)("li",{children:" About & Contact"})})]})]}),Object(l.jsx)(j,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/about",children:Object(l.jsx)(y,{})}),Object(l.jsx)(o.a,{path:"/demos",children:Object(l.jsx)(w,{})}),Object(l.jsx)(o.a,{path:"/",children:Object(l.jsx)(g,{})})]})})]})})};var C=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(N,{})})},k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,35)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),k()},8:function(e,t,s){}},[[34,1,2]]]);
//# sourceMappingURL=main.236be6ed.chunk.js.map