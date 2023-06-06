<template>
<FilterMenu @filterClicked="filterClicked"></FilterMenu>
  <GoogleMap api-key="AIzaSyBUPW3FVdvim2r6KkMIvIYCouiBb1dPkvI" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>
  <button type="button" class="btn btn-secondary show-map" @click="switchToList()">Mostra elenco</button>
</template>

<script>
import {defineComponent} from "vue";
import FilterMenu from "@/components/home/FilterMenu.vue";
import {GoogleMap, Marker} from "vue3-google-map";
export default defineComponent({
  name: "MapContainer",
  components: {FilterMenu, GoogleMap, Marker},
  emits: ["toList"],
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };

    return { center };
  },
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
  position: fixed;
  margin-top: 35%;
  margin-left: 45%;
  width: 200px;
}
</style>