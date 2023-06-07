<template>
<Header></Header>
  <div class="d-flex justify-content-center m-5">
    <h1>Valutazione Esperienza</h1>
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
    <button class="btn btn-success" @click="submitSurvey()">Invia questionario</button>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
import SurveyPanel from "@/components/survey/SurveyPanel.vue";

export default defineComponent({

  name: "SurveyPage",
  components: {SurveyPanel, Header},
  data(){
    return {
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
      vicinanza: 3
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
      console.log(this.servizi);
      console.log(this.aule);
      console.log(this.laboratori);
      console.log(this.spaziAperti);
    }
  }
})
</script>

<style scoped>

</style>