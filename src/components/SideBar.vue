<template>
  <div class="vertical-menu">
    <div data-simplebar class="h-100">
      <div id="sidebar-menu">
        <ul class="metismenu list-unstyled" id="side-menu">
          <li class="text-center mt-2" id="thumbnail">
            <img src="/images/users/avatar-2.jpg" alt="thumbnail" class="img-thumbnail rounded-circle" width="90">
            <h5 class="mt-3 mb-1 text-white">Anis Sulalah</h5>
            <p class="text-white font-size-14">Administrator</p>
            <hr class="text-white">
          </li>
          <li class="menu-title">Menu</li>
          <li :class="$route.path === '/' ? 'mm-active' : ''">
            <RouterLink to="/">
              <i data-feather="home"></i>
              <span>Dashboard</span>
            </RouterLink>
          </li>
          <li :class="$route.path.includes('/tabungan') ? 'mm-active' : ''">
            <RouterLink to="/tabungan">
              <i data-feather="credit-card"></i>
              <span>Tabungan</span>
            </RouterLink>
          </li>
          <li :class="$route.path.includes('/verifikasi-pembayaran') ? 'mm-active' : ''">
            <RouterLink to="/verifikasi-pembayaran">
              <i data-feather="check-circle"></i>
              <span>Verifikasi Pembayaran</span>
            </RouterLink>
          </li>
          <li :class="$route.path.includes('/laporan') ? 'mm-active' : ''">
            <RouterLink to="/laporan">
              <i data-feather="file-text"></i>
              <span>Laporan</span>
            </RouterLink>
          </li>
          <li :class="$route.path.includes('/pemberangkatan') ? 'mm-active' : ''">
            <RouterLink to="/pemberangkatan">
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
              <li :class="$route.path.includes('/pengaturan/jamaah') ? 'mm-active' : ''">
              <RouterLink to="/pengaturan/jamaah">Jamaah</RouterLink></li>
              <li :class="$route.path.includes('/pengaturan/kategori') ? 'mm-active' : ''">
                <RouterLink to="/pengaturan/kategori">Kategori Tabungan</RouterLink></li>
              <li :class="$route.path.includes('/pengaturan/profile') ? 'mm-active' : ''">
                <RouterLink to="/pengaturan/profile">Profile</RouterLink></li>
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
onMounted(() => {
  feather.replace();
  $("#side-menu").metisMenu({
    activeClass: "mm-active",
  });
});
</script>