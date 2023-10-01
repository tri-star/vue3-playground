import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { buildRouter } from './routes'

const router = buildRouter()

const app = createApp(App)
app.use(router)

app.mount('#app')
