<template>
  <div class="background-image">
    <div class="form-signin w-100 m-auto">
      <img class="mb-2 mt-lg-5" src="../assets/img/logoErasmusPlusLogin.png" alt="" height="107">
      <h1 class="h3 mb-3 fw-normal text-center">Please sign in</h1>

      <div class="form-floating">
        <input type="email" class="form-control" v-model="mail" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" v-model="password" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" @click="login()">Sign in</button>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent ({
  name: "LoginPage",
  methods:{
    login(){
      axios.get('http://localhost:3000/users').then(response =>{
        console.log(response.data);
        this.users = response.data;
        this.users.forEach(user => {
          if(user.mail === this.mail && user.password === this.password) {
            console.log("login riuscito");
            sessionStorage.setItem('mail',user.mail);    //sessionStorage.setItem(key,value);
            this.$router.push('/');
          }
        })
      }).catch(err => {
        console.log(err);
      })
    }
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

.form-signin .form-floating:focus-within {
  z-index: 2;
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
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>