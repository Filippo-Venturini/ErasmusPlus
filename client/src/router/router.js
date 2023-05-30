import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../pages/HomePage.vue";
import UserProfilePage from "@/pages/UserProfilePage.vue";

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/users', name: 'UserProfilePage', component: UserProfilePage }

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;
