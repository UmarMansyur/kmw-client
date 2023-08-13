import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import VueCryptojs from 'vue-cryptojs'
import Pusher from './plugins/pusher';

createApp(App).
  use(createPinia()).
  use(router).
  use(VueCryptojs).
  use(Pusher, {apiKey: import.meta.env.VITE_API_KEY_PUSHER, cluster: 'ap1'}).mount('#app');
