<template>
  <header class="erasmus-header">
    <div class="row">
      <div class="col-md-10">
        <RouterLink class="nav-link" :to="{path: '/'}" style="width: 300px">
          <img class="header-logo" src="../assets/img/logoErasmusPlus.png">
        </RouterLink>
      </div>
      <div class="col-md-1 mt-5">
        <i class="bi bi-bell bell" id="bellId" @click="this.showNotifications()"></i>
      </div>


    </div>
    <div class="row">
      <div class="col-md-10"></div>

      <div class="col-md-2">
        <div class="box" id="boxId">
          Some content about development
        </div>
      </div>

    </div>



  </header>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Header",
  methods:{
    showNotifications(){
      const x = document.getElementById("boxId");
      console.log(x.style.visibility);
      if (x.style.visibility === "hidden" || x.style.visibility === "") {
        x.style.visibility = "visible";
      } else {
        x.style.visibility = "hidden";
      }

    }
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

.bell{
  font-size: 30px;
  color: white;
  cursor: pointer;
  margin-left: 50px;
}

.box{
  position: relative;
  box-shadow: 0 0 30px rgba(0,0,0,0.4);
  background-color: #FFFFFF;
  padding: 30px;
  margin: 0px 10px 0px 0px;
  visibility: hidden;
}
.box:before{
  content: "";
  position:absolute;
  top: -30px;
  left: 50px;
  border: 15px solid transparent;
  border-bottom-color: white;

}

</style>