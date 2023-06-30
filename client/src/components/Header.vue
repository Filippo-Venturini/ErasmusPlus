<template>
  <header class="erasmus-header">

    <div class="row">
      <div class="col-md-3">
        <RouterLink class="nav-link logo" :to="{path: '/'}" style="width: 300px">
          <img class="header-logo" src="../assets/img/logoErasmusPlus.png">
        </RouterLink>
      </div>
      <div class="col-md">
        <div class="row">
          <div class="col-md">
            <i class="bi bi-list menu " id="menuId" @click="this.showMenuBox()"></i>
            <div v-if="newNotifications">
              <i class="bi bi-bell-fill bellWithNotifications" @click="this.showNotificationsBox()">
                <span class="position-absolute translate-middle p-2 rounded-circle badgeNotification">
                  <span class="visually-hidden">New alerts</span>
                </span>
              </i>
            </div>
            <div v-else>
              <i class="bi bi-bell bellWithoutNotifications" @click="this.showNotificationsBox()"></i>
            </div>
          </div>

        </div>
        <div class="row">
          <div class="col-md">
            <div class="boxNotifications" id="boxNotificationsId" v-if="boxMenuIsOpen === false">
              <div v-if="newNotifications">
                <template v-for="notification in notifications">
                  <div class="row mb-3 textNotification">
                    <div class="col-md-2 d-flex justify-content-center align-items-center">
                      <i class="bi bi-envelope-fill"></i>
                    </div>
                    <div class="col-md-10 d-flex align-items-center">
                      <p class="align-middle m-0" id="textNotificationID" @click="this.clickNotification(notification)">{{notification.text}} </p>
                    </div>
                  </div>
                </template>
              </div>
              <div v-else class="textNotification" style="text-align: center; font-weight: lighter; font-size: 18px">Hai letto tutte le notifiche!</div>
            </div>

            <div class="boxMenu"  id="boxMenuId" v-if="boxNotificationsIsOpen === false">
              <div v-if="role === 'Studente'">
                <div class="menuItems mt-3" onclick="location.href = '/';">Tutte le offerte</div>
                <div class="menuItems mt-3" onclick="location.href = '/userdetail';">Profilo</div>
                <div class="menuItems mt-3" onclick="location.href = '/login';" @click="this.logout()">Logout</div>
              </div>
              <div v-else-if="role === 'Admin'">
                <div class="menuItems mt-3" onclick="location.href = '/addoffer';">Aggiungi nuova offerta</div>
                <div class="menuItems mt-3" onclick="location.href = '/applications';">Gestione candidature</div>
                <div class="menuItems mt-3" onclick="location.href = '/';">Tutte le offerte</div>
                <div class="menuItems mt-3" onclick="location.href = '/login';" @click="this.logout()">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  name: "Header",

  data(){
    return{
      notifications: [],
      user: [],
      newNotifications: false,
      boxMenuIsOpen: false,
      boxNotificationsIsOpen: false,
      role: "",
    }
  },
  methods:{
    logout(){
      sessionStorage.clear();
    },
    showMenuBox(){
      if(!this.boxNotificationsIsOpen) {
        const x = document.getElementById("boxMenuId");
        if (x.style.visibility === "hidden" || x.style.visibility === "") {
          x.style.visibility = "visible";
          this.boxMenuIsOpen = true;
        } else {
          x.style.visibility = "hidden";
          this.boxMenuIsOpen = false;
        }
      }
    },
    showNotificationsBox(){
      if(!this.boxMenuIsOpen) {
        const x = document.getElementById("boxNotificationsId");
        if (x.style.visibility === "hidden" || x.style.visibility === "") {
          x.style.visibility = "visible";
          this.boxNotificationsIsOpen = true;
        } else {
          x.style.visibility = "hidden";
          this.boxNotificationsIsOpen = false;
        }
        this.showNotifications();
      }
    },
    showNotifications(){
      axios.get('http://localhost:3000/' + sessionStorage.getItem("mail")).then(response => {
        let allNotifications = response.data.notification;
        this.user = response.data;
        let tmp = [];
        allNotifications.forEach(function(not) {
          if (not.read === "false"){
            tmp.push(not);
          }
        });

        if(tmp.length === 0){
          this.newNotifications = false;
          sessionStorage.setItem('newNotification',"false");

        }else{
          this.newNotifications = true;
          this.notifications = tmp;
          sessionStorage.setItem('newNotification',"true");

        }
      }).catch(err => {
        console.log(err);
      })
    },
    clickNotification(notification){

      for(let i = 0; i < this.notifications.length; i++){
        if (this.notifications[i]._id === notification._id){
          this.notifications[i].read = "true";
          this.user.notification = this.notifications;
        }
      }
      var body ={
        id: notification._id
      }
      console.log(sessionStorage.getItem("mail"));
      axios.put('http://localhost:3000/' + sessionStorage.getItem("mail"),body , {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      }).then(() =>  window.location.replace(notification.goto));

    }
  },
  mounted() {
    if(sessionStorage.getItem('mail') === null){
      window.location.replace("/login");
    }
    this.showNotifications();
    this.role = sessionStorage.getItem('role');
  }
});
</script>

