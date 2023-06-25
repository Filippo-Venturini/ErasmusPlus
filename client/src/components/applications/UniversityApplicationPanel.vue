<template>
  <div class="row d-flex justify-content-center mt-5">
    <div class="col-5">
      <h2>{{ university.name }}</h2>
      <div class="m-lg-3">
        <p>Posti disponibili: {{university.offer.places}}</p>
      </div>
    </div>
  </div>
  <div v-if="!this.applicationPresent" class="d-flex justify-content-center">
    <div class="no-applications align-items-center p-3">
      <p>Non sono presenti candidature per questa università</p>
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
      applicationPresent: false,
      accepted: this.university.offer.accepted,
      canAccept: true
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
      const res1 = axios.post('http://localhost:3000/modifyApplicationState'+applicationToModify._id, {state:"Accettata", id_student: applicationToModify.id_student},{
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });

      this.accepted = Number(this.accepted)+1

      const newOffer = {
        period: this.university.offer.period,
        places: this.university.offer.places,
        accepted: this.accepted,
        field: this.university.offer.field,
      }
      const res2 = axios.post('http://localhost:3000/updateOfferAccepted'+this.university._id, newOffer,{
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });

      if(this.accepted === Number(this.university.offer.places)){
        const res1 = axios.post('http://localhost:3000/refuseAll', {university: applicationToModify.university},{
          headers: {
            // Overwrite Axios's automatically set Content-Type
            'Content-Type': 'application/json'
          }
        });
      }

      this.sendNotificationAccepted(applicationToModify);
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

      this.sendNotificationReject(applicationToModify)
    },
    sendNotificationAccepted(applicationToModify){
      let userId;
      axios.get('http://localhost:3000/getUserFromId'+ applicationToModify.id_student).then(response =>{
        userId = response.data.identificationNumber;
        let jsonNotification = {
          id: userId,
          text: "La tua domanda per l'università di " + applicationToModify.university + ", è stata accettata!",
          read: "false",
          goto: "/userdetail"
        };
        try{
          axios.post('http://localhost:3000/sendNotificationToUser', jsonNotification, {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              'Content-Type': 'application/json'
            }
          })
        } catch (e) {
          console.log(e)
        }
      }).catch(err => {
        console.log(err);
      })

    },
    sendNotificationReject(applicationToModify){
      let userId;
      axios.get('http://localhost:3000/getUserFromId'+ applicationToModify.id_student).then(response =>{
        userId = response.data.identificationNumber;
        let jsonNotification = {
          id: userId,
          text: "La tua domanda per l'università di " + applicationToModify.university + ", è stata rifiutata!",
          read: "false",
          goto: "/userdetail"
        };
        try{
          axios.post('http://localhost:3000/sendNotificationToUser', jsonNotification, {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              'Content-Type': 'application/json'
            }
          })
        } catch (e) {
          console.log(e)
        }
      }).catch(err => {
        console.log(err);
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

.no-applications{
  background:#e3f7fc  no-repeat 10px 50%;
  border:1px solid #8ed9f6;
  border-radius:10px;
}
</style>