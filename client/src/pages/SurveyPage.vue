<template>
<Header></Header>

  <div ref="finishedSurveyModal" class="modal fade" id="finishedSurveyModal" tabindex="-1" aria-labelledby="myModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Conferma invio del questionario</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Confermi la terminazione del questionario?
        </div>
        <div class="modal-footer">
          <RouterLink class="nav-link" :to="{path: '/'}">
            <button type="button" class="btn btn-success" @click="submitSurvey()" data-bs-dismiss="modal" >Conferma</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-center" style="margin-bottom: 10px; margin-top: 50px;" data-bs-toggle="modal" data-bs-target="#surveyExplainModal">
    <h1>Valutazione Esperienza</h1>
  </div>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8">
      <label class="justify-content-center text-center" style="margin-bottom: 30px;">Questa è la spiegazione di questo questionario, Ventu appena riesce scriverà un bellissimo testo che invogli a compilarlo e a non lasciarlo tutto vuoto.</label>
    </div>
  </div>


  <SurveyPanel title="Campus"
               first-row-label="Servizi offerti (Mensa, biblioteca ecc.)"
               second-row-label="Aule"
               third-row-label="Laboratori"
               fourth-row-label="Spazi aperti"
               @firstRow="onServizi" @secondRow="onAule" @thirdRow="onLaboratori" @fourthRow="onSpaziAperti"></SurveyPanel>

  <SurveyPanel title="Città"
               first-row-label="Clima"
               second-row-label="Costo della vita"
               third-row-label="Svago (Discoteche, Bar, Musei ecc.)"
               fourth-row-label="Mezzi pubblici"
               @firstRow="onClima" @secondRow="onCostoVita" @thirdRow="onSvago" @fourthRow="onMezzi"></SurveyPanel>

  <SurveyPanel title="Didattica"
               first-row-label="Corsi pertinenti"
               second-row-label="Orari delle lezioni"
               third-row-label="Tutor"
               fourth-row-label="Disponibilità dei docenti"
               @firstRow="onCorsi" @secondRow="onOrari" @thirdRow="onTutor" @fourthRow="onDocenti"></SurveyPanel>

  <SurveyPanel title="Alloggi"
               first-row-label="Costo"
               second-row-label="Disponibilità"
               third-row-label="Qualità"
               fourth-row-label="Vicinanza al campus"
               @firstRow="onCostoAlloggio" @secondRow="onAlloggiDisponibili" @thirdRow="onQualitaAlloggi" @fourthRow="onVicinanza"></SurveyPanel>


    <div class="d-flex justify-content-center">
      <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#finishedSurveyModal">Invia questionario</button>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
import SurveyPanel from "@/components/survey/SurveyPanel.vue";
import axios from "axios";

export default defineComponent({

  name: "SurveyPage",
  components: {SurveyPanel, Header},
  data(){
    return {
      university_id: null,
      servizi: 3,
      aule: 3,
      laboratori: 3,
      spaziAperti: 3,
      clima: 3,
      costoVita: 3,
      svago: 3,
      mezzi: 3,
      corsi: 3,
      orari: 3,
      tutor: 3,
      docenti: 3,
      costoAlloggi:3,
      alloggiDisponibili: 3,
      qualitaAlloggi: 3,
      vicinanza: 3,
      review: [],
      nameUniversity: ""
    }
  },
  methods:{
    onServizi(value){
      this.servizi = value;
    },
    onAule(value){
      this.aule = value;
    },
    onLaboratori(value){
      this.laboratori = value;
    },
    onSpaziAperti(value){
      this.spaziAperti = value;
    },
    onClima(value){
      this.clima = value;
    },
    onCostoVita(value){
      this.costoVita = value;
    },
    onSvago(value){
      this.svago = value;
    },
    onMezzi(value){
      this.mezzi = value;
    },
    onCorsi(value){
      this.corsi = value;
    },
    onOrari(value){
      this.orari = value;
    },
    onTutor(value){
      this.tutor = value;
    },
    onDocenti(value){
      this.docenti = value;
    },
    onCostoAlloggio(value){
      this.costoAlloggi = value;
    },
    onAlloggiDisponibili(value){
      this.alloggiDisponibili = value;
    },
    onQualitaAlloggi(value){
      this.qualitaAlloggi = value;
    },
    onVicinanza(value){
      this.vicinanza = value;
    },
    submitSurvey(){
      this.review.push(Number(this.servizi));
      this.review.push(Number(this.aule));
      this.review.push(Number(this.laboratori));
      this.review.push(Number(this.spaziAperti));
      this.review.push(Number(this.clima));
      this.review.push(Number(this.costoVita));
      this.review.push(Number(this.svago));
      this.review.push(Number(this.mezzi));
      this.review.push(Number(this.corsi));
      this.review.push(Number(this.orari));
      this.review.push(Number(this.tutor));
      this.review.push(Number(this.docenti));
      this.review.push(Number(this.costoAlloggi));
      this.review.push(Number(this.alloggiDisponibili));
      this.review.push(Number(this.qualitaAlloggi));
      this.review.push(Number(this.vicinanza));

      const json = {
        university_id: this.university_id,
        review: this.review
      };

      const res = axios.post('http://localhost:3000/addReview', json,{
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });

      this.sendNotification();
    },
    sendNotification(){
      var json ={
        text: "Un nuovo questionario dell'offerta relativa a "+this.nameUniversity +" è stato completato!",
        read: "false",
        goto: "/universitydetail/" + this.university_id
      }
      try{
        axios.post('http://localhost:3000/sendNotificationToAdmin', json, {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            'Content-Type': 'application/json'
          }
        })
      } catch (e) {
        console.log(e)
      }

      let jsonNotification = {
        id: sessionStorage.getItem("idUser"),
        text: "Hai completato il questionario relativo a " + this.nameUniversity + "!",
        read: "false",
        goto: "/universitydetail/" + this.university_id
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
    },
    showModal(){
      /*console.log(this.$refs.surveyExplainModal)
      this.$refs.surveyExplainModal.modal('show')*/
    }
  },
  mounted() {
    this.university_id = this.$route.params.id;

    axios.get('http://localhost:3000/universitydetail' + this.university_id).then(response => {
          this.nameUniversity = response.data.name;
        }
    ).catch(err => {
      console.log(err);
    })

    this.showModal();
  }
})
</script>

<style scoped>

</style>