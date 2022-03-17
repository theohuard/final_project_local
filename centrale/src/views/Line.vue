<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,

  props: ['datesarray','property','propertyarray'],
  methods: {

    render: function() {
      let dataset = {
        label: this.property,
        backgroundColor: 'lightblue',
        borderColor: 'rgba(0,0,0,0)',
        data: this.propertyarray,
        lineTension: 0
      }
         
      let options = {
        labels: this.datesarray,
        datasets: [dataset], 
        options: {
          
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
              }
        }
            

          this.renderChart(options, {responsive: true, maintainAspectRatio: false})
    }
  },
    watch: {
      'property': {
        handler: function () {
          this.render();
        },
        deep: true
      },
      'datesarray': {
        handler: function () {
          this.render();
        },
        deep: true
      },
      'propertyarray': {
        handler: function () {
          this.render();
        },
        deep: true
      },
    },
    mounted: function() {
      this.render();
    }
}
</script>
