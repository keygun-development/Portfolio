import { createApp } from 'vue'
import App from './App.vue';
import './styles/main.scss'
import './font-awesome.ts'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')
