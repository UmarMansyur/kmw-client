import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import VueCryptojs from 'vue-cryptojs'


createApp(App).use(createPinia()).use(router).use(VueCryptojs).mount('#app');
