<template>
  <div id="app">
    <div id="nav">
      Choix de la sonde :
      <select id="sonde" name="sonde" @change="onchange()" v-model="key" autocomplete="off" >
        <option value="localhost" >sonde:fakesonde</option>
        <option value="1">sonde1</option>
        <option value="2">sonde2</option>
      </select>
      <br><br><br>
      <router-link to="/">Data</router-link> |
      <router-link to="/Dashboard">Dashboard</router-link> |
      <router-link to="/leaflet">Map</router-link> |
      
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <router-view />
        </div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  
  created(){
    this.key = "localhost";
  },
  methods: {
    onchange() {
      
      console.log(document.getElementById("sonde") );

      alert("Vous avez choisi la sonde numero " +this.key);
      
    }
  },
}

</script>
import { LPopup } from 'vue-leaflet'

<style lang="scss">
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px 30px 60px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>