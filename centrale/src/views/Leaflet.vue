<template>
  <div id='leaflet'>
  <v-map
    :center="center"
    :zoom="zoom"
    class="map"
    ref="map"

  >
    <v-tilelayer :url="url"> </v-tilelayer>
      <!-- All the work is done using the Vue2leaflet module (https://github.com/KoRiGaN/Vue2Leaflet) 
        The only parameters are the probes positions and icons-->
      <!--- <v-marker v-for="probe in $store.state.probes" :lat-lng="probe.latlng" :icon="probe.icon"></v-marker>--->
    <v-marker v-for="marker in markers" :key="marker.id" :lat-lng="marker.coordinates" @click="removeMarker(index)">
     <v-popup :content="marker.content"></v-popup> 
    </v-marker>
  
    </v-map>
  </div>
</template>

<script>
// import L from 'leaflet'; 

export default {

  name: 'leaflet',

  data() {
    
    return {
      id:0,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      sonde : "",
      center: [48, 5],
      zoom: 5,
      data:{"GPSPosition" : 0},
      markers: [],
    };
    
  },
  async created() {
    var selected_sonde = document.getElementById("sonde").value;
    if (selected_sonde == "localhost"){
      this.sonde = "http://localhost:3000" ; 
    }
    try {
      await fetch(this.sonde+"/data/gpsposition").then(a => a.json()).then(a => { 
      this.data.GPSPosition=a.gpsposition.value;});
      this.markers.push({id:this.id,coordinates:[parseFloat(this.data.GPSPosition[0]).toFixed(4),parseFloat(this.data.GPSPosition[1]).toFixed(4)],content:selected_sonde,});
      this.id++;
    } catch (error) {
      console.log(error);
      
    }
    
  },
  
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
      console.log("zoom");
      console.log(document.getElementById("sonde").value );
    },
  },
};

</script>


<style lang="scss">
#leaflet {
 
  height: 500px;
  width: auto;
}
</style>
