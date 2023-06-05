<template>
<FilterMenu @filterClicked="filterClicked"></FilterMenu>
<h1>MAPPA!</h1>
  <button type="button" class="btn btn-secondary show-map" @click="switchToList()">Mostra elenco</button>
</template>

<script>
import {defineComponent} from "vue";
import FilterMenu from "@/components/home/FilterMenu.vue";
export default defineComponent({
  name: "MapContainer",
  components: {FilterMenu},
  emits: ["toList"],
  methods:{
    switchToList(){
      this.$emit('toList', false);
    },
    filterClicked(filter){

    }
  }
});
</script>

<style scoped>
.show-map{
  top: 850px;
  top: 600px;
  left: 550px;
  position: fixed;
}
</style>