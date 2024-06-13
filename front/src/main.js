import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/styles/style.scss"
import axios from 'axios';
import VueAxios from 'vue-axios';

axios.defaults.withCredentials = true;

const app = createApp(App)
app.use(VueAxios, axios);
app.use(router)
app.mount('#app')

