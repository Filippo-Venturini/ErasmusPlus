<template>
<Header></Header>
  <div class="d-flex justify-content-center fw-bold">
    <h1>Gestione candidature</h1>
  </div>
  <UniversityApplicationPanel v-for="university in universities" :university-name="university.name" :university-places="university.offer.places" :applications="applications" :key="applications.id"></UniversityApplicationPanel>

</template>

<script>
import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
import UniversityApplicationPanel from "@/components/applications/UniversityApplicationPanel.vue";
import axios from "axios";
export default defineComponent({
  name: "ApplicationsPage",
  components: {UniversityApplicationPanel, Header},
  data(){
    return{
      universities: [],
      applications: []
    }
  },
  methods:{
    getAllUniversities(){
      axios.get('http://localhost:3000/universities').then(response =>{
            this.universities = response.data;
          }
      ).catch(err => {
        console.log(err);
      })
    },
    getAllApplications(){
      axios.get('http://localhost:3000/applications').then(response =>{
            this.applications = response.data;
          }
      ).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.getAllApplications();
    this.getAllUniversities();
  }
});
</script>

<style scoped>

</style>