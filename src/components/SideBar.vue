<template>
  <div class="vertical-menu">
    <div data-simplebar class="h-100">
      <div id="sidebar-menu">
        <ul class="metismenu list-unstyled" id="side-menu">
          <li class="text-center mt-2" id="thumbnail">
            <img src="/images/users/avatar-2.jpg" alt="thumbnail" class="img-thumbnail rounded-circle" width="80">
            <h5 class="mt-3 mb-1 text-white">Administrator</h5>
            <p class="text-white font-size-14">Administrator</p>
            <hr class="text-white">
          </li>
          <li class="menu-title">Menu</li>
          <li :class="$route.path === '/dashboard' ? 'mm-active' : ''">
            <RouterLink to="/" class="waves-effect">
              <i data-feather="home"></i>
              <span>Dashboard</span>
            </RouterLink>
          </li>
          <li :class="$route.path === '/tabungan' ? 'mm-active' : ''">
            <RouterLink to="/tabungan" class="waves-effect">
              <i data-feather="credit-card"></i>
              <span>Tabungan</span>
            </RouterLink>
          </li>
          <li>
            <a href="index.html" class="waves-effect">
              <i data-feather="check-circle"></i>
              <span>Verifikasi Pembayaran</span>
            </a>
          </li>
          <li>
            <a href="index.html" class="waves-effect">
              <i data-feather="file-text"></i>
              <span>Laporan</span>
            </a>
          </li>
          <li>
            <a href="javascript: void(0);" class="has-arrow waves-effect" aria-expanded="false">
              <i data-feather="settings"></i>
              <span>Pengaturan</span>
            </a>
            <ul class="sub-menu mm-collapse">
              <li><a href="email-inbox.html">Jamaah</a></li>
              <li><a href="email-read.html">Kategori Tabungan</a></li>
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