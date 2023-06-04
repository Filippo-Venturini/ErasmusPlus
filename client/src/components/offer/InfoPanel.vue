<template>
  <div class="w-50 p-3 mt-4 infoPanel" style="background-color:{{bg}}">
    <div class="row">
      <img class="col-md-1 stylizedIcon" src="../../assets/img/icon/peopleOutline.png">
      <div class="col-md-4 panel-heading">{{title}} {{offer.city}}</div>
      </div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-11 panel-body">Questo dato indica i posti disponibili per l’offerta Erasmus. Le candidature verranno valutate dal responsabile di scambio e i risultati saranno disponabili appena le valutazioni saranno concluse.</div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "InfoPanel",
  props: ['offer','title', 'bg'],
  methods:{
  }
})
</script>

<style scoped>



</style>