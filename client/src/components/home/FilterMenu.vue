<template>
<div class="filter-menu row">
  <div class="col-1 d-flex justify-content-center align-items-center">
    <i class="bi bi-globe filter-icon"></i>
  </div>
  <div class="col-1 d-flex justify-content-center align-items-center">
    <i class="bi bi-geo-alt filter-icon"></i>
  </div>
  <div class="col-1 d-flex justify-content-center align-items-center">
    <i class="bi bi-bookmark-star filter-icon"></i>
  </div>
  <div class="col-1 d-flex justify-content-center align-items-center">
    <i class="bi bi-book filter-icon"></i>
  </div>
  <div class="col-1 d-flex justify-content-center align-items-center">
    <i class="bi bi-circle-half filter-icon"></i>
  </div>
  <div class="col-1 d-flex justify-content-center align-items-center">
    <i class="bi bi-circle-fill filter-icon"></i>
  </div>
</div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "FilterMenu"
});
</script>

<style scoped>
.filter-menu{
  height: 65px;
  background-color: #ffffff;
  box-shadow: 0 4px 2px -2px gray;
}

.filter-icon{
  font-size: 1.5rem;
  color: #717171;
}
</style>