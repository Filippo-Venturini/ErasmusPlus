<template>
  <div id="chart">
    <apexchart type="bar" height="350" width="700" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name: "BarChart",
  props: ['data'],
  data(){
    return{
      series: [{
        data: this.data
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Clima', 'Costo della vita', 'Svago', 'Mezzi pubblici'
          ],
        },
        yaxis: {
          max:5
        }
      },
    }
  }
});
</script>

<style scoped>

</style>