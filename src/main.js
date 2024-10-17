

import { createApp } from 'vue'
// import './styles/element/index.scss'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './styles/common.scss'
import './styles/style.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
