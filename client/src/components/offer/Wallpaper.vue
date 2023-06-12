<template>
  <div class="d-flex justify-content-center">
    <img class="wallpaper-css mt-5 ms-3 me-3" :src="getImageUrl()">
  </div>
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
  border-radius: 2em;
  box-shadow: 0 5px 10px rgba(0,0,0,.2);
}

</style>