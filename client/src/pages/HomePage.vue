<template>
  <div style="overflow-x: hidden">
    <Header></Header>
    <FilterMenu></FilterMenu>
    <MapContainer v-if="toMap" @toList="switchView"></MapContainer>
    <OffersContainer v-if="!toMap" @toMap="switchView" :universities="universities" :key="universities.id"></OffersContainer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import {defineComponent} from "vue";
import OffersContainer from "@/components/home/OffersContainer.vue";
import FilterMenu from "@/components/home/FilterMenu.vue";
import MapContainer from "@/components/home/MapContainer.vue";

export default defineComponent({
  name: "HomePage",
  components: {MapContainer, FilterMenu, OffersContainer, Header},
  data(){
    return{
      toMap: false,
      universities: []
    }
  },
  methods:{
    switchView(value){
      this.toMap = value;
    },
    getAllUniversities(){
      axios.get('http://localhost:3000/universities').then(response =>{
        console.log(response.data);
        this.universities = response.data;
      }
      ).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.getAllUniversities();
  }
})
</script>

<style scoped>

</style>