import { createRouter, createWebHistory } from 'vue-router'
import Index from './pages/Index.vue'
import ObjectPage from './pages/ObjectPage.vue'
import FormContainer from './pages/form-emit/FormContainer.vue'
import FormProviderContainer from './pages/form-provider/FormProviderContainer.vue'
import StoreSampleForm from './pages/store/StoreSampleForm.vue'

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
      path: '/form-emit',
      name: 'form-emit',
      component: FormContainer
    },
    {
      path: '/form-provider',
      name: 'form-provider',
      component: FormProviderContainer
    },
    {
      path: '/store',
      name: 'store',
      component: StoreSampleForm
    }

  ]
})
