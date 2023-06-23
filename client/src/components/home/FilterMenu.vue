<template>
<div class="filter-menu row">
  <div class="col-1 d-flex justify-content-center align-items-center">
    <i title="Preferiti" class="bi bi-bookmark-star filter-icon" :class="{clicked: savedClicked}" @click="this.onSavedClicked()"></i>
  </div>
  <div class="col-1 d-flex justify-content-center align-items-center">
    <i title="Il mio ambito di studi" class="bi bi-book filter-icon" :class="{clicked: studyClicked}" @click="this.onStudyClicked()"></i>
  </div>
  <div class="col-1 d-flex justify-content-center align-items-center">
    <i title="6 mesi" class="bi bi-circle-half filter-icon" :class="{clicked: halfClicked}" @click="this.onHalfClicked()"></i>
  </div>
  <div class="col-1 d-flex justify-content-center align-items-center">
    <i title="12 mesi" class="bi bi-circle-fill filter-icon" :class="{clicked: fullClicked}" @click="this.onFullClicked()"></i>
  </div>
</div>
</template>

<script>
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  name: "FilterMenu",
  emits: ["filterClicked"],
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
    getLoggedUser(){
      axios.get('http://localhost:3000/userdetail'+ sessionStorage.getItem("mail")).then(response =>{
        this.loggedUser = response.data;
        this.userAuthenticated = true;
      }).catch(err => {
        console.log(err);
      })
    },
    onSavedClicked(){
      this.savedClicked = !this.savedClicked;
      this.$emit("filterClicked", "favourites");
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

.filter-icon {
  font-size: 24px; /* Adjust the font size as desired */
  cursor: pointer;
  color: #717171;
  transition: color 0.3s;
  border: none; /* Initially, hide the border */
}

.filter-icon:hover {
  color: #000000; /* Change the hover color as desired */
  border: 2px solid #474554; /* Show a 2px solid border in clicked state */
  border-radius: 0.5em;
  padding: 12px; /* Add some padding to adjust the size of the icon */
  background-color: #E1E1E1;
}

.filter-icon.clicked {
  color: #FFFFFF; /* Change the hover color as desired */
  border: 2px solid #474554; /* Show a 2px solid border in clicked state */
  border-radius: 0.5em;
  padding: 12px; /* Add some padding to adjust the size of the icon */
  background-color: #474554;
}

</style>