(function(e){function t(t){for(var n,o,c=t[0],s=t[1],u=t[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({CartList:"CartList",OrderList:"OrderList",PersonalInfo:"PersonalInfo",Register:"Register","Shop~home":"Shop~home",Shop:"Shop",home:"home",login:"login"}[e]||e)+"."+{CartList:"ad9a5524",OrderList:"755c65f7",PersonalInfo:"01ae2e99",Register:"b1c7d409","Shop~home":"b2f803b0",Shop:"95b54e7e",home:"de3e8060",login:"4745f0b9"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={CartList:1,OrderList:1,PersonalInfo:1,Register:1,"Shop~home":1,Shop:1,home:1,login:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({CartList:"CartList",OrderList:"OrderList",PersonalInfo:"PersonalInfo",Register:"Register","Shop~home":"Shop~home",Shop:"Shop",home:"home",login:"login"}[e]||e)+"."+{CartList:"4b34c845",OrderList:"ee3ca133",PersonalInfo:"69a87ff8",Register:"24134985","Shop~home":"196a5280",Shop:"33b365a0",home:"88aabf00",login:"5ed07443"}[e]+".css",a=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===n||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],d.parentNode.removeChild(d),r(i)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-jDog/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0dfd":function(e,t,r){},"1ce3":function(e,t){},4212:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("d3b7"),r("159b");var n=r("7a23"),o=(r("b0c0"),{class:"container"});function a(e,t,r,a,i,c){var s=Object(n["H"])("router-view"),u=Object(n["H"])("Docker");return Object(n["A"])(),Object(n["i"])("div",o,[Object(n["l"])(s,null,{default:Object(n["Q"])((function(t){var r=t.Component;return[(Object(n["A"])(),Object(n["g"])(n["b"],null,[e.$route.meta.keep?(Object(n["A"])(),Object(n["g"])(Object(n["J"])(r),{key:e.$route.name})):Object(n["h"])("",!0)],1024))]})),_:1}),Object(n["l"])(u)])}var i={class:"docker",ref:"docker"},c={class:"docker__title"};function s(e,t,r,o,a,s){var u=Object(n["H"])("van-icon"),l=Object(n["H"])("router-link");return Object(n["A"])(),Object(n["i"])("div",i,[(Object(n["A"])(!0),Object(n["i"])(n["a"],null,Object(n["G"])(o.dockerList,(function(e){return Object(n["A"])(),Object(n["i"])("div",{class:Object(n["u"])({docker__item:!0}),key:e.icon},[Object(n["l"])(l,{to:e.to},{default:Object(n["Q"])((function(t){var r=t.isActive;return[Object(n["j"])("div",{class:Object(n["u"])([String(r),"iconfont"]),ref_for:!0,ref:"active"},[Object(n["l"])(u,{name:e.icon},null,8,["name"])],2),Object(n["j"])("div",c,Object(n["L"])(e.text),1)]})),_:2},1032,["to"])])})),128))],512)}var u=r("b85c"),l=(r("2ca0"),{name:"Docker",setup:function(){var e=[{icon:"wap-home-o",text:"首页",to:{name:"Home"}},{icon:"cart-o",text:"购物车",to:{name:"CartList"}},{icon:"orders-o",text:"订单",to:{name:"OrderList"}},{icon:"user-o",text:"我的",to:{name:"PersonalInfo"}}];return{dockerList:e}},mounted:function(){console.log("1")},methods:{showDocker:function(){var e,t=this.$refs.docker,r=this.$refs.active,n=Object(u["a"])(r);try{for(n.s();!(e=n.n()).done;){var o=e.value;if("true"===o.classList[0])return void(t.style.display="flex")}}catch(a){n.e(a)}finally{n.f()}t.style.display="none"}},watch:{fullPath:function(e){e.startsWith("/shop")?this.$refs.docker.style.display="none":this.$refs.docker.style.display="flex"}},computed:{fullPath:function(){return this.$route.fullPath}}}),p=(r("9de8"),r("6b0d")),d=r.n(p);const f=d()(l,[["render",s],["__scopeId","data-v-157e133b"]]);var h=f,m={components:{Docker:h}};const g=d()(m,[["render",a]]);var b=g,v=(r("3ca3"),r("ddb0"),r("6c02")),O=function(){return Promise.all([r.e("Shop~home"),r.e("home")]).then(r.bind(null,"b3d7"))},y=function(){return r.e("login").then(r.bind(null,"578a"))},j=function(){return r.e("Register").then(r.bind(null,"1feb"))},L=function(){return r.e("CartList").then(r.bind(null,"2a56"))},k=function(){return r.e("OrderList").then(r.bind(null,"ce55"))},S=function(){return r.e("PersonalInfo").then(r.bind(null,"03ac"))},w=function(){return Promise.all([r.e("Shop~home"),r.e("Shop")]).then(r.bind(null,"821d"))},P=[{path:"/",name:"Home",component:O,meta:{keep:!0},children:[{path:"shop/:id",name:"Shop",component:w,meta:{keep:!0}}]},{path:"/login",name:"Login",component:y,meta:{keep:!0},beforeEnter:function(e,t,r){var n=localStorage.isLogin;n?r("/"):r()}},{path:"/register",name:"Register",component:j,beforeEnter:function(e,t,r){var n=localStorage.isLogin;n?r("/"):r()}},{path:"/cart-list",name:"CartList",component:L,meta:{keep:!0}},{path:"/order-list",name:"OrderList",component:k,meta:{keep:!0}},{path:"/personal-info",name:"PersonalInfo",component:S,meta:{keep:!0}}],I=Object(v["a"])({history:Object(v["b"])(),routes:P});I.beforeEach((function(e,t,r){var n=localStorage.isLogin;n||"Login"===e.name||"Register"===e.name?r():r("/login")}));var _=I,x=r("5502"),C=r("5d2d"),E="__cart-list-key__",A="__pay-list-key__",D={cartList:C["a"].get(E)||{},payList:C["a"].get(A)||{},currentShopID:0},R=D,T=(r("b64b"),r("07ac"),{updateCartList:function(e,t){var r=Object.keys(t)[0],n=Object.keys(t[r].product)[0];0!==Object.keys(e.cartList).length&&r in e.cartList?e.cartList[r].product[n]=t[r].product[n]:e.cartList[r]=t[r]},setCurrentShopID:function(e,t){e.currentShopID=t},clearCartList:function(e){e.cartList={}},clearPayList:function(e){e.payList={}},updatePayList:function(e,t){var r=e.cartList,n={};t.forEach((function(e){var t,o,a=Object.keys(e)[0],i=Object.values(e)[0];n[a]||(n[a]={}),n[a].product||(n[a].product={}),n[a].product[i]=null===(t=r[a])||void 0===t||null===(o=t.product)||void 0===o?void 0:o[i]})),e.payList=n}}),N=T,H=r("63e0"),$=r.n(H),J=(r("b680"),{currentTotalAmount:function(e){var t,r,n=null===(t=e.cartList)||void 0===t||null===(r=t[e.currentShopID])||void 0===r?void 0:r.product;if(n){var o=0;return Object.values(n).forEach((function(e){o+=e.count})),o}},currentTotalShopAmount:function(e){return Object.keys(e.cartList).length},currentTotalPrice:function(e){var t,r,n=null===(t=e.cartList)||void 0===t||null===(r=t[e.currentShopID])||void 0===r?void 0:r.product;if(n){var o=0;return Object.values(n).forEach((function(e){o+=e.count*e.price})),o.toFixed(1)}}}),M=J,B=r("1ce3"),U=r.n(B),q=!1,F=Object(x["b"])({state:R,mutations:N,actions:$.a,modules:U.a,getters:M,plugins:q?[Object(x["a"])()]:[]}),Q=(r("f5df1"),r("0dfd"),r("e17f"),r("2241")),G=(r("2b28"),r("9ed2")),K=(r("a909"),r("3acc")),V=(r("3c32"),r("417e")),W=(r("8a58"),r("e41f")),z=(r("414a"),r("7a82")),X=(r("5f1a"),r("a3e2")),Y=(r("f06a"),r("20fb")),Z=(r("9cb7"),r("66fd")),ee=(r("a39e"),r("241e")),te=(r("570a"),r("1d36")),re=(r("c3a6"),r("ad06")),ne=(r("e7e5"),r("d399")),oe=(r("38d5"),r("772a")),ae=(r("be7f"),r("565f")),ie=(r("0653"),r("34e9")),ce=(r("66b9"),r("b650")),se=[ce["b"],ie["a"],ae["a"],oe["a"],ne["a"],re["b"],te["a"],ee["a"],Z["a"],Y["a"],X["b"],z["a"],W["b"],V["a"],K["a"],G["a"],Q["a"]],ue=(r("d81d"),r("96eb")),le=r.n(ue),pe=le.a.mock,de=le.a.Random;function fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[];t.push({id:0,imgUrl:"http://www.dell-lee.com/imgs/vue3/near.png",name:"沃尔玛",sales:9987,expressLimit:0,expressPrice:5,slogan:"VIP尊享满59元减5元优惠券"});for(var r=0;r<e;r++)t.push({id:r+1,imgUrl:de.dataImage("50x50",de.pick(["超市","商场"])),name:de.ctitle(3,6),sales:de.integer(4899,9999),expressLimit:de.pick(de.range(0,61,30)),expressPrice:de.pick(de.range(0,6,5)),slogan:de.cword(8,15)});return t}function he(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t={"限时秒杀":[]},r=20,n=0;n<r;n++)t["限时秒杀"].push({id:de.increment(),url:de.dataImage("88x88","限时秒杀"),price:de.float(10,200,1,1),desc:"月售 "+de.integer(100,2e3)+" 件",title:de.ctitle(2,5)+" "+de.pick([250,500])+"g / 份","count-down":1e3*de.integer(28800,86400)});t["限时秒杀"].map((function(e){e["origin-price"]=Math.floor(10*(e.price+de.float(10,50,1,1)))/10})),t["时令水果"]=[{id:de.increment(),url:"http://www.dell-lee.com/imgs/vue3/tomato.png",price:"39.6",desc:"月售 1867 件",title:"番茄 250g / 份"},{id:de.increment(),url:"http://www.dell-lee.com/imgs/vue3/cherry.png",price:"99.6",desc:"月售 2804 件",title:"车厘子 500g / 份"},{id:de.increment(),url:"http://www.dell-lee.com/imgs/vue3/orange.png",price:"12.4",desc:"月售 1566 件",title:"橙子 500g/份"}];for(var o=0;o<10;o++)t["时令水果"].push({id:de.increment(),url:de.dataImage("88x88","诱人水果"),price:de.float(10,200,1,1),desc:"月售 "+de.integer(100,2e3)+" 件",title:de.ctitle(2,5)+" "+de.pick([250,500])+"g / 份"});for(var a=["蔬菜菌菇","肉蛋水产","乳制品","烘焙熟食","酒水冲调","粮油调味","休闲零食"],i=0,c=a;i<c.length;i++){var s=c[i];t[s]=[];for(var u=0;u<e;u++)t[s].push({id:de.increment(),url:de.dataImage("88x88",s),price:de.float(10,200,1,1),desc:"月售 "+de.integer(100,2e3)+" 件",title:de.ctitle(2,5)+" "+de.pick([250,500])+"g / 份"})}return t}pe("/api/nearby",fe(10)),pe(/\/api\/shop\/0/i,he(10)),pe(/\/api\/shop\/1/i,he(11)),pe(/\/api\/shop\/2/i,he(12)),pe(/\/api\/shop\/3/i,he(13)),pe(/\/api\/shop\/4/i,he(14)),pe(/\/api\/shop\/5/i,he(15)),pe(/\/api\/shop\/6/i,he(16)),pe(/\/api\/shop\/7/i,he(17)),pe(/\/api\/shop\/8/i,he(9)),pe(/\/api\/shop\/9/i,he(8)),pe(/\/api\/shop\/10/i,he(7)),pe(/\/api\/shop\/11/i,he(6));var me=Object(n["f"])(b);me.use(F).use(_),se.forEach((function(e){me.use(e)})),me.mount("#app")},"5d2d":function(e,t,r){"use strict";r("e9c4");var n={get:function(e){var t=localStorage.getItem(e);return o(t)?JSON.parse(t):t},set:function(e,t){"string"===typeof t?localStorage.setItem(e,t):localStorage.setItem(e,JSON.stringify(t))},remove:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}};function o(e){try{return JSON.parse(e),!0}catch(t){return!1}}t["a"]=n},"63e0":function(e,t){},"9de8":function(e,t,r){"use strict";r("4212")}});