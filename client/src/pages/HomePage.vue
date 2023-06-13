<template>
  <div style="overflow-x: hidden">
    <Header></Header>
    <MapContainer v-if="toMap" @toList="switchView" :universities="universities" :key="universities.id"></MapContainer>
    <OffersContainer v-if="!toMap" @toMap="switchView" :universities="universities" :key="universities.id"></OffersContainer>
  </div>
  <button v-if="toMap" @click="switchView(false)" style="background: #495057; color: #FFFFFF; height: 50px; width:180px; position: fixed; top: 88%; left: 47%; border-radius: 30px; font-size: 1.2rem;">Elenco <i class="bi bi-list" style="font-size: 1.5rem; margin-left: 20px"></i></button>
  <button v-if="!toMap" @click="switchView(true)" style="background: #495057; color: #FFFFFF; height: 50px; width:180px; position: fixed; top: 88%; left: 47%; border-radius: 30px; font-size: 1.2rem">Mappa <i class="bi bi-map-fill" style="font-size: 1.5rem; margin-left: 20px"></i></button>

</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import {defineComponent} from "vue";
import OffersContainer from "@/components/home/OffersContainer.vue";
import MapContainer from "@/components/home/MapContainer.vue";

export default defineComponent({
  name: "HomePage",
  components: {MapContainer, OffersContainer, Header},
  data(){
    return{
      toMap: true,
      universities: []
    }
  },
  methods:{
    switchView(value){
      this.toMap = value;
    },
    getAllUniversities(){
      axios.get('http://localhost:3000/universities').then(response =>{
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