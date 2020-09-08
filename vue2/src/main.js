import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './pages/Index.vue'
import FormContainer from './pages/FormContainer.vue'
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
    },
    {
      path: '/form',
      component: FormContainer
    }

  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
