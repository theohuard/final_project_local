(function(e){function t(t){for(var a,o,i=t[0],d=t[1],u=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);c&&c(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var d=r[i];0!==n[d]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=d;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2aa0":function(e,t,r){"use strict";r("c0cf")},"3f9d":function(e,t,r){},4678:function(e,t,r){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=s(e);return r(t)}function s(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id="4678"},"51cd":function(e,t,r){"use strict";r("3f9d")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("d3b7"),r("159b");var a,n,s=r("2b0e"),o=r("458e"),i=r.n(o),d=r("2f62"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"dashboard"}},[r("h1",[e._v("Data from probe: "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.probe_address,expression:"probe_address"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.probe_address=t.target.multiple?r:r[0]}}})]),r("table")])},c=[],l={name:"dashboard",data:function(){return{probe_address:this.$store.state.probeAddresses[0]}},computed:{current_probe:function(){return this.$store.state.probes[this.probe_address]}},methods:{updateValues:function(){this.$store.commit("updateData",this),setTimeout(this.updateValues,3e3)}},mounted:function(){this.updateValues()}},p=l,f=(r("51cd"),r("2877")),b=Object(f["a"])(p,u,c,!1,null,null,null),m=b.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("div",{attrs:{id:"loading"}},[e._m(0)]):r("div",{attrs:{id:"history"}},[r("h1",[e._v("History from probe: "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.probe_address,expression:"probe_address"}],on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.probe_address=t.target.multiple?r:r[0]},e.getHistory]}})]),r("p",[e._v("value: "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.property,expression:"property"}],on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.property=t.target.multiple?r:r[0]},e.getHistory]}}),e._v(" period: "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.time_period,expression:"time_period"}],on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.time_period=t.target.multiple?r:r[0]},e.getHistory]}},[r("option",{domProps:{value:6e4}},[e._v("1 minute")]),r("option",{domProps:{value:36e5}},[e._v("1 hour")]),r("option",{domProps:{value:864e5}},[e._v("1 day")]),r("option",{domProps:{value:6048e5}},[e._v("1 week")]),r("option",{domProps:{value:2592e6}},[e._v("1 month")]),r("option",{domProps:{value:315576e5}},[e._v("1 year")])])]),r("history-chart",{attrs:{datesarray:e.dates_array,property:e.property,propertyarray:e.property_array}})],1)},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[a("img",{attrs:{src:r("cf1c"),alt:"loading gif"}})]),a("p",[e._v("Loading history...")])])}],v=(r("d81d"),r("cb29"),r("1fca")),y={extends:v["a"],name:"history-chart",props:["datesarray","property","propertyarray"],methods:{render:function(){var e={label:this.property,backgroundColor:"lightblue",borderColor:"rgba(0,0,0,0)",data:this.propertyarray,lineTension:0};"rainfall"!=this.property?e.pointRadius=0:(e.borderWidth=0,e.fill=!1);var t={labels:this.datesarray,datasets:[e]};this.renderChart(t,{responsive:!0,maintainAspectRatio:!1})}},watch:{property:{handler:function(){this.render()},deep:!0},datesarray:{handler:function(){this.render()},deep:!0},propertyarray:{handler:function(){this.render()},deep:!0}},mounted:function(){this.render()}},_=y,g=Object(f["a"])(_,a,n,!1,null,null,null),w=g.exports,k={name:"history",components:{HistoryChart:w},data:function(){return{probe_address:this.$store.state.probeAddresses[0],time_period:864e5,property:"temperature",dates_array:[],property_array:[],loading:!1}},computed:{current_probe:function(){return this.$store.state.probes[this.probe_address]}},methods:{getHistory:function(){var e=this,t=new Date(Date.now()),r=new Date(t.getTime()-this.time_period);this.loading=!0,fetch("http://"+this.probe_address+":3000/interval/?start="+r.toISOString()+"&stop="+t.toISOString()).then((function(e){return e.json()})).then((function(t){var r=t.measurements,a=t.rainfall;"rainfall"!=e.property?(e.dates_array=r.map((function(e){return e.date})).reverse(),e.property_array=r.map((function(t){return t[e.property]})).reverse()):e.dates_array=a.map((function(e){return e.date})).reverse();for(var n=0;n<e.dates_array.length;n++){var s=new Date(e.dates_array[n]),o="";o+=s.getDate()+"/"+(s.getMonth()+1)+"/"+s.getFullYear(),o+=" ",o+=s.getHours(),o+=":",o+=s.getMinutes(),e.dates_array[n]=o}e.loading=!1})).catch((function(){e.dates_array=[],e.property_array=[],e.loading=!1}))}},mounted:function(){this.getHistory()}},x=k,z=(r("5bab"),Object(f["a"])(x,j,h,!1,null,null,null)),O=z.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"comparative"}},[r("h1",[e._v("Comparison:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.current_property,expression:"current_property"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.current_property=t.target.multiple?r:r[0]}}}),r("table")])},D=[],N={name:"comparative",data:function(){return{current_property:"temperature"}},methods:{updateValues:function(){this.$forceUpdate(),setTimeout(this.updateValues,3e3)}},mounted:function(){this.updateValues()}},P=N,$=(r("6dbe"),Object(f["a"])(P,S,D,!1,null,null,null)),A=$.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"mapping"}},[r("v-map",{attrs:{zoom:4,center:[45,3]}},[r("v-tilelayer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}})],1)],1)},T=[],M={name:"mapping",data:function(){return{}}},H=M,V=(r("2aa0"),Object(f["a"])(H,E,T,!1,null,null,null)),C=V.exports;function U(e){return e<22.5||e>=337.5?"South to North":e>=22.5&&e<67.5?"Southwest to Northeast":e>=67.5&&e<112.5?"West to East":e>=112.5&&e<157.5?"Northwest to Southeast":e>=157.5&&e<202.5?"North to South":e>=202.5&&e<247.5?"Northeast to Southwest":e>=247.5&&e<292.5?"East to West":e>=292.5&&e<337.5?"Southeast to Northwest":"unknown"}s["a"].use(d["a"]),s["a"].component("v-map",i.a.Map),s["a"].component("v-tilelayer",i.a.TileLayer),s["a"].component("v-marker",i.a.Marker);var L=function(e){this.address=e,this.latlng=[90,0],this.updateValues=function(){var e=this;fetch("http://"+this.address+":3000/last/").then((function(e){return e.json()})).then((function(t){var r=t.measurements[0],a=t.location[0];e.temperature=r.temperature,e.pressure=r.pressure,e.humidity=r.humidity,e.luminosity=r.luminosity,e.wind_heading=U(r.wind_heading),e.wind_speed_avg=r.wind_speed_avg,e.wind_speed_max=r.wind_speed_max,e.wind_speed_min=r.wind_speed_min;var n=new Date(t.rainfall[0].date),s=new Date(Date.now());e.rainfall=s.getTime()-n.getTime()<15e3,e.latlng=[a.latitude,a.longitude]}))}},W=new d["a"].Store({state:{probeAddresses:["172.31.43.60","172.31.58.22","172.31.43.58","172.31.43.61","172.31.43.62","172.31.43.65"],probes:{"172.31.43.60":new L("172.31.43.60"),"172.31.58.22":new L("172.31.58.22"),"172.31.43.58":new L("172.31.43.58"),"172.31.43.61":new L("172.31.43.61"),"172.31.43.62":new L("172.31.43.62"),"172.31.43.65":new L("172.31.43.65")},properties:["temperature","pressure","humidity","luminosity","wind_heading","wind_speed_avg","wind_speed_max","wind_speed_min","rainfall"]},mutations:{updateData:function(e,t){e.probeAddresses.forEach((function(t){e.probes[t].updateValues()})),t.$forceUpdate()}}});new s["a"]({el:"#dashboard",store:W,render:function(e){return e(m)}}),new s["a"]({el:"#history",store:W,render:function(e){return e(O)}}),new s["a"]({el:"#comparative",store:W,render:function(e){return e(A)}}),new s["a"]({el:"#leaflet",store:W,render:function(e){return e(C)}})},"5bab":function(e,t,r){"use strict";r("9d76")},"6dbe":function(e,t,r){"use strict";r("ff00")},"9d76":function(e,t,r){},c0cf:function(e,t,r){},cf1c:function(e,t,r){e.exports=r.p+"img/loading.5fe0e55f.gif"},ff00:function(e,t,r){}});
//# sourceMappingURL=app.b28e7080.js.map