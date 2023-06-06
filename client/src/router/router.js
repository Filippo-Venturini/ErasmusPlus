import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../pages/HomePage.vue";
import UniversityDetailPage from "../pages/UniversityDetailPage.vue";
import UserProfilePage from "@/pages/UserProfilePage.vue";
import ApplicationsPage from "@/pages/ApplicationsPage.vue";
import AddOfferPage from "@/pages/AddOfferPage.vue";

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/users', name: 'UserProfilePage', component: UserProfilePage },
    { path: '/universitydetail/:id', name: 'UniversityDetailPage', component: UniversityDetailPage},
    { path: '/applications', name: 'ApplicationsPage', component: ApplicationsPage },
    { path: '/addoffer', name: 'AddOfferPage', component: AddOfferPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;
