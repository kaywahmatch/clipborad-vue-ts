import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import './style.css'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css';
import { createPinia } from 'pinia';

const pinia = createPinia()

const app = createApp(App);
app.use(ArcoVue);
app.use(pinia);
app.mount('#app');
