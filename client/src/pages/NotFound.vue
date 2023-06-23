<template>
  <div class="d-flex justify-content-center">
    <img class="not-found-img" src="src/assets/img/notFound.png">
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent ({
  name: "NotFound"
});
</script>

<style scoped>
.not-found-img{
  width: 50%;
  height: 50%;
}
</style>