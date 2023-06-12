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
            <i class="bi bi-list menu btn" id="menuId" @click="this.showMenuBox()"></i>
            <i class="bi bi-bell bell btn" id="bellId" @click="this.showNotificationsBox()"></i>
          </div>

        </div>
        <div class="row">
          <div class="col-md">
            <div class="boxNotifications" id="boxNotificationsId" v-if="boxMenuIsOpen === false">
              <div v-if="newNotifications">
                <template v-for="notification in notifications">
                    <p class="textNotification" id="textNotificationID" @click="this.clickNotification(notification)"><i class="bi bi-envelope-fill"></i>&ensp;&ensp;&ensp;&ensp;  {{notification.text}} </p>
                </template>
              </div>
              <div v-else class="textNotification" style="text-align: center">Hai letto tutte le notifiche!</div>
            </div>

            <div class="boxMenu"  id="boxMenuId" v-if="boxNotificationsIsOpen === false">
              <div v-if="role === 'Studente'">
                <div class="menuItems mt-3" onclick="location.href = '/';">Tutte le offerte</div>
                <div class="menuItems mt-3" onclick="location.href = '/userdetail';">Profilo</div>
                <div class="menuItems mt-3" onclick="location.href = '/';">Preferiti</div>
                <div class="menuItems mt-3" onclick="location.href = '/login';" @click="this.logout()">Logout</div>
              </div>
              <div v-else-if="role === 'Admin'">
                <div class="menuItems mt-3" onclick="location.href = '/';">Tutte le offerte</div>
                <div class="menuItems mt-3" onclick="location.href = '/userdetail';">Profilo</div>
                <div class="menuItems mt-3" onclick="location.href = '/addoffer';">Aggiungi nuova offerta</div>
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
      newNotifications: true,
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

        }else{
          this.newNotifications = true;
          this.notifications = tmp;
        }
      }).catch(err => {
        console.log(err);
      })
    },
    clickNotification(notification){
      for(let i = 0; i < this.notifications.length; i++){
        if (this.notifications[i].idNotification === notification.idNotification){
          this.notifications[i].read = "true";
          this.user.notification = this.notifications;
        }
      }
      axios.put('http://localhost:3000/' + sessionStorage.getItem("mail"), this.user, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });

      switch (notification.kind){
        case "USUB":
          window.location.replace("/userdetail");
          break;
        case "UACC":
          window.location.replace("/");
          break;
        case "UADD":
          window.location.replace("/");
          break;
        case "AGET":
          window.location.replace("/applications");
          break;
        case "ASUR":
          window.location.replace("/addReview");
          break;
      }
    }
  },
  mounted() {
    this.showNotifications();
    if(sessionStorage.getItem('mail') === null){
      //window.location.replace("/login");
    }
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

.bell{
  float: right;
  font-size: 30px;
  color: white;
  cursor: pointer;
  margin-top: 35px;
  margin-right: 30px;
}

.menu{
  float: right;
  font-size: 30px;
  color: white;
  cursor: pointer;
  margin-top: 35px;
  margin-right: 60px;
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
}

.textNotification:hover{
  font-weight: bold;
}

.menuItems{
  border:1px solid #8ed9f6;
  border-radius:10px;
  padding:10px 10px 10px 0px;
  cursor: pointer;
  text-align: center;

}

.menuItems:hover{
  background:#e3f7fc  no-repeat 10px 50%;
  font-weight: bold;
}

</style>