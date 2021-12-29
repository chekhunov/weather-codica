import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './root/css/src/style.scss';

createApp(App).use(store).use(router).mount('#app');
