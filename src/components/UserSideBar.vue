<template>
  <div class="vertical-menu">
    <div data-simplebar class="h-100 " style="background: linear-gradient(to right,#364574,#405189)">
      <div id="sidebar-menu">
        <ul class="metismenu list-unstyled" id="side-menu">
          <li class="text-center mt-2" id="thumbnail">
            <img :src="getUser.thumbnail" alt="thumbnail" class="img-thumbnail avatas-xs rounded-circle" width="90">
            <h5 class="mt-3 mb-1 text-white">{{ getUser.name }}</h5>
            <p class="text-white font-size-14">{{ getUser.role == 'jamaah' ? 'Jamaah' : '' }}</p>
            <hr class="text-white">
          </li>
          <li class="menu-title">Menu</li>
          <li :class="$route.path === '/jamaah' ? 'mm-active' : ''">
            <RouterLink to="/jamaah">
              <i data-feather="home"></i>
              <span>Dashboard</span>
            </RouterLink>
          </li>
          <li :class="$route.path.includes('/jamaah/setoran') ? 'mm-active' : ''">
            <RouterLink to="/jamaah/setoran">
              <i data-feather="credit-card"></i>
              <span>Setoran</span>
            </RouterLink>
          </li>
          <li :class="$route.path.includes('/jamaah/laporan') ? 'mm-active' : ''">
            <RouterLink to="/jamaah/laporan">
              <i data-feather="file-text"></i>
              <span>Laporan</span>
            </RouterLink>
          </li>
          <li :class="$route.path.includes('/jamaah/pemberangkatan') ? 'mm-active' : ''">
            <RouterLink to="/jamaah/pemberangkatan">
              <i data-feather="award"></i>
              <span>Pemberangkatan</span>
            </RouterLink>
          </li>
          <li :class="$route.path.includes('/pengaturan') ? 'mm-active' : ''">
            <a href="javascript: void(0);" class="has-arrow waves-effect" aria-expanded="false">
              <i data-feather="settings"></i>
              <span>Pengaturan</span>
            </a>
            <ul class="sub-menu mm-collapse">
              <li :class="$route.path.includes('/pengaturan-profile') ? 'mm-active' : ''">
                <RouterLink to="/jamaah/pengaturan-profile">Profile</RouterLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
declare const $: any;
declare const feather: any;
</script>


<script setup lang="ts">
import { onMounted } from "vue";
import { useSessionStore } from "../stores/session";
const { getUser } = useSessionStore();
onMounted(() => {
  feather.replace();
  $("#side-menu").metisMenu({
    activeClass: "mm-active",
  });
});
</script>