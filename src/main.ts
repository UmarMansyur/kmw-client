import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import VueCryptojs from 'vue-cryptojs'
import pusher from './plugins/pusher';

createApp(App).use(createPinia()).use(router).use(VueCryptojs).use(pusher, {apiKey: 'be7c83b20c3d698e7e45', cluster: 'ap1'}).mount('#app');
