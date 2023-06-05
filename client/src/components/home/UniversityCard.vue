<template>
  <RouterLink class="nav-link" :to="{name: this.routeName, props: {universityId}}">
    <div class="card" style="width: 20rem; height: 20rem;">
      <img class="card-img-top h-50" :src="getImageUrl()" alt="University Image">
      <div class="card-body">
        <h5 class="card-title">{{ university.name }}</h5>
        <p class="card-text">{{university.city}}, {{university.country}}</p>
        <div class="d-flex justify-content-end">
          <p>{{university.offer.period}} mesi</p>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "UniversityCard",
  props: ['university'],
  data(){
    return{
      routeName: "UniversityDetailPage",
      universityId: this.university.id
    }
  },
  methods:{
    getImageUrl(){
      return new URL(`${this.university.cardImg}`, import.meta.url)
    }
  }
})
</script>

<style scoped>

</style>