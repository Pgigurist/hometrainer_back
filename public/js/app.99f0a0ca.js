(function(t){function e(e){for(var r,c,o=e[0],a=e[1],u=e[2],p=0,f=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},s=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=a;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2def":function(t,e,n){t.exports=n.p+"img/good_img.568c8328.jpeg"},"46b3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("center",[0!=t.user?r("div",{staticClass:"user-info"},[r("h3",[t._v(t._s(t.user.login))]),r("div",{staticClass:"awards"},[r("div",{staticClass:"award gold"},[r("div",{staticClass:"award-count"},[t._v(t._s(t.user.gold))])]),r("div",{staticClass:"award silver"},[r("div",{staticClass:"award-count"},[t._v(t._s(t.user.silver))])]),r("div",{staticClass:"award bronze"},[r("div",{staticClass:"award-count"},[t._v(t._s(t.user.bronze))])])])]):t._e()]),r("img",{attrs:{src:n("cf05"),alt:"Хрустальные пазлы"}}),t.mainMenu?r("main_menu"):t._e(),r("center",[!1===t.user?r("div",{staticClass:"login-button",on:{click:t.show_reg_form}},[t._v(" войти ")]):t._e(),0!=t.user?r("div",{staticClass:"login-button",on:{click:t.logout}},[t._v(" выйти ")]):t._e()]),t.traningContent?r("traning_content"):t._e(),t.sucessMessage?r("complit_message"):t._e()],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("center",[n("div",{staticClass:"login-form"},[n("div",{staticClass:"title-form"},[t._v("логин")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input-form",class:{err:t.login_err},attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("div",{staticClass:"title-form"},[t._v("пароль")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-form",class:{err:t.pass_err},attrs:{type:"text"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("div",{staticClass:"title-form"},[t._v("повторите пароль")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirm,expression:"passwordConfirm"}],staticClass:"input-form",class:{err:t.passConf_err},attrs:{type:"text"},domProps:{value:t.passwordConfirm},on:{input:function(e){e.target.composing||(t.passwordConfirm=e.target.value)}}}),n("div",{staticClass:"button-form",attrs:{id:"confirm-form"},on:{click:function(e){return t.login()}}},[t._v("войти")]),n("div",{staticClass:"button-form",attrs:{id:"confirm-form"},on:{click:function(e){return t.register()}}},[t._v("регистрация")]),n("div",{staticClass:"button-form",attrs:{id:"confirm-form"},on:{click:t.hide}},[t._v("отмена")])])])],1)},o=[],a={name:"login",data:function(){return{username:"",password:"",passwordConfirm:"",errorMessage:"",login_err:!1,pass_err:!1,passConf_err:!1}},computed:{},methods:{register:function(){this.$store.dispatch("REGISTER",{login:this.username,password:this.password,passwordConfirm:this.passwordConfirm}),this.$store.dispatch("LOGIN",{login:this.username,password:this.password}),this.$store.dispatch("CHANGE_AUTORIZED_MENU")},login:function(){console.log("login"),""===this.login||""===this.password?(this.login_err=!0,this.pass_err=!0):(this.$store.dispatch("LOGIN",{login:this.username,password:this.password}),this.$store.dispatch("CHANGE_AUTORIZED_MENU"))},hide:function(){this.$store.dispatch("CHANGE_AUTORIZED_MENU")}}},u=a,l=(n("7389"),n("2877")),p=Object(l["a"])(u,c,o,!1,null,null,null),f=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main_menu"},[n("center",[n("h1",[t._v("домашний тренер")]),n("div",{staticClass:"control_panel"},[n("div",{staticClass:"main_control_button",on:{click:function(e){return t.showChecklist("01")}}},[t._v("тренировка уровень 1")]),n("div",{staticClass:"main_control_button",on:{click:function(e){return t.showChecklist("02")}}},[t._v("тренировка уровень 2")]),n("div",{staticClass:"main_control_button",on:{click:function(e){return t.showChecklist("03")}}},[t._v("тренировка уровень 3")])])])],1)},_=[],m={name:"main_menu",methods:{showChecklist:function(t){this.set_type(t),this.$store.dispatch("CHANGE_MAINMENUSTATUS",t)},set_type:function(t){this.$store.dispatch("ADD_TYPE",t)}}},h=m,E=(n("bedc"),Object(l["a"])(h,d,_,!1,null,null,null)),v=E.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"traning_content"},[n("h1",[t._v("тренировка")]),n("div",{staticClass:"prew"},[t.is_blank_url?n("div",{staticClass:"vid"},[n("youtube",{attrs:{"video-id":t.vidId,"player-vars":{autoplay:1,mute:1}}})],1):t._e()]),n("table",[t._m(0),t._l(t.current_checklist,(function(e){return n("tr",{staticClass:"traningItem"},[n("td",{class:{complite:e.state}},[t._v(t._s(e.title))]),n("td",{staticClass:"description",class:{complite:e.state},on:{click:function(n){return t.set_vid_url(e.url)}}},[n("div",{staticClass:"watch-button"},[t._v("смотреть ролик")])]),n("td",[t._v(t._s(e.description))]),n("td",{class:{complite:e.state}},[t._v(t._s(e.repetitions.length))]),t._l(e.repetitions,(function(r){return n("td",{on:{click:function(n){return t.checked({i:e.index,n:r.index})}}},[n("div",{staticClass:"content-check",class:{executed:r.checked,complite:e.state}})])}))],2)}))],2),n("center",[n("div",{staticClass:"back-button",on:{click:t.back_button}},[t._v("назад")])])],1)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("задание")]),n("th",{staticClass:"description"},[t._v("видео")]),n("th",{staticClass:"description"},[t._v("описание")]),n("th",[t._v("повторения")])])}],g=n("f6dd"),I=n("8cc4"),w=n.n(I),N=(new w.a.Synth).toMaster(),S={name:"traning_content",data:function(){return{reps:"",count:0,type:"",url:""}},componets:{},methods:{back_button:function(){this.$store.dispatch("CHANGE_MAINMENUSTATUS"),this.$store.dispatch("SET_FLASH_CHECKLIST")},checked:function(t){N.triggerAttackRelease("E4","10n"),this.$store.dispatch("CHECK_REPETITION",t),this.$store.dispatch("GET_CHECHLIST_REPETITIONS_STATE",t.i)},set_vid_url:function(t){this.url=t}},computed:{current_checklist:function(){return this.$store.getters.CHECKLIST},vidId:function(){return Object(g["b"])(this.url)},is_blank_url:function(){return""!==this.url}},beforeCreate:function(){this.$store.dispatch("GET_CURRENT_CHECKLIST",{})}},R=S,b=(n("fd0d"),Object(l["a"])(R,T,C,!1,null,null,null)),O=b.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"complit_message"},[r("h2",[t._v("Завершено")]),r("img",{attrs:{src:n("2def"),alt:"молодец!"}}),r("center",[r("div",{staticClass:"back-button",on:{click:function(e){return t.confirm()}}},[t._v("OK")])])],1)},A=[],H=n("bc3a"),y=n.n(H),M={name:"complit_message",methods:{confirm:function(){this.$store.dispatch("CHANGE_MAINMENUSTATUS"),this.$store.dispatch("SET_FLASH_CHECKLIST")}}},x=M,U=(n("7240"),Object(l["a"])(x,k,A,!1,null,null,null)),L=U.exports,G={name:"App",data:function(){return{registration_form:!1}},methods:{show_reg_form:function(){this.$store.dispatch("CHANGE_AUTORIZED_MENU")},logout:function(){this.$store.dispatch("LOGOUT")}},computed:{mainMenu:function(){return this.$store.getters.MAINMENU_VISIBILITY},traningContent:function(){return this.$store.getters.TRANINGCONTENT_VISIBILITY},sucessMessage:function(){return this.$store.getters.COMPLITE_CONTENT},autorized:function(){return this.$store.getters.GET_AUTORIZED_MENU},user:function(){return this.$store.getters.GET_USER}},components:{main_menu:v,traning_content:O,complit_message:L,login:f},beforeCreate:function(){}},j=G,$=(n("cf25"),Object(l["a"])(j,i,s,!1,null,null,null)),P=$.exports,D=(n("a4d3"),n("e01a"),n("13d5"),n("96cf"),n("1da1")),K=n("2f62");r["a"].use(K["a"]);var Z=new K["a"].Store({state:{type:"",autorized_menu:!1,user:"",isHiddenMainMenu:!0,isHiddenTraningContent:!1,isCompliteContent:!1,complite:!1,checklist:""},mutations:{SET_HIDDENMAINMENU:function(t){t.isHiddenMainMenu=!t.isHiddenMainMenu},SET_HIDDENTRANINGCONTENT:function(t){t.isHiddenTraningContent=!t.isHiddenTraningContent},CHANGE_REPETITION:function(t,e){t.checklist[e.i].repetitions[e.n].checked=!t.checklist[e.i].repetitions[e.n].checked},SET_CHECKLIST_ITEM_STATE:function(t,e){t.checklist[indexes.index]=!t.checklist[indexes.index]},SET_CHECKLIST_REPETITION_STATE:function(t,e){var n=1;t.checklist[e].repetitions.reduce((function(t,e){e.checked&&n++})),n==t.checklist[e].repetitions.length&&(t.checklist[e].state=!0);var r=1;t.checklist.reduce((function(t,e){e.state&&r++})),r>=t.checklist.length&&(t.complite=!0)},FLASH_CHECKLIST:function(t){for(var e=0;e<t.checklist.length;e++){t.checklist[e].state=!1;for(var n=0;n<t.checklist[e].repetitions.length;n++)t.checklist[e].repetitions[n].checked=!1}t.complite=!1},SET_CURRENT_CHECKLIST:function(t,e){t.checklist=e},SET_TYPE:function(t,e){t.type=e},SET_AUTORIZED_MENU:function(t){t.autorized_menu=!t.autorized_menu},SET_USER:function(t,e){t.user=e},DROP_USER:function(t,e){t.user=""},INC_GOLD:function(t){t.user.gold++},INC_SILVER:function(t){t.user.silver++},INC_BRONZE:function(t){t.user.bronze++}},actions:{CHANGE_MAINMENUSTATUS:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_HIDDENMAINMENU"),e.commit("SET_HIDDENTRANINGCONTENT");case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),GET_MAINMENU_STATUS:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("GET_MAINMENU_STATUS",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_CHECKLIST:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("GET_CHECKLIST",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),CHECK_REPETITION:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("CHANGE_REPETITION",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),CHANGE_CHECKLIST_ITEM_STATE:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_CHECKLIST_ITEM_STATE",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_CHECHLIST_REPETITIONS_STATE:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_CHECKLIST_REPETITION_STATE",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),SET_FLASH_CHECKLIST:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("FLASH_CHECKLIST",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_CURRENT_CHECKLIST:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e,n){var r,i,s,c,o,a,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.a.post("/ajax/getChecklist/",{type:e.state.type}).catch((function(t){console.error(t.message)}));case 2:for(r=t.sent,i=r.data,s=JSON.parse(i),c=new Array,o=0;o<s.length;o++)if(s[o]){for(a=new Object,a.title=s[o].title[0],a.index=o,a.state=!1,a.description=s[o].description[0],a.repetitions=new Array,void 0!=s[o].youtube[0]&&(a.url=s[o].youtube[0]),u=0;u<s[o].repetition;u++)l=new Object,l.index=u,l.checked=!1,a.repetitions.push(l);c.push(a)}e.commit("SET_CURRENT_CHECKLIST",c);case 8:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),ADD_TYPE:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_TYPE",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),REGISTER:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e,n){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.a.post("/ajax/register/",n).catch((function(t){console.error(t.message)}));case 2:r=t.sent,i=r.data,e.commit("SET_USER",i);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),LOGIN:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e,n){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.a.post("/ajax/login/",n).catch((function(t){console.error(t.message)}));case 2:r=t.sent,i=r.data,e.commit("SET_USER",i.user);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),CHANGE_AUTORIZED_MENU:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_AUTORIZED_MENU");case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),LOGOUT:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:y.a.get("/ajax/logout/"),e.commit("DROP_USER");case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),INC_GOLD:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("INC_GOLD");case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),INC_SILVER:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("INC_SILVER");case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),INC_BRONZE:function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("INC_BRONZE");case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},modules:{},getters:{MAINMENU_VISIBILITY:function(t){return t.isHiddenMainMenu},TRANINGCONTENT_VISIBILITY:function(t){return t.isHiddenTraningContent},CHECKLIST:function(t){return t.checklist},COMPLITE_CONTENT:function(t){return t.complite},GET_TYPE:function(t){return t.type},GET_AUTORIZED_MENU:function(t){return t.autorized_menu},GET_USER:function(t){return""!==t.user&&t.user}}});r["a"].use(g["a"]),r["a"].config.productionTip=!1,new r["a"]({store:Z,render:function(t){return t(P)}}).$mount("#app")},7240:function(t,e,n){"use strict";var r=n("af66"),i=n.n(r);i.a},7389:function(t,e,n){"use strict";var r=n("dc1e"),i=n.n(r);i.a},7579:function(t,e,n){},af66:function(t,e,n){},bddf:function(t,e,n){},bedc:function(t,e,n){"use strict";var r=n("7579"),i=n.n(r);i.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.194d4ce1.png"},cf25:function(t,e,n){"use strict";var r=n("bddf"),i=n.n(r);i.a},dc1e:function(t,e,n){},fd0d:function(t,e,n){"use strict";var r=n("46b3"),i=n.n(r);i.a}});
//# sourceMappingURL=app.99f0a0ca.js.map