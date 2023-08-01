import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useSessionStore } from '../stores/session';
import useToken from '../composables/token';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/admin/dashboard/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/authentication/Login.vue'),
  },
  {
    path: '/register',
    name: 'Registrasi',
    component: () => import('../views/authentication/Register.vue'),
  },
  {
    path: '/tabungan',
    name: 'Tabungan',
    component: () => import('../views/admin/savings/index.vue'),
  },
  {
    path: '/tabungan/detail/:id',
    name: 'Detail Tabungan',
    component: () => import('../views/admin/savings/detail.vue'),
  },
  {
    path: '/tabungan/setor/:id',
    name: 'Setor Tabungan',
    component: () => import('../views/admin/savings/deposit.vue'),
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
    path: '/pemberangkatan',
    name: 'Pemberangkatan',
    component: () => import('../views/admin/departure/index.vue'),
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
  },
  {
    path: '/pengaturan/jamaah/tambah',
    name: 'Tambah jamaah',
    component: () => import('../views/admin/settings/pilgrim/add.vue'),
  },
  {
    path: '/pengaturan/jamaah/edit/:id',
    name: 'Edit jamaah',
    component: () => import('../views/admin/settings/pilgrim/edit.vue'),
  },
  {
    path: '/pengaturan/profile',
    name: 'Profile',
    component: () => import('../views/admin/profile/index.vue'),
  },
  {
    path: '/jamaah/',
    name: 'Dashboard Jamaah',
    component: () => import('../views/pilgrim/dashboard/index.vue'),
  },
  {
    path: '/jamaah/setoran',
    name: 'Setoran Jamaah',
    component: () => import('../views/pilgrim/deposit/index.vue'),
  },
  {
    path: '/jamaah/laporan',
    name: 'Laporan Jamaah',
    component: () => import('../views/pilgrim/report/index.vue'),
  },
  {
    path: '/jamaah/pemberangkatan',
    name: 'Pemberangkatan Jamaah',
    component: () => import('../views/pilgrim/departure/index.vue'),
  },
  {
    path: '/jamaah/pengaturan-profile',
    name: 'Pengaturan Profile Jamaah',
    component: () => import('../views/pilgrim/settings/biodata/index.vue'),
  },
  // handle 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/error/404.vue'),
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  document.title = to.name as string;
  const { setUser, getUser } = useSessionStore();
  const { decodeToken } = useToken();
  if (to.name != 'Login' && (!sessionStorage.getItem('token') || sessionStorage.getItem('token')!.length <= 13)) {
    return { path: '/login' };
  }

  if (sessionStorage.getItem('token') && to.name == 'Login') {
    return { path: '/' };
  }
  if (to.name != 'login' && to.name != 'NotFound') {
    if (getUser.id === 0) {
      await setUser();
    }
  }

});

export default router;