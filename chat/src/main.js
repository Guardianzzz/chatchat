import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import instanceImport from './api/axiosApi';




const app = createApp(App)

app.use(router)
app.config.globalProperties.$axios = instanceImport 
app.mount('#app')
