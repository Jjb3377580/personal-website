import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

// Vue.config.productionTip = false
// Vue.prototype.$axios = axios
// axios.defaults.baseURL = '/api'        //关键代码
// Vue.config.productionTip = false

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
