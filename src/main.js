import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
  

data: {
    auth:{}
}



app.use(createPinia())
app.use(router)

app.mount('#app')
