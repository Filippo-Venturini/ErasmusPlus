<template>
  <div class="w-50 p-3 mt-4 infoPanel ">
    <div class="row text" style="margin-right: 20px">
      <div class="col-md-11 panel-heading pt-3 ps-4" style="font-weight: bold; font-size: 20px; margin-top: -15px">{{title}} {{offerUniversity}} mesi</div>
      <div class="col-md-1 "> <i :class="icon" :style="styleIcon"> </i> </div>
    </div>
    <div class="row" style="margin-right: 20px">
      <div class="col-md-1"></div>
      <p class="col-md-11 panel-body" style="margin-top: 10px; padding-right: 50px">{{msgDescribe}}</p>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "InfoPanelDX",
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

.text{
  line-height: 100px;
}

.panel-body{
  margin-left: 70px;
}

.infoPanel{
  text-align: right;
}



</style>