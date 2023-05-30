<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "ProfileBadge",
  props:['user']
})
</script>

<template>
  <img src="../assets/img/universityLogos/kth.png" class="rounded mx-auto d-block h" alt="...">
  <h1 class="text-center">{{ user.name }}</h1>
  <h2 class="text-center">{{ user.role }}</h2>
</template>

<style scoped>
img {
  height: 300px;
  margin: 30px;
}
</style>