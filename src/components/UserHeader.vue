<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box" id="navbar-brand-header"
          style="background: linear-gradient(to right,#364574,#405189)">
          <a href="index.html" class="logo logo-light">
            <span class="logo-sm">
              <img src="/images/kmw.png" alt="" height="24">
            </span>
            <span class="logo-lg">
              <img src="/images/kmw.png" alt="" height="24"> <span class="logo-txt">KMW</span>
            </span>
          </a>
        </div>

        <button type="button" class="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn"
          @click="clickedSidebar()">
          <i class="fa fa-fw fa-bars"></i>
        </button>
      </div>

      <div class="d-flex">
        <div class="dropdown d-inline-block">
          <button type="button" class="btn header-item noti-icon position-relative"
            id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i data-feather="bell"></i>
            <span class="badge bg-danger rounded-pill" v-if="unreadNotification > 0">{{ unreadNotification }}</span>
          </button>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
            aria-labelledby="page-header-notifications-dropdown">
            <div class="p-3">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="m-0"> Notifikasi </h6>
                </div>
                <div class="col-auto">
                  <a href="#!" class="small text-reset text-decoration-underline"> Tidak dibaca ({{ unreadNotification
                  }})</a>
                </div>
              </div>
            </div>
            <div data-simplebar="init">
              <div class="simplebar-wrapper">
                <div class="simplebar-height-auto-observer-wrapper">
                  <div class="simplebar-height-auto-observer"></div>
                </div>
                <div class="simplebar-mask">
                  <div class="simplebar-offset">
                    <div class="simplebar-content-wrapper">
                      <div class="simplebar-content" data-simplebar style="max-height: 230px;">
                        <div class="text-reset notification-item">
                          <div class="d-flex" v-for="data in notifications" :key="data.notification_id"
                            :class="data.status == 'unread' ? 'bg-body-tertiary' : ''" style="cursor: pointer"
                            @click="readNotification(data.notification_id)">
                            <div class="flex-shrink-0 me-3">
                              <img :src="getUser.thumbnail" class="rounded-circle avatar-sm" alt="user-pic">
                            </div>
                            <div class="flex-grow-1">
                              <h6 class="mb-1">{{ getUser.name }}</h6>
                              <div class="font-size-13 text-muted">
                                <p class="mb-1">{{ data.message }}</p>
                                <p class="mb-0"><i class="mdi mdi-clock-outline"></i>
                                  <span>
                                    {{ data.created_at }}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="simplebar-placeholder"></div>
              </div>
              <div class="simplebar-track simplebar-horizontal">
                <div class="simplebar-scrollbar"></div>
              </div>
              <div class="simplebar-track simplebar-vertical">
                <div class="simplebar-scrollbar"></div>
              </div>
            </div>
            <div class="p-2 border-top d-grid">
              <a class="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                <i class="mdi mdi-arrow-right-circle me-1"></i> <span>
                  Lihat semua
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="dropdown d-inline-block">
          <button type="button" class="btn header-item bg-light-subtle border-start border-end"
            id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img class="rounded-circle header-profile-user" :src="getUser.thumbnail" alt="Header Avatar">
            <span class="d-none d-xl-inline-block ms-1 fw-medium">{{ getUser.name }}</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-end">
            <!-- item-->
            <RouterLink class="dropdown-item" to="/jamaah/pengaturan-profile"><i
                class="mdi mdi mdi-face-man font-size-16 align-middle me-1"></i> Profile</RouterLink>
            <div class="dropdown-divider"></div>
            <button @click="logout" class="dropdown-item" href="auth-logout.html"><i
                class="mdi mdi-logout font-size-16 align-middle me-1"></i>
              Logout</button>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';
import { useSessionStore } from '../stores/session';
import useApi from '../composables/api';
import Notify from '../helpers/notify';
import router from '../router';
import useNotification from '../composables/notification';
import { isDisableLayer } from '../helpers/handleEvent';
import { sessionPusher } from '../stores/pusher';
const { deleteResource, getResource } = useApi();
const { getUser, destroyUser } = useSessionStore();
const { loadNotification, notifications, unreadNotification } = useNotification();

function clickedSidebar() {
  document.body.classList.toggle("pace-done");
  document.body.classList.toggle("sidebar-enable");
  if (document.body.getAttribute('data-sidebar-size') == 'lg') {
    document.body.setAttribute("data-sidebar-size", "sm");
  } else {
    document.body.setAttribute('data-sidebar-size', 'lg');
  }
  if (window.innerWidth < 922) {
    document.body.setAttribute('data-sidebar-size', 'lg');
    document.body.classList.remove("pace-done");
  } else {
    document.getElementById('thumbnail')?.classList.toggle('d-none');

  }
}

async function logout() {
  const response = await deleteResource('/auth/logout');
  if (response) {
    Notify.success('Berhasil logout');
    sessionStorage.clear();
    destroyUser();
    router.replace('/login');
  }
}

onMounted(async () => {
  document.body.setAttribute('data-sidebar-size', 'lg');
  await loadNotification();
  if (window.innerWidth <= 992) {
    clickedSidebar();
  }
  subscribeNotification();
});


const readNotification = async (id: string) => {
  const response = await getResource('/notification/' + id);
  if (response) {
    await loadNotification();
    router.replace('/jamaah/laporan');
  }
  isDisableLayer();
};
const { getPusher } = sessionPusher();
const subscribeNotification = () => {
  const pusher: any = getPusher;
  const chanel = pusher.subscribe('testing');
  chanel.bind('event', async (_data: any) => {
    await loadNotification();
  });
  feather.replace();
  isDisableLayer();
};
</script>

<script lang="ts">
  declare const feather: any;
</script>