(this.webpackJsonpcensio=this.webpackJsonpcensio||[]).push([[0],{139:function(e,a,t){e.exports=t.p+"static/media/signin.58ee1d5a.svg"},144:function(e,a,t){e.exports=t.p+"static/media/profile-picture-1.4d26e151.jpg"},145:function(e,a,t){e.exports=t.p+"static/media/profile-picture-2.487133c5.jpg"},146:function(e,a,t){e.exports=t.p+"static/media/profile-picture-4.ccd796b3.jpg"},147:function(e,a,t){e.exports=t.p+"static/media/profile-picture-5.baf7bf75.jpg"},150:function(e,a,t){e.exports=t.p+"static/media/react-logo-transparent.f7d45c01.svg"},153:function(e,a,t){e.exports=t(254)},158:function(e,a,t){},244:function(e,a,t){e.exports=t.p+"static/media/themesberg.105e5059.svg"},245:function(e,a,t){e.exports=t.p+"static/media/react-hero-logo.9394d800.svg"},251:function(e,a,t){e.exports=t.p+"static/media/bootstrap-5-logo.6aae84ab.svg"},252:function(e,a,t){e.exports=t.p+"static/media/react-logo.b779e4fd.svg"},254:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(33),l=t.n(c),m=t(19),s=(t(158),t(159),t(160),t(10)),o=t(90),i=t(6),u=function(e){return"/vivienda/"+e},d=function(e){return"/vivienda/"+e+"/contacto"},E={path:"/vivienda"},p={path:"/vivienda/:id"},b={path:"/vivienda/:id/contacto"},f={path:"/sign-in"},v={path:"/examples/404"},g=t(261),N=t(272),h=t(262),w=t(137),x=t(40),j=t(45),O=t.n(j),y=t(135),k=t.n(y),C=t(58),S=t.n(C),L=[{id:1,provincia:"Buenos Aires",departamento:"San Mart\xedn",calle:"Ricochet",altura:"1420",piso:"PB",depto:"b",descripcion:"rejas negras"},{id:2,provincia:"CABA",calle:"sarmiento",altura:"365"}],I=function(){return new Promise((function(e,a){e(L)}))},P=function(e){return new Promise((function(a,t){console.log(e);var n=function(e){return k.a.find(L,{id:parseInt(e)})}(e);console.log(n),n?a(n):t("error")}))},G=function(e){return new Promise((function(a,t){a(S.a.get("real."+e))}))},R=function(e,a){return new Promise((function(t,n){S.a.set("real."+e,a),t()}))},T=function(e){return new Promise((function(a,t){a(S.a.get("contacto."+e))}))},D=function(e,a){return new Promise((function(t,n){S.a.set("contacto."+e,a),t()}))},B=function(e){return r.a.createElement("tr",null,r.a.createElement("td",{className:"border-0 fw-bold"},e.id),r.a.createElement("td",{className:"border-0"},e.provincia),r.a.createElement("td",{className:"border-0"},e.departamento),r.a.createElement("td",{className:"border-0"},e.calle),r.a.createElement("td",{className:"border-0"},e.altura),r.a.createElement("td",{className:"border-0"},e.piso),r.a.createElement("td",{className:"border-0"},e.dpto),r.a.createElement("td",{className:"border-0"},e.descripcion),r.a.createElement("td",null,r.a.createElement(m.b,{to:u(e.id)},"Completar")))},V=function(e){var a=e.data;return r.a.createElement(g.a,null,r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",{className:"border-0"},"Id"),r.a.createElement("th",{className:"border-0"},"Provincia"),r.a.createElement("th",{className:"border-0"},"Departamento"),r.a.createElement("th",{className:"border-0"},"Calle"),r.a.createElement("th",{className:"border-0"},"Altura"),r.a.createElement("th",{className:"border-0"},"Piso"),r.a.createElement("th",{className:"border-0"},"Dpto"),r.a.createElement("th",{className:"border-0"},"Descripcion"),r.a.createElement("th",{className:"border-0"}))),r.a.createElement("tbody",null,a.map(B)))},A=function(){var e=O()(I),a=e.isLoading,t=e.data;return r.a.createElement(N.a,{border:"light",className:"bg-white shadow-sm mb-4"},r.a.createElement(N.a.Body,null,r.a.createElement(h.a,{className:"d-flex flex-wrap flex-md-nowrap align-items-center py-4"},r.a.createElement(w.a,{className:"d-block mb-4 mb-md-0"},r.a.createElement("h1",{className:"h2"},"Viviendas"),a?r.a.createElement("div",null,"Loading..."):r.a.createElement(V,{data:t})))))},_=t(16),z=t.n(_),F=t(29),M=t(268),J=t(138),q=function(e){return r.a.createElement("div",null,r.a.createElement("pre",null,JSON.stringify(e,null,2)))},U=t(83),H=function(e){var a=e.initialVivienda,t=e.viviendaReal,c=Object(x.a)(t||a),l=Object(s.a)(c,2),m=l[0],o=l[1],i=o.text,u=o.checkbox,E=Object(n.useState)(!1),p=Object(s.a)(E,2),b=p[0],f=p[1],v=function(){var e=Object(F.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,R(a.id,m.values);case 3:f(!0);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return b?r.a.createElement(U.Redirect,{to:d(a.id)}):r.a.createElement(M.a,{onSubmit:v},r.a.createElement(N.a,{border:"light",className:"bg-white shadow-sm mb-4"},r.a.createElement(N.a.Body,null,r.a.createElement("h5",null,"Confirmar datos vivienda"),r.a.createElement(h.a,{className:"d-flex flex-wrap flex-md-nowrap align-items-center py-4"},r.a.createElement(w.a,{md:4,className:"mb-3"},r.a.createElement(M.a.Group,{className:"mb-3"},r.a.createElement(M.a.Label,null,"Calle"),r.a.createElement(M.a.Control,i("calle")))),r.a.createElement(w.a,{md:2,className:"mb-3"},r.a.createElement(M.a.Group,{className:"mb-3"},r.a.createElement(M.a.Label,null,"Altura"),r.a.createElement(M.a.Control,i("altura")))),r.a.createElement(w.a,{md:2,className:"mb-3"},r.a.createElement(M.a.Group,{className:"mb-3"},r.a.createElement(M.a.Label,null,"Piso"),r.a.createElement(M.a.Control,i("piso")))),r.a.createElement(w.a,{md:2,className:"mb-3"},r.a.createElement(M.a.Group,{className:"mb-3"},r.a.createElement(M.a.Label,null,"Dpto"),r.a.createElement(M.a.Control,i("dpto"))))),r.a.createElement(h.a,null,r.a.createElement(w.a,{md:10,className:"mb-3"},r.a.createElement(M.a.Group,{className:"mb-3"},r.a.createElement(M.a.Label,null,"Descripcion"),r.a.createElement(M.a.Control,i("descripcion"))))),r.a.createElement(h.a,null,r.a.createElement(w.a,{md:4,className:"mb-3"},r.a.createElement(M.a.Group,{className:"mb-3"},r.a.createElement(M.a.Label,null,"Reemplazo"),r.a.createElement(M.a.Check,u("reemplazo"))))))),r.a.createElement(h.a,null,r.a.createElement(w.a,{md:3,className:"mb-3"},r.a.createElement(J.a,{variant:"primary",type:"submit"},"Siguiente"))),r.a.createElement(q,{formState:m}))},K=function(){var e=Object(i.useParams)().id,a=O()(Object(F.a)(z.a.mark((function a(){var t,n;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P(e);case 2:return t=a.sent,a.next=5,G(e);case 5:return n=a.sent,a.abrupt("return",{vivienda:t,viviendaReal:n});case 7:case"end":return a.stop()}}),a)})))),t=a.isLoading,n=a.data;return r.a.createElement("div",null,r.a.createElement("h1",{className:"h2"},"Vivienda"),t?"Loading...":r.a.createElement(H,{initialVivienda:n.vivienda,viviendaReal:n.viviendaReal}))},Q=t(11),W=t(21),X=t(263),Y=t(264),Z=t(139),$=t.n(Z),ee=t(140),ae=t.n(ee),te=r.a.createContext("auth"),ne=function(){window.localStorage.removeItem("token"),window.localStorage.removeItem("username"),window.localStorage.removeItem("email"),window.dispatchEvent(new Event("storage")),console.log("event dispatched")},re=function(){var e=Object(F.a)(z.a.mark((function e(a,t){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae()({method:"post",url:"/api/accounts/login/",baseURL:"https://nicops.github.io/api/",data:{email:a,password:t}});case 2:return n=e.sent,window.localStorage.setItem("token",n.data.token),window.localStorage.setItem("email",a),window.localStorage.setItem("username",a),window.dispatchEvent(new Event("storage")),console.log("event dispatched"),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(x.a)(),a=Object(s.a)(e,2),t=a[0],c=a[1],l=c.text,m=c.password,o=Object(n.useContext)(te),u=Object(n.useState)(null),d=Object(s.a)(u,2),E=d[0],p=d[1],b=function(){var e=Object(F.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re(t.values.username,t.values.password);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0);try{400===e.t0.response.status?p("Usuario/Password incorrecto"):p("Error desconocido")}catch(a){p("Error desconocido")}case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return o&&"undefined"!==o?r.a.createElement(i.Redirect,{path:"/"}):r.a.createElement("main",null,r.a.createElement("section",{className:"d-flex align-items-center my-5 mt-lg-6 mb-lg-5"},r.a.createElement(X.a,null,r.a.createElement(h.a,{className:"justify-content-center form-bg-image",style:{backgroundImage:"url(".concat($.a,")")}},r.a.createElement(w.a,{xs:12,className:"d-flex align-items-center justify-content-center"},r.a.createElement("div",{className:"bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500"},r.a.createElement("div",{className:"text-center text-md-center mb-4 mt-md-0"},r.a.createElement("h3",{className:"mb-0"},"Ingreso a la plataforma")),r.a.createElement("form",{onSubmit:function(e){b(),e.preventDefault()}},r.a.createElement(M.a.Group,{id:"email",className:"mb-4"},r.a.createElement(M.a.Label,null,"Email"),r.a.createElement(Y.a,null,r.a.createElement(Y.a.Text,null,r.a.createElement(Q.a,{icon:W.b})),r.a.createElement(M.a.Control,Object.assign({autoFocus:!0,required:!0},l("username"))))),r.a.createElement(M.a.Group,null,r.a.createElement(M.a.Group,{id:"password",className:"mb-4"},r.a.createElement(M.a.Label,null,"Password"),r.a.createElement(Y.a,null,r.a.createElement(Y.a.Text,null,r.a.createElement(Q.a,{icon:W.g})),r.a.createElement(M.a.Control,Object.assign({required:!0},m("password")))))),E&&r.a.createElement("div",{style:{color:"red"}},E),r.a.createElement(J.a,{variant:"primary",type:"submit",className:"w-100"},"Ingresar")),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center mt-4"},r.a.createElement("span",{className:"fw-normal"},"No est\xe1s registrado? Contact\xe1 a tu administradorx"))))))))},le=function(e){var a=e.vivienda,t=e.contacto,c=Object(x.a)(t||{}),l=Object(s.a)(c,2),m=l[0],o=l[1],i=o.text,d=o.email,E=o.textarea,p=Object(n.useState)(!1),b=Object(s.a)(p,2);b[0],b[1];return r.a.createElement(M.a,{onSubmit:function(e){D(a.id,m.values),alert("dead end"),e.preventDefault()}},r.a.createElement(N.a,{border:"light",className:"bg-white shadow-sm mb-4"},r.a.createElement(N.a.Body,null,r.a.createElement("h5",null,"Datos contacto"),r.a.createElement(h.a,null,r.a.createElement(w.a,{md:4,className:"mb-3"},r.a.createElement(M.a.Group,{className:"mb-3"},r.a.createElement(M.a.Label,null,"Nombre de pila"),r.a.createElement(M.a.Control,i("nombre_pila")))),r.a.createElement(w.a,{md:2,className:"mb-3"},r.a.createElement(M.a.Group,{className:"mb-3"},r.a.createElement(M.a.Label,null,"Telefono fijo"),r.a.createElement(M.a.Control,i("telefono_fijo")))),r.a.createElement(w.a,{md:2,className:"mb-3"},r.a.createElement(M.a.Group,{className:"mb-3"},r.a.createElement(M.a.Label,null,"Celular"),r.a.createElement(M.a.Control,i("celular")))),r.a.createElement(w.a,{md:2,className:"mb-3"},r.a.createElement(M.a.Group,{className:"mb-3"},r.a.createElement(M.a.Label,null,"email"),r.a.createElement(M.a.Control,d("email"))))),r.a.createElement(h.a,null,r.a.createElement(w.a,{md:10,className:"mb-3"},r.a.createElement(M.a.Group,{className:"mb-3"},r.a.createElement(M.a.Label,null,"Descripcion"),r.a.createElement(M.a.Control,Object.assign({as:"textarea",rows:"3"},E("observaciones")))))))),r.a.createElement(h.a,null,r.a.createElement(w.a,{md:1,className:"mb-3"},r.a.createElement(J.a,{variant:"secondary",href:"#"+u(a.id),onClick:function(e){D(a.id,m.values)}},"Atras")),r.a.createElement(w.a,{md:3,className:"mb-3"},r.a.createElement(J.a,{variant:"primary",type:"submit"},"Siguiente"))),r.a.createElement(q,{formState:m}))},me=function(){var e=Object(i.useParams)().id,a=O()(Object(F.a)(z.a.mark((function a(){var t,n;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P(e);case 2:return t=a.sent,a.next=5,T(e);case 5:return n=a.sent,a.abrupt("return",{vivienda:t,contacto:n});case 7:case"end":return a.stop()}}),a)})))),t=a.isLoading,n=a.data;return r.a.createElement("div",null,r.a.createElement("h1",{className:"h2"},"Vivienda"),t?"Loading...":r.a.createElement(le,{vivienda:n.vivienda,contacto:n.contacto}))},se=t(151),oe=t(273),ie=(t(269),t(270)),ue=t(265),de=t(266),Ee=t(271),pe=(t(244),t(245),t(64)),be=t.n(pe),fe=function(){var e=Object(n.useContext)(te),a=Object(i.useLocation)(),t=a.pathname,c=Object(n.useState)(!1),l=Object(s.a)(c,2),o=l[0],u=l[1],d=o?"show":"",p=function(){return u(!o)},b=function(e){var a=e.title,n=e.link,c=e.external,l=e.target,s=e.icon,o=e.image,i=e.badgeText,d=e.badgeBg,E=void 0===d?"secondary":d,p=e.badgeColor,b=void 0===p?"primary":p,f=i?"d-flex justify-content-start align-items-center justify-content-between":"",v=n===t?"active":"",g=c?{href:n}:{as:m.b,to:n};return r.a.createElement(ie.a.Item,{className:v,onClick:function(){return u(!1)}},r.a.createElement(ie.a.Link,Object.assign({},g,{target:l,className:f}),r.a.createElement("span",null,s?r.a.createElement("span",{className:"sidebar-icon"},r.a.createElement(Q.a,{icon:s})," "):null,o?r.a.createElement(ue.a,{src:o,width:20,height:20,className:"sidebar-icon svg-icon"}):null,r.a.createElement("span",{className:"sidebar-text"},a)),i?r.a.createElement(de.a,{pill:!0,bg:E,text:b,className:"badge-md notification-count ms-2"},i):null))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee.a,{expand:!1,collapseOnSelect:!0,variant:"dark",className:"navbar-theme-primary px-4 d-md-none"},r.a.createElement(Ee.a.Toggle,{as:J.a,"aria-controls":"main-navbar",onClick:p},r.a.createElement("span",{className:"navbar-toggler-icon"}))),r.a.createElement(oe.a,{timeout:300,in:o,classNames:"sidebar-transition"},r.a.createElement(se.a,{className:"collapse ".concat(d," sidebar d-md-block bg-primary text-white")},r.a.createElement("div",{className:"sidebar-inner px-4 pt-3"},r.a.createElement("div",{className:"user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4"},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("div",{className:"d-block"},r.a.createElement("h6",null,"Hola, ",e),r.a.createElement(J.a,{variant:"secondary",size:"xs",onClick:ne,className:"text-dark"},r.a.createElement(Q.a,{icon:W.e,className:"me-2"})," Logout"))),r.a.createElement(ie.a.Link,{className:"collapse-close d-md-none",onClick:p},r.a.createElement(Q.a,{icon:W.f}))),r.a.createElement(ie.a,{className:"flex-column pt-3 pt-md-0"},r.a.createElement(b,{title:"Vivienda",link:E.path,icon:W.d}))))))},ve=t(89),ge=t(267),Ne=t(144),he=t.n(Ne),we=t(145),xe=t.n(we),je=t(146),Oe=t.n(je),ye=t(147),ke=t.n(ye),Ce=(he.a,xe.a,be.a,Oe.a,ke.a,function(e){var a=Object(n.useContext)(te);return r.a.createElement(Ee.a,{variant:"dark",expanded:!0,className:"ps-0 pe-2 pb-0"},r.a.createElement(X.a,{fluid:!0,className:"px-0"},r.a.createElement("div",{className:"d-flex justify-content-between w-100"},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("h2",null,"cens.io")),r.a.createElement(ie.a,{className:"align-items-center"},r.a.createElement(ge.a,{as:ie.a.Item},r.a.createElement(ge.a.Toggle,{as:ie.a.Link,className:"pt-1 px-0"},r.a.createElement("div",{className:"media d-flex align-items-center"},r.a.createElement(Q.a,{icon:ve.a,color:"#000000",size:"2x",className:"md-avatar rounded-circle"}),r.a.createElement("div",{className:"media-body ms-2 text-dark align-items-center d-none d-lg-block"},r.a.createElement("span",{className:"mb-0 font-small fw-bold"},a)))),r.a.createElement(ge.a.Menu,{className:"user-dropdown dropdown-menu-right mt-2"},r.a.createElement(ge.a.Item,{className:"fw-bold"},r.a.createElement(Q.a,{icon:ve.a,className:"me-2"})," My Profile"),r.a.createElement(ge.a.Item,{className:"fw-bold"},r.a.createElement(Q.a,{icon:W.a,className:"me-2"})," Settings"),r.a.createElement(ge.a.Item,{className:"fw-bold"},r.a.createElement(Q.a,{icon:W.c,className:"me-2"})," Messages"),r.a.createElement(ge.a.Item,{className:"fw-bold"},r.a.createElement(Q.a,{icon:W.h,className:"me-2"})," Support"),r.a.createElement(ge.a.Divider,null),r.a.createElement(ge.a.Item,{className:"fw-bold",onClick:ne},r.a.createElement(Q.a,{icon:W.e,className:"text-danger me-2"})," Logout")))))))}),Se=t(149),Le=t.n(Se),Ie=(t(251),t(252),t(255),function(e){Le()().get("year");return r.a.createElement("div",null)}),Pe=t(150),Ge=t.n(Pe),Re=function(e){var a=e.show;return r.a.createElement("div",{className:"preloader bg-soft flex-column justify-content-center align-items-center ".concat(a?"":"show")},r.a.createElement(ue.a,{className:"loader-element animate__animated animate__jackInTheBox",src:Ge.a,height:40}))},Te=function(e){var a=e.component,t=Object(o.a)(e,["component"]),c=Object(n.useState)(!1),l=Object(s.a)(c,2),m=l[0],u=l[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){return u(!0)}),1e3);return function(){return clearTimeout(e)}}),[]),r.a.createElement(i.Route,Object.assign({},t,{render:function(e){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(Re,{show:!m})," ",r.a.createElement(a,e)," ")}}))},De=function(e){var a=e.component,t=Object(o.a)(e,["component"]),c=Object(n.useState)(!1),l=Object(s.a)(c,2),m=l[0],u=l[1];Object(n.useEffect)((function(){var e=setTimeout((function(){return u(!0)}),1e3);return function(){return clearTimeout(e)}}),[]);var d=Object(n.useState)((function(){return"false"!==localStorage.getItem("settingsVisible")})),E=Object(s.a)(d,2),p=E[0],b=E[1],f=function(){b(!p),localStorage.setItem("settingsVisible",!p)};return r.a.createElement(i.Route,Object.assign({},t,{render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Re,{show:!m}),r.a.createElement(fe,null),r.a.createElement("main",{className:"content"},r.a.createElement(Ce,null),r.a.createElement(a,e),r.a.createElement(Ie,{toggleSettings:f,showSettings:p})))}}))},Be=function(e){return function(a){var t=Object(n.useContext)(te);return"undefined"!==t&&t?r.a.createElement(e,a):r.a.createElement(i.Redirect,{to:f.path})}},Ve=function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],c=a[1],l=null;function m(){var e=window.localStorage.getItem("username");console.log("got item"),console.log(e),e!==t&&(c(e),l=e)}return Object(n.useEffect)((function(){return m(),window.addEventListener("storage",m),function(){window.removeEventListener("storage",m)}}),[]),m(),r.a.createElement(te.Provider,{value:l||t},r.a.createElement(i.Switch,null,r.a.createElement(Te,{exact:!0,path:f.path,component:ce}),r.a.createElement(De,{exact:!0,path:"/",component:Be(A)}),r.a.createElement(De,{exact:!0,path:E.path,component:Be(A)}),r.a.createElement(De,{exact:!0,path:p.path,component:Be(K)}),r.a.createElement(De,{exact:!0,path:b.path,component:Be(me)}),r.a.createElement(i.Redirect,{to:v.path})))},Ae=function(){var e=Object(i.useLocation)().pathname;return Object(n.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"auto"})}),[e]),null};l.a.render(r.a.createElement(m.a,null,r.a.createElement(Ae,null),r.a.createElement(Ve,null)),document.getElementById("root"))},64:function(e,a,t){e.exports=t.p+"static/media/profile-picture-3.9a250e5c.jpg"}},[[153,1,2]]]);
//# sourceMappingURL=main.d2d1b2a2.chunk.js.map