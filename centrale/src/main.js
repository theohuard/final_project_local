import Vue from 'vue';
import Vue2Leaflet from 'vue2-leaflet';
import Vuex from 'vuex';


import App from './App.vue'
import router from './router'


Vue.use(Vuex);

Vue.config.productionTip = false

Vue.component('v-map', Vue2Leaflet.Map);
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
Vue.component('v-marker', Vue2Leaflet.Marker);
Vue.component('v-popup', Vue2Leaflet.Popup);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')




// //The Vuex store. Contains the probes and a method to update the data in all of them
// const store = new Vuex.Store({
// 	state:{
//     probeAddresses: ['172.31.43.60','172.31.58.22','172.31.43.58','172.31.43.61','172.31.43.62','172.31.43.65'],
// 		probes: {
//       '172.31.43.60': ('172.31.43.60'),
//       '172.31.58.22': ('172.31.58.22'),
//       '172.31.43.58': ('172.31.43.58'),
//       '172.31.43.61': ('172.31.43.61'),
//       '172.31.43.62': ('172.31.43.62'),
//       '172.31.43.65': ('172.31.43.65')
//     },
// 		properties: ['temperature', 'pressure', 'humidity', 'luminosity', 'wind_heading', 'wind_speed_avg',
// 		'wind_speed_max','wind_speed_min', 'rainfall']
// 	},
//   mutations: {
//     updateData: function(state, vue) {
//       state.probeAddresses.forEach((probeAdr)=>{
//         state.probes[probeAdr].updateValues();
//       });
//       vue.$forceUpdate();
//     }
//   }
// });
