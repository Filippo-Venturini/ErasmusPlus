<template>
  <div v-if="title === 'Contatti'" class="infopanelSx">
    <div class="row">
      <div class="col-1" style="margin-left: 15px">
        <i class="bi-envelope d-flex justify-content-center" ></i>
      </div>
      <div class="col-3 panel-heading" style="margin-top: 20px">{{title}}</div>
    </div>
    <div class="row">
        <div class="col-1"></div>
        <div class="col-11 panel-body">{{user.mail}}</div>
        <div class="col-1"></div>
        <div class="col-11 panel-body">{{user.cellphone}}</div>
    </div>
  </div>

  <div v-else class="infopanelDx">
    <div class="row">
      <div class="col-10 panel-heading" style="margin-top: 20px">{{title}}</div>
      <div class="col-1" style="margin-left: 15px">
        <i class="bi-person-lines-fill d-flex justify-content-center"></i>
      </div>
    </div>
    <div v-if="this.user.role === 'Studente'" class="row">
      <div class="col-1"></div>
      <div class="col-md-10">Corso di Studio: {{ user.course }}</div>
      <div class="col-1"></div>
      <div class="col-1"></div>
      <div class="col-md-10">Immatricolazione nell'a.a: {{user.immatriculationYear}}</div>
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

.infopanelSx{
  font-size: 1.5rem;
}

.infopanelDx{
  font-size: 1.5rem;
  text-align: right;

}

</style>