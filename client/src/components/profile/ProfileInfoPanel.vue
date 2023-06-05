<template>
  <div class="w-50 p-3 mt-4 infoPanel">
    <div class="row">
      <i v-if="title === 'Contatti'" class="bi bi-envelope icon"></i>
      <i v-else class="bi bi-person-lines-fill icon"></i>
      <div class="col-md-4 panel-heading">{{title}}</div>
    </div>
    <div class="row">
      <div v-if="title === 'Contatti'">
        <div class="col-md-11 panel-body">{{user.mail}}</div>
        <div class="col-md-11 panel-body">{{user.cellphone}}</div>
      </div>
      <div v-else>
        <div class="col-md-11">{{user.immatricolationYear}}</div>
        <div class="col-md-11">{{ user.course }}</div>
      </div>

    </div>
  </div>
</template>


<script>

import {defineComponent} from "vue";
export default defineComponent({
  name: "ProfileInfoPanel",
  props: ['title', 'user'],
  methods:{
  }
})
</script>

<style scoped>
.icon{
  font-size: 1.5rem;
  color: #FFFFFF;
}
</style>