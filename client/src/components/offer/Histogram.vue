<template>
  <div class="chart row">
    <div class="row">
      <h4>{{ this.title }}</h4>
    </div>
    <div class="row d-flex justify-content-center">
      <apexchart :width="this.width" height="287" type="bar" :options="options" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
export default defineComponent({
  name: "Histogram",
  props: ["data", "color", "title", "width"],
  data(){
    return{
      options: {
        chart: {
          id: 'vuechart'
        },
        xaxis: {
          categories: ["Servizi offerti", "Aule", "Laboratori", "Spazi aperti"]
        },
        yaxis: {
          max: 5
        },
        colors: [this.color]
      },
      series: [{
        data: this.data
      }],
    }
  }
})
</script>

<style scoped>
.chart{
  box-shadow: 0 5px 10px rgba(0,0,0,.2);
}
</style>