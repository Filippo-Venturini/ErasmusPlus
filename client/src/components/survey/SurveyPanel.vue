<template>
  <div class="row mb-3">
    <div class="col-4"></div>
    <div class="col-4">
      <h1>{{title}}</h1>
    </div>
  </div>

  <div class="row">
    <div class="col-4"></div>
    <div class="col-2">
      <label>{{firstRowLabel}}</label>
    </div>
    <div class="col-5">
      <div class="form-check form-check-inline" >
        <input class="form-check-input" type="radio" :name="this.title + '1'" id="inlineRadio1" value="1" v-model="firstRow">
        <label class="form-check-label" for="inlineRadio1">1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '1'" id="inlineRadio2" value="2" v-model="firstRow">
        <label class="form-check-label" for="inlineRadio2">2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '1'" id="inlineRadio2" value="3" v-model="firstRow">
        <label class="form-check-label" for="inlineRadio2">3</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '1'" id="inlineRadio2" value="4" v-model="firstRow">
        <label class="form-check-label" for="inlineRadio2">4</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '1'" id="inlineRadio2" value="5" v-model="firstRow">
        <label class="form-check-label" for="inlineRadio2">5</label>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-4"></div>
    <div class="col-2">
      <label>{{secondRowLabel}}</label>
    </div>
    <div class="col-5">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '2'" id="inlineRadio3" value="1" v-model="secondRow">
        <label class="form-check-label" for="inlineRadio3">1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '2'" id="inlineRadio4" value="2" v-model="secondRow">
        <label class="form-check-label" for="inlineRadio4">2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '2'" id="inlineRadio4" value="3" v-model="secondRow">
        <label class="form-check-label" for="inlineRadio4">3</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '2'" id="inlineRadio4" value="4" v-model="secondRow">
        <label class="form-check-label" for="inlineRadio4">4</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '2'" id="inlineRadio4" value="5" v-model="secondRow">
        <label class="form-check-label" for="inlineRadio4">5</label>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-4"></div>
    <div class="col-2">
      <label>{{thirdRowLabel}}</label>
    </div>
    <div class="col-5">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '3'" id="inlineRadio3" value="1" v-model="thirdRow">
        <label class="form-check-label" for="inlineRadio3">1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '3'" id="inlineRadio4" value="2" v-model="thirdRow">
        <label class="form-check-label" for="inlineRadio4">2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '3'" id="inlineRadio4" value="3" v-model="thirdRow">
        <label class="form-check-label" for="inlineRadio4">3</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '3'" id="inlineRadio4" value="4" v-model="thirdRow">
        <label class="form-check-label" for="inlineRadio4">4</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '3'" id="inlineRadio4" value="5" v-model="thirdRow">
        <label class="form-check-label" for="inlineRadio4">5</label>
      </div>
    </div>
  </div>

  <div class="row" style="margin-bottom: 50px">
    <div class="col-4"></div>
    <div class="col-2">
      <label>{{fourthRowLabel}}</label>
    </div>
    <div class="col-5">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '4'" id="inlineRadio3" value="1" v-model="fourthRow">
        <label class="form-check-label" for="inlineRadio3">1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '4'" id="inlineRadio4" value="2" v-model="fourthRow">
        <label class="form-check-label" for="inlineRadio4">2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '4'" id="inlineRadio4" value="3" v-model="fourthRow">
        <label class="form-check-label" for="inlineRadio4">3</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '4'" id="inlineRadio4" value="4" v-model="fourthRow">
        <label class="form-check-label" for="inlineRadio4">4</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" :name="this.title + '4'" id="inlineRadio4" value="5" v-model="fourthRow">
        <label class="form-check-label" for="inlineRadio4">5</label>
      </div>
    </div>
  </div>

</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name: "SurveyPanel",
  props: ["title", "firstRowLabel", "secondRowLabel", "thirdRowLabel", "fourthRowLabel"],
  emits: ["firstRow", "secondRow", "thirdRow", "fourthRow"],
  data(){
    return{
      allRows: [],
      firstRow: "",
      secondRow: "",
      thirdRow: "",
      fourthRow: ""
    }
  },
  watch: {
    firstRow: function (val){
      this.$emit("firstRow", val)
    },
    secondRow: function (val){
      this.$emit("secondRow", val)
    },
    thirdRow: function (val){
      this.$emit("thirdRow", val)
    },
    fourthRow: function (val){
      this.$emit("fourthRow", val)
    }
  }
})
</script>

<style scoped>

</style>