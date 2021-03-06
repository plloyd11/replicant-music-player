import { createApp } from 'vue';
import './tailwind.css';
import App from './App.vue';
import AudioPlayer from '@/components/AudioPlayer.vue';
import { routes } from './routes.js';
import store from './store/index.js';
import { createRouter, createWebHistory } from 'vue-router';

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes
});

app.use(router);
app.use(store);
app.component('AudioPlayer', AudioPlayer);
app.mount('#app');
