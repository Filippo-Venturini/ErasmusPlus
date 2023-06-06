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

</style>