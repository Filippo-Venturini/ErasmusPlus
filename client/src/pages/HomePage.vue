<template>
  <Header></Header>
  <OffersContainer :universities="universities" :key="universities.id"></OffersContainer>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import {defineComponent} from "vue";
import OffersContainer from "@/components/OffersContainer.vue";

export default defineComponent({
  name: "HomePage",
  components: {OffersContainer, Header},
  data(){
    return{
      universities: []
    }
  },
  methods:{
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
    console.log("MOUNTED");
    this.getAllUniversities();
  }
})
</script>

<style scoped>

</style>