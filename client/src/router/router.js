import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../pages/HomePage.vue";
import UniversityDetail from "../pages/UniversityDetail.vue";

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/universitydetail', name: 'UniversityDetail', component: UniversityDetail }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;
