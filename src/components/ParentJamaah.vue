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

<style>
.navbar-brand-box {
  /* box-shadow: 0 1px 1px linear-gradient(to right,#364574,#405189); */
}
</style>