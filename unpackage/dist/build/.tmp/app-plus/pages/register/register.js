(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"13a3":function(t,n,e){"use strict";e.r(n);var o=e("4c9a"),a=e("1e7d");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("e0aa");var u=e("2877"),r=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports},"1e7d":function(t,n,e){"use strict";e.r(n);var o=e("7a24"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},"4c9a":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"61b0":function(t,n,e){},"7a24":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{reguser:{username:"",password:"",names:"",phone:"",email:""}}},onLoad:function(){},methods:{onreg:function(n){var e=this.reguser;t.request({url:this.serverUrl+"/regcus",method:"POST",data:JSON.stringify(e),success:function(n){200==n.data.code?(t.showToast({title:"注册成功",duration:2e3,icon:"none",position:"bottom"}),t.navigateTo({url:"../login/login",success:function(t){},fail:function(){},complete:function(){}})):11111==n.data.code?t.showToast({title:"用户已存在",duration:2e3,icon:"none",position:"bottom"}):11112==n.data.code&&t.showToast({title:"账号或密码不能为空",duration:2e3,icon:"none",position:"bottom"})}})}}};n.default=e}).call(this,e("6e42")["default"])},e0aa:function(t,n,e){"use strict";var o=e("61b0"),a=e.n(o);a.a}},[["cbb2","common/runtime","common/vendor"]]]);