<template>
<Header></Header>
  <div class="d-flex justify-content-center fw-bold">
    <h1>Gestione candidature</h1>
  </div>
  <UniversityApplicationPanel></UniversityApplicationPanel>

</template>

<script>
import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
import UniversityApplicationPanel from "@/components/applications/UniversityApplicationPanel.vue";
export default defineComponent({
  name: "ApplicationsPage",
  components: {UniversityApplicationPanel, Header}
});
</script>

<style scoped>

</style>