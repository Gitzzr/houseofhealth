(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/drugdetails/drugdetails"],{"340e":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},5440:function(t,n,e){"use strict";e.r(n);var u=e("340e"),a=e("d149");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("920b");var o=e("2877"),i=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=i.exports},"920b":function(t,n,e){"use strict";var u=e("a964"),a=e.n(u);a.a},a964:function(t,n,e){},d149:function(t,n,e){"use strict";e.r(n);var u=e("f942"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a},f942:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{listphy:[]}},onLoad:function(n){var e=this;t.request({url:this.serverUrl+"/selectdru/id="+n.id,method:"GET",success:function(t){if(console.log(t.data," at components\\drugdetails\\drugdetails.vue:42"),200==t.data.code){var n=t.data.data;e.listphy=n}}})}};n.default=e}).call(this,e("6e42")["default"])}},[["2abc","common/runtime","common/vendor"]]]);