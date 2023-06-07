<template>
  <i :class="icon" class="icon" :style="styleIcon"></i>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "CircleIcon",
  props: ['icon', 'styleIcon'],
})
</script>

<style scoped>

.icon{
  margin-top: 100px;
}

</style>