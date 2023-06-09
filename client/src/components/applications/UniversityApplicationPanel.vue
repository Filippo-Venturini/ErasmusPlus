<template>
  <div class="row d-flex justify-content-center">
    <div class="col-5">
      <h2>{{ university.name }}</h2>
      <div class="m-lg-3">
        <p>Posti disponibili: {{university.offer.places}}</p>
      </div>
    </div>
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
          <tr v-if="university.name === application.university">
            <th scope="row">1</th>
            <td>{{application.university}}</td>
            <td>{{application.student}}</td>
            <td>{{application.date}}</td>
            <td>
              <div class="d-flex justify-content-end" v-if="application.state === 'Attesa'">
                <button class="btn-circle-yes btn-xl d-flex justify-content-center align-items-center" @click="onAccept(application)">
                  <i class="bi bi-check-lg accept-icon"></i>
                </button>
                <button class="btn-circle-no btn-xl d-flex justify-content-center align-items-center" @click="onReject(application)">
                  <i class="bi bi-x-lg reject-icon"></i></button>
              </div>
              <div v-if="application.state === 'Accettata'">
                <p style="color: springgreen">Accettata</p>
              </div>
              <div v-if="application.state === 'Rifiutata'">
                <p style="color: #D91A1A">Rifiutata</p>
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
import axios from "axios";
export default defineComponent({
  name: "UniversityApplicationPanel",
  props: ["university", "applications"],
  data(){
    return{
      applicationPresent: false
    }
  },
  methods:{
    isApplicationPresent(){
      this.applications.forEach(a => {
        if(a.university === this.university.name){
          this.applicationPresent = true;
        }
      })
    },
    onAccept(applicationToModify){

      const res1 = axios.post('http://localhost:3000/modifyApplicationState'+applicationToModify._id, {state:"Accettata"},{
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });

      const newAccepted = (Number(this.university.accepted) + 1).toString();
      console.log(this.universities.accepted);
      const res2 = axios.post('http://localhost:3000/updateUniversityOffer'+this.university._id, {accepted:newAccepted},{
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });

      for(let i = 0; i < this.applications.length; i++){
        if(this.applications[i].id_student === applicationToModify.id_student && this.applications[i]._id !== applicationToModify._id){
          const res = axios.post('http://localhost:3000/modifyApplicationState'+this.applications[i]._id, {state:"Rifiutata"},{
            headers: {
              // Overwrite Axios's automatically set Content-Type
              'Content-Type': 'application/json'
            }
          });
        }
      }
    },
    onReject(applicationToModify){
      const json = {
        state: "Rifiutata"
      };

      const res = axios.post('http://localhost:3000/modifyApplicationState' + applicationToModify._id, json,{
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });
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