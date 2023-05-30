<template>
  <header class="header">
    <img class="logo" src="src/assets/img/logoErasmusPlus.png">
  </header>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Header"
});
</script>

<style scoped>
.header{
  background-color: #BB2E29;
  height: 120px;
}

.logo{
  height: 120px;
}
</style>