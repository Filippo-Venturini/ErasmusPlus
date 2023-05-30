<template>
  <Header></Header>
  <div>ciao</div>
  <Button></Button>
</template>

<script>
import Button from "../components/Button.vue";
import Header from "@/components/Header.vue";
import axios from "axios";
import {defineComponent} from "vue";

export default defineComponent({
  name: "HomePage",
  components: {Header, Button},
  methods:{
    getAllUniversities(){
      axios.get('http://localhost:3000/universities').then(response =>{
        console.log(response.data);
      }
      ).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    console.log("MOUNTED");
    this.getAllUniversities();
  }
})
</script>

<style scoped>

</style>