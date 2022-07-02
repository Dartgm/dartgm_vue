import {createApp} from 'vue'
import app from './app.vue'
import store from "./store";
import router from './router'
import './theme/index.scss'
import './premission'
createApp(app).use(store).use(router).mount('#app')