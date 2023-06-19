<template>
  <img :src="getImageUrl()" class="rounded-circle circleIcon mx-auto d-block h" alt="...">
  <h1 class="text-center">{{ user.name }}  {{user.surname}}</h1>
  <h3 class="text-center">{{ user.identificationNumber}}</h3>
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
  height: 250px;
  margin: 30px;
}
</style>