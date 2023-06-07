<template>
  <img class="wallpaper-css" :src="getImageUrl()">
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Wallpaper",
  props: ['srcImg'],
  methods:{
    getImageUrl(){
      return new URL(`${this.srcImg}`, import.meta.url)
    }

  }
})
</script>

<style scoped>
.wallpaper-css{
  width: 100%;
  height: 450px;
  object-fit: cover;
}

</style>