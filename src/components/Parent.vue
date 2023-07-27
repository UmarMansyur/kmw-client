<script setup lang="ts">
import Sidebar from './Sidebar.vue';
import BreadCrumb from './BreadCrumb.vue';
import Header from './Header.vue';
</script>


<template>
  <div id="layout-wrapper">
    <Header />
    <Sidebar />
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
    <!-- end main content-->

  </div>
</template>