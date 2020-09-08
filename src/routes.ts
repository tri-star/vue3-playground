import { createRouter, createWebHistory } from 'vue-router'
import Index from './pages/Index.vue'
import ObjectPage from './pages/ObjectPage.vue'
import FormContainer from './pages/FormContainer.vue'

export const routerHistory = createWebHistory()


export const route = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/object',
      name: 'object',
      component: ObjectPage
    },
    {
      path: '/form',
      name: 'form',
      component: FormContainer
    }

  ]
})
