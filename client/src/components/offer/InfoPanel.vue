<template>
  <div class="w-50 p-3 mt-4 infoPanel">
    <div class="row">
      <div class="col-md-1 "> <i :class="icon" :style="styleIcon"> </i> </div>
      <div class="col-md-5 panel-heading pt-3 ps-4">{{title}} {{offerUniversity}}</div>
    </div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-11 panel-body">{{msgDescribe}}</div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "InfoPanel",
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


</style>