<template>
  <div id="data" >
    <h1>Data :</h1>
        <ul>
          <li> Temperature : {{parseFloat(data.temperature)}} °C </li>
          <li> Humidity : {{parseFloat(data.humidity)}}  </li>
          <li> Pressure : {{parseFloat(data.pressure)}} Pa </li>
          <li> Luminosity : {{parseFloat(data.luminosity)}}  </li>
          <li> Wind_heading : {{parseFloat(data.wind_heading).toFixed(2)}}  </li>
          <li> Wind : average : {{parseFloat(data.wind[0]).toFixed(2)}} / min : {{parseFloat(data.wind[1]).toFixed(2)}} / max : {{parseFloat(data.wind[2]).toFixed(2)}}  </li>
          <li> GPS: {{parseFloat(data.gpsposition[0]).toFixed(2)}} / {{parseFloat(data.gpsposition[1]).toFixed(2)}}  </li>
        </ul>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  name: 'data',
  data () {
    return {
      sonde : "",
      data: {"temperature" : 0 ,
            "humidity" : 0,
            "pressure" : 0,
            "luminosity" : 0,
            "wind_heading" : 0,
            "wind" : 0,
            "gpsposition" : 0,},
    };
  },

  async created(){
    
  },


  methods: {
    
    async updateValues(){
      
 

      let selected_sonde = document.getElementById("sonde").value;
      if (selected_sonde == "localhost"){
        this.sonde = "http://localhost:3000" ; 
      }

      else {
        Object.keys(this.data).forEach(key => {
          this.sonde = '';
          this.data[key] = '';
        });
      }
      try {

        for(let measure in this.data){
          await fetch(this.sonde + "/data/" + measure.toString()).then(a => a.json()).then(a => { 
            
            this.data[measure.toString()]=a[measure.toString()].value;});
        }
      } catch (error) {
        console.log(error);
      }
      setTimeout(this.updateValues, 3000);
    }
  },

  async mounted(){

    this.updateValues();
  }

    
}
</script>

<style lang="scss">
#data {
  list-style-position: inside;
  text-align: center;
  background-color: rgb(214, 239, 245);
}
</style>
