import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import '@picocss/pico/css/pico.blue.min.css';

createApp(App).use(router).mount('#app');
