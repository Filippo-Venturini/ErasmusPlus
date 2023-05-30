<template>
  <Header></Header>

  <InfoPanel></InfoPanel>

  <CircleIcon></CircleIcon>
</template>

<script>
import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
import axios from "axios";
import InfoPanel from "../components/InfoPanel.vue";
import CircleIcon from "../components/CircleIcon.vue";

export default defineComponent({
  name: "UniversityDetail",
  components: {CircleIcon, Header, InfoPanel},
  methods:{
    getUniversityDetali(){
      axios.get('http://localhost:3000/universities/universitydetail').then(response =>{
            console.log(response.data);
          }
      ).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.getUniversityDetali();
  }
})
</script>

<style scoped>

</style>