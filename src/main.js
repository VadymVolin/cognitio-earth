import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.config.errorHandler = (err) => {
    console.log("Get error: ", err)
  }
app.mount('#app')