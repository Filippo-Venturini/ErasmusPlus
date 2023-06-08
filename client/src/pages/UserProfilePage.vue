<template>
  <Header></Header>
  <ProfileBadge :user="user" :key="user.id"></ProfileBadge>
  <div class="row" style="margin-top: 100px">
    <div class="col-6">
      <ProfileInfoPanel :title="msgContacts" :user="user" class="bgGrayContacts"></ProfileInfoPanel>
    </div>
    <div class="col-3"></div>
    <div class="col-3 circleIconCol" style="margin-top: 50px">
      <UserProfileCircleIcon :title="msgContacts" class="circleIconContacts"></UserProfileCircleIcon>
    </div>
  </div>
  <div class="row" style="margin-top: 100px">
    <div class="col-3 circleIconCol">
      <UserProfileCircleIcon :title="msgPersonalInfo" class="circleIconPersonalInfo"></UserProfileCircleIcon>
    </div>
    <div class="col-3"></div>
    <div class="col-6">
      <ProfileInfoPanel  :title="msgPersonalInfo" :user="user" class="bgRedPersonalInfo"></ProfileInfoPanel>
    </div>
  </div>

  <div class="row d-flex text-center" style="margin-top: 120px">
    <h2>Le mie candidature</h2>
  </div>
  <div class="row d-flex justify-content-center">
    <div class="col-5 m-3">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Università</th>
          <th scope="col">Città</th>
          <th scope="col">Data candidatura</th>
          <th scope="col">Stato</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Universitat Politecnica</td>
          <td>Barcelona</td>
          <td>12/03/2022</td>
          <td style="color: #D91A1A">Rifiutata</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Universitat Politecnica</td>
          <td>Barcelona</td>
          <td>12/03/2022</td>
          <td style="color: springgreen">Accettata</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Universitat Politecnica</td>
          <td>Barcelona</td>
          <td>12/03/2022</td>
          <td style="color: #D91A1A">Rifiutata</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import Header from "@/components/Header.vue";
import ProfileBadge from "@/components/profile/ProfileBadge.vue";
import axios from "axios";
import {defineComponent} from "vue";
import ProfileInfoPanel from "@/components/profile/ProfileInfoPanel.vue";
import UserProfileCircleIcon from "@/components/profile/UserProfileCircleIcon.vue";

export default defineComponent ({
  name: "UserProfilePage",
  props:['id'],
  components: {UserProfileCircleIcon, ProfileInfoPanel, Header, ProfileBadge},
  data(){
    return{
      user: [],
      msgContacts: "Contatti",
      msgPersonalInfo: "Informazioni Personali"
    }
  },
  methods:{
    getUser(){
      axios.get('http://localhost:3000/userdetail'+"647da7ad6c95774219e08c2b").then(response =>{
            console.log(response.data);
            this.user = response.data;
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    //console.log("MOUNTED");
    this.getUser();
  }
})
</script>

<style scoped>

.bgRedPersonalInfo{
  background-color: #D91A1A;
  color: #FFFFFF;
  height: 200px;
}
.bgGrayContacts{
  background-color: #717171;
  color: #FFFFFF;
  height: 200px;
}
.circleIconPersonalInfo{
  float: right;
}
.circleIconContacts{
  float: left;
}

.circleIconCol{
  margin-top: 50px
}


</style>