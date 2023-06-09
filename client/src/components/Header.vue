<template>
  <header class="erasmus-header">
    <RouterLink class="nav-link logo" :to="{path: '/'}" style="width: 300px">
      <img class="header-logo" src="../assets/img/logoErasmusPlus.png">
    </RouterLink>
    <i class="bi bi-bell bell" id="bellId" @click="this.showNotificationsBox()"></i>

    <div class="box" id="boxId">
      <template v-for="notification in notifications">
        <p class="textNotification"><i class="bi bi-envelope-fill"></i>&ensp;&ensp;&ensp;&ensp;  {{notification.text}} </p>
      </template>
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
      notifications: []
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
      axios.get('http://localhost:3000/' + "6482d300caf00aadbeb8b077").then(response => {
            this.notifications = response.data.notification;
            console.log(this.notifications);
          }
      ).catch(err => {
        console.log(err);
      })

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
  margin-top: 30px;
  margin-right: 100px;

}

.box{
  position: absolute;
  box-shadow: 0 0 100px rgba(0,0,0,0.8);
  background-color: #FFFFFF;
  padding: 30px;
  visibility: hidden;
  width: 500px;
  z-index:10;
  margin-left: 70%;
  margin-top: 100px;

}
.box:before{
  content: "";
  float: right;
  margin-top: -60px;
  left: 65%;
  border: 15px solid transparent;
  border-bottom-color: white;

  z-index:1;
}

.textNotification{
  background:#e3f7fc  no-repeat 10px 50%;
  border:1px solid #8ed9f6;
  border-radius:10px;
  padding:10px 10px 10px 36px;
  cursor: pointer;
}

</style>