<template>
  <div class="card" style="width: 20rem;">
    <img class="card-img-top h-50" :src="getImageUrl()" alt="University Image">
    <div class="card-body">
      <h5 class="card-title">{{ university.name }}</h5>
      <p class="card-text">{{university.city}}, {{university.country}}</p>
      <a href="#" class="stretched-link"></a>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "UniversityCard",
  props: ['university'],
  methods:{
    getImageUrl(){
      return new URL(`${this.university.cardImg}`, import.meta.url)
    }
  }
})
</script>

<style scoped>

</style>