<template>
  <div class="infopanel">
    <div class="row">
      <div class="col-1">
        <i v-if="title === 'Contatti'" class="bi-envelope d-flex justify-content-center" ></i>
        <i v-else class="bi-person-lines-fill d-flex justify-content-center"></i>
      </div>
      <div class="col-3 panel-heading" style="margin: 10px">{{title}}</div>
    </div>
    <div class="row">
      <div class="row" v-if="title === 'Contatti'">
        <div class="col-1"></div>
        <div class="col-11 panel-body">{{user.mail}}</div>
        <div class="col-1"></div>
        <div class="col-11 panel-body">{{user.cellphone}}</div>
      </div>
      <div class="row" v-else>
        <div class="col-1"></div>
        <div class="col-md-11">{{user.immatricolationYear}}</div>
        <div class="col-1"></div>
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
i{
  margin: 20px;
  font-size: 2rem;

}

.infopanel{
  font-size: 1.5rem;
}
</style>