(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{45:function(e,a,r){},48:function(e,a,r){"use strict";r.r(a);var c=r(0),t=r(1),s=r(20),n=r.n(s),i=r(4),l=r(2),o=function(){var e=Object(l.g)();return Object(c.jsxs)("div",{className:"container mt-5",children:[Object(c.jsx)("h1",{children:"Login Screen"}),Object(c.jsx)("hr",{}),Object(c.jsx)("button",{className:"btn btn-success",onClick:function(){e.replace("/heroe-app")},children:"Log in"})]})},h=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],p=function(){var e=Object(l.g)(),a=Object(l.i)().heroeId,r=Object(t.useMemo)((function(){return e=a,h.find((function(a){return a.id===e}));var e}),[a]);if(!r)return Object(c.jsx)(l.a,{to:"/"});var s=r.superhero,n=r.publisher,i=r.alter_ego,o=r.first_appearance,p=r.characters;return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsx)("img",{src:"../assets/heroes/".concat(a,".jpg"),alt:s,className:"img-thumbnail animate__animated animate__fadeInLeft",style:{height:"auto"}})}),Object(c.jsxs)("div",{className:"col-md-8",children:[Object(c.jsx)("h3",{className:"display-5 text-center fw-bold",children:s}),Object(c.jsx)("hr",{}),Object(c.jsxs)("ul",{className:"list-group",children:[Object(c.jsxs)("li",{className:"list-group-item p-1",children:[" ",Object(c.jsx)("b",{children:"Alter ego: "}),i]}),Object(c.jsxs)("li",{className:"list-group-item p-1",children:[" ",Object(c.jsx)("b",{children:"Publisher: "}),n]}),Object(c.jsxs)("li",{className:"list-group-item p-1",children:[" ",Object(c.jsx)("b",{children:"First Appeareance: "}),o]}),Object(c.jsxs)("li",{className:"list-group-item p-1",children:[" ",Object(c.jsx)("b",{children:"Characters: "}),p]})]}),Object(c.jsx)("button",{className:"btn btn-outline-info mt-2 w-100",onClick:function(){e.length<=2?e.push("/"):e.goBack()},children:"Return"})]})]})},j=r(8),d=function(e){var a=e.id,r=e.superhero,t=(e.publisher,e.alter_ego),s=e.first_appearance,n=e.characters;return Object(c.jsx)("div",{className:"card mb-3 p-0",style:{display:"table",maxWidth:"380px",margin:"15px"},children:Object(c.jsxs)("div",{className:"row g-0",children:[Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsx)("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"card-img-top",alt:r,style:{objectFit:"cover"}})}),Object(c.jsx)("div",{className:"col-md-8",children:Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",children:r}),Object(c.jsx)("p",{className:"card-text",children:t}),t!==n&&Object(c.jsx)("p",{className:"card-text",children:n}),Object(c.jsx)("p",{className:"card-text",children:Object(c.jsx)("small",{className:"text-muted",children:s})}),Object(c.jsx)(i.b,{to:"./hero/".concat(a),children:"Mas..."})]})})]})})},b=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("Publisher ".concat(e," no existe"));return h.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(c.jsx)("div",{className:"card-columns row d-flex justify-content-center animate__animated animate__fadeIn",children:r.map((function(e){return Object(c.jsx)(d,Object(j.a)({},e),e.id)}))})},u=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Marvel Screen"}),Object(c.jsx)("hr",{}),Object(c.jsx)(b,{publisher:"Marvel Comics"})]})},m=function(){return Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)(i.b,{className:"navbar-brand",to:"/heroe-app/marvel",children:Object(c.jsx)("h3",{style:{fontFamily:"Lobster"},children:"Heroe App"})}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(c.jsxs)("ul",{className:"navbar-nav",children:[Object(c.jsx)(i.c,{exact:!0,to:"/heroe-app/marvel",activeClassName:"active",className:"nav-item nav-link",children:"Marvel"}),Object(c.jsx)(i.c,{exact:!0,to:"/heroe-app/dc",activeClassName:"active",className:"nav-item nav-link",children:"DC"}),Object(c.jsx)(i.c,{exact:!0,to:"/heroe-app/search",activeClassName:"active",className:"nav-item nav-link",children:"Search"}),Object(c.jsx)(i.c,{exact:!0,to:"/heroe-app/login",activeClassName:"active",className:"nav-item nav-link",children:"Logout"})]})})]})})},x=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"DC Screen"}),Object(c.jsx)("hr",{}),Object(c.jsx)(b,{publisher:"DC Comics"})]})},v=r(12),O=r(22),f=r.n(O),g=r(11),C=function(e){var a=e.history,r=Object(l.h)(),s=f.a.parse(r.search).q,n=void 0===s?"":s,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(v.a)(a,2),c=r[0],s=r[1];return[c,function(e){var a=e.target;s(Object(j.a)(Object(j.a)({},c),{},Object(g.a)({},a.name,a.value)))},function(){s(e)}]}({searchText:""}),o=Object(v.a)(i,2),p=o[0],b=o[1],u=p.searchText,m=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),h.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(n)}),[n]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Search Screen"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-md-5",children:[Object(c.jsx)("h4",{children:"Search Form"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(u.trim()))},children:[Object(c.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control",name:"searchText",value:u,onChange:b,autoComplete:"off"}),Object(c.jsx)("button",{type:"submit",className:"btn m-1 btn-outline-primary w-100",children:"Search.."})]})]}),Object(c.jsxs)("div",{className:"col-md-7",children:[Object(c.jsx)("h4",{children:"Results"}),Object(c.jsx)("hr",{}),""===n&&Object(c.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==n&&0===m.length&&Object(c.jsxs)("div",{className:"alert alert-danger",children:["Hero not found: ",n]}),m.map((function(e){return Object(c.jsx)(d,Object(j.a)({},e),e.id)}))]})]})]})},N=(r(45),function(){return Object(c.jsx)("h4",{className:"not-found",children:"Sorry, but the page you have requested was not found."})}),_=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{className:"container mt-2",children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{exact:!0,path:"/heroe-app/marvel",component:u}),Object(c.jsx)(l.b,{exact:!0,path:"/heroe-app/hero/:heroeId",component:p}),Object(c.jsx)(l.b,{exact:!0,path:"/heroe-app/dc",component:x}),Object(c.jsx)(l.b,{exact:!0,path:"/heroe-app/search",component:C}),Object(c.jsx)(l.a,{to:"/heroe-app/marvel"}),Object(c.jsx)(l.b,{component:N})]})})]})},y=function(){return Object(c.jsx)(i.a,{children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{exact:!0,path:"/heroe-app/login",component:o}),Object(c.jsx)(l.b,{path:"/heroe-app",component:_})]})})},M=(r(46),r(47),function(){return Object(c.jsx)(i.a,{basename:"/heroe-app",children:Object(c.jsx)(y,{})})});n.a.render(Object(c.jsx)(M,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.c58b74bb.chunk.js.map