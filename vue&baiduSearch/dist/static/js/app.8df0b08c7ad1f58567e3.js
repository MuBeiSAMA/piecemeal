webpackJsonp([1],{"/uar":function(t,n){},0:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("MVMM"),s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var o=e("vSla")({name:"App"},s,!1,function(t){e("/uar")},null,null).exports,a=e("zO6J"),r={data:function(){return{wd:"",tipList:[],now:-1,height:null}},created:function(){this.height=window.innerHeight},methods:{get:function(t){var n=this;if(38!=t.keyCode&&40!=t.keyCode)return 13==t.keyCode?(window.open("https://wwww.baidu.com/s?wd="+this.wd),this.wd="",void(this.now=-1)):void this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",{params:{wd:this.wd},jsonp:"cb"}).then(function(t){n.tipList=t.body.s},function(t){alert(t.status)})},choose:function(t){this.wd=this.tipList[t],window.open("https://wwww.baidu.com/s?wd="+this.wd),this.now=-1,this.wd=""},next:function(){this.now++,this.now>=this.tipList.length&&(this.now=0),this.wd=this.tipList[this.now]},last:function(){this.now--,this.now<-1&&(this.now=this.tipList.length-1),this.wd=this.tipList[this.now]}}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"box fc",style:{height:t.height+"px"}},[e("div",{staticClass:"fc search_box"},[e("h2",[t._v("easy search!")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.wd,expression:"wd"}],staticClass:"input_box",attrs:{type:"text"},domProps:{value:t.wd},on:{keyup:function(n){t.get(n)},keydown:[function(n){return"button"in n||!t._k(n.keyCode,"down",40,n.key,["Down","ArrowDown"])?t.next(n):null},function(n){return"button"in n||!t._k(n.keyCode,"up",38,n.key,["Up","ArrowUp"])?(n.preventDefault(),t.last(n)):null}],input:function(n){n.target.composing||(t.wd=n.target.value)}}}),t._v(" "),e("ul",{staticClass:"list",attrs:{type:"none"}},t._l(t.tipList,function(n,i){return e("li",{staticClass:"list_item",class:{bg:t.now===i},on:{click:function(n){t.choose(i)}}},[t._v(t._s(n))])}))])])},staticRenderFns:[]};var c=e("vSla")(r,u,!1,function(t){e("nuKv")},"data-v-2aeeb85a",null).exports;i.a.use(a.a);var p=new a.a({routes:[{path:"/",name:"HelloWorld",component:c}]}),h=e("aozt"),w=e.n(h),d=e("OolZ");i.a.prototype.$http=w.a,i.a.use(d.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:p,components:{App:o},template:"<App/>"})},nuKv:function(t,n){}},["NHnr"]);