(function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f16bee26"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"242e2745"}[t]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],d.parentNode.removeChild(d),n(s)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("8a23"),a=n.n(r);a.a},"30f9":function(t,e,n){t.exports=n.p+"img/images.4627764e.png"},3920:function(t,e,n){},"488a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{color:"grey lighten-4",flat:"",height:"90px",tile:""}},[r("v-toolbar",{attrs:{dense:""}},[r("v-img",{attrs:{src:n("30f9"),height:"40","max-width":"70"}}),r("v-spacer"),r("div",{staticClass:"link smAndDown "},[r("v-btn",{attrs:{icon:""}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)],1),r("div",[r("v-btn",{staticClass:"link2",attrs:{icon:""}},[r("router-link",{attrs:{to:"/add"}},[t._v("Add")])],1)],1)],1)],1)},i=[],c={name:"Header"},u=c,l=(n("a740"),n("2877")),f=n("6544"),d=n.n(f),p=n("8336"),v=n("b0af"),h=n("adda"),m=n("2fa4"),b=n("71d9"),g=Object(l["a"])(u,s,i,!1,null,null,null),w=g.exports;d()(g,{VBtn:p["a"],VCard:v["a"],VImg:h["a"],VSpacer:m["a"],VToolbar:b["a"]});var y={name:"App",components:{Header:w}},_=y,k=(n("034f"),Object(l["a"])(_,a,o,!1,null,null,null)),C=k.exports,x=(n("d3b7"),n("8c4f")),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PostComponent")],1)},O=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container post"},[n("v-alert",{attrs:{type:"info",dismissible:"",light:""}},[t._v(" Thoughts 101 is a free platform where you can share your Thoughts to the world ")]),n("h1",[t._v("Latest Thoughts")]),t.error?n("v-alert",{attrs:{type:"warning",dismissible:""}},[t._v(" "+t._s(t.error)+" ")]):t._e(),t._l(t.posts,(function(e,r){return n("div",{key:e._id,attrs:{item:e,index:r},on:{dblclick:function(n){return t.deletePost(e._id)}}},[n("v-container",{staticClass:"grey lighten-5"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[n("v-card",{staticClass:"card",attrs:{"max-height":"500000px",hover:"",tile:"",shaped:""}},[n("h3",[t._v(t._s(e.title))]),n("p",{staticClass:"body"},[t._v(t._s(e.body))]),n("p",{staticClass:"name"},[t._v("Written by "+t._s(e.name))])]),n("br")],1)],1)],1)],1)})),n("div",{staticClass:"footer"},[n("Footer")],1)],2)},E=[],A=(n("96cf"),n("1da1")),T=n("d5b5"),V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-col",{staticClass:"row"},[n("div",[n("a",{attrs:{href:"https://www.instagram.com/rodger.codes/",target:"_blank"}},[n("i",{staticClass:"fab fa-instagram fa-lg",attrs:{color:"pink"}})])]),n("div",[n("a",{attrs:{href:"https://www.linkedin.com/in/rodger-kumwanje-2a708a18b/",target:"_blank"}},[n("i",{staticClass:"fab fa-linkedin fa-lg",attrs:{color:"blue"}})])]),n("div",[n("a",{attrs:{href:"mailto:rkumwanje@gmail.com",target:"_blank"}},[n("i",{staticClass:"fas fa-envelope fa-lg",attrs:{color:"red"}})])])])],1)},S=[],H={name:"Footer"},L=H,$=(n("c272"),n("62ad")),N=Object(l["a"])(L,V,S,!1,null,null,null),R=N.exports;d()(N,{VCol:$["a"]});var B={name:"PostComponent",data:function(){return{error:"",posts:[]}},created:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T["a"].getPosts();case 3:n=e.sent,t.posts=n,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.error=e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},components:{Footer:R},methods:{deletePost:function(t){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,T["a"].deletePost(t);case 3:return n.next=5,T["a"].getPosts();case 5:e.posts=n.sent,n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}},D=B,F=(n("fab4"),n("0798")),M=n("a523"),q=n("0fd9"),I=Object(l["a"])(D,P,E,!1,null,"6a30009c",null),J=I.exports;d()(I,{VAlert:F["a"],VCard:v["a"],VCol:$["a"],VContainer:M["a"],VRow:q["a"]});var K={name:"Home",components:{PostComponent:J}},U=K,W=Object(l["a"])(U,j,O,!1,null,null,null),z=W.exports;r["a"].use(x["a"]);var G=[{path:"/",name:"Home",component:z},{path:"/add",name:"Add",component:function(){return n.e("about").then(n.bind(null,"7e55"))}}],Q=new x["a"]({routes:G}),X=Q,Y=n("f309");r["a"].use(Y["a"]);var Z=new Y["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:X,vuetify:Z,render:function(t){return t(C)}}).$mount("#app")},"8a23":function(t,e,n){},a740:function(t,e,n){"use strict";var r=n("bc17"),a=n.n(r);a.a},bc17:function(t,e,n){},c272:function(t,e,n){"use strict";var r=n("3920"),a=n.n(r);a.a},d5b5:function(t,e,n){"use strict";n("d81d"),n("d3b7");var r=n("5530"),a=n("d4ec"),o=n("bee2"),s=n("bc3a"),i=n.n(s),c="api/backend/",u=function(){function t(){Object(a["a"])(this,t)}return Object(o["a"])(t,null,[{key:"getPosts",value:function(){return new Promise((function(t,e){i.a.get(c).then((function(e){var n=e.data;t(n.map((function(t){return Object(r["a"])(Object(r["a"])({},t),{},{createdAt:new Date(t.createdAt)})})))})).catch((function(t){e(t)}))}))}},{key:"creatPost",value:function(t,e,n){return i.a.post(c,{title:t,body:e,name:n})}},{key:"deletePost",value:function(t){return i.a.delete("".concat(c).concat(t))}}]),t}();e["a"]=u},fab4:function(t,e,n){"use strict";var r=n("488a"),a=n.n(r);a.a}});
//# sourceMappingURL=app.4e8d58f7.js.map