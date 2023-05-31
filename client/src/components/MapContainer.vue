<template>
<h1>MAPPA!</h1>
  <button type="button" class="btn btn-secondary show-map" @click="switchToList()">Mostra elenco</button>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name: "MapContainer",
  methods:{
    switchToList(){
      this.$emit('toList', false);
    }
  }
});
</script>

<style scoped>
.show-map{
  top: 850px;
  left: 850px;
  width: 200px;
  position: fixed;
}
</style>