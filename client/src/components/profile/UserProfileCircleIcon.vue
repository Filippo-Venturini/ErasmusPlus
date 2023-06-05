<template>
  <i v-if="title === 'Contatti'" class="bi bi-envelope icon"></i>
  <i v-else class="rounded-circle bi bi-person-lines-fill icon"></i>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name: "UserProfileCircleIcon",
  props: ['title'],
  methods:{
  }
})
</script>

<style scoped>
.circleIcon {
  background-color: #D9D9D9;
  width: 100px;
  height: auto;
  padding: 20px;
}
</style>