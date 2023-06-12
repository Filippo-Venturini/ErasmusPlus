<template>
  <div id="chart" class="row chart">
    <div class="row">
      <h4>{{ this.title }}</h4>
    </div>
    <div class="row pb-3">
      <apexchart type="pie" :width="this.width" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name: "PieChart",
  props: ['series', 'title', 'width'],
  data() {
    return {
      chartOptions: {
        chart: {
          width: 380,
          height: 500,
          type: 'pie'
        },
        labels: ['Non soddisfatti', 'Mediamente soddisfatti', 'Soddisfatti', 'Molto soddisfatti'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
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