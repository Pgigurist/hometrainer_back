(function(t){function e(e){for(var r,s,o=e[0],a=e[1],u=e[2],f=0,d=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},c=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2def":function(t,e,n){t.exports=n.p+"img/good_img.568c8328.jpeg"},"46b3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.mainMenu?n("main_menu"):t._e(),t.traningContent?n("traning_content"):t._e(),t.sucessMessage?n("complit_message"):t._e()],1)},c=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main_menu"},[r("center",[r("img",{attrs:{src:n("cf05"),alt:"Хрустальные пазлы"}}),r("h1",[t._v("домашний тренер")]),r("div",{staticClass:"control_panel"},[r("div",{staticClass:"main_control_button",on:{click:t.showChecklist}},[t._v("легкая тренировка")]),r("div",{staticClass:"main_control_button",on:{click:t.showChecklist}},[t._v("средняя тренировка")]),r("div",{staticClass:"main_control_button",on:{click:t.showChecklist}},[t._v("тяжелая тренировка")])])])],1)},o=[],a={name:"main_menu",methods:{showChecklist:function(){this.$store.dispatch("CHANGE_MAINMENUSTATUS")}}},u=a,l=(n("bedc"),n("2877")),f=Object(l["a"])(u,s,o,!1,null,null,null),d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"traning_content"},[n("h1",[t._v("тренировка")]),n("table",[t._m(0),t._l(t.current_checklist,(function(e){return n("tr",{staticClass:"traningItem"},[n("td",{class:{complite:e.state}},[t._v(t._s(e.title))]),n("td",{staticClass:"description",class:{complite:e.state}},[t._v(t._s(e.description))]),n("td",{class:{complite:e.state}},[t._v(t._s(e.repetitions.length))]),t._l(e.repetitions,(function(r){return n("td",{on:{click:function(n){return t.checked({i:e.index,n:r.index})}}},[n("div",{staticClass:"content-check",class:{executed:r.checked,complite:e.state}})])}))],2)}))],2),n("center",[n("div",{staticClass:"back-button",on:{click:t.back_button}},[t._v("назад")])])],1)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("задание")]),n("th",{staticClass:"description"},[t._v("описание")]),n("th",[t._v("повторения")])])}],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},m=[],T={name:"traning_item"},E=T,v=Object(l["a"])(E,h,m,!1,null,null,null),g=v.exports,C={name:"traning_content",data:function(){return{reps:"",count:0}},componets:{TraningItem:g},methods:{back_button:function(){this.$store.dispatch("CHANGE_MAINMENUSTATUS")},checked:function(t){this.$store.dispatch("CHECK_REPETITION",t),this.$store.dispatch("GET_CHECHLIST_REPETITIONS_STATE",t.i)}},computed:{current_checklist:function(){return this.$store.getters.CHECKLIST}}},I=C,S=(n("fd0d"),Object(l["a"])(I,p,_,!1,null,null,null)),N=S.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"complit_message"},[r("h2",[t._v("Завершено")]),r("img",{attrs:{src:n("2def"),alt:"молодец!"}}),r("div",{staticClass:"back-button",on:{click:function(e){return t.confirm()}}},[t._v("OK")])])},b=[],H={name:"complit_message",methods:{confirm:function(){console.log("confirm"),this.$store.dispatch("CHANGE_MAINMENUSTATUS"),this.$store.dispatch("SET_FLASH_CHECKLIST")}}},M=H,O=(n("7240"),Object(l["a"])(M,k,b,!1,null,null,null)),A=O.exports,w={name:"App",data:function(){return{}},computed:{mainMenu:function(){return this.$store.getters.MAINMENU_VISIBILITY},traningContent:function(){return this.$store.getters.TRANINGCONTENT_VISIBILITY},sucessMessage:function(){return this.$store.getters.COMPLITE_CONTENT}},components:{main_menu:d,traning_content:N,complit_message:A},beforeCreate:function(){}},x=w,R=(n("cf25"),Object(l["a"])(x,i,c,!1,null,null,null)),L=R.exports,y=(n("13d5"),n("96cf"),n("1da1")),j=n("2f62");r["a"].use(j["a"]);var G=new j["a"].Store({state:{isHiddenMainMenu:!0,isHiddenTraningContent:!1,isCompliteContent:!1,complite:!1,checklist:[{title:"Приседания",index:0,state:!1,repetitions:[{index:0,checked:!1},{index:1,checked:!1},{index:2,checked:!1}],description:"dsfsefasgfervaervv revrdgdrfgd erfgsrfgerfr erfrf"},{title:"Отжимания",index:1,state:!1,repetitions:[{index:0,checked:!1},{index:1,checked:!1},{index:2,checked:!1},{index:3,checked:!1}],description:"dsfsefasgfervaervv revrdgdrfgd erfgsrfgerfr erfrf"}]},mutations:{SET_HIDDENMAINMENU:function(t){t.isHiddenMainMenu=!t.isHiddenMainMenu},SET_HIDDENTRANINGCONTENT:function(t){t.isHiddenTraningContent=!t.isHiddenTraningContent},CHANGE_REPETITION:function(t,e){t.checklist[e.i].repetitions[e.n].checked=!t.checklist[e.i].repetitions[e.n].checked},SET_CHECKLIST_ITEM_STATE:function(t,e){t.checklist[indexes.index]=!t.checklist[indexes.index]},SET_CHECKLIST_REPETITION_STATE:function(t,e){var n=1;t.checklist[e].repetitions.reduce((function(t,e){e.checked&&n++})),console.log(n),n==t.checklist[e].repetitions.length&&(t.checklist[e].state=!0);var r=!1;t.checklist.reduce((function(t,e){r+=e.state})),t.complite=r>0},FLASH_CHECKLIST:function(t){for(var e=0;e<t.checklist.length;e++){t.checklist[e].state=!1;for(var n=0;n<t.checklist[e].repetitions.length;n++)t.checklist[e].repetitions[n].checked=!1}t.complite=!1}},actions:{CHANGE_MAINMENUSTATUS:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_HIDDENMAINMENU"),e.commit("SET_HIDDENTRANINGCONTENT");case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),GET_MAINMENU_STATUS:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("GET_MAINMENU_STATUS",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_CHECKLIST:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("GET_CHECKLIST",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),CHECK_REPETITION:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("CHANGE_REPETITION",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),CHANGE_CHECKLIST_ITEM_STATE:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_CHECKLIST_ITEM_STATE",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_CHECHLIST_REPETITIONS_STATE:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_CHECKLIST_REPETITION_STATE",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),SET_FLASH_CHECKLIST:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("FLASH_CHECKLIST",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},modules:{},getters:{MAINMENU_VISIBILITY:function(t){return t.isHiddenMainMenu},TRANINGCONTENT_VISIBILITY:function(t){return t.isHiddenTraningContent},CHECKLIST:function(t){return t.checklist},COMPLITE_CONTENT:function(t){return t.complite}}});r["a"].config.productionTip=!1,new r["a"]({store:G,render:function(t){return t(L)}}).$mount("#app")},7240:function(t,e,n){"use strict";var r=n("af66"),i=n.n(r);i.a},7579:function(t,e,n){},af66:function(t,e,n){},bddf:function(t,e,n){},bedc:function(t,e,n){"use strict";var r=n("7579"),i=n.n(r);i.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.194d4ce1.png"},cf25:function(t,e,n){"use strict";var r=n("bddf"),i=n.n(r);i.a},fd0d:function(t,e,n){"use strict";var r=n("46b3"),i=n.n(r);i.a}});
//# sourceMappingURL=app.f81e4f85.js.map