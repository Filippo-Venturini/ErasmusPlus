<template>
  <i :class="icon" :style="styleIcon"></i>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "CircleIcon",
  props: ['icon', 'styleIcon'],
})
</script>

<style scoped>
.circleIcon{
  background-color: #D9D9D9;
  width: 100px;
  height: auto;
}
</style>