(function(t){function a(a){for(var i,l,c=a[0],r=a[1],o=a[2],m=0,v=[];m<c.length;m++)l=c[m],e[l]&&v.push(e[l][0]),e[l]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);_&&_(a);while(v.length)v.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,a=0;a<n.length;a++){for(var s=n[a],i=!0,c=1;c<s.length;c++){var r=s[c];0!==e[r]&&(i=!1)}i&&(n.splice(a--,1),t=l(l.s=s[0]))}return t}var i={},e={app:0},n=[];function l(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=i,l.d=function(t,a,s){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)l.d(s,i,function(a){return t[a]}.bind(null,i));return s},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var _=r;n.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";var i=s("64a9"),e=s.n(i);e.a},"56d7":function(t,a,s){"use strict";s.r(a);s("cadf"),s("551c"),s("097d");var i=s("2b0e"),e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("Pool",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},n=[],l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main"},[s("div",{staticClass:"main_top_back"},[s("div",{staticClass:"navbar navbar--extended",attrs:{id:"navbar"}},[s("div",{staticClass:"container_max"},[s("div",{},[s("div",{staticClass:"navbar__inner"},[s("a",{staticClass:"navbar__logo",attrs:{href:"/"}},[t._v("微信群合影")]),s("nav",{staticClass:"navbar__menu"},[s("ul",{staticClass:"navbar_items"},[s("li",{staticClass:"navbar_item",on:{click:function(a){t.navScroll(1)}}},[t._v("安装")]),s("li",{staticClass:"navbar_item",on:{click:function(a){t.navScroll(4)}}},[t._v("帮助")]),s("li",{staticClass:"navbar_item",on:{click:function(a){t.navScroll(6)}}},[t._v("常见问题")]),s("li",{staticClass:"navbar_item",on:{click:function(a){t.navScroll(5)}}},[t._v("联系")])])])])])])]),s("div",{staticClass:"hero",attrs:{id:"hero"}},[s("div",{staticClass:"hero__overlay hero__overlay--gradient"}),s("div",{staticClass:"hero__inner"},[s("div",{staticClass:"container"},[s("div",{staticClass:"hero__content"},[s("div",{staticClass:"hero__content__inner",attrs:{id:"navConverter"}},[s("h1",{staticClass:"hero__title"},[t._v("微信群合影效率工具")]),s("p",{staticClass:"hero__text"},[t._v("基于微信网页版的Chrome插件，一键生成微信全家福")]),s("div",{staticClass:"down_items"},[s("a",{staticClass:"install-btn",attrs:{href:t.downUrl},on:{click:function(a){t.navScroll(4)}}},[t._v("直接下载安装")]),s("a",{staticClass:"install-btn",attrs:{href:t.chromeUrl,target:"_blank"}},[t._v("Chrome应用店安装")])]),s("div",{staticClass:"down_item_version"},[t._v("最新版本号2.0.0 更新于2019-4-1")]),s("div",{staticClass:"down_item_version"},[t._v("自定义二维码、自定义背景、新背景主题等")])])])])])])]),s("div",{staticClass:"main_use",attrs:{id:"main_use"}},[s("div",{staticClass:"container_max"},[s("div",{staticClass:"main_use_carousel"},[s("el-carousel",{attrs:{"indicator-position":"outside"}},t._l(t.useShowArray,function(t){return s("el-carousel-item",{key:t},[s("img",{staticClass:"main_use_img",attrs:{src:t}})])}))],1)])]),s("div",{staticClass:"main_show",attrs:{id:"main_show"}},[s("div",{staticClass:"container_max main_show_container"},t._l(t.showArray,function(t){return s("div",{key:t,staticClass:"main_show_item"},[s("img",{staticClass:"main_show_img",attrs:{src:t}})])}))]),s("div",{staticClass:"main_install",attrs:{id:"main_install"}},[s("div",{staticClass:"container_max"},[s("a",{staticClass:"main_install_btn",attrs:{href:t.downUrl}},[t._v("直接下载安装")]),t._m(0),t._m(1),t._m(2),t._m(3)])]),s("div",{staticClass:"main_like",attrs:{id:""}},[s("div",{staticClass:"container_max"},[s("div",{staticClass:"main_like_btn",on:{click:t.showLike}},[t._v("赞赏作者")]),t.likeFlag?s("div",{staticClass:"main_like_qrcode"},[s("img",{staticClass:"main_like_qrcode_img",attrs:{src:"/images/like/likeCode.jpeg"}})]):t._e()])]),t._m(4),s("div",{staticClass:"main_contact",attrs:{id:"main_contact"}},[s("div",{staticClass:"container_max"},[s("div",{staticClass:"main_contact_title"},[t._v("\n                头像可以很有趣\n            ")]),s("div",{staticClass:"down_items"},[s("a",{staticClass:"install-btn",attrs:{href:t.downUrl},on:{click:function(a){t.navScroll(4)}}},[t._v("直接下载安装")]),s("a",{staticClass:"install-btn",attrs:{href:t.chromeUrl,target:"_blank"}},[t._v("Chrome应用店安装")])])])]),t._m(5)])},c=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._v("如果可以正常访问谷歌，可以 "),s("a",{staticClass:"active",attrs:{href:""}},[t._v("前往应用商店")]),t._v(" 下载")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main_install_items"},[s("div",{staticClass:"main_install_item"},[s("img",{attrs:{src:"/images/install/install-chrome-step-1.png"}}),s("div",{staticClass:"main_install_item_title"},[t._v("1.下载安装文件")]),s("div",{staticClass:"main_install_item_desc"},[t._v("\n                        下载插件，并在浏览器系统提示时选择【保留】，在下载文件夹中找到下载好的文件，后缀是.crx\n                        "),s("br"),t._v("\n                        说明：若提示“无法从该网站添加应用”请点击确定。\n                    ")])]),s("div",{staticClass:"main_install_item"},[s("img",{attrs:{src:"/images/install/install-chrome-step-2.jpg"}}),s("div",{staticClass:"main_install_item_title"},[t._v("2.打开扩展程序页面")]),s("div",{staticClass:"main_install_item_desc"},[t._v("\n                        复制 "),s("span",{staticClass:"active"},[t._v("chrome://extensions")]),t._v(" 并粘贴到地址栏，按回车键\n                    ")])]),s("div",{staticClass:"main_install_item"},[s("img",{attrs:{src:"/images/install/install-chrome-step-3.png"}}),s("div",{staticClass:"main_install_item_title"},[t._v("3.安装插件")]),s("div",{staticClass:"main_install_item_desc"},[t._v("\n                        在扩展安装页面打开右上角的"),s("span",{staticClass:"active"},[t._v("【开发者模式】")]),t._v("按钮，然后刷新页面，将下载好的.crx文件拖入扩展安装页面内。\n                    ")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main_install_wx"},[s("a",{staticClass:"main_install_btn",attrs:{href:"https://wx.qq.com/",target:"_blank"}},[t._v("打开微信网页版")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main_install_items"},[s("div",{staticClass:"main_install_item"},[s("img",{attrs:{src:"/images/guide/g1_840@2x.jpg"}}),s("div",{staticClass:"main_install_item_title"},[t._v("1. 选择一个群")]),s("div",{staticClass:"main_install_item_desc"},[t._v("\n                        插件安装成功之后。打开"),s("a",{staticClass:"active",attrs:{href:"https://wx.qq.com/",target:"_blank"}},[t._v("微信网页版")]),t._v("并扫描登录，选中一个群，并展开群头像列表，"),s("span",{staticClass:"active"},[t._v("点击聊天框顶部的向下箭头处")]),t._v("，如图。\n\n                    ")])]),s("div",{staticClass:"main_install_item"},[s("img",{attrs:{src:"/images/guide/g2_840@2x.jpg"}}),s("div",{staticClass:"main_install_item_title"},[t._v("2. 打开插件")]),s("div",{staticClass:"main_install_item_desc"},[s("span",{staticClass:"active"},[t._v("注意：当小图标为绿色的时候才能正常工作，如果还是灰色状态，请刷新下微信网页版")]),s("br"),t._v("\n                        点击浏览器右上方的插件小图标，打开插件；"),s("br"),t._v("点击选择自己喜欢的主题图片\n                    ")])]),s("div",{staticClass:"main_install_item"},[s("img",{attrs:{src:"/images/guide/g3_840@2x.jpg"}}),s("div",{staticClass:"main_install_item_title"},[t._v("3. 群合影生成")]),s("div",{staticClass:"main_install_item_desc"},[t._v("\n                        进入群合影生成页面，群头像会自动获取，请耐心等待。"),s("br"),t._v("\n                        之后对当前内容进行编辑：组合方式、大小、位置、更改背景图。"),s("br"),t._v("\n                        点击"),s("span",{staticClass:"active"},[t._v("【下载】")]),t._v("按钮即可下载到本地。\n                        "),s("br"),t._v("\n                        说明：如果出现卡顿现象，请刷新浏览器页面，再次操作\n                    ")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main_ask",attrs:{id:"main_ask"}},[s("div",{staticClass:"container_max"},[s("div",{staticClass:"main_ask_top"},[t._v("常见问题")]),s("div",{staticClass:"main_ask_item"},[s("div",{staticClass:"main_ask_title"},[t._v("1. 支持的浏览器？")]),s("div",{staticClass:"main_ask_con"},[t._v("支持Chrome浏览器和"),s("a",{staticClass:"active",attrs:{href:"https://browser.360.cn/ee/",target:"_blank"}},[t._v("360极速浏览器")])])]),s("div",{staticClass:"main_ask_item"},[s("div",{staticClass:"main_ask_title"},[t._v("2. 安装不上？")]),s("div",{staticClass:"main_ask_con"},[t._v("请确认以下操作: 如果是直接下载安装方式，要打开"),s("span",{staticClass:"active"},[t._v("开发者模式")]),t._v("，把.crx后缀的文件拖进 "),s("span",{staticClass:"active"},[t._v("chrome://extensions")]),t._v(" 页面")])]),s("div",{staticClass:"main_ask_item"},[s("div",{staticClass:"main_ask_title"},[t._v("3. 右上角小图标是灰色的？")]),s("div",{staticClass:"main_ask_con"},[t._v("刷新下微信网页版的页面，确认下地址栏显示的地址是这3个当中的一种："),s("span",{staticClass:"active"},[t._v("wx.qq.com、wx2.qq.com、wx8.qq.com、web.wechat.com，")]),t._v("如果不是，请加我微信(当前页面底部有我的微信二维码)向我反馈")])]),s("div",{staticClass:"main_ask_item"},[s("div",{staticClass:"main_ask_title"},[t._v("4. 头像不能生成？")]),s("div",{staticClass:"main_ask_con"},[t._v("请按上面的帮助部分关于操作使用的说明，看是否选中了一个群，聊天框上面的"),s("span",{staticClass:"active"},[t._v("向下的小箭头")]),t._v("是否展开显示出群成员的头像")])]),s("div",{staticClass:"main_ask_item"},[s("div",{staticClass:"main_ask_title"},[t._v("4. 有新版本内容发布怎么知道？")]),s("div",{staticClass:"main_ask_con"},[t._v("请关注我的微信公众号"),s("span",{staticClass:"active"},[t._v('"凯凯而谈"')]),t._v("(当前页面底部)，有新的功能更新会在公众号通知。当前官网最上面也会显示最新的版本信息。")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main_more",attrs:{id:"main_more"}},[s("div",{staticClass:"container_max"},[s("div",{staticClass:"footer__inner"},[s("a",{staticClass:"footer__textLogo",attrs:{href:"/"}},[t._v("微信群合影")]),s("div",{staticClass:"footer__data"},[s("div",{staticClass:"footer__data__item"}),s("div",{staticClass:"footer__data__item"},[s("div",{staticClass:"footer__row"},[s("strong",[t._v("微信公众号")])]),s("div",{staticClass:"footer__row"},[s("img",{staticClass:"footer_qrcode",attrs:{src:"/images/water/web-bear.jpg"}})])]),s("div",{staticClass:"footer__data__item"},[s("div",{staticClass:"footer__row"},[s("strong",[t._v("问题反馈")])]),s("div",{staticClass:"footer__row"},[s("img",{staticClass:"footer_qrcode",attrs:{src:"/images/water/qrcode_per.jpeg"}})])])])])])])}],r=(s("c5f6"),s("186a"),s("450d"),s("301f")),o=s.n(r),_=(s("96dc"),s("9cea")),m=s.n(_),v={name:"QunHeYing",components:{"el-carousel":m.a,"el-carousel-item":o.a},props:{msg:String},data:function(){return{canvasSize:{width:338,height:600},backImgSize:{width:1024,height:3e3},likeFlag:!1,title:"",useShowArray:["/images/useBack/use_back_8.png","/images/useBack/use_back_6.png","/images/useBack/use_back_7.png","/images/useBack/use_back_9.png"],showArray:["/images/showBack/show_13.jpg","/images/showBack/show_14.jpg","/images/showBack/show_15.jpg","/images/showBack/show_16.jpg","/images/showBack/show_11.jpg","/images/showBack/show_12.jpg","/images/showBack/show_7.png","/images/showBack/show_8.jpg"],downUrl:"http://qiniu.gafata.com/qunheying-2.0.0.crx",chromeUrl:"https://chrome.google.com/webstore/detail/%E5%BE%AE%E4%BF%A1%E7%BE%A4%E5%90%88%E5%BD%B1/okmigchmnpnkhpbadonggpnidnnjocma?hl=zh-CN"}},created:function(){window.addEventListener("scroll",this.handleScroll)},methods:{__getPageScrollY:function(t){return t||0==Number(t)?(self.pageYOffset&&(self.pageYOffset=Number(t)),document.documentElement&&document.documentElement.scrollTop&&(document.documentElement.scrollTop=Number(t)),document.body&&(document.body.scrollTop=Number(t)),!0):(self.pageYOffset?a=self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?a=document.documentElement.scrollTop:document.body&&(a=document.body.scrollTop),a);var a},handleScroll:function(){var t=this.__getPageScrollY(),a=document.getElementById("hero"),s=a.offsetHeight-100;if(t>s){var i=document.getElementById("navbar");i.classList.add("navbar_active")}else{var e=document.getElementById("navbar");e.classList.remove("navbar_active")}},navScroll:function(t){var a=65;if(1===t){var s=document.getElementById("hero").offsetTop;window.scrollTo(0,s-a)}else if(2===t){var i=document.getElementById("main_use").offsetTop;window.scrollTo(0,i-a)}else if(3===t){var e=document.getElementById("main_show").offsetTop;window.scrollTo(0,e-a)}else if(4===t){var n=document.getElementById("main_install").offsetTop;window.scrollTo(0,n-a-5),gtag("event","main",{event_category:"downloadDirect",event_label:"top"})}else if(5===t){var l=document.getElementById("main_more").offsetTop;window.scrollTo(0,l-a)}else if(6===t){var c=document.getElementById("main_ask").offsetTop;window.scrollTo(0,c-a)}},showLike:function(){this.likeFlag=!0}}},d=v,u=(s("6a68"),s("2877")),f=Object(u["a"])(d,l,c,!1,null,null,null);f.options.__file="index.vue";var g=f.exports,C={name:"app",components:{Pool:g}},p=C,h=(s("034f"),Object(u["a"])(p,e,n,!1,null,null,null));h.options.__file="App.vue";var w=h.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(w)}}).$mount("#app")},"64a9":function(t,a,s){},"6a68":function(t,a,s){"use strict";var i=s("9fc2"),e=s.n(i);e.a},"9fc2":function(t,a,s){}});
//# sourceMappingURL=app.0c55f008.js.map