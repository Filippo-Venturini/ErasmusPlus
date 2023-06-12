<template>
<div class="filter-menu row">
  <template v-if="this.userAuthenticated && this.loggedUser.role !== 'Admin'">
    <div class="col-1 d-flex justify-content-center align-items-center">
      <i class="bi bi-bookmark-star filter-icon" :class="{clicked: savedClicked}" @click="this.onSavedClicked()"></i>
    </div>
    <div class="col-1 d-flex justify-content-center align-items-center">
      <i class="bi bi-book filter-icon" :class="{clicked: studyClicked}" @click="this.onStudyClicked()"></i>
    </div>
    <div class="col-1 d-flex justify-content-center align-items-center">
      <i class="bi bi-circle-half filter-icon" :class="{clicked: halfClicked}" @click="this.onHalfClicked()"></i>
    </div>
    <div class="col-1 d-flex justify-content-center align-items-center">
      <i class="bi bi-circle-fill filter-icon" :class="{clicked: fullClicked}" @click="this.onFullClicked()"></i>
    </div>
  </template>
  <template v-if="this.userAuthenticated && this.loggedUser.role !== 'Studente'">
    <div class="col-4">
    </div>
  </template>
  <div class="col-6">
  </div>
  <div class="col-1 d-flex justify-content-end align-items-center">
    <i class="bi bi-globe filter-icon" @click="this.switchToMap()"></i>
  </div>
  <div class="col-1 d-flex justify-content-start align-items-center">
    <i class="bi bi-card-list filter-icon" @click="this.switchToList()"></i>
  </div>
</div>
</template>

<script>
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  name: "FilterMenu",
  emits: ["toMap", "toList", "filterClicked"],
  data(){
    return{
      savedClicked: false,
      studyClicked: false,
      halfClicked: false,
      fullClicked: false,
      loggedUser: null,
      userAuthenticated: false
    }
  },
  methods:{
    switchToMap(){
      this.$emit('toMap', true);
    },
    switchToList(){
      this.$emit('toList', false);
    },
    getLoggedUser(){
      axios.get('http://localhost:3000/userdetail'+ sessionStorage.getItem("mail")).then(response =>{
        this.loggedUser = response.data;
        this.userAuthenticated = true;
        console.log("CIAO")
      }).catch(err => {
        console.log(err);
      })
    },
    onSavedClicked(){
      this.savedClicked = !this.savedClicked;
    },
    onStudyClicked(){
      this.studyClicked = !this.studyClicked;
      this.$emit("filterClicked", "study");
    },
    onHalfClicked(){
      this.halfClicked = !this.halfClicked;
      this.fullClicked = false;
      this.$emit("filterClicked", "half");
    },
    onFullClicked(){
      this.fullClicked = !this.fullClicked;
      this.halfClicked = false;
      this.$emit("filterClicked", "full");
    }
  },
  mounted() {
    this.getLoggedUser();
  }
});
</script>

<style scoped>
.filter-menu{
  height: 65px;
  background-color: #ffffff;
  box-shadow: 0 4px 2px -2px gray;
}

.filter-icon{
  font-size: 1.5rem;
  color: #717171;
  cursor: pointer;
}

.filter-icon:hover{
  color: #000000;
}

.clicked{
  color: #000000;
  padding-left: 5px;
  padding-right: 5px;
  border: solid 2px;
}
</style>