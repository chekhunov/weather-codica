import { createApp } from 'vue';
import Vue3Geolocation from 'vue3-geolocation';
import App from './App.vue';
import router from './router';
import store from './store';
import './root/css/src/style.scss';

createApp(App)
  .use(store)
  .use(router)
  .use(Vue3Geolocation)
  .mount('#app');
