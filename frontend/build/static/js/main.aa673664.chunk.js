(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{53:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},58:function(e,t,a){e.exports=a(89)},63:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),o=a.n(l),c=(a(63),a(23)),i=a(32),u=a(31);a(15);var s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{expand:"lg",variant:"light",bg:"primary"},r.a.createElement(u.LinkContainer,{to:"/"},r.a.createElement(c.a.Brand,null,"Alunos")),r.a.createElement(c.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(c.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(i.a,{className:"mr-auto"},r.a.createElement(u.LinkContainer,{to:"/cadastrar"},r.a.createElement(i.a.Link,null,"Cadastro")),r.a.createElement(u.LinkContainer,{to:"/listar"},r.a.createElement(i.a.Link,null,"Lista"))))))},m=a(53),E=a.n(m),d=a(54);var f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{src:E.a,roundedCircle:!0}))},p=a(20),v=a(14),h=a(11);var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(s,null))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(f,null)))))},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=a(24),y=a(17),C=a(21),j=a.n(C),L=a(27),x=a(22),O=a(19),S=a(56),A=a(55),W=a.n(A).a.create({baseURL:"https://computtube-io.umbler.net"});var B=function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),c=Object(x.a)(o,2),i=c[0],u=c[1];function s(){return(s=Object(L.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,W.post("/alunos",{nome:a,email:i});case 3:200==e.sent.status&&alert("Aluno Cadastrado com Sucesso");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement(O.a,{onSubmit:function(e){return s.apply(this,arguments)}},r.a.createElement(O.a.Group,{controlId:"formBasicNome"},r.a.createElement(O.a.Label,null,"Nome"),r.a.createElement(O.a.Control,{type:"text",value:a,placeholder:"Entre com nome do aluno",onChange:function(e){l(e.target.value)}})),r.a.createElement(O.a.Group,{controlId:"formBasicEmail"},r.a.createElement(O.a.Label,null,"E-mail"),r.a.createElement(O.a.Control,{type:"email",value:i,placeholder:"Entre com o e-mail do aluno",onChange:function(e){u(e.target.value)}})),r.a.createElement(S.a,{variant:"primary",type:"submit"},"Cadastrar")))};var F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(s,null))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(B,null)))))},N=a(57);var R=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(L.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.get("/alunos");case 2:t=e.sent,l(t.data),localStorage.setItem("alunos",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nome"),r.a.createElement("th",null,"E-mail"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.nome),r.a.createElement("td",null,e.email))})))))};var I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(s,null))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(R,null)))))};o.a.render(r.a.createElement(k.BrowserRouter,null,r.a.createElement(y.g,null,r.a.createElement(y.d,{path:"/",exact:!0,component:g}),r.a.createElement(y.d,{path:"/cadastrar",component:F}),r.a.createElement(y.d,{path:"/listar",component:I}))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");b?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()}},[[58,1,2]]]);
//# sourceMappingURL=main.aa673664.chunk.js.map