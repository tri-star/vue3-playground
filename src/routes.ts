import { createRouter, createWebHistory } from 'vue-router';

import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'top',
    path: '/',
    component: () => import('@/pages/index.vue'),
  },
  {
    name: 'alert',
    path: '/alert',
    component: () => import('@/pages/alert/index.vue'),
  },
];

export function buildRouter() {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  return router;
}
