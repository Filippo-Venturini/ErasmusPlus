<template>
  <div class="row">
    <div class="col">
      <UniversityCard v-for="university in universities" :university="university" :key="university.id"></UniversityCard>
    </div>
  </div>

  <!--
  <div class="row d-flex mt-4 justify-content-center">
    <div class="col-md-4 d-flex justify-content-center">
      <UniversityCard></UniversityCard>
    </div>
    <div class="col-md-4 d-flex justify-content-center">
      <UniversityCard></UniversityCard>
    </div>
    <div class="col-md-4 d-flex justify-content-center">
      <UniversityCard></UniversityCard>
    </div>
  </div>

  <div class="row d-flex mt-4 justify-content-center">
    <div class="col-md-4 d-flex justify-content-center">
      <UniversityCard></UniversityCard>
    </div>
    <div class="col-md-4 d-flex justify-content-center">
      <UniversityCard></UniversityCard>
    </div>
    <div class="col-md-4 d-flex justify-content-center">
      <UniversityCard></UniversityCard>
    </div>
  </div>

  <div class="row d-flex mt-4 justify-content-center">
    <div class="col-md-4 d-flex justify-content-center">
      <UniversityCard></UniversityCard>
    </div>
    <div class="col-md-4 d-flex justify-content-center">
      <UniversityCard></UniversityCard>
    </div>
    <div class="col-md-4 d-flex justify-content-center">
      <UniversityCard></UniversityCard>
    </div>
  </div>-->
</template>
<script>
import {defineComponent} from "vue";
import UniversityCard from "@/components/UniversityCard.vue";

export default defineComponent({
  name: "OffersContainer",
  components: {UniversityCard},
  props: ['universities']
})
</script>

<style scoped>

</style>