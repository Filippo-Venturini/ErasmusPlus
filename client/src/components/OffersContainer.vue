<template>
  <div class="row mt-4">
    <div class ="col-3 mt-5 d-flex justify-content-center" v-for="university in universities">
      <UniversityCard :university="university" :key="university.id"></UniversityCard>
    </div>
    <button type="button" class="btn btn-secondary show-map" @click="switchToMap()">Mostra mappa</button>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import UniversityCard from "@/components/UniversityCard.vue";

export default defineComponent({
  name: "OffersContainer",
  components: {UniversityCard},
  props: ['universities'],
  methods:{
    switchToMap(){
      this.$emit('toMap', true);
    }
  }
})
</script>

<style scoped>
.show-map{
  position: fixed;
  top: 600px;
  left: 550px;
  width: 200px;
}
</style>