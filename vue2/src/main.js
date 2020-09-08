import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './pages/Index.vue'
import ObjectPage from './pages/ObjectPage.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/object',
      component: ObjectPage
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
