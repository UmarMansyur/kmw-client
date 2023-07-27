import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/admin/dashboard/index.vue'),
  },
  {
    path: '/tabungan',
    name: 'Tabungan',
    component: () => import('../views/admin/savings/index.vue'),
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'mm-active',
  linkExactActiveClass: 'mm-active',
});


export default router;