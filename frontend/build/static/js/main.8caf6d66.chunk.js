(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{54:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},61:function(e,t,n){e.exports=n(97)},66:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),l=n.n(o),c=(n(66),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function i(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var u=n(25),s=n(14),m=(n(17),n(23)),d=n(24),E=n(22);var p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{expand:"lg",variant:"light",bg:"primary"},r.a.createElement(E.LinkContainer,{to:"/"},r.a.createElement(m.a.Brand,null,"Alunos")),r.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{className:"mr-auto"},r.a.createElement(E.LinkContainer,{to:"/cadastrar"},r.a.createElement(d.a.Link,null,"Cadastro")),r.a.createElement(E.LinkContainer,{to:"/listar"},r.a.createElement(d.a.Link,null,"Lista")),r.a.createElement(E.LinkContainer,{to:"/qrcode"},r.a.createElement(d.a.Link,null,"QR Code"))))))},f=n(53),h=n(36),v=n(20);var g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement(p,null))),r.a.createElement(h.a,null,r.a.createElement(v.a,null,e.component()))))},b=n(54),w=n.n(b),k=n(55);var y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{src:w.a,roundedCircle:!0}))},C=n(18),L=n.n(C),j=n(28),S=n(21),x=n(16),O=n(57),A=n(56),N=n.n(A).a.create({baseURL:"https://computtube-io.umbler.net"});var W=function(){var e=Object(a.useState)(""),t=Object(S.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(""),c=Object(S.a)(l,2),i=c[0],u=c[1];function s(){return(s=Object(j.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,N.post("/alunos",{nome:n,email:i});case 3:200===e.sent.status&&alert("Aluno Cadastrado com Sucesso");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement(x.a,{onSubmit:function(e){return s.apply(this,arguments)}},r.a.createElement(x.a.Group,{controlId:"formBasicNome"},r.a.createElement(x.a.Label,null,"Nome"),r.a.createElement(x.a.Control,{type:"text",value:n,placeholder:"Entre com nome do aluno",onChange:function(e){o(e.target.value)}})),r.a.createElement(x.a.Group,{controlId:"formBasicEmail"},r.a.createElement(x.a.Label,null,"E-mail"),r.a.createElement(x.a.Control,{type:"email",value:i,placeholder:"Entre com o e-mail do aluno",onChange:function(e){u(e.target.value)}})),r.a.createElement(O.a,{variant:"primary",type:"submit"},"Cadastrar")))},B=n(58);var R=function(){var e=Object(a.useState)([]),t=Object(S.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/alunos");case 2:t=e.sent,o(t.data),localStorage.setItem("alunos",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nome"),r.a.createElement("th",null,"E-mail"))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.nome),r.a.createElement("td",null,e.email))})))))},F=n(59),I=n.n(F);var U=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(I.a,{delay:300,onError:this.handleError,onScan:this.handleScan,style:{width:"100%"}}),r.a.createElement("p",null,"No result")))};l.a.render(r.a.createElement(u.BrowserRouter,null,r.a.createElement(s.g,null,r.a.createElement(s.d,{path:"/",exact:!0,key:"1"},r.a.createElement(g,{component:y})),r.a.createElement(s.d,{path:"/cadastrar",key:"2"},r.a.createElement(g,{component:W})),r.a.createElement(s.d,{path:"/listar",key:"3"},r.a.createElement(g,{component:R})),r.a.createElement(s.d,{path:"/qrcode",key:"4"},r.a.createElement(g,{component:U})))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");c?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(t,e)}))}}()}},[[61,1,2]]]);
//# sourceMappingURL=main.8caf6d66.chunk.js.map