(function(t){function e(e){for(var c,r,i=e[0],u=e[1],s=e[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(t[c]=u[c]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],c=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(c=!1)}c&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var c={},a={app:0},o=[];function r(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c07a140f","chunk-0884c12e":"b5a78abd"}[t]+".js"}function i(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,c){n=a[t]=[e,c]}));e.push(n[2]=c);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=r(t);var s=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var c=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+c+": "+o+")",s.name="ChunkLoadError",s.type=c,s.request=o,n[1](s)}a[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=c,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(n,c,function(e){return t[e]}.bind(null,c));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/weather-codica/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03cf":function(t,e,n){"use strict";n("afd2")},"0ff2":function(t,e,n){"use strict";var c=n("7a23"),a={class:"loader"};function o(t,e,n,o,r,i){return Object(c["u"])(),Object(c["g"])("div",a," loading ")}var r={name:"PreLoader"},i=n("6b0d"),u=n.n(i);const s=u()(r,[["render",o]]);e["a"]=s},"35e6":function(t,e,n){},"4bf1":function(t,e,n){t.exports=n.p+"img/delete.0d4f80b4.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a=n("fdec"),o=n.n(a),r={class:"body"},i={class:"main"},u={class:"container"},s={class:"main__top d-flex justify-between align-center"},d={id:"nav",class:"nav"},l=Object(c["j"])(" Home "),f=Object(c["j"])(" | "),b=Object(c["j"])(" About "),h=Object(c["j"])(" Your GeoLocation "),O={key:0},_={key:1};function T(t,e,n,a,o,T){var E=Object(c["z"])("Header"),j=Object(c["z"])("router-link"),p=Object(c["z"])("PreLoader"),m=Object(c["z"])("router-view"),A=Object(c["z"])("Footer");return Object(c["u"])(),Object(c["g"])("div",r,[Object(c["k"])(E),Object(c["h"])("div",i,[Object(c["h"])("div",u,[Object(c["h"])("div",s,[Object(c["h"])("div",d,[Object(c["k"])(j,{to:"/"},{default:Object(c["G"])((function(){return[l]})),_:1}),f,Object(c["k"])(j,{to:"/about"},{default:Object(c["G"])((function(){return[b]})),_:1})]),Object(c["h"])("div",null,[h,o.geolocation?(Object(c["u"])(),Object(c["g"])("span",O,"lat: "+Object(c["B"])(o.geolocation.lat)+"  lng: "+Object(c["B"])(o.geolocation.lng),1)):(Object(c["u"])(),Object(c["g"])("span",_,"blocked"))])])]),t.$store.state.preLoader.isShow?(Object(c["u"])(),Object(c["e"])(p,{key:0})):Object(c["f"])("",!0),Object(c["k"])(c["b"],{name:"moveInUp"},{default:Object(c["G"])((function(){return[Object(c["k"])(m)]})),_:1})]),Object(c["k"])(A)])}var E=n("5530"),j=n("5502"),p={class:"header d-flex justify-center",style:{"font-size":"24px"}};function m(t,e,n,a,o,r){return Object(c["u"])(),Object(c["g"])("div",p," header ")}var A={name:"Header"},v=n("6b0d"),C=n.n(v);const y=C()(A,[["render",m]]);var R=y,g={class:"footer d-flex justify-center",style:{"font-size":"24px"}};function S(t,e,n,a,o,r){return Object(c["u"])(),Object(c["g"])("div",g," footer ")}var w={name:"Footer"};const L=C()(w,[["render",S]]);var D=L,k=n("0ff2"),G={name:"Home",components:{Header:R,Footer:D,PreLoader:k["a"]},data:function(){return{geolocation:null,logEntries:[{id:1,timestamp:0,location:"",latLng:{lat:0,lng:0},heading:"",speed:0,sog:0,windDirection:"NW",windForceKTS:12,motorOrSail:"sail",pressure:1020,remarks:""}]}},created:function(){var t=this;this.$watchLocation({enableHighAccuracy:!0}).then((function(e){console.log(e),t.geolocation=e,t.GET_YOUR_CITY(e)})).catch((function(t){console.log(t)}))},methods:Object(E["a"])({},Object(j["b"])(["GET_YOUR_CITY"]))};const H=C()(G,[["render",T]]);var W=H,I=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),N={class:"home h100p"},Y={class:"container"};function V(t,e,n,a,o,r){var i=Object(c["z"])("Weather");return Object(c["u"])(),Object(c["g"])("div",N,[Object(c["h"])("div",Y,[Object(c["k"])(i)])])}var x={class:"d-flex justify-start align-start h100p"},B={class:"weather w100p"},P={class:"weather__label pos-r d-flex justify-start align-start mb-20"},z={key:0,style:{color:"red"},class:"weather__error pos-a mb-5"},M={class:"weather__input"},F={class:"weather__cards"};function U(t,e,n,a,o,r){var i=Object(c["z"])("Button"),u=Object(c["z"])("weather-card"),s=Object(c["z"])("PreLoader");return Object(c["u"])(),Object(c["g"])("div",x,[Object(c["H"])(Object(c["h"])("div",B,[Object(c["h"])("label",P,[t.$store.state.cityNameNoValid?(Object(c["u"])(),Object(c["g"])("span",z,Object(c["B"])(t.NO_VALID_TEXT),1)):Object(c["f"])("",!0),Object(c["h"])("div",M,[Object(c["H"])(Object(c["h"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return o.cityName=t}),type:"text",placeholder:"City name"},null,512),[[c["D"],o.cityName]]),Object(c["k"])(i,{title:"Add new city",onClickButton:r.addedCity},null,8,["onClickButton"])])]),Object(c["h"])("div",F,[(Object(c["u"])(!0),Object(c["g"])(c["a"],null,Object(c["y"])(t.WETHER_CARDS,(function(t){return Object(c["u"])(),Object(c["g"])("div",{key:t.id,class:"weather__item"},[Object(c["k"])(u,{data:t},null,8,["data"])])})),128))])],512),[[c["E"],!t.$store.state.preLoader.isShow]]),t.$store.state.preLoader.isShow?(Object(c["u"])(),Object(c["e"])(s,{key:0})):Object(c["f"])("",!0)])}n("ac1f"),n("00b4"),n("4de4"),n("b0c0");var $=n("df85"),q={class:"weather-card__inner"},X={class:"weather-card__headline"},Z={class:"weather-card__date"},J={class:"weather-card__title pt-20 pt-20 text-center"},K={class:"d-flex justify-between pt-5"};function Q(t,e,n,a,o,r){var i=Object(c["z"])("button-delete");return Object(c["u"])(),Object(c["g"])("div",{class:"weather-card",onClick:e[0]||(e[0]=function(t){return r.goTodetail()})},[Object(c["h"])("div",q,[Object(c["k"])(i,{onClickButton:r.deleteCard},null,8,["onClickButton"]),Object(c["h"])("div",X,[Object(c["h"])("div",Z,Object(c["B"])(r.dateTime()),1),Object(c["h"])("div",J," Weather in "+Object(c["B"])(n.data.name),1),Object(c["h"])("div",null," temp  "+Object(c["B"])(n.data.main["temp"]),1),Object(c["h"])("div",null," temp-min  "+Object(c["B"])(n.data.main["temp_min"]),1),Object(c["h"])("div",null," temp-max  "+Object(c["B"])(n.data.main["temp_max"]),1),Object(c["h"])("div",K,[Object(c["h"])("div",null," wind speed  "+Object(c["B"])(n.data.wind["speed"])+" m/s ",1),Object(c["h"])("div",null," wind deg  "+Object(c["B"])(n.data.wind["deg"]),1)])])])])}var tt=n("4bf1"),et=n.n(tt),nt=Object(c["h"])("img",{src:et.a,alt:"button delete"},null,-1),ct=[nt];function at(t,e,n,a,o,r){return Object(c["u"])(),Object(c["g"])("span",{class:"button-delete",onClick:e[0]||(e[0]=Object(c["I"])((function(){return r.clickActive&&r.clickActive.apply(r,arguments)}),["stop"]))},ct)}var ot={name:"ButtonDelete",methods:{clickActive:function(){this.$emit("clickButton")}}};n("03cf");const rt=C()(ot,[["render",at]]);var it=rt,ut={name:"WeatherCard",components:{ButtonDelete:it},props:{data:{type:Object,default:null}},methods:Object(E["a"])(Object(E["a"])({},Object(j["b"])(["REMOVE_CARD","GET_WEATHER_CARD","GET_WEATHER_FULL_CARD"])),{},{deleteCard:function(){this.REMOVE_CARD(this.data.id)},dateTime:function(){var t=new Date,e=t.getTime(),n=6e4*t.getTimezoneOffset(),c=e+n,a=c+1e3*this.data.timezone,o=new Date(a);return o},goTodetail:function(){this.GET_WEATHER_CARD(this.data.name),this.GET_WEATHER_FULL_CARD(this.data.coord),this.$router.push({name:"WeatherInfo",params:{Pid:this.data.id,City:this.data.name}})}})};const st=C()(ut,[["render",Q]]);var dt=st,lt=n("576d"),ft={name:"Weather",components:{WeatherCard:dt,PreLoader:k["a"],Button:lt["a"]},setup:function(){var t=Object($["a"])(),e=t.cookies;return{cookies:e}},data:function(){return{cityName:"",cityBase:[],cityArray:[]}},computed:Object(E["a"])({},Object(j["c"])(["WETHER_CARDS","NO_VALID_TEXT","CITY_ARRAY"])),mounted:function(){var t=this.cookies.get("city");console.log(t,"cookies"),0===this.WETHER_CARDS.length&&this.GET_WEATHER_CARDS([t])},methods:Object(E["a"])(Object(E["a"])({},Object(j["b"])(["GET_WEATHER_CARDS","GET_ADD_WEATHER_CARD","SET_CITY_NO_VALID"])),{},{onlyLetters:function(t){return/^[a-zA-Z\u00C0-\u00ff]+$/.test(t)},addedCity:function(){var t=this;(0===this.cityName.length||this.onlyLetters(this.cityName))&&this.SET_CITY_NO_VALID();var e=this.WETHER_CARDS.filter((function(e){return e.name===t.cityName}));0!==e.length?this.SET_CITY_NO_VALID():(this.GET_ADD_WEATHER_CARD(this.cityName),this.cookies.set("city",this.CITY_ARRAY))}})};const bt=C()(ft,[["render",U]]);var ht=bt,Ot={name:"Home",components:{Weather:ht}};const _t=C()(Ot,[["render",V]]);var Tt=_t,Et=[{path:"/",name:"Home",component:Tt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"a1d1"))}},{path:"/weather-info/:Pid/:City",name:"WeatherInfo",component:function(){return n.e("chunk-0884c12e").then(n.bind(null,"0224"))}}],jt=Object(I["a"])({history:Object(I["b"])("/weather-codica/"),routes:Et}),pt=jt,mt=(n("99af"),n("159b"),n("bc3a")),At=n.n(mt),vt="https://api.openweathermap.org/data/2.5/",Ct="41d3cd22f575e109b52420d429cf059a",yt=Object(j["a"])({state:{preLoader:{isShow:!1},modalCard:{isShow:!1},cityNameNoValid:!1,cityNameNoValidText:"no correct",weatherCards:[],cityArray:[],weatherCard:{},weatherFullCard:[]},mutations:{SET_CITY_NAME_TO_STATE_ARRAY:function(t,e){t.cityArray.push(e)},SET_WEATHER_CARDS_TO_STATE:function(t,e){t.weatherCards.push(e)},SET_WEATHER_CARD_TO_STATE:function(t,e){t.weatherCard=e},SET_WEATHER_FULL_CARD_TO_STATE:function(t,e){t.weatherFullCard=e},SET_SHOW:function(t,e){t[e].isShow=!0},SET_CLOSE:function(t,e){t[e].isShow=!1},SET_TOGGLE:function(t,e){t[e].isShow=!t[e].isShow},SET_CITY_NO_VALID:function(t,e){t.cityNameNoValid=e},REMOVE_CARD:function(t,e){var n=t.weatherCards.filter((function(t){return t.id!==e}));this.state.weatherCards=n}},actions:{SET_CITY_NO_VALID:function(t){var e=t.commit;e("SET_CITY_NO_VALID",!0)},REMOVE_CARD:function(t,e){var n=t.commit;n("REMOVE_CARD",e)},GET_YOUR_CITY:function(t,e){var n=t.commit;n("SET_TOGGLE","preLoader"),At()("".concat(vt,"weather?lat=").concat(e.lat,"&lon=").concat(e.lng,"&units=metric&appid=").concat(Ct),{method:"GET"}).then((function(t){return n("SET_WEATHER_CARDS_TO_STATE",t.data),t})).catch((function(t){return console.log(t),t})).finally((function(){n("SET_TOGGLE","preLoader")}))},GET_ADD_WEATHER_CARD:function(t,e){var n=t.commit;n("SET_CITY_NO_VALID",!1),n("SET_TOGGLE","preLoader"),setTimeout((function(){At()("".concat(vt,"weather?q=").concat(e,"&units=metric&appid=").concat(Ct),{method:"GET"}).then((function(t){return n("SET_WEATHER_CARDS_TO_STATE",t.data),n("SET_CITY_NAME_TO_STATE_ARRAY",t.data.name),t})).catch((function(t){return console.log(t),n("SET_CITY_NO_VALID",!0),t})).finally((function(){n("SET_TOGGLE","preLoader")}))}),500)},GET_WEATHER_CARD:function(t,e){var n=t.commit;n("SET_TOGGLE","preLoader"),setTimeout((function(){At()("".concat(vt,"weather?q=").concat(e,"&units=metric&appid=").concat(Ct),{method:"GET"}).then((function(t){return n("SET_WEATHER_CARD_TO_STATE",t.data),t})).catch((function(t){return console.log(t),t})).finally((function(){n("SET_TOGGLE","preLoader")}))}),1e3)},GET_WEATHER_FULL_CARD:function(t,e){var n=t.commit;n("SET_TOGGLE","preLoader"),setTimeout((function(){At()("".concat(vt,"onecall?lat=").concat(e.lat,"&lon=").concat(e.lon,"&exclude=current,minutely,alerts&units=metric&appid=").concat(Ct),{method:"GET"}).then((function(t){return n("SET_WEATHER_FULL_CARD_TO_STATE",t.data.hourly),t})).catch((function(t){return console.log(t),n("SET_CITY_NO_VALID",!0),t})).finally((function(){n("SET_TOGGLE","preLoader")}))}),500)},GET_WEATHER_CARDS:function(t,e){var n=t.commit;n("SET_TOGGLE","preLoader"),setTimeout((function(){e.forEach((function(t){At()("".concat(vt,"weather?q=").concat(t,"&units=metric&appid=").concat(Ct),{method:"GET"}).then((function(t){return n("SET_WEATHER_CARDS_TO_STATE",t.data),n("SET_CITY_NAME_TO_STATE_ARRAY",t.data.name),t})).catch((function(t){return console.log(t),t}))})),n("SET_TOGGLE","preLoader")}),1500)}},getters:{WETHER_CARDS:function(t){return t.weatherCards},WETHER_CARD:function(t){return t.weatherCard},WETHER_FULL_CARD:function(t){return t.weatherFullCard},NO_VALID_TEXT:function(t){return t.cityNameNoValidText},CITY_ARRAY:function(t){return t.cityArray}}});n("35e6");Object(c["d"])(W).use(yt).use(pt).use(o.a).mount("#app")},"576d":function(t,e,n){"use strict";var c=n("7a23"),a={key:0},o=Object(c["h"])("svg",{width:"21",height:"8",viewBox:"0 0 21 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(c["h"])("path",{d:"M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM21 3.5L1 3.5V4.5L21 4.5V3.5Z",fill:"black"})],-1),r=[o];function i(t,e,n,o,i,u){return Object(c["u"])(),Object(c["g"])("button",{class:"button",onClick:e[0]||(e[0]=function(){return u.clickActive&&u.clickActive.apply(u,arguments)})},["Back"===n.title?(Object(c["u"])(),Object(c["g"])("span",a,r)):Object(c["f"])("",!0),Object(c["j"])("  "+Object(c["B"])(n.title),1)])}var u={props:{title:{type:String,default:""}},methods:{clickActive:function(){this.$emit("clickButton")}}},s=n("6b0d"),d=n.n(s);const l=d()(u,[["render",i]]);e["a"]=l},afd2:function(t,e,n){}});