<style scoped>
.erasmus-header{
  background-color: #BB2E29;
  height: 120px;
}

.header-logo{
  height: 120px;
}

.logo{
  float: left;
}

.bellWithNotifications{
  float: right;
  font-size: 30px;
  color: white;
  cursor: pointer;
  margin-top: 35px;
  margin-right: 70px;
}

.bellWithNotifications:hover{
  color: #FFFFFF;
  transform: scale(1.20);
}

.bellWithoutNotifications{
  float: right;
  font-size: 30px;
  color: white;
  cursor: pointer;
  margin-top: 35px;
  margin-right: 70px;
}

.bellWithoutNotifications:hover{
  color: #FFFFFF;
  transform: scale(1.20);
}

.menu{
  float: right;
  font-size: 30px;
  color: white;
  cursor: pointer;
  margin-top: 35px;
  margin-right: 60px;
}

.menu:hover{
  color: #FFFFFF;
  transform: scale(1.20);
}

.boxMenu{
  position: relative;
  float: right;
  box-shadow: 0 0 100px rgba(0,0,0,0.8);
  background-color: #FFFFFF;
  padding: 30px;
  visibility: hidden;
  width: 300px;
  z-index:999;
  margin-top: 20px;
  margin-right: 40px;
  border-radius:10px;
}

.boxMenu:before{
  content: "";
  float: right;
  margin-top: -60px;
  left: 65%;
  border: 15px solid transparent;
  border-bottom-color: white;
  z-index:999;
}

.boxNotifications{
  position: relative;
  float: right;
  box-shadow: 0 0 100px rgba(0,0,0,0.8);
  background-color: #FFFFFF;
  padding: 30px;
  visibility: hidden;
  width: 500px;
  z-index:999;
  margin-top: 20px;
  margin-right: 130px;
  border-radius:10px;
}

.boxNotifications:before{
  content: "";
  float: right;
  margin-top: -60px;
  left: 65%;
  border: 15px solid transparent;
  border-bottom-color: white;
  z-index:999;
}

.textNotification{
  background:#e3f7fc  no-repeat 10px 50%;
  border:1px solid #8ed9f6;
  border-radius:10px;
  padding:10px 10px 10px 36px;
  cursor: pointer;
  font-weight: lighter;
  font-size: 18px
}

.textNotification:hover{

  font-size: 20px;
}

.menuItems{
  border-radius:10px;
  padding:10px 10px 10px 0px;
  cursor: pointer;
  font-size: 1.2rem;
}

.menuItems:hover{
  font-weight: bold;
}

.badgeNotification{
  margin-top: 14px;
  margin-left: -5px;
  background-color: #008AC7;
  border: 1px solid #008AC7;
}

</style>