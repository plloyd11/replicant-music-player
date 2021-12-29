import Home from './views/Home.vue';
import Setlist from './views/Setlist.vue';
import Studio from './views/Studio.vue';
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import NotFound from './views/NotFound.vue';

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
    { path: '/', component: Home, meta: { title: 'Home' } },
    {
        path: '/setlist',
        meta: { title: 'Setlist' },
        component: Setlist
    },
    {
        path: '/studio',
        meta: { title: 'Studio' },
        component: Studio
    },
    {
        path: '/signup',
        meta: { title: 'Signup' },
        component: Signup
    },
    {
        path: '/login',
        meta: { title: 'Login' },
        component: Login
    },
    { path: '/:path(.*)', component: NotFound }
];
