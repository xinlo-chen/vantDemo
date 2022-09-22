(function(){"use strict";var t={1650:function(t,n,e){var o=e(6369),c=e(2631),a=function(){var t=this,n=t._self._c;return n("div",[n("van-checkbox-group",{staticClass:"card-goods",model:{value:t.checkedGoods,callback:function(n){t.checkedGoods=n},expression:"checkedGoods"}},t._l(t.goods,(function(e){return n("van-checkbox",{key:e.id,staticClass:"card-goods__item",attrs:{name:e.id}},[n("van-card",{attrs:{title:e.title,desc:e.desc,num:e.num,price:t.formatPrice(e.price),thumb:e.thumb}})],1)})),1),n("van-submit-bar",{attrs:{price:t.totalPrice,disabled:!t.checkedGoods.length,"button-text":t.submitBarText},on:{submit:t.onSubmit}})],1)},i=[],r=(e(2763),e(5698)),s=(e(3446),e(4861)),l=(e(7152),e(7304)),u=(e(323),e(5931)),d=(e(4704),e(7004)),p={components:{[d.Z.name]:d.Z,[u.Z.name]:u.Z,[l.Z.name]:l.Z,[s.Z.name]:s.Z},data(){return{checkedGoods:["1","2","3"],goods:[{id:"1",title:"进口香蕉",desc:"约250g，2根",price:200,num:1,thumb:"https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"},{id:"2",title:"陕西蜜梨",desc:"约600g",price:690,num:1,thumb:"https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"},{id:"3",title:"美国伽力果",desc:"约680g/3个",price:2680,num:1,thumb:"https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"}]}},computed:{submitBarText(){const t=this.checkedGoods.length;return"结算"+(t?`(${t})`:"")},totalPrice(){return this.goods.reduce(((t,n)=>t+(-1!==this.checkedGoods.indexOf(n.id)?n.price:0)),0)}},methods:{formatPrice(t){return(t/100).toFixed(2)},onSubmit(){(0,r.Z)("点击结算")}}},f=p,v=e(1001),m=(0,v.Z)(f,a,i,!1,null,null,null),g=m.exports,h=function(){var t=this,n=t._self._c;return n("div",{staticClass:"goods"},[n("van-swipe",{staticClass:"goods-swipe",attrs:{autoplay:3e3}},[n("van-swipe-item",[n("img",{attrs:{src:"//img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg"}})]),n("van-swipe-item",[n("img",{attrs:{src:"//img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg",alt:""}})])],1),n("van-cell-group",[n("van-cell",[n("div",{staticClass:"title"},[t._v(t._s("美国伽力果（约680g/3个）"))]),n("div",{staticClass:"price"},[t._v(t._s("¥26.80"))])]),n("van-cell",{staticClass:"express"},[n("van-col",{attrs:{span:"10"}},[t._v(t._s("运费：免运费"))]),n("van-col",{attrs:{span:"14"}},[t._v(t._s("剩余：19"))])],1)],1),n("van-cell-group",{staticClass:"cellGroup"},[n("van-cell",{attrs:{value:"进入店铺",icon:"shop-o","is-link":""},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v("有赞的店")]),n("van-tag",{staticClass:"tag",attrs:{type:"danger"}},[t._v("官方")])]},proxy:!0}])}),n("van-cell",{attrs:{title:"线下门店",icon:"location-o","is-link":""}})],1),n("van-cell-group",{staticClass:"cellGroup"},[n("van-cell",{attrs:{title:"查看商品详情","is-link":""}})],1),n("van-goods-action",[n("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"},on:{click:t.onClickIcon}}),n("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车"},on:{click:t.onClickCart}}),n("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.onClickButton}}),n("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:t.onClickButton}})],1)],1)},b=[],Z=(e(2602),e(9294)),k=(e(8867),e(2133)),_=(e(9427),e(3414)),x=(e(2443),e(9864)),y=(e(5825),e(9858)),C=(e(5041),e(4814)),w=(e(4399),e(5947)),O=(e(2699),e(8799)),j=(e(7468),e(9387)),P=(e(5935),e(113)),G=(e(7658),{components:{[P.Z.name]:P.Z,[j.Z.name]:j.Z,[O.Z.name]:O.Z,[x.Z.name]:x.Z,[w.Z.name]:w.Z,[C.Z.name]:C.Z,[y.Z.name]:y.Z,[x.Z.name]:x.Z,[_.Z.name]:_.Z,[k.Z.name]:k.Z,[Z.Z.name]:Z.Z},methods:{onClickCart(){this.$router.push("cart")}}}),z=G,T=(0,v.Z)(z,h,b,!1,null,null,null),B=T.exports;o.ZP.use(c.ZP);var S=new c.ZP({routes:[{path:"/",name:"goods",component:B},{path:"/cart",name:"cart",component:g}]}),$=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},F=[],A={name:"App"},E=A,I=(0,v.Z)(E,$,F,!1,null,null,null),M=I.exports;o.ZP.config.productionTip=!1,new o.ZP({router:S,render:t=>t(M)}).$mount("#app")}},n={};function e(o){var c=n[o];if(void 0!==c)return c.exports;var a=n[o]={exports:{}};return t[o](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,o,c,a){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],c=t[u][1],a=t[u][2];for(var r=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[s])}))?o.splice(s--,1):(r=!1,a<i&&(i=a));if(r){t.splice(u--,1);var l=c();void 0!==l&&(n=l)}}return n}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,c,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var c,a,i=o[0],r=o[1],s=o[2],l=0;if(i.some((function(n){return 0!==t[n]}))){for(c in r)e.o(r,c)&&(e.m[c]=r[c]);if(s)var u=s(e)}for(n&&n(o);l<i.length;l++)a=i[l],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(u)},o=self["webpackChunkvantdemo"]=self["webpackChunkvantdemo"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(1650)}));o=e.O(o)})();
//# sourceMappingURL=app.759bc213.js.map