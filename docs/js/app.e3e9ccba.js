(function(e){function t(t){for(var n,i,s=t[0],l=t[1],c=t[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i=(r("7faf"),r("2877")),s={},l=Object(i["a"])(s,o,a,!1,null,null,null),c=l.exports,u=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/login"}},[e._v("Login")]),e._v(" | "),r("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1)},p=[],v={name:"HelloWorld"},h=v,g=Object(i["a"])(h,m,p,!1,null,null,null),b=g.exports,x={name:"home",components:{HelloWorld:b}},w=x,_=Object(i["a"])(w,f,d,!1,null,null,null),y=_.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("login-register",{attrs:{formSubmit:e.formSubmit,formRender:e.formRender}})},k=[],O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-register-wrapper"},[r("div",{staticClass:"form-wrapper"},[r("div",{staticClass:"cover"}),r("div",{staticClass:"form"},[r("div",{staticClass:"inner"},[r("div",{staticClass:"label"},[e._v(e._s(e.formRender.title))]),e._l(e.formRender.fields,(function(t,n){var o=t.type,a=t.field,i=t.placeholder,s=t.text,l=t.disabled,c=t.maxLength;return r("div",{key:n,staticClass:"form-item"},["passcode"!==o?[r("input","checkbox"===o?{directives:[{name:"model",rawName:"v-model",value:e.form[a],expression:"form[field]"}],staticClass:"input",attrs:{maxLength:c,placeholder:i,type:"checkbox"},domProps:{checked:Array.isArray(e.form[a])?e._i(e.form[a],null)>-1:e.form[a]},on:{focus:function(t){return e.focus(a)},change:function(t){var r=e.form[a],n=t.target,o=!!n.checked;if(Array.isArray(r)){var i=null,s=e._i(r,i);n.checked?s<0&&e.$set(e.form,a,r.concat([i])):s>-1&&e.$set(e.form,a,r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.form,a,o)}}}:"radio"===o?{directives:[{name:"model",rawName:"v-model",value:e.form[a],expression:"form[field]"}],staticClass:"input",attrs:{maxLength:c,placeholder:i,type:"radio"},domProps:{checked:e._q(e.form[a],null)},on:{focus:function(t){return e.focus(a)},change:function(t){return e.$set(e.form,a,null)}}}:{directives:[{name:"model",rawName:"v-model",value:e.form[a],expression:"form[field]"}],staticClass:"input",attrs:{maxLength:c,placeholder:i,type:o},domProps:{value:e.form[a]},on:{focus:function(t){return e.focus(a)},input:function(t){t.target.composing||e.$set(e.form,a,t.target.value)}}}),e.formValid[a]?r("span",{staticClass:"tips"},[e._v(e._s(e.tip))]):e._e()]:[r("div",{staticClass:"flexbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form[a],expression:"form[field]"}],staticClass:"input passcode",attrs:{type:"text",maxLength:c||4,placeholder:i},domProps:{value:e.form[a]},on:{focus:function(t){return e.focus(a)},input:function(t){t.target.composing||e.$set(e.form,a,t.target.value)}}}),r("button",{staticClass:"btn passcode",attrs:{disabled:l},on:{click:function(t){return e.passcodeResolver(e.formRender.fields[n])}}},[e._v(e._s(s))])]),e.formValid[a]?r("span",{staticClass:"tips"},[e._v(e._s(e.tip))]):e._e()]],2)})),r("div",{staticClass:"btn-group"},[r("button",{staticClass:"btn",on:{click:e.formResolver}},[e._v(e._s(e.formRender.submit))])])],2)])])])},j=[],C=(r("d81d"),r("96cf"),r("1da1")),S={props:{formRender:Object,formSubmit:Function},data:function(){return{tip:null,form:{},formValid:{}}},created:function(){this.createFormObject()},methods:{focus:function(e){this.formValid[e]=!1},map:function(e,t){return Object(C["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=[],o=0;case 2:if(!(o<e.length)){r.next=9;break}return r.next=5,t(e[o],o);case 5:n[o]=r.sent;case 6:o++,r.next=2;break;case 9:return r.abrupt("return",n);case 10:case"end":return r.stop()}}),r)})))()},formResolver:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.map(e.formRender.fields,function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.t0=r.validate,!t.t0){t.next=5;break}return t.next=4,r.validate(e.form[r.field]);case 4:t.t0=!t.sent;case 5:if(!t.t0){t.next=9;break}throw e.tip=r.placeholder,e.formValid[r.field]=!0,new Error(r.placeholder);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:e.formSubmit(e.form),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.warn(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},createFormObject:function(){var e=this;this.formRender.fields.map((function(t){e.$set(e.form,t.field,null),e.$set(e.formValid,t.field,null)}))},passcodeResolver:function(e){e.submit();var t=e.text;e.disabled=!0,e.text="".concat(e.wait," 秒后重试");var r=e.wait,n=setInterval((function(){r--,e.text="".concat(r," 秒后重试"),r<=0&&(clearInterval(n),e.text=t,e.disabled=!1)}),1e3)}}},$=S,L=(r("dfa1"),Object(i["a"])($,O,j,!1,null,"6f60a380",null)),P=L.exports,V={components:{LoginRegister:P},data:function(){return{loginRender:{title:"登录",submit:"立即登录",fields:[{type:"text",field:"username",placeholder:"请输入用户名",validate:function(e){return!!e}},{type:"password",field:"password",placeholder:"请输入密码",validate:function(e){return e&&e.length>=6}}]},registerRender:{title:"注册",submit:"立即注册",fields:[{type:"text",field:"username",placeholder:"请输入用户名",validate:function(e){return!!e}},{type:"password",field:"password",placeholder:"请输入密码",validate:function(e){return e&&e.length>=6}},{type:"text",field:"tel",maxLength:11,placeholder:"请输入手机号",validate:function(e){return e&&11===e.length}},{type:"passcode",field:"code",wait:10,maxLength:4,disabled:!1,text:"获取验证码",placeholder:"请输入验证码",validate:function(e){return e&&4===e.length},submit:function(){console.log("passcode submit")}}]}}},methods:{loginSubmit:function(e){console.log("Login:",e)},registerSubmit:function(e){console.log("Register:",e)}},computed:{isLogin:function(){return 0===this.$route.meta.status},formRender:function(){return this.isLogin?this.loginRender:this.registerRender},formSubmit:function(){return this.isLogin?this.loginSubmit:this.registerSubmit}}},E=V,A=Object(i["a"])(E,R,k,!1,null,null,null),H=A.exports;n["a"].use(u["a"]);var M=[{path:"/",name:"home",component:y},{path:"/login",name:"login",component:H,meta:{status:0}},{path:"/register",name:"register",component:H,meta:{status:1}}],N=new u["a"]({mode:"hash",base:"",routes:M}),W=N,F=r("2f62");n["a"].use(F["a"]);var T=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:W,store:T,render:function(e){return e(c)}}).$mount("#app")},"7faf":function(e,t,r){"use strict";var n=r("b8ff"),o=r.n(n);o.a},"9f43":function(e,t,r){},b8ff:function(e,t,r){},dfa1:function(e,t,r){"use strict";var n=r("9f43"),o=r.n(n);o.a}});
//# sourceMappingURL=app.e3e9ccba.js.map