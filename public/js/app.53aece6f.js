(function(t){function e(e){for(var r,a,o=e[0],c=e[1],u=e[2],p=0,d=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0a26":function(t,e,n){},"2def":function(t,e,n){t.exports=n.p+"img/good_img.568c8328.jpeg"},"46b3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("center",[0!=t.user?r("div",{staticClass:"user-info"},[r("h3",[t._v(t._s(t.user.login))]),r("div",{staticClass:"awards"},[r("div",{staticClass:"award gold"},[r("div",{staticClass:"award-count"},[t._v(t._s(t.user.gold))])]),r("div",{staticClass:"award silver"},[r("div",{staticClass:"award-count"},[t._v(t._s(t.user.silver))])]),r("div",{staticClass:"award bronze"},[r("div",{staticClass:"award-count"},[t._v(t._s(t.user.bronze))])])])]):t._e()]),r("img",{attrs:{src:n("cf05"),alt:"Хрустальные пазлы"}}),t.mainMenu?r("main_menu"):t._e(),r("center",[t.reg?r("register"):t._e(),t.autorized?r("login"):t._e(),!1===t.user||1==t.reg?r("div",{staticClass:"login-button",on:{click:t.show_login_form}},[t._v(" войти ")]):t._e(),0!=t.user?r("div",{staticClass:"login-button",on:{click:t.logout}},[t._v(" выйти ")]):t._e(),!1===t.user||!0===t.reg?r("div",{staticClass:"login-button",on:{click:t.show_reg_form}},[t._v(" регистрация ")]):t._e()],1),t.traningContent?r("traning_content"):t._e(),r("center",[t.sucessMessage?r("complit_message"):t._e(),r("social")],1)],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register"},[n("div",{staticClass:"register-box"},[n("div",{staticClass:"register-label"},[t._v("логин")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],staticClass:"register-input",class:{err:t.login_err},attrs:{type:"text"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}})]),n("div",{staticClass:"register-box"},[n("div",{staticClass:"rgister-label"},[t._v("пароль")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],staticClass:"register-input",class:{err:t.pass_err},domProps:{value:t.pass},on:{input:function(e){e.target.composing||(t.pass=e.target.value)}}}),n("div",{staticClass:"register-label"},[t._v("повторите паоль")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.repPass,expression:"repPass"}],staticClass:"register-input",class:{err:t.repPass_err},domProps:{value:t.repPass},on:{input:function(e){e.target.composing||(t.repPass=e.target.value)}}})]),t._m(0),n("div",{staticClass:"register-box"},[n("button",{staticClass:"register-confirm",on:{click:function(e){return t.register()}}},[t._v("зарегистрироваться")]),n("button",{staticClass:"register-confirm",on:{click:function(e){return t.hide_reg_form()}}},[t._v("отмена")])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register-box"},[n("div",{staticClass:"register-label"},[t._v("любимый цвет")]),n("div",{staticClass:"register-choices-box"},[n("div",{staticClass:"register-choice green"}),n("div",{staticClass:"register-choice yellow"}),n("div",{staticClass:"register-choice blue"})])])}],c={name:"register",data:function(){return{login:"",login_err:!1,pass:"",pass_err:!1,repPass:"",repPass_err:!1}},components:{},methods:{register:function(){""===this.login||""==this.pass||""==this.repPass?(this.login_err=!0,this.pass_err=!0,this.repPass_err=!0):this.pass!=this.repPass?(this.pass_err=!0,this.repPass_err=!0):(console.log(1),this.$store.dispatch("REGISTER",{login:this.login,password:this.pass,passwordConfirm:this.repPass}),this.hide_reg_form())},hide_reg_form:function(){this.$store.dispatch("CHANGE_REGISTER_MENU")}}},u=c,l=(n("743e"),n("2877")),p=Object(l["a"])(u,a,o,!1,null,null,null),d=p.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("center",[n("h4",[t._v("авторизация")]),n("div",{staticClass:"login-form"},[n("div",{staticClass:"title-form"},[t._v("логин")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input-form",class:{err:t.login_err},attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("div",{staticClass:"title-form"},[t._v("пароль")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-form",class:{err:t.pass_err},attrs:{type:"text"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("div",{staticClass:"button-form",attrs:{id:"confirm-form"},on:{click:function(e){return t.login()}}},[t._v("войти")]),n("div",{staticClass:"button-form cancel",attrs:{id:"confirm-form"},on:{click:t.hide}},[t._v("отмена")])])])],1)},f=[],m={name:"login",data:function(){return{username:"",password:"",passwordConfirm:"",errorMessage:"",login_err:!1,pass_err:!1,passConf_err:!1}},computed:{},methods:{register:function(){this.$store.dispatch("REGISTER",{login:this.username,password:this.password,passwordConfirm:this.passwordConfirm}),this.$store.dispatch("LOGIN",{login:this.username,password:this.password}),this.$store.dispatch("CHANGE_AUTORIZED_MENU")},login:function(){console.log("login"),""===this.login||""===this.password?(this.login_err=!0,this.pass_err=!0):(this.$store.dispatch("LOGIN",{login:this.username,password:this.password}),this.$store.dispatch("CHANGE_AUTORIZED_MENU"))},hide:function(){this.$store.dispatch("CHANGE_AUTORIZED_MENU")}}},h=m,E=(n("7389"),Object(l["a"])(h,_,f,!1,null,null,null)),g=E.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main_menu"},[n("center",[n("h1",[t._v("домашний тренер")]),n("div",{staticClass:"control_panel"},[n("div",{staticClass:"main_control_button",on:{click:function(e){return t.showChecklist("01")}}},[t._v("тренировка уровень 1")]),n("div",{staticClass:"main_control_button",on:{click:function(e){return t.showChecklist("02")}}},[t._v("тренировка уровень 2")]),n("div",{staticClass:"main_control_button",on:{click:function(e){return t.showChecklist("03")}}},[t._v("тренировка уровень 3")])])])],1)},T=[],C={name:"main_menu",methods:{showChecklist:function(t){this.set_type(t),this.$store.dispatch("CHANGE_MAINMENUSTATUS",t)},set_type:function(t){this.$store.dispatch("ADD_TYPE",t)}}},b=C,I=(n("bedc"),Object(l["a"])(b,v,T,!1,null,null,null)),R=I.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"traning_content"},[n("h1",[t._v("тренировка")]),n("div",{staticClass:"prew"},[t.is_blank_url?n("div",{staticClass:"vid"},[n("youtube",{attrs:{"video-id":t.vidId,"player-vars":{autoplay:1,mute:1}}})],1):t._e()]),n("center",t._l(t.current_checklist,(function(e){return n("div",{staticClass:"exercises-list"},[n("TraningExercise",{attrs:{item:e},on:{addUrl:function(e){return t.set_vid_url(t.url)}}})],1)})),0),n("center",[n("div",{staticClass:"back-button",on:{click:t.back_button}},[t._v("назад")])])],1)},N=[],S=n("f6dd"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"traningExercise",class:{complit:t.item.state}},[n("center",[n("div",{staticClass:"info-box"},[n("div",{staticClass:"title"},[n("h4",[t._v("№"+t._s(t.item.index+1)+" "+t._s(t.item.title))])]),n("transition",{attrs:{name:"fade"}},[t.item.state?t._e():n("div",[n("div",{staticClass:"expr"},[n("p",[t._v(t._s(t.item.description)+" ")])]),n("button",{on:{click:function(e){return t.change_reps()}}},[t._v(t._s(t.button_text))]),n("button",{on:{click:function(e){return t.add_url()}}},[t._v("видео пример")]),n("transition",{attrs:{name:"fade"}},[t.isReps?n("div",{staticClass:"rep-box"},t._l(t.item.repetitions,(function(e){return n("div",{staticClass:"rep",class:{executed:e.checked,complite:t.item.state},on:{click:function(n){return t.checked({i:t.item.index,n:e.index})}}},[n("p")])})),0):t._e()])],1)])],1)])],1)},x=[],O=n("8cc4"),A=n.n(O),M=void 0,y=(new A.a.Synth).toMaster(),H={name:"traningExercise",data:function(){return{isReps:!1,url:M.item.url}},methods:{change_reps:function(){this.isReps=!this.isReps},checked:function(t){y.triggerAttackRelease("E4","10n"),this.$store.dispatch("CHECK_REPETITION",t),this.$store.dispatch("GET_CHECHLIST_REPETITIONS_STATE",t.i)},add_url:function(t){this.$emit("addUrl",this.url)}},computed:{button_text:function(){return this.isReps?"скрыть":"начать"}},props:{item:Object}},U=H,G=(n("dfd1"),Object(l["a"])(U,k,x,!1,null,null,null)),j=G.exports,P={name:"traning_content",data:function(){return{reps:"",count:0,type:"",url:""}},components:{TraningExercise:j},methods:{back_button:function(){this.$store.dispatch("CHANGE_MAINMENUSTATUS"),this.$store.dispatch("SET_FLASH_CHECKLIST")},set_vid_url:function(t){console.log("set_vid_url: ".concat(t)),this.url=t}},computed:{current_checklist:function(){return this.$store.getters.CHECKLIST},vidId:function(){return Object(S["b"])(this.url)},is_blank_url:function(){return""!==this.url}},beforeCreate:function(){this.$store.dispatch("GET_CURRENT_CHECKLIST",{})}},L=P,$=(n("fd0d"),Object(l["a"])(L,w,N,!1,null,null,null)),D=$.exports,K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"complit_message"},[r("h2",[t._v("Завершено")]),r("img",{attrs:{src:n("2def"),alt:"молодец!"}}),r("center",[r("div",{staticClass:"back-button",on:{click:function(e){return t.confirm()}}},[t._v("OK")])])],1)},z=[],Y=n("bc3a"),Z=n.n(Y),F={name:"complit_message",methods:{confirm:function(){this.$store.dispatch("ADD_AWARD",this.$store.getters.GET_TYPE),this.$store.dispatch("CHANGE_MAINMENUSTATUS"),this.$store.dispatch("SET_FLASH_CHECKLIST")}}},V=F,B=(n("7240"),Object(l["a"])(V,K,z,!1,null,null,null)),J=B.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social"},[n("vue-yandex-share",t._b({},"vue-yandex-share",t.options,!1))],1)},q=[],Q=n("87d3"),X=n.n(Q),tt={name:"social",data:function(){return{options:{accessToken:null,bare:!1,counter:!1,copy:"last",description:null,direction:"horizontal",hashtags:null,image:null,lang:"ru",limit:24,popupDirection:"bottom",popupPosition:"inner",size:"m",title:null,url:null,services:["facebook","lj","telegram","tencentWeibo","twitter","viber","vkontakte","whatsapp"]}}},components:{VueYandexShare:X.a}},et=tt,nt=(n("b787"),Object(l["a"])(et,W,q,!1,null,null,null)),rt=nt.exports,it={name:"App",data:function(){return{registration_form:!1}},methods:{show_login_form:function(){this.$store.dispatch("CHANGE_AUTORIZED_MENU")},show_reg_form:function(){this.$store.dispatch("CHANGE_REGISTER_MENU")},logout:function(){this.$store.dispatch("LOGOUT")}},computed:{mainMenu:function(){return this.$store.getters.MAINMENU_VISIBILITY},traningContent:function(){return this.$store.getters.TRANINGCONTENT_VISIBILITY},sucessMessage:function(){return this.$store.getters.COMPLITE_CONTENT},autorized:function(){return this.$store.getters.GET_AUTORIZED_MENU},user:function(){return this.$store.getters.GET_USER},reg:function(){return this.$store.getters.GET_REGISTER_MENU}},components:{main_menu:R,traning_content:D,complit_message:J,register:d,login:g,social:rt},beforeCreate:function(){}},st=it,at=(n("cf25"),Object(l["a"])(st,i,s,!1,null,null,null)),ot=at.exports,ct=(n("a4d3"),n("e01a"),n("13d5"),n("96cf"),n("1da1")),ut=n("2f62");r["default"].use(ut["a"]);var lt=new ut["a"].Store({state:{type:"",autorized_menu:!1,register_menu:!1,user:"",isHiddenMainMenu:!0,isHiddenTraningContent:!1,isCompliteContent:!1,complite:!1,checklist:[{title:"exercise",index:0,state:!1,repetitions:[{index:0,checked:!1},{index:1,checked:!1},{index:2,checked:!1},{index:3,checked:!1}],url:"https://youtu.be/i0DE4_7Fki0"},{title:"exercise",index:1,state:!1,repetitions:[{index:0,checked:!1},{index:1,checked:!1},{index:2,checked:!1},{index:3,checked:!1}],url:"https://youtu.be/i0DE4_7Fki0"}]},mutations:{SET_HIDDENMAINMENU:function(t){t.isHiddenMainMenu=!t.isHiddenMainMenu},SET_HIDDENTRANINGCONTENT:function(t){t.isHiddenTraningContent=!t.isHiddenTraningContent},CHANGE_REPETITION:function(t,e){t.checklist[e.i].repetitions[e.n].checked=!t.checklist[e.i].repetitions[e.n].checked},SET_CHECKLIST_ITEM_STATE:function(t,e){t.checklist[indexes.index]=!t.checklist[indexes.index]},SET_CHECKLIST_REPETITION_STATE:function(t,e){var n=1;t.checklist[e].repetitions.reduce((function(t,e){e.checked&&n++})),n==t.checklist[e].repetitions.length&&(t.checklist[e].state=!0);var r=1;t.checklist.reduce((function(t,e){e.state&&r++})),r>=t.checklist.length&&(t.complite=!0)},FLASH_CHECKLIST:function(t){for(var e=0;e<t.checklist.length;e++){t.checklist[e].state=!1;for(var n=0;n<t.checklist[e].repetitions.length;n++)t.checklist[e].repetitions[n].checked=!1}t.complite=!1},SET_CURRENT_CHECKLIST:function(t,e){t.checklist=e},SET_TYPE:function(t,e){t.type=e},SET_AUTORIZED_MENU:function(t){t.autorized_menu=!t.autorized_menu},SET_REGISTER_MENU:function(t){t.register_menu=!t.register_menu},SET_USER:function(t,e){t.user=e},DROP_USER:function(t,e){t.user=""},INCREM_GOLD:function(t){t.user.gold=t.user.gold+1},INCREM_SILVER:function(t){t.user.silver=t.user.silver+1},INCREM_BRONZE:function(t){t.user.bronze=t.user.bronze+1}},actions:{CHANGE_MAINMENUSTATUS:function(){var t=Object(ct["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_HIDDENMAINMENU"),e.commit("SET_HIDDENTRANINGCONTENT");case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),GET_MAINMENU_STATUS:function(){var t=Object(ct["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("GET_MAINMENU_STATUS",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_CHECKLIST:function(){var t=Object(ct["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("GET_CHECKLIST",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),CHECK_REPETITION:function(){var t=Object(ct["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("CHANGE_REPETITION",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),CHANGE_CHECKLIST_ITEM_STATE:function(){var t=Object(ct["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_CHECKLIST_ITEM_STATE",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_CHECHLIST_REPETITIONS_STATE:function(){var t=Object(ct["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_CHECKLIST_REPETITION_STATE",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),SET_FLASH_CHECKLIST:function(){var t=Object(ct["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("FLASH_CHECKLIST",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_CURRENT_CHECKLIST:function(){var t=Object(ct["a"])(regeneratorRuntime.mark((function t(e,n){var r,i,s,a,o,c,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.a.post("/ajax/getChecklist/",{type:e.state.type}).catch((function(t){console.error(t.message)}));case 2:for(r=t.sent,i=r.data,s=JSON.parse(i),a=new Array,o=0;o<s.length;o++)if(s[o]){for(c=new Object,c.title=s[o].title[0],c.index=o,c.state=!1,c.description=s[o].description[0],c.repetitions=new Array,void 0!=s[o].youtube[0]&&(c.url=s[o].youtube[0]),u=0;u<s[o].repetition;u++)l=new Object,l.index=u,l.checked=!1,c.repetitions.push(l);a.push(c)}e.commit("SET_CURRENT_CHECKLIST",a);case 8:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),ADD_TYPE:function(){var t=Object(ct["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_TYPE",n);case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),REGISTER:function(){var t=Object(ct["a"])(regeneratorRuntime.mark((function t(e,n){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.a.post("/ajax/register/",n).catch((function(t){console.error(t.message)}));case 2:r=t.sent,i=r.data,e.commit("SET_USER",i.user);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),LOGIN:function(){var t=Object(ct["a"])(regeneratorRuntime.mark((function t(e,n){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.a.post("/ajax/login/",n).catch((function(t){console.error(t.message)}));case 2:r=t.sent,i=r.data,e.commit("SET_USER",i.user);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),CHANGE_AUTORIZED_MENU:function(){var t=Object(ct["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_AUTORIZED_MENU");case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),CHANGE_REGISTER_MENU:function(){var t=Object(ct["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("SET_REGISTER_MENU");case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),LOGOUT:function(){var t=Object(ct["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Z.a.get("/ajax/logout/"),e.commit("DROP_USER");case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),ADD_AWARD:function(){var t=Object(ct["a"])(regeneratorRuntime.mark((function t(e,n){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.a.post("/ajax/complitChecklist/",{status:!0,type:n});case 2:r=t.sent,i=r.data,t.t0=i.award,t.next="gold"===t.t0?7:"silver"===t.t0?10:"bronze"===t.t0?13:16;break;case 7:return console.log("try gold"),e.commit("INCREM_BRONZE"),t.abrupt("break",17);case 10:return console.log("try silver"),e.commit("INCREM_SILVER"),t.abrupt("break",17);case 13:return console.log("try bronze"),e.commit("INCREM_GOLD"),t.abrupt("break",17);case 16:return t.abrupt("break",17);case 17:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},modules:{},getters:{MAINMENU_VISIBILITY:function(t){return t.isHiddenMainMenu},TRANINGCONTENT_VISIBILITY:function(t){return t.isHiddenTraningContent},CHECKLIST:function(t){return t.checklist},COMPLITE_CONTENT:function(t){return t.complite},GET_TYPE:function(t){return t.type},GET_AUTORIZED_MENU:function(t){return t.autorized_menu},GET_REGISTER_MENU:function(t){return t.register_menu},GET_USER:function(t){return""!==t.user&&t.user}}});r["default"].use(S["a"]),r["default"].config.productionTip=!1,new r["default"]({store:lt,render:function(t){return t(ot)}}).$mount("#app")},"6bca":function(t,e,n){},7240:function(t,e,n){"use strict";var r=n("af66"),i=n.n(r);i.a},7389:function(t,e,n){"use strict";var r=n("dc1e"),i=n.n(r);i.a},"743e":function(t,e,n){"use strict";var r=n("0a26"),i=n.n(r);i.a},7579:function(t,e,n){},af66:function(t,e,n){},b787:function(t,e,n){"use strict";var r=n("6bca"),i=n.n(r);i.a},bddf:function(t,e,n){},bedc:function(t,e,n){"use strict";var r=n("7579"),i=n.n(r);i.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.194d4ce1.png"},cf25:function(t,e,n){"use strict";var r=n("bddf"),i=n.n(r);i.a},dc1e:function(t,e,n){},dc50:function(t,e,n){},dfd1:function(t,e,n){"use strict";var r=n("dc50"),i=n.n(r);i.a},fd0d:function(t,e,n){"use strict";var r=n("46b3"),i=n.n(r);i.a}});
//# sourceMappingURL=app.53aece6f.js.map