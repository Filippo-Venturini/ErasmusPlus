<template>
  <i v-if="title === 'Contatti'" class="rounded-circle circleIcon bi bi-envelope icon"></i>
  <i v-else class="rounded-circle circleIcon bi bi-person-lines-fill icon"></i>
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
  font-size: 2.5rem;
  color: #FFFFFF;
  background-color: #D9D9D9;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  text-align: center;
  padding-top: 20px;
}

</style>