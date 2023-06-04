<template>
  <Header></Header>
  <ProfileBadge :user="user" :key="user.id"></ProfileBadge>
  <ProfileInfoPanel class="bgGrayContacts"></ProfileInfoPanel>
  <UserProfileCircleIcon class="circleIconContacts"></UserProfileCircleIcon>
  <ProfileInfoPanel class="bgRedPersonalInfo"></ProfileInfoPanel>
  <UserProfileCircleIcon class="circleIconPersonalInfo"></UserProfileCircleIcon>

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
      user: []
    }
  },
  methods:{
    getUser(id){
      axios.get('http://localhost:3000/users'+"64761111db9ca6b5838e985a").then(response =>{
            console.log(response.data);
            this.user = response.data;
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    //console.log("MOUNTED");
    this.getUser(this.id);
  }
})
</script>

<style scoped>

.bgGrayContacts{
  background-color: #717171;
  color: white;
  float: right;
  height: 150px;
  position: relative;
  top: 300px;
}
.bgRedPersonalInfo{
  background-color: #BB2E29;
  color: white;
  height: 150px;
  position: relative;
  top: 100px;
 }
.circleIconContacts{
  float: right;
  position: relative;
  top: 130px;
  left: 450px;
}
.circleIconPersonalInfo{
  float: right;
  position: relative;
  top: 210px;
  right: 400px;

}
</style>