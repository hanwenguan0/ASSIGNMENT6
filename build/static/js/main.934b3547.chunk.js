(this.webpackJsonpweek3=this.webpackJsonpweek3||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(2),c=a.n(o),r=(a(9),a(1));a(10);function m(e){return console.log(e),fetch("".concat(e)).then((function(e){return e.json()})).then((function(e){return function(e){return e.map((function(e){return console.log(e),{name:e.name,nameurl:e.html_url,description:e.description}}))}(e)}))}function i(e){var t=e.repoposts;console.log(t.url);var a=Object(n.useState)([]),o=Object(r.a)(a,2),c=o[0],i=o[1];return Object(n.useEffect)((function(){m(t.url).then((function(e){var t=e.filter((function(e){return e}));i(t)}))}),[]),l.a.createElement("div",{className:"modal",tabIndex:"-1"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"Repo Modal"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",null,c.map((function(e){return l.a.createElement("div",null,l.a.createElement("a",{href:e.nameurl},e.name),l.a.createElement("p",null,e.description))})))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),l.a.createElement("button",{type:"button",className:"btn btn-primary"},"Save changes")))))}var s=document.getElementById("modal-container");function u(e){var t=e.postsfromapp,a=e.close,c=Object(n.useState)([]),m=Object(r.a)(c,2),i=m[0],u=m[1];return Object(n.useEffect)((function(){var e;(e=t.url,fetch("".concat(e)).then((function(e){return e.json()})).then((function(e){return function(e){return{email:e.email,name:e.name,location:e.location}}(e)}))).then((function(e){console.log(t.url),u(e)}))}),[]),Object(o.createPortal)(l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button",className:"btn btn-info btn-lg","data-toggle":"modal","data-target":"#myModal"},"Open Modal"),l.a.createElement("div",{className:"modal-backdrop show"}),l.a.createElement("div",{className:"modal",tabIndex:"-1",style:{display:"block"}},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},i.url),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:a},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",null,l.a.createElement("p",null,i.name),l.a.createElement("p",null,i.email),l.a.createElement("p",null,i.location))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:a},"Okay")))))),s)}function d(e){return fetch("/follower-number",{method:"delete",body:e})}function b(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),m=Object(r.a)(c,2),s=m[0],b=m[1],f=Object(n.useState)([]),p=Object(r.a)(f,2),E=p[0],v=p[1];function h(){o(!0)}function y(){o(!1)}function g(){b(!0)}function N(){b(!1)}return Object(n.useEffect)((function(){fetch("https://api.github.com/orgs/nodejs/members").then((function(e){return e.json()})).then((function(e){return function(e){return e.map((function(e){return{url:e.url,login:e.login,avatar_url:e.avatar_url,id:e.id,repos_url:e.repos_url}}))}(e)})).then((function(e){var t=e.filter((function(e){return e}));v(t)}))}),[]),l.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},E.map((function(e){return l.a.createElement("div",null,l.a.createElement("div",null,a&&l.a.createElement(u,{key:e.id,postsfromapp:e,close:y}),l.a.createElement("li",null,l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:h},e.login),l.a.createElement("img",{src:e.avatar_url,className:"card-img-top"}))),l.a.createElement("div",null,l.a.createElement("li",null,s&&l.a.createElement(i,{key:e.id,repoposts:e,close:N}),l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:g},e.login,"'s Repo"))),l.a.createElement("div",null,l.a.createElement("li",null,l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:(t=e.name,void fetch("/follower-number",{method:"post",body:t}))},"Follow"),l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:d(e.name)},"Unfollow")),l.a.createElement("li",null)));var t})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.934b3547.chunk.js.map