import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/index.vue'),
    },
    {
      name: 'sub-grid',
      path: '/sub-grid',
      component: () => import('@/pages/sub-grid/sub-grid.vue'),
    },
  ],
})
