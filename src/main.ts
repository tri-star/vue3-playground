import { createApp } from 'vue'
import App from './App.vue'
import {route} from './routes'

createApp(App)
.use(route)
.mount('#app')
