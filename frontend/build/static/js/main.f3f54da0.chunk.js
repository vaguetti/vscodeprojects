(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{55:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},61:function(e,t,a){e.exports=a(97)},66:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),l=a.n(o),c=(a(66),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function i(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var u=a(25),s=a(15),m=(a(17),a(23)),d=a(24),E=a(22);var p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{expand:"lg",variant:"light",bg:"primary"},r.a.createElement(E.LinkContainer,{to:"/"},r.a.createElement(m.a.Brand,null,"Alunos")),r.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{className:"mr-auto"},r.a.createElement(E.LinkContainer,{to:"/cadastrar"},r.a.createElement(d.a.Link,null,"Cadastro")),r.a.createElement(E.LinkContainer,{to:"/listar"},r.a.createElement(d.a.Link,null,"Lista")),r.a.createElement(E.LinkContainer,{to:"/qrcode"},r.a.createElement(d.a.Link,null,"QR Code"))))))},f=a(54),v=a(37),h=a(21);var g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(p,null))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,e.component()))))},b=a(55),w=a.n(b),y=a(56);var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{src:w.a,roundedCircle:!0}))},C=a(19),L=a.n(C),j=a(28),O=a(18),S=a(10),x=a(29),B=a(57),A=a.n(B).a.create({baseURL:"https://computtube-io.umbler.net"});var N=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),c=Object(O.a)(l,2),i=c[0],u=c[1];function s(){return(s=Object(j.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,A.post("/alunos",{nome:a,email:i});case 3:200===e.sent.status&&alert("Aluno Cadastrado com Sucesso");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement(S.a,{onSubmit:function(e){return s.apply(this,arguments)}},r.a.createElement(S.a.Group,{controlId:"formBasicNome"},r.a.createElement(S.a.Label,null,"Nome"),r.a.createElement(S.a.Control,{type:"text",value:a,placeholder:"Entre com nome do aluno",onChange:function(e){o(e.target.value)}})),r.a.createElement(S.a.Group,{controlId:"formBasicEmail"},r.a.createElement(S.a.Label,null,"E-mail"),r.a.createElement(S.a.Control,{type:"email",value:i,placeholder:"Entre com o e-mail do aluno",onChange:function(e){u(e.target.value)}})),r.a.createElement(x.a,{variant:"primary",type:"submit"},"Cadastrar")))},R=a(58);var W=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("/alunos");case 2:t=e.sent,o(t.data),localStorage.setItem("alunos",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nome"),r.a.createElement("th",null,"E-mail"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.nome),r.a.createElement("td",null,e.email))})))))},I=a(59),F=a.n(I);var U=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",null,r.a.createElement(F.a,{delay:300,onError:function(e){console.error(e)},onScan:function(e){console.log(e),e&&o(e)},style:{width:"100%"}}),r.a.createElement(S.a,{onSubmit:function(e){e.preventDefault(),alert(a)}},r.a.createElement(S.a.Group,{controlId:"formBasicNome"},r.a.createElement(S.a.Label,null,"Leitura do QR Code"),r.a.createElement(S.a.Control,{type:"text",value:a,disable:"true"})),r.a.createElement(x.a,{variant:"primary",type:"submit"},"Buscar")))};l.a.render(r.a.createElement(u.BrowserRouter,null,r.a.createElement(s.g,null,r.a.createElement(s.d,{path:"/",exact:!0,key:"1"},r.a.createElement(g,{component:k})),r.a.createElement(s.d,{path:"/cadastrar",key:"2"},r.a.createElement(g,{component:N})),r.a.createElement(s.d,{path:"/listar",key:"3"},r.a.createElement(g,{component:W})),r.a.createElement(s.d,{path:"/qrcode",key:"4"},r.a.createElement(g,{component:U})))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");c?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(t,e)}))}}()}},[[61,1,2]]]);
//# sourceMappingURL=main.f3f54da0.chunk.js.map