<template>
  <FilterMenu @filterClicked="filterClicked"></FilterMenu>
  <div class="row mt-4">
    <template v-for="university in universities">
      {{this.checkUniversity(university)}}
      <div class ="col-3 mt-5 d-flex justify-content-center" v-if="universityIsOk">
        <UniversityCard :university="university" :key="university.id"></UniversityCard>
      </div>
    </template>
    <button type="button" class="btn btn-secondary show-map" @click="switchToMap()">Mostra mappa</button>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import UniversityCard from "@/components/home/UniversityCard.vue";
import FilterMenu from "@/components/home/FilterMenu.vue";

export default defineComponent({
  name: "OffersContainer",
  components: {UniversityCard, FilterMenu},
  emits: ["toMap"],
  props: ['universities'],
  data(){
    return{
      universityIsOk: true,
      halfFilter: false,
      fullFilter: false
    }
  },
  methods:{
    switchToMap(){
      this.$emit('toMap', true);
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
    }
  }
})
</script>

<style scoped>
.show-map{
  position: fixed;
  margin-top: 15%;
  margin-left: 45%;
  width: 200px;
}
</style>