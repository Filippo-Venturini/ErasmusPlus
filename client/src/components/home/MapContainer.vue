<template>
<FilterMenu @filterClicked="filterClicked" @toList="this.switchToList"></FilterMenu>
  <GoogleMap api-key="AIzaSyBUPW3FVdvim2r6KkMIvIYCouiBb1dPkvI" class="map" :center="center" :zoom="5">
    <template v-for="university in this.universities">
      {{this.checkUniversity(university)}}
      <CustomMarker v-if="universityIsOk" :options="{ position: {lat: university.latitude, lng: university.longitude}, anchorPoint: 'BOTTOM_CENTER' }">
        <RouterLink class="nav-link" :to="{path: '/universitydetail/'+university._id}">
          <div style="text-align: center">
            <!--<img :src="getImageUrl(university.logo)" width="50" height="50" /> -->
            <img :src="getImageUrl(university.cardImg)" width="70" height="70" style="border-radius: 10%; margin-bottom: 20px; object-fit: cover;" />
          </div>
        </RouterLink>
      </CustomMarker>
    </template>
  </GoogleMap>
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
  data(){
    return{
      universityIsOk: true,
      halfFilter: false,
      fullFilter: false
    }
  },
  setup() {
    const center = { lat: 45.3850639, lng: 12.1734035};

    return { center };
  },
  methods:{
    switchToList(){
      this.$emit('toList', false);
    },
    filterClicked(filter){
      if(filter === "half") {
        this.halfFilter = true;
        this.fullFilter = false;
      } else if(filter === "full"){
        this.fullFilter = true;
        this.halfFilter = false;
      }
    },
    checkUniversity(university){
      this.universityIsOk = true;
      if(this.halfFilter && university.offer.period !== "6"){
        this.universityIsOk = false;
        return;
      }
      if(this.fullFilter && university.offer.period !== "12"){
        this.universityIsOk = false;
        return;
      }
    },
    getImageUrl(srcImg){
      return new URL(`${srcImg}`, import.meta.url)
    }
  }
});
</script>

<style scoped>
.map{
  width: 100%;
  height: 800px;
}
</style>