<template>
  <FilterMenu @filterClicked="filterClicked" @toMap="this.switchToMap()"></FilterMenu>
  <div class="row mt-4">
    <template v-for="university in universities">
      {{this.checkUniversity(university)}}
      <div class ="col-md-4 mt-5 d-flex justify-content-center" v-if="universityIsOk">
        <UniversityCard :university="university" :key="university.id"></UniversityCard>
      </div>
    </template>
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
</style>