<script setup lang="ts">
import UserHeader from './UserHeader.vue';
import UserSideBar from './UserSideBar.vue';

</script>
<template>
  <div id="layout-wrapper">
    <UserHeader />
    <UserSideBar />
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
        <slot></slot>
        </div>

      </div>
      <!-- End Page-content -->

      <footer class="footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
            </div>
            <div class="col-sm-6">
              <div class="text-sm-end d-none d-sm-block">
                Kamilah Wisata Muslim © 2023
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style style>
body[data-sidebar="dark"] .navbar-brand-box {
  background: var(--bs-sidebar-dark-bg);
  box-shadow: none;
}
</style>