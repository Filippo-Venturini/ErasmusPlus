<template>
  <img class="rounded-circle circleIcon mx-auto d-block h" src="../../assets/img/profileImages/profilo1.jpg" alt="...">
  <h1 class="text-center">Leonardo Di Caprio</h1>
  <h2 class="text-center">Studente</h2>
  <!--
  <img :src="getImageUrl()" class="rounded-circle circleIcon mx-auto d-block h" alt="...">
  <h1 class="text-center">{{ user.name }}</h1>
  <h2 class="text-center">{{ user.role }}</h2>
  -->
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "ProfileBadge",
  props:['user'],
  methods:{
    getImageUrl(){
      return new URL(`${this.user.profileImg}`, import.meta.url)
    }
  }
})
</script>

<style scoped>
img {
  height: 300px;
  margin: 30px;
}
</style>