<template>
  <RouterLink class="nav-link" :to="{path: '/universitydetail/'+this.university._id}">
    <div class="card" style="width: 23rem; height: 23rem;">
      <img class="card-img-top img h-50" :src="getImageUrl(this.university.cardImg)" alt="University Image">
      <div class="card-body">
        <h5 class="card-title" style="font-weight: bold;">{{ university.name }}</h5>
        <p class="card-text" style="font-weight: lighter">{{university.city}}, {{university.country}}</p>
        <div class="row pt-3">
          <div class="col-4 ms-2">
            <img class="logo" :src="getImageUrl(this.university.logo)">
          </div>
          <div class="col-2"></div>
          <div class="class col-5 d-flex align-items-center justify-content-end pt-3">
            <p style="font-weight: lighter">{{university.offer.period}} mesi</p>
          </div>
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
    getImageUrl(url){
      return new URL(`${url}`, import.meta.url)
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

.logo{
  width: 45px;
  height: 45px;
  box-shadow: 0 5px 10px rgba(0,0,0,.2);
  border-radius: 2em;

}
</style>