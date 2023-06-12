<template>
  <RouterLink class="nav-link" :to="{path: '/universitydetail/'+this.university._id}">
    <div class="card" style="width: 23rem; height: 23rem;">
      <img class="card-img-top img h-50" :src="getImageUrl()" alt="University Image">
      <div class="card-body">
        <h5 class="card-title" style="font-weight: bold;">{{ university.name }}</h5>
        <p class="card-text" style="font-weight: lighter">{{university.city}}, {{university.country}}</p>
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
      routeName: "UniversityDetailPage"
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
.img{
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
}
.card{
  border-radius: 2em;
  box-shadow: 0 5px 10px rgba(0,0,0,.2);
}
.card:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
</style>