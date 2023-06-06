<template>
<FilterMenu @filterClicked="filterClicked"></FilterMenu>
<h1>MAPPA!</h1>
  <GoogleMapLoader
      :mapConfig="mapConfig"
      apiKey="AIzaSyBUPW3FVdvim2r6KkMIvIYCouiBb1dPkvI"
      @google="onGoogle"
      @map="onMap"
  >
    <template>
      <GoogleMapMarker
          v-for="marker in markers"
          :key="marker.id"
          :marker="marker"
          :google="this.google"
          :map="this.map"
      />
    </template>
  </GoogleMapLoader>

  <button type="button" class="btn btn-secondary show-map" @click="switchToList()">Mostra elenco</button>
</template>

<script>
import {defineComponent} from "vue";
import {mapSettings} from "@/components/home/constants/mapSettings";
import FilterMenu from "@/components/home/FilterMenu.vue";
import GoogleMapLoader from "@/components/home/GoogleMapLoader.vue";
import GoogleMapMarker from "@/components/home/GoogleMapMarker.vue";
export default defineComponent({
  name: "MapContainer",
  components: {GoogleMapMarker, GoogleMapLoader, FilterMenu},
  emits: ["toList"],
  data() {
    return {
      google: null,
      map: null,
      markers: [
        {
          id: "a",
          position: {lat: 3, lng: 101}
        },
        {
          id: "b",
          position: {lat: 5, lng: 99}
        },
        {
          id: "c",
          position: {lat: 6, lng: 97}
        }
      ]
    }
  },
  computed: {
    mapConfig () {
      return {
        ...mapSettings,
        center: { lat: 0, lng: 0 }
      }
    }
  },
  methods:{
    switchToList(){
      this.$emit('toList', false);
    },
    filterClicked(filter){

    },
    onGoogle(value){
      this.google = value;
      console.log(this.google);
    },
    onMap(value){
      this.map = value;
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