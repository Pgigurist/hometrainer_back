(function(t){function e(e){for(var r,c,o=e[0],a=e[1],u=e[2],p=0,d=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},s=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=a;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2def":function(t,e,n){t.exports=n.p+"img/good_img.568c8328.jpeg"},"46b3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("login"),t.mainMenu?n("main_menu"):t._e(),n("center",[n("div",{staticClass:"login-button"},[t._v(" войти ")])]),t.traningContent?n("traning_content"):t._e(),t.sucessMessage?n("complit_message"):t._e()],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"login-form"},[n("div",{staticClass:"title-form"},[t._v("логин")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("div",{staticClass:"title-form"},[t._v("пароль")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirm,expression:"passwordConfirm"}],attrs:{type:"text"},domProps:{value:t.passwordConfirm},on:{input:function(e){e.target.composing||(t.passwordConfirm=e.target.value)}}}),n("div",{staticClass:"button-form",attrs:{id:"confirm-form"},on:{click:function(e){return t.send()}}},[t._v("войти")])])])},o=[],a={name:"login",data:function(){return{username:"",password:"",passwordConfirm:passwordConfirm,errorMessage:""}},computed:{},methods:{send:function(){this.$store.dispatch("LOGIN",{login:this.username,password:this.password})}}},u=a,l=n("2877"),p=Object(l["a"])(u,c,o,!1,null,null,null),d=p.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main_menu"},[r("center",[r("img",{attrs:{src:n("cf05"),alt:"Хрустальные пазлы"}}),r("h1",[t._v("домашний тренер")]),r("div",{staticClass:"control_panel"},[r("div",{staticClass:"main_control_button",on:{click:function(e){return t.showChecklist("01")}}},[t._v("тренировка уровень 1")]),r("div",{staticClass:"main_control_button",on:{click:function(e){return t.showChecklist("02")}}},[t._v("тренировка уровень 2")]),r("div",{staticClass:"main_control_button",on:{click:function(e){return t.showChecklist("03")}}},[t._v("тренировка уровень 3")])])])],1)},m=[],h={name:"main_menu",methods:{showChecklist:function(t){console.log(t),this.set_type(t),this.$store.dispatch("CHANGE_MAINMENUSTATUS",t)},set_type:function(t){this.$store.dispatch("ADD_TYPE",t)}}},_=h,T=(n("bedc"),Object(l["a"])(_,f,m,!1,null,null,null)),v=T.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"traning_content"},[n("h1",[t._v("тренировка")]),n("div",{staticClass:"prew"},[n("div",{staticClass:"vid"},[n("youtube",{attrs:{"video-id":t.vidId,"player-vars":{autoplay:1,mute:1}}})],1)]),n("table",[t._m(0),t._l(t.current_checklist,(function(e){return n("tr",{staticClass:"traningItem"},[n("td",{class:{complite:e.state}},[t._v(t._s(e.title))]),n("td",{staticClass:"description",class:{complite:e.state},on:{click:function(n){return t.set_vid_url(e.url)}}},[n("div",{staticClass:"watch-button"},[t._v("смотреть ролик")])]),n("td",[t._v(t._s(e.description))]),n("td",{class:{complite:e.state}},[t._v(t._s(e.repetitions.length))]),t._l(e.repetitions,(function(r){return n("td",{on:{click:function(n){return t.checked({i:e.index,n:r.index})}}},[n("div",{staticClass:"content-check",class:{executed:r.checked,complite:e.state}})])}))],2)}))],2),n("center",[n("div",{staticClass:"back-button",on:{click:t.back_button}},[t._v("назад")])])],1)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("задание")]),n("th",{staticClass:"description"},[t._v("видео")]),n("th",{staticClass:"description"},[t._v("описание")]),n("th",[t._v("повторения")])])}],g=n("f6dd"),I={name:"traning_content",data:function(){return{reps:"",count:0,type:"",url:""}},componets:{},methods:{back_button:function(){this.$store.dispatch("CHANGE_MAINMENUSTATUS"),this.$store.dispatch("SET_FLASH_CHECKLIST")},checked:function(t){this.$store.dispatch("CHECK_REPETITION",t),this.$store.dispatch("GET_CHECHLIST_REPETITIONS_STATE",t.i)},set_vid_url:function(t){this.url=t}},computed:{current_checklist:function(){return this.$store.getters.CHECKLIST},vidId:function(){return Object(g["b"])(this.url)}},beforeCreate:function(){this.$store.dispatch("GET_CURRENT_CHECKLIST",{})}},S=I,N=(n("fd0d"),Object(l["a"])(S,E,C,!1,null,null,null)),w=N.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"complit_message"},[r("h2",[t._v("Завершено")]),r("img",{attrs:{src:n("2def"),alt:"молодец!"}}),r("center",[r("div",{staticClass:"back-button",on:{click:function(e){return t.confirm()}}},[t._v("OK")])])],1)},k=[],O={name:"complit_message",methods:{confirm:function(){console.log("confirm"),this.$store.dispatch("CHANGE_MAINMENUSTATUS"),this.$store.dispatch("SET_FLASH_CHECKLIST")}}},H=O,A=(n("7240"),Object(l["a"])(H,b,k,!1,null,null,null)),y=A.exports,x={name:"App",data:function(){return{}},computed:{mainMenu:function(){return this.$store.getters.MAINMENU_VISIBILITY},traningContent:function(){return this.$store.getters.TRANINGCONTENT_VISIBILITY},sucessMessage:function(){return this.$store.getters.COMPLITE_CONTENT}},components:{main_menu:v,traning_content:w,complit_message:y,login:d},beforeCreate:function(){},methods:{}},M=x,R=(n("cf25"),Object(l["a"])(M,i,s,!1,null,null,null)),L=R.exports,j=(n("a4d3"),n("e01a"),n("13d5"),n("96cf"),n("1da1")),P=n("2f62"),G=n("bc3a"),K=n.n(G);r["a"].use(P["a"]);var $=new P["a"].Store({state:{type:"",registrated:!1,user:{login:""},isHiddenMainMenu:!0,isHiddenTraningContent:!1,isCompliteContent:!1,complite:!1,checklist:""},mutations:{SET_HIDDENMAINMENU:function(t){t.isHiddenMainMenu=!t.isHiddenMainMenu},SET_HIDDENTRANINGCONTENT:function(t){t.isHiddenTraningContent=!t.isHiddenTraningContent},CHANGE_REPETITION:function(t,e){t.checklist[e.i].repetitions[e.n].checked=!t.checklist[e.i].repetitions[e.n].checked},SET_CHECKLIST_ITEM_STATE:function(t,e){t.checklist[indexes.index]=!t.checklist[indexes.index]},SET_CHECKLIST_REPETITION_STATE:function(t,e){var n=1;t.checklist[e].repetitions.reduce((function(t,e){e.checked&&n++})),n==t.checklist[e].repetitions.length&&(t.checklist[e].state=!0);var r=1;t.checklist.reduce((function(e,n){n.state&&(r++,console.log(r),console.log(t.checklist.length))})),r>=t.checklist.length&&(t.complite=!0)},FLASH_CHECKLIST:function(t){for(var e=0;e<t.checklist.length;e++){t.checklist[e].state=!1;for(var n=0;n<t.checklist[e].repetitions.length;n++)t.checklist[e].repetitions[n].checked=!1}t.complite=!1},SET_CURRENT_CHECKLIST:function(t,e){t.checklist=e},SET_TYPE:function(t,e){t.type=e},SET_REGISTRATION:function(t,e){t.registrated=e}},actions:{CHANGE_MAINMENUSTATUS:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_HIDDENMAINMENU"),e.commit("SET_HIDDENTRANINGCONTENT");case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),GET_MAINMENU_STATUS:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("GET_MAINMENU_STATUS",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_CHECKLIST:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("GET_CHECKLIST",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),CHECK_REPETITION:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("CHANGE_REPETITION",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),CHANGE_CHECKLIST_ITEM_STATE:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_CHECKLIST_ITEM_STATE",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_CHECHLIST_REPETITIONS_STATE:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_CHECKLIST_REPETITION_STATE",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),SET_FLASH_CHECKLIST:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("FLASH_CHECKLIST",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_CURRENT_CHECKLIST:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e,n){var r,i,s,c,o,a,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,K.a.post("/ajax/getChecklist/",{type:e.state.type}).catch((function(t){console.error(t.message)}));case 3:for(r=t.sent,i=r.data,s=JSON.parse(i),c=new Array,o=0;o<s.length;o++)if(s[o]){for(a=new Object,a.title=s[o].title[0],a.index=o,a.state=!1,a.description=s[o].description[0],a.repetitions=new Array,void 0!=s[o].youtube[0]&&(a.url=s[o].youtube[0]),u=0;u<s[o].repetition;u++)l=new Object,l.index=u,l.checked=!1,a.repetitions.push(l);c.push(a)}e.commit("SET_CURRENT_CHECKLIST",c);case 9:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),ADD_TYPE:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_TYPE",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),LOGIN:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e,n){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,K.a.post("/ajax/login/",n).catch((function(t){console.error(t.message)}));case 2:r=t.sent,i=r.data,console.log(i);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},modules:{},getters:{MAINMENU_VISIBILITY:function(t){return t.isHiddenMainMenu},TRANINGCONTENT_VISIBILITY:function(t){return t.isHiddenTraningContent},CHECKLIST:function(t){return console.log("checklist"),t.checklist},COMPLITE_CONTENT:function(t){return t.complite}}});r["a"].use(g["a"]),r["a"].config.productionTip=!1,new r["a"]({store:$,render:function(t){return t(L)}}).$mount("#app")},7240:function(t,e,n){"use strict";var r=n("af66"),i=n.n(r);i.a},7579:function(t,e,n){},af66:function(t,e,n){},bddf:function(t,e,n){},bedc:function(t,e,n){"use strict";var r=n("7579"),i=n.n(r);i.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.194d4ce1.png"},cf25:function(t,e,n){"use strict";var r=n("bddf"),i=n.n(r);i.a},fd0d:function(t,e,n){"use strict";var r=n("46b3"),i=n.n(r);i.a}});
//# sourceMappingURL=app.ef50d2cc.js.map