<template>
  <Header></Header>

  <Wallpaper :srcImg="srcImgWallpaper"></Wallpaper>
  <UniversityLogo :srcImg="srcImgUniversityLogo"></UniversityLogo>

  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-9">
      <div class="title">{{this.offerUniversity.name}}</div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-9">
      <div class="place">{{this.offerUniversity.city}}, {{this.offerUniversity.country}}</div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-9">
      <div class="plot">{{this.offerUniversity.plot}}</div>
    </div>
  </div>

  <div class="row" style="margin-top: 200px">
    <div class="col-md-9">
    <InfoPanelSX :title="msgApplicationsAvailable" :msgDescribe="msgDescribeApplicationsAvailable" :icon="iconApplicationsAvailable" :styleIcon="styleCSSIconMessage" :offerUniversity="msgInfoApplicationsAvailable" :key="offerUniversity.id" class="bgRedApplicationsAvailable" ></InfoPanelSX>
    </div>
    <div class="col-md-3">
      <CircleIcon class="circleIconApplicationsAvailable" :icon="iconApplicationsAvailable" :styleIcon="styleCSSIcon"></CircleIcon>
    </div>
  </div>

  <div class="row">
    <div class="col-md-3">
      <CircleIcon class="circleIconExchangePeriod" :icon="iconExchangePeriod" :styleIcon="styleCSSIcon"></CircleIcon>
    </div>
    <div class="col-md-9">
      <InfoPanelDX :title="msgExchangePeriod" :msgDescribe="msgDescribeExchangePeriod" :icon="iconExchangePeriod" :styleIcon="styleCSSIconMessage" :offerUniversity="msgInfoExchangePeriod" :key="offerUniversity.id" class="bgGray"></InfoPanelDX>
    </div>
  </div>

  <div class="row">
    <div class="col-md-9">
      <InfoPanelSX :title="msgFieldOfStudy" :msgDescribe="msgDescribeFieldOfStudy" :icon="iconFieldOfStudy" :styleIcon="styleCSSIconMessage" :offerUniversity="msgInfoFieldOfStudy" :key="offerUniversity.id" class="bgRedFieldOfStudy"></InfoPanelSX>
    </div>
    <div class="col-md-3">
      <CircleIcon class="circleIconFieldOfStudy" :icon="iconFieldOfStudy" :styleIcon="styleCSSIcon"></CircleIcon>
    </div>
  </div>

</template>

<script>
import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
import axios from "axios";
import InfoPanelSX from "../components/offer/InfoPanelSX.vue";
import CircleIcon from "../components/offer/CircleIcon.vue";
import Wallpaper from "../components/offer/Wallpaper.vue";
import UniversityLogo from "../components/offer/UniversityLogo.vue";
import InfoPanelDX from "../components/offer/InfoPanelDX.vue";

export default defineComponent({
  name: "UniversityDetailPage",
  props:['id'],
  components: {InfoPanelDX, UniversityLogo, Wallpaper, CircleIcon, Header, InfoPanelSX},
  data(){
    return{
      offerUniversity: [],
      title: [],
      msgApplicationsAvailable: "Posti disponibili: ",
      msgExchangePeriod: "Periodo di scambio: ",
      msgFieldOfStudy: "Ambito: ",
      msgDescribeApplicationsAvailable: "Questo dato indica i posti disponibili per l’offerta Erasmus. Le candidature verranno valutate dal responsabile di scambio e i risultati saranno disponabili appena le valutazioni saranno concluse.",
      msgDescribeExchangePeriod: "Questo dato indica il tempo massimo dello scambio. A seguito della candidatura è possibile diminuire il tempo di permanenza.",
      msgDescribeFieldOfStudy: "Questo dato indica il persorso di studi consigliato a cui fa riferimento la presente offerta. La coerenza dell'ambito dell'offerta con il proprio persorso di studio verrà valutata dal responsabile di scambio.",
      msgInfoApplicationsAvailable: "",
      msgInfoExchangePeriod: "",
      msgInfoFieldOfStudy: "",
      bgRed: [],
      icon: [],
      styleIcon: [],
      msgDescribe: [],
      offer: [],
      places: [],
      iconApplicationsAvailable : "bi bi-people msg-icon",
      iconExchangePeriod : "bi bi-calendar-week",
      iconFieldOfStudy : "bi bi-diagram-3",
      styleCSSIconMessage: "font-size: 2.5rem; color: #FFFFFF;",
      styleCSSIcon: "font-size: 2.5rem; color: #FFFFFF; background-color: #D9D9D9; border-radius: 50%; width: 100px; height: 100px; text-align: center; padding-top: 20px;",
      srcImgWallpaper: "",
      srcImgUniversityLogo: "",
      id: "",
    }
  },
  methods:{
    getUniversityDetail(id){
      axios.get('http://localhost:3000/universitydetail' + id).then(response =>{
            this.offerUniversity = response.data;
            this.msgInfoApplicationsAvailable = this.offerUniversity.offer.places;
            this.msgInfoExchangePeriod = this.offerUniversity.offer.period;
            this.msgInfoFieldOfStudy = this.offerUniversity.offer.field;
            this.srcImgWallpaper = this.offerUniversity.wallpaper;
            this.srcImgUniversityLogo = this.offerUniversity.logo;
          }
      ).catch(err => {
        console.log(err);
      })

    }
  },
  mounted() {
    //console.log("ID:"+this.$route.params.id);
    this.id = this.$route.params.id;
    this.getUniversityDetail(this.id);
  }
})
</script>

<style scoped>

.title{
  font-weight: bold;
  font-size: 50px;
}

.place{
  font-size: 30px;
}

.plot{
  font-size: 20px;
  margin-top: 100px;
}


.bgRedApplicationsAvailable{
  background-color: #BB2E29;
  color: white;
  height: 250px;

}
.circleIconApplicationsAvailable{
  float: right;

}

.bgGray{
  background-color: #717171;
  float: right;
  color: white;
  height: 250px;

}
.circleIconExchangePeriod{
  float: left;
}

.bgRedFieldOfStudy{
  background-color: #BB2E29;
  color: white;
  height: 250px;
}
.circleIconFieldOfStudy{
  float: right;
}
</style>