<template>
  <div class="w-50 p-3 mt-4 infoPanel">
    <div class="row">
      <div class="col-md-1 "> <i :class="icon" :style="styleIcon"> </i> </div>
      <div class="col-md-5 panel-heading pt-3 ps-4">{{title}} {{offer.city}}</div>
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
  props: ['offer','title', 'bg', 'icon', 'styleIcon', 'msgDescribe'],
  methods:{
  }
})
</script>

<style scoped>

.msg-icon{
  font-size: 2.5rem;
  color: #717171;
}

</style>