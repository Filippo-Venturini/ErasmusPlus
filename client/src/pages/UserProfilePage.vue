<template>
  <Header></Header>
  <ProfileBadge :user="user" :key="user.id"></ProfileBadge>
</template>

<script>
import Header from "@/components/Header.vue";
import Button from "@/components/Button.vue";
import ProfileBadge from "@/components/ProfileBadge.vue";
import axios from "axios";
import {defineComponent} from "vue";

export default defineComponent ({
  name: "UserProfilePage",
  components: {Header, Button, ProfileBadge},
  methods:{
    getAllUsers(){
      axios.get('http://localhost:3000/users').then(response =>{
            console.log(response.data);
          }
      ).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    console.log("MOUNTED");
    this.getAllUsers();
  }
})
</script>

<style scoped>

</style>