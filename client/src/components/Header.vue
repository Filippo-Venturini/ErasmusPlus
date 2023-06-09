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
            <i class="bi bi-bell bell" id="bellId" @click="this.showNotificationsBox()"></i>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <div class="box" id="boxId">
              <template v-for="notification in notifications">
                  <p class="textNotification" id="textNotificationID" @click="this.clickNotification(notification)"><i class="bi bi-envelope-fill"></i>&ensp;&ensp;&ensp;&ensp;  {{notification.text}} </p>
              </template>
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
    }
  },
  methods:{
    showNotificationsBox(){
      const x = document.getElementById("boxId");
      if (x.style.visibility === "hidden" || x.style.visibility === "") {
        x.style.visibility = "visible";
      } else {
        x.style.visibility = "hidden";
      }
      this.showNotifications();
    },
    showNotifications(){
      axios.get('http://localhost:3000/' + "pietro.lelli@studio.unibo.it").then(response => {
        let allNotifications = response.data.notification;
        this.user = response.data;
        let tmp = [];
        allNotifications.forEach(function(not) {
          if (not.read === "false"){
            tmp.push(not);
          }
        });

        if(tmp.length === 0){
          document.getElementById("textNotificationID").innerHTML = "New text!";
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
      axios.put('http://localhost:3000/' + "pietro.lelli@studio.unibo.it", this.user, {
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
  margin-right: 100px;


}

.box{
  position: relative;
  float: right;
  box-shadow: 0 0 100px rgba(0,0,0,0.8);
  background-color: #FFFFFF;
  padding: 30px;
  visibility: hidden;
  width: 500px;
  z-index:999;
  margin-top: 20px;
  margin-right: 70px;
  border-radius:10px;


}
.box:before{
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

</style>