<template>
  <div id="chart">
    <apexchart type="pie" width="500" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name: "PieChart",
  props: ['series'],
  data() {
    return {
      chartOptions: {
        chart: {
          width: 380,
          type: 'pie',
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

</style>