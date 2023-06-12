<template>
  <img class="logo-css" :src="getImageUrl()">
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "UniversityLogo",
  props: ['srcImg'],
  methods:{
    getImageUrl(){
      return new URL(`${this.srcImg}`, import.meta.url)
    }

  }
})
</script>

<style scoped>
.logo-css{
  width: 200px;
  height: 200px;
  box-shadow: 0 5px 10px rgba(0,0,0,.2);
}
</style>