(this["webpackJsonpdl-react-redux-template"]=this["webpackJsonpdl-react-redux-template"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/logo.1dc29329.svg"},22:function(e,t,n){e.exports=n.p+"static/media/person-navegating.fe2bdcf5.png"},26:function(e,t,n){e.exports=n(37)},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),c=n.n(r),i=n(9),l=n(25),s=n(2);var u=n(21),d=n.n(u);function m(e){var t=e.time,n=e.loaded;return o.a.createElement("div",{className:"loading-container ".concat(t&&n?"close-loading":"")},o.a.createElement("div",{className:"loading-page"},o.a.createElement("img",{src:d.a,alt:"Logo Img",className:"logo-img"}),o.a.createElement("div",null,o.a.createElement("h1",{className:"dot one"},"."),o.a.createElement("h1",{className:"dot two"},"."),o.a.createElement("h1",{className:"dot three"},"."),o.a.createElement("h1",{className:"dot fourth"},"."))))}function f(){return o.a.createElement("header",null,o.a.createElement("div",{className:"background"},o.a.createElement("div",{className:"wave first"}),o.a.createElement("div",{className:"wave second"})))}function g(){return o.a.createElement("footer",null)}function v(e){var t=e.imgUrl,n=e.imgAlt,a=e.imgClass,r=Object(i.b)();return o.a.createElement("img",{src:t,alt:n,className:a,onLoad:function(){r({type:"REMOVE_LOADING_ITEM"})},onLoadCapture:function(){r({type:"ADD_LOADING_ITEM"})}})}v.defaultProps={imgClass:null};var h=n(11);var p=function(){var e=Object(i.c)((function(e){return e.loadingItems})),t=Object(a.useState)(!1),n=Object(h.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)(!1),s=Object(h.a)(l,2),u=s[0],d=s[1],f=Object(a.useState)(!1),g=Object(h.a)(f,2),v=g[0],p=g[1],E=Object(a.useState)(0),w=Object(h.a)(E,2),b=w[0],O=w[1];return function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}return null}),[t])}((function(){c(!0),O(1),1===b&&v&&(d(!0),O(2))}),1e3),0!==e||v||p(!0),v&&u?null:o.a.createElement(m,{time:r,loaded:v})},E=n(22),w=n.n(E);n(35);var b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=n(23),j=n(7),y=n(24),I=Object(j.combineReducers)({loadingItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LOADING_ITEM":return e+1;case"REMOVE_LOADING_ITEM":return e-1;default:return e}}}),k={loadingItems:0};var A=Object(j.createStore)(I,k,Object(N.composeWithDevTools)(Object(j.applyMiddleware)(y.a)));c.a.render(o.a.createElement(i.a,{store:A},o.a.createElement(l.a,null,o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/",exact:!0,component:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,null),o.a.createElement(f,null),o.a.createElement("main",{className:"home"},o.a.createElement("div",{className:"background"},o.a.createElement(v,{imgAlt:"Guy Navegating on the World",imgClass:"first-img",imgUrl:w.a})),o.a.createElement("div",{className:"content"},o.a.createElement("p",{className:"quote"},"We know how to do it!"),o.a.createElement("h1",null,"Developing Websites"),o.a.createElement("p",{className:"text"},"we design and develop websites with the heights  professional quality, customizing each website to our client's needs"))),o.a.createElement(g,null))}})))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dweb",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/dweb","/service-worker.js");b?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}(),function e(){document.documentElement.style.setProperty("--app-height","".concat(window.innerHeight,"px")),window.addEventListener("resize",e)}()}},[[26,1,2]]]);
//# sourceMappingURL=main.3180e6f9.chunk.js.map