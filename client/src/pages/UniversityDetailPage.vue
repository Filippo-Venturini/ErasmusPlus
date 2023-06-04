<template>
  <Header></Header>

  <InfoPanel :title="msgApplicationsAvailable" :offer="offer" :bg="bgColorRed" :key="offer.id"></InfoPanel>

  <InfoPanel :title="msgExchangePeriod" :offer="offer" :bg="bgColorRed" :key="offer.id"></InfoPanel>

  <InfoPanel :title="msgFieldOfStudy" :offer="offer" :bg="bgColorRed" :key="offer.id"></InfoPanel>

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
  props:['id'],
  components: {CircleIcon, Header, InfoPanel},
  data(){
    return{
      offer: [],
      title: [],
      bg: [],
      msgApplicationsAvailable: "Posti disponibili: ",
      msgExchangePeriod: "Periodo di scambio: ",
      msgFieldOfStudy: "Ambito: ",
      bgColorRed: "#BB2E29"

    }
  },
  methods:{
    getUniversityDetail(id){
      axios.get('http://localhost:3000/universitydetail' + "647c4c327963c32456aa4b34").then(response =>{
            //console.log(this.msgAvailable);
            this.offer = response.data;
          }
      ).catch(err => {
        console.log(err);
      })

    }
  },
  mounted() {
    //console.log("mounted");
    this.getUniversityDetail(this.id);
  }
})
</script>

<style scoped>

</style>