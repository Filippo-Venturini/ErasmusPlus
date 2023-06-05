<template>
  <Header></Header>

  <InfoPanel :title="msgApplicationsAvailable" :msgDescribe="msgDescribeApplicationsAvailable" :icon="iconApplicationsAvailable" :styleIcon="styleCSSIconMessage" :offer="offer" :key="offer.id" class="bgRedApplicationsAvailable" ></InfoPanel>
  <CircleIcon class="circleIconApplicationsAvailable" :icon="iconApplicationsAvailable" :styleIcon="styleCSSIcon"></CircleIcon>

  <InfoPanel :title="msgExchangePeriod" :msgDescribe="msgDescribeExchangePeriod" :icon="iconExchangePeriod" :styleIcon="styleCSSIconMessage" :offer="offer" :key="offer.id" class="bgGray"></InfoPanel>
  <CircleIcon class="circleIconExchangePeriod" :icon="iconExchangePeriod" :styleIcon="styleCSSIcon"></CircleIcon>

  <InfoPanel :title="msgFieldOfStudy" :msgDescribe="msgDescribeFieldOfStudy" :icon="iconFieldOfStudy" :styleIcon="styleCSSIconMessage" :offer="offer" :key="offer.id" class="bgRedFieldOfStudy"></InfoPanel>
  <CircleIcon class="circleIconFieldOfStudy" :icon="iconFieldOfStudy" :styleIcon="styleCSSIcon"></CircleIcon>

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
      msgDescribeApplicationsAvailable: "Questo dato indica i posti disponibili per l’offerta Erasmus. Le candidature verranno valutate dal responsabile di scambio e i risultati saranno disponabili appena le valutazioni saranno concluse.",
      msgDescribeExchangePeriod: "Questo dato indica i posti disponibili per l’offerta Erasmus. Le candidature verranno valutate dal responsabile di scambio e i risultati saranno disponabili appena le valutazioni saranno concluse.",
      msgDescribeFieldOfStudy: "Questo dato indica il persorso di studi consigliato a cui fa riferimento la presente offerta. La coerenza dell'ambito dell'offerta con il proprio persorso di studio verrà valutata dal responsabile di scambio.",
      bgRed: [],
      icon: [],
      styleIcon: [],
      msgDescribe: [],
      iconApplicationsAvailable : "bi bi-people msg-icon",
      iconExchangePeriod : "bi bi-calendar-week",
      iconFieldOfStudy : "bi bi-diagram-3",
      styleCSSIconMessage: "font-size: 2.5rem; color: #FFFFFF;",
      styleCSSIcon: "font-size: 2.5rem; color: #FFFFFF; background-color: #D9D9D9; border-radius: 50%; width: 100px; height: 100px; text-align: center; padding-top: 20px;",

    }
  },
  methods:{
    getUniversityDetail(id){
      axios.get('http://localhost:3000/universitydetail' + "647d9bbd9eb3ed3888a12f39").then(response =>{
            this.offer = response.data;
          }
      ).catch(err => {
        console.log(err);
      })

    }
  },
  mounted() {
    this.getUniversityDetail(this.id);
  }
})
</script>

<style scoped>


.bgRedApplicationsAvailable{
  background-color: #BB2E29;
  position: relative;
  top: 100px;
  color: white;

}
.circleIconApplicationsAvailable{
  float: right;
  position: absolute;
  top: 300px;
  right: 100px;

}

.bgGray{
  background-color: #717171;
  float: right;
  position: relative;
  top: 300px;
  color: white;

}
.circleIconExchangePeriod{
  float: left;
  position: absolute;
  top: 650px;
  left: 100px;

}

.bgRedFieldOfStudy{
  background-color: #BB2E29;
  position: relative;
  top: 600px;
  color: white;
}
.circleIconFieldOfStudy{
  float: right;
  position: absolute;
  top: 1000px;
  right: 100px;


}
</style>