import App from "./App.vue";
import {createApp} from 'vue';
import router from "./router/router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/sass/style.scss'

const app = createApp(App);

app.use(router);
app.mount('#app');

