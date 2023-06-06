<template>
<FilterMenu @filterClicked="filterClicked"></FilterMenu>
  <GoogleMap api-key="AIzaSyBUPW3FVdvim2r6KkMIvIYCouiBb1dPkvI" class="map" :center="center" :zoom="5">
    <template v-for="university in this.universities">
      <CustomMarker :options="{ position: {lat: university.latitude, lng: university.longitude}, anchorPoint: 'BOTTOM_CENTER' }">
        <div style="text-align: center">
          <img src="src/assets/img/universityLogos/upc.png" width="50" height="50" style="margin-top: 8px" />
        </div>
      </CustomMarker>
    </template>
  </GoogleMap>
  <button type="button" class="btn btn-secondary show-map" @click="switchToList()">Mostra elenco</button>
</template>

<script>
import {defineComponent} from "vue";
import FilterMenu from "@/components/home/FilterMenu.vue";
import {GoogleMap, Marker, CustomMarker} from "vue3-google-map";
import UniversityCard from "@/components/home/UniversityCard.vue";
export default defineComponent({
  name: "MapContainer",
  components: {UniversityCard, FilterMenu, GoogleMap, Marker, CustomMarker},
  props: ["universities"],
  emits: ["toList"],
  setup() {
    const center = { lat: 41.3850639, lng: 2.1734035};

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
.map{
  width: 100%;
  height: 800px;
}
.show-map{
  position: fixed;
  margin-top: 35%;
  margin-left: 45%;
  width: 200px;
}
</style>