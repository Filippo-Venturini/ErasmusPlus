<template>
  <Header></Header>

  <InfoPanel :title="msgApplicationsAvailable" :offer="offer" :key="offer.id" class="bgRedApplicationsAvailable"></InfoPanel>
  <CircleIcon class="circleIconApplicationsAvailable"></CircleIcon>

  <InfoPanel :title="msgExchangePeriod" :offer="offer" :key="offer.id" class="bgGray"></InfoPanel>
  <CircleIcon class="circleIconExchangePeriod"></CircleIcon>

  <InfoPanel :title="msgFieldOfStudy" :offer="offer" :key="offer.id" class="bgRedFieldOfStudy"></InfoPanel>
  <CircleIcon class="circleIconFieldOfStudy"></CircleIcon>

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
      msgApplicationsAvailable: "Posti disponibili: ",
      msgExchangePeriod: "Periodo di scambio: ",
      msgFieldOfStudy: "Ambito: ",
      bgRed: []
      //bgColorRed: "#BB2E29"

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


.bgRedApplicationsAvailable{
  background-color: #BB2E29;
  position: relative;
  top: 100px;
  left: 100px;

}
.circleIconApplicationsAvailable{
  float: right;
  position: relative;
  top: 0px;
  right: 200px;

}

.bgGray{
  background-color: #717171;
  float: right;
  position: relative;
  top: 300px;

}
.circleIconExchangePeriod{
  float: left;
  position: relative;
  top: 330px;
  left: 200px;

}

.bgRedFieldOfStudy{
  background-color: #BB2E29;
  position: relative;
  top: 600px;
  left: 100px;
}
.circleIconFieldOfStudy{
  float: right;
  position: relative;
  top: 500px;
  right: 200px;

}
</style>