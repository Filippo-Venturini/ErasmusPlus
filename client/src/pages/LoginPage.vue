<template>
  <div class="background-image" >
    <div class="form-signin m-auto">
      <img class="mb-2 mt-lg-5" src="../assets/img/logoErasmusPlusLogin.png" alt="" height="107">
      <h1 class="h3 mb-3 fw-normal text-center">Accedi</h1>

      <div class="form-floating">
        <input type="email" class="form-control" v-model="mail" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" v-model="password" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>
      <label id="passwordErrorLabel" style="display: none; color: #D91A1A; font-weight: bold;">Password o email sbagliata!</label>
      <button class="w-100 btn btn-lg" style="background: #BB2E29; color: white" @click="login()">Sign in</button>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import axios from "axios";
import sha256 from 'crypto-js/sha256';

export default defineComponent ({
  name: "LoginPage",
  methods:{
    login(){
      axios.get('http://localhost:3000/users').then(response =>{
        this.users = response.data;
        this.users.forEach(user => {
          if(user.mail == this.mail && user.password == sha256(this.password)) {
            sessionStorage.setItem('mail',user.mail);
            sessionStorage.setItem('role',user.role);
            sessionStorage.setItem('idUser',user.identificationNumber);
            this.$router.push('/');
          }
        })
        document.getElementById("passwordErrorLabel").style.display = "block";
      }).catch(err => {
        console.log(err);
      })
    },
  },
  data(){
    return{
      users: [],
      mail: "",
      password: ""
    }
  },
  mounted() {
  }
})


</script>

<style scoped>


.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.background-image {
  background-image: url('../assets/img/wallpaperLogin.png');

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}



</style>