(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/setEMR/setEMR"],{"2e0e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{emrtabvalue:{username:"",treatmenttime:"",diseasetime:"",emrphone:"",symptom:""}}},methods:{puttab:function(e){var n=this.emrtabvalue;t.request({url:this.serverUrl+"/addemr",method:"POST",data:JSON.stringify(n),success:function(e){console.log("成功"," at components\\setEMR\\setEMR.vue:65"),200==e.data.code?(t.showToast({title:"提交成功",duration:2e3,icon:"none",position:"bottom"}),t.setStorage({key:"emrtabvalue",data:e.data.data,success:function(){console.log("success"," at components\\setEMR\\setEMR.vue:79")}}),setTimeout(function(){t.switchTab({url:"../../pages/inquiry/inquiry",success:function(t){},fail:function(){},complete:function(){}})},2e3)):10006==e.data.code&&t.showToast({title:"姓名不能为空",duration:2e3,icon:"none",position:"bottom"})}})}}};e.default=n}).call(this,n("6e42")["default"])},"3a12":function(t,e,n){"use strict";var o=n("6693"),a=n.n(o);a.a},4654:function(t,e,n){"use strict";n.r(e);var o=n("2e0e"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a},6693:function(t,e,n){},bba8:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},bef9:function(t,e,n){"use strict";n.r(e);var o=n("bba8"),a=n("4654");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("3a12");var s=n("2877"),i=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports}},[["089b","common/runtime","common/vendor"]]]);