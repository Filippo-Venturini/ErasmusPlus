<template>
  <div id="chart" class="row chart">
    <div class="row">
      <h4>{{this.title}}</h4>
    </div>
    <div class="row">
      <apexchart type="bar" height="287" :width="this.width" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name: "BarChart",
  props: ['data', 'title', 'width'],
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
        },
        colors: ['#BEA6A1']
      },
    }
  }
});
</script>

<style scoped>
.chart{
  box-shadow: 0 5px 10px rgba(0,0,0,.2);
}
</style>