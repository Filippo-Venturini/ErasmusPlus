<template>
  <div>
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>

import {defineComponent} from "vue";
export default defineComponent({
  name: "Histogram",
  props: ["data"],
  data(){
    return{
      options: {
        chart: {
          id: 'vuechart'
        },
        xaxis: {
          categories: ["Servizi offerti", "Aule", "Laboratori", "Spazi aperti"]
        }
      },
      series: [{
        data: this.data
      }]
    }
  }
})
</script>

<style scoped>

</style>