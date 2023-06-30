<template>
  <div class="w-75 p-3 mt-4 infoPanel">
    <div class="row " style="margin-left: 20px">
      <div class="col-md-1 "> <i :class="icon" :style="styleIcon"> </i> </div>
      <div class="col-md-11 panel-heading pt-3 ps-4" style="font-weight: bold; font-size: 25px; ">{{title}} {{offerUniversity}}</div>
    </div>
    <div class="row" style="margin-left: 45px">
      <div class="col-md-1"></div>
      <p class="col-md-11 panel-body" style="margin-top: 40px; padding-right: 50px; font-size: 20px;" >{{msgDescribe}}</p>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "InfoPanelSX",
  props: ['offerUniversity','title', 'bg', 'icon', 'styleIcon', 'msgDescribe'],
  methods:{
    print(){
      //console.log(this.offerUniversity.city);
    }
  },
  mounted() {
    this.print();
  }
})
</script>

<style scoped>


.panel-body{
  margin-left: 70px;
}


</style>