import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../pages/HomePage.vue";
import UniversityDetailPage from "../pages/UniversityDetailPage.vue";
import UserProfilePage from "@/pages/UserProfilePage.vue";

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/users', name: 'UserProfilePage', component: UserProfilePage },
    { path: '/universitydetail', name: 'UniversityDetailPage', component: UniversityDetailPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;
