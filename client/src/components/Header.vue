<template>
  <header class="erasmus-header">
    <RouterLink class="nav-link" :to="{path: '/'}" style="width: 300px">
      <img class="header-logo" src="../assets/img/logoErasmusPlus.png">
    </RouterLink>
  </header>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Header"
});
</script>

<style scoped>
.erasmus-header{
  background-color: #BB2E29;
  height: 120px;
}

.header-logo{
  height: 120px;
}
</style>