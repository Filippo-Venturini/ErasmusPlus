import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../pages/HomePage.vue";
import UniversityDetailPage from "../pages/UniversityDetailPage.vue";
import UserProfilePage from "@/pages/UserProfilePage.vue";
import ApplicationsPage from "@/pages/ApplicationsPage.vue";

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/users', name: 'UserProfilePage', component: UserProfilePage },
    { path: '/universitydetail', name: 'UniversityDetailPage', component: UniversityDetailPage, props: true}, //TODO aggiungere id
    { path: '/applications', name: 'ApplicationsPage', component: ApplicationsPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;
