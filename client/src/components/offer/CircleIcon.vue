<template>
  <i :class="icon" :style="styleIcon"></i>
</template>

<script>
export default {
  name: "CircleIcon",
  props: ['icon', 'styleIcon'],
}
</script>

<style scoped>
.circleIcon{
  background-color: #D9D9D9;
  width: 100px;
  height: auto;
}
</style>