(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(3),s=n.n(a),o=n(4),i=n(5),h=n(7),l=n(6),b=n(0);var d=function(e){var t=e.name,n=e.email,r=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(r,"200\xd7200"),alt:"robots"}),Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})};var u=function(e){var t=e.robots.map((function(e,t){return Object(b.jsx)(d,{id:e.id,name:e.name,email:e.email},t)}));return Object(b.jsx)("div",{children:t})};n(13);var j=function(e){e.searchfield;var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robot",onChange:t})})};n(14);var f=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},g=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(b.jsx)(j,{searchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(u,{robots:r})})]}):Object(b.jsx)("h1",{className:"bg-light-red br4 pa4 ma3 shadow-5 fl w-25 tc",children:"Loading..."})}}]),n}(c.a.Component),m=(n(15),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))});n(16);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.29f61efa.chunk.js.map