<template>
 <div id="history">
    <h1>History :
    </h1>
    <p>Data:
    <select v-model="selected" @change="getHistory">
      <option disabled value="">Choisissez</option>
      <option >temperature</option>
      <option >humidity</option>
      <option >pressure</option>
      <option >luminosity</option>
      <option >wind_heading</option>
      <option >wind</option>
    </select>


    Period:
      <select v-model='time_period' @change="getHistory">
        <option :value="60000">1 minute</option>
        <option :value="3600000">1 hour</option>
        <option :value="86400000">1 day</option>
        <option :value="604800000">1 week</option>
        <option :value="2592000000">1 month</option>
        <option :value="31557600000">1 year</option>
      </select>
    </p>
    <line-chart :datesarray="dates_array" :property="selected" :propertyarray="property_array"></line-chart>
  </div>
</template>

<script>
import LineChart from '@/views/Line'
export default {
  components: {
    LineChart
  },
  data () {
    return {
      selected:'temperature',
      time_period: 86400000,
      dates_array: [],
      property_array: [],
      
    }
  },
  methods: {

    getHistory: function(){

      let stop = new Date(Date.now());
      let start = new Date(stop.getTime() - this.time_period);

      this.loading = true;

      // Fetching the history from the API
      fetch('http://' + "localhost" + ':3000/data/'+ this.selected.toString()+ '/'+ start.toISOString() + ',' + stop.toISOString()).then(result=>{
        return result.json();
      }).then(result=>{
 
        let measurements_array = result;
        

        this.dates_array = measurements_array.map(measure=>measure[this.selected].date).reverse();
        this.property_array = measurements_array.map(measure=>measure[this.selected].value[0]).reverse();
        console.log(this.property_array);

        for(let i = 0; i < this.dates_array.length; i++){
          let date = new Date(this.dates_array[i]);
          let finalString = "";
          finalString += date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
          finalString += " ";
          finalString += date.getHours();
          finalString += ":";
          finalString += date.getMinutes();
          this.dates_array[i] = finalString;
        }

      }).catch(()=>{
        
        this.dates_array = [];
        this.property_array = [];
        
      });
    }
  },

  mounted: function() {
    
    this.getHistory();
  }


}
</script>