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
  },
  {
    path: '/verifikasi-pembayaran',
    name: 'Verifikasi Pembayaran',
    component: () => import('../views/admin/payment/index.vue'),
  },
  {
    path: '/laporan',
    name: 'Laporan',
    component: () => import('../views/admin/report/index.vue'),
  },
  {
    path: '/pengaturan/kategori',
    name: 'Pengaturan Kategori',
    component: () => import('../views/admin/settings/category/index.vue'),
  },
  {
    path: '/pengaturan/jamaah',
    name: 'Pengaturan jamaah',
    component: () => import('../views/admin/settings/pilgrim/index.vue'),
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'mm-active',
  linkExactActiveClass: 'mm-active',
});


export default router;