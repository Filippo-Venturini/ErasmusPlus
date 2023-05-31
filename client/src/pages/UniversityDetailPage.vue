<template>
  <Header></Header>
<!--<infopanel :title="Posti diposnibili x">
    <infopanel :title="Ambito di studi x">
    -->
  <InfoPanel :offer="offer" :key="offer.id"></InfoPanel>

  <CircleIcon></CircleIcon>
</template>

<script>
import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
import axios from "axios";
import InfoPanel from "../components/offer/InfoPanel.vue";
import CircleIcon from "../components/offer/CircleIcon.vue";

export default defineComponent({
  name: "UniversityDetailPage",
  components: {CircleIcon, Header, InfoPanel},
  data(){
    return{
      offer: []
    }
  },
  methods:{
    getUniversityDetail(){
      axios.get('http://localhost:3000/universitydetail').then(response =>{
            console.log(response.data);
            this.offer = response.data;
          }
      ).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.getUniversityDetail();
  }
})
</script>

<style scoped>

</style>