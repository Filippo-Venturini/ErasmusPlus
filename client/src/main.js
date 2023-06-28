import App from "./App.vue";
import {createApp} from 'vue';
import VueApexCharts from "vue3-apexcharts";
import router from "./router/router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import Vue3Storage from "vue3-storage";
import crypto from "crypto-js";

const app = createApp(App);

app.use(router);
app.use(VueApexCharts);
app.use(Vue3Storage);
app.use(crypto);
app.mount('#app');

