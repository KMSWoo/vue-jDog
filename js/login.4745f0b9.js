(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"269d":function(e,n,t){"use strict";t("7610")},"578a":function(e,n,t){"use strict";t.r(n);var i=t("7a23"),r=function(e){return Object(i["D"])("data-v-915cde1a"),e=e(),Object(i["B"])(),e},a={class:"wrapper"},c=r((function(){return Object(i["j"])("img",{class:"wrapper__img",src:"https://cdn.jsdelivr.net/gh/KMSWoo/Image-hosting@master/image/user.7i7o32g1x9k0.png"},null,-1)})),o={class:"wrapper__input"},s={class:"wrapper__input"},u=r((function(){return Object(i["j"])("div",{class:"test"},"(测试：任意)",-1)}));function p(e,n,t,r,p,l){return Object(i["A"])(),Object(i["i"])("div",a,[c,Object(i["j"])("div",o,[Object(i["R"])(Object(i["j"])("input",{class:"wrapper__input__content",placeholder:"用户名",required:"","onUpdate:modelValue":n[0]||(n[0]=function(n){return e.username=n})},null,512),[[i["N"],e.username,void 0,{trim:!0}]])]),Object(i["j"])("div",s,[Object(i["R"])(Object(i["j"])("input",{type:"password",class:"wrapper__input__content",placeholder:"请输入密码","onUpdate:modelValue":n[1]||(n[1]=function(n){return e.password=n}),required:"",autocomplete:"new-password"},null,512),[[i["N"],e.password,void 0,{trim:!0}]])]),Object(i["j"])("div",{class:"wrapper__login-button",onClick:n[2]||(n[2]=function(){return r.handleLogin&&r.handleLogin.apply(r,arguments)})},"登陆"),Object(i["j"])("div",{class:"wrapper__login-link",onClick:n[3]||(n[3]=function(){return r.handleRegisterClick&&r.handleRegisterClick.apply(r,arguments)})},"立即注册"),u])}t("e7e5");var l=t("d399"),d=t("6c02"),g={name:"Login",setup:function(){var e=Object(d["d"])(),n=function(){localStorage.isLogin=!0,l["a"].loading({message:"加载中...",forbidClick:!0,loadingType:"spinner"}),setTimeout((function(){e.push("/")}),1500)},t=function(){e.push("/register")};return{handleLogin:n,handleRegisterClick:t}}},j=(t("269d"),t("6b0d")),b=t.n(j);const _=b()(g,[["render",p],["__scopeId","data-v-915cde1a"]]);n["default"]=_},7610:function(e,n,t){}}]);