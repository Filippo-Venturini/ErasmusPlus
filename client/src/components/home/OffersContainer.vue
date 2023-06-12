<template>
  <FilterMenu @filterClicked="filterClicked" @toMap="this.switchToMap()"></FilterMenu>
  <div class="row mt-4 mb-4">
    <template v-for="university in universities">
      <div class ="col-md-4 mt-5 d-flex justify-content-center" v-if="this.checkUniversity(university)">
        <UniversityCard :university="university" :key="university.id"></UniversityCard>
      </div>
    </template>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import UniversityCard from "@/components/home/UniversityCard.vue";
import FilterMenu from "@/components/home/FilterMenu.vue";
import axios from "axios";

export default defineComponent({
  name: "OffersContainer",
  components: {UniversityCard, FilterMenu},
  emits: ["toMap"],
  props: ['universities'],
  data(){
    return{
      studyFilter: false,
      halfFilter: false,
      fullFilter: false,
      loggedUser: null
    }
  },
  methods:{
    switchToMap(){
      this.$emit('toMap', true);
    },
    getLoggedUser(){
      axios.get('http://localhost:3000/userdetail'+ sessionStorage.getItem("mail")).then(response =>{
        console.log(response.data);
        this.loggedUser = response.data;
      }).catch(err => {
        console.log(err);
      })
    },
    filterClicked(filter){
      if(filter === "half") {
        this.halfFilter = true;
        this.fullFilter = false;
      } else if(filter === "full"){
        this.fullFilter = true;
        this.halfFilter = false;
      }else if(filter === "study"){
        this.studyFilter = true;
      }
    },
    checkUniversity(university){
      if(this.halfFilter && university.offer.period !== "6"){
        return false;
      }
      if(this.fullFilter && university.offer.period !== "12"){
        return false;
      }
      console.log(university.offer.field)
      if(this.studyFilter && this.loggedUser.course !== university.offer.field){
        return false;
      }
      return true;
    }
  },
  mounted() {
    this.getLoggedUser();
  }
})
</script>

<style scoped>
</style>