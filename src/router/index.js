import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import { def } from "@vue/shared";

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;