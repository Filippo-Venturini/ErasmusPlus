<template>
<div class="filter-menu row">
  <div class="col-1 d-flex justify-content-center align-items-center">
    <i class="bi bi-bookmark-star filter-icon"></i>
  </div>
  <div class="col-1 d-flex justify-content-center align-items-center">
    <i class="bi bi-book filter-icon"></i>
  </div>
  <div class="col-1 d-flex justify-content-center align-items-center">
    <i class="bi bi-circle-half filter-icon" @click="this.onHalfClicked()"></i>
  </div>
  <div class="col-1 d-flex justify-content-center align-items-center">
    <i class="bi bi-circle-fill filter-icon" @click="this.onFullClicked()"></i>
  </div>
  <div class="col-6">

  </div>
  <div class="col-1 d-flex justify-content-end align-items-center">
    <i class="bi bi-globe filter-icon" @click="this.switchToMap()"></i>
  </div>
  <div class="col-1 d-flex justify-content-start align-items-center">
    <i class="bi bi-card-list filter-icon" @click="this.switchToList()"></i>
  </div>
</div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "FilterMenu",
  emits: ["toMap", "toList"],
  methods:{
    switchToMap(){
      this.$emit('toMap', true);
    },
    switchToList(){
      this.$emit('toList', false);
    },
    onHalfClicked(){
      this.$emit("filterClicked", "half");
    },
    onFullClicked(){
      this.$emit("filterClicked", "full");
    }
  }
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
  cursor: pointer;
}

.filter-icon:hover{
  color: #000000;
}
</style>