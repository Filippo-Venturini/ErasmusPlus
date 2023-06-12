<template>
<Header></Header>
  <div class="d-flex justify-content-center fw-bold mt-5">
    <h1>Gestione candidature</h1>
  </div>
  <UniversityApplicationPanel v-for="university in universities" :university="university" :applications="applications" :key="applications.id"></UniversityApplicationPanel>

</template>

<script>
import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
import UniversityApplicationPanel from "@/components/applications/UniversityApplicationPanel.vue";
import axios from "axios";
import io from 'socket.io-client';
export default defineComponent({
  name: "ApplicationsPage",
  components: {UniversityApplicationPanel, Header},
  data(){
    return{
      universities: [],
      applications: [],
      socket: io('localhost:3000')
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
    this.socket.on('APPLICATIONS', (data) => {
      this.applications = data;//JSON.parse(data);
    })
    this.socket.on('UNIVERSITIES', (data) => {
      this.universities = data;//JSON.parse(data);
    })
  }
});
</script>

<style scoped>

</style>