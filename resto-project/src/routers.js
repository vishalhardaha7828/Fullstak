import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from 'vue-router';
import LogIn from './components/LogIn.vue';
import AddRes from './components/AddRes.vue';
import UpdateRes from './components/UpdateRes.vue';

const routes = [{
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LogIn',
        component: LogIn,
        path: '/LogIn'
    },
    {
        name: 'AddRes',
        component: AddRes,
        path: '/AddRes'
    },
    {
        name: 'UpdateRes',
        component: UpdateRes,
        path: '/UpdateRes/:id'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;