<template>
  <div class="row d-flex text-center">
    <h2>{{ universityName }}</h2>
    <p>Posti disponibili: 3</p>
  </div>
  <div class="row d-flex justify-content-center">
    <div v-if="this.applicationPresent" class="col-5">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Università</th>
          <th scope="col">Studente</th>
          <th scope="col">Data candidatura</th>
          <th scope="col">Accettazione</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="application in this.applications">
          <tr v-if="universityName === application.university">
            <th scope="row">1</th>
            <td>{{application.university}}</td>
            <td>{{application.student}}</td>
            <td>{{application.date}}</td>
            <td>
              <div class="d-flex justify-content-end">
                <button class="btn-circle-yes btn-xl d-flex justify-content-center align-items-center">
                  <i class="bi bi-check-lg accept-icon"></i>
                </button>
                <button class="btn-circle-no btn-xl d-flex justify-content-center align-items-center">
                  <i class="bi bi-x-lg reject-icon"></i></button>
              </div>
            </td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name: "UniversityApplicationPanel",
  props: ["universityName", "applications"],
  data(){
    return{
      applicationPresent: false
    }
  },
  methods:{
    isApplicationPresent(){
      this.applications.forEach(a => {
        if(a.university === this.universityName){
          this.applicationPresent = true;
        }
      })
    }
  },
  mounted() {
    this.isApplicationPresent();
  }
});
</script>

<style scoped>
.btn-circle-yes.btn-xl {
  width: 30px;
  height: 30px;
  padding: 13px 18px;
  border-radius: 60px;
  font-size: 15px;
  text-align: center;
  background-color: #50D083;
  border: none;
}

.btn-circle-no.btn-xl {
  width: 30px;
  height: 30px;
  padding: 13px 18px;
  border-radius: 60px;
  font-size: 15px;
  text-align: center;
  background-color: #D91A1A;
  border: none;
}

.accept-icon{
  color: #ffffff;
}

.reject-icon{
  color: #ffffff;
}
</style>