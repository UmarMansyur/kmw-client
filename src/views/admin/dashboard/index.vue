<script setup lang="ts">
import Parent from '../../../components/Parent.vue';
import BreadCrumb from '../../../components/BreadCrumb.vue';
</script>
<template>
  <Parent>
    <BreadCrumb />
    <div class="row">
      <div class="col-xl-4 col-md-6">
        <div class="card card-h-100">
          <div class="card-body shadow">
            <div class="row align-items-center">
              <div class="col-6">
                <span class="text-muted mb-3 lh-1 d-block text-truncate">Belum Diverfikasi</span>
                <h4 class="mb-3"><span class="counter-value">48</span></h4>
              </div>
              <div class="col-6 text-end">
                <div class="avatar-md float-end">
                  <span class="avatar-title rounded-circle font-size-24 bg-success">
                    <i data-feather="dollar-sign"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="text-nowrap">
              <span class="badge bg-success text-white">{{ new Date().toISOString().slice(0, 10) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-6">
        <div class="card card-h-100">
          <div class="card-body shadow">
            <div class="row align-items-center">
              <div class="col-6">
                <span class="text-muted mb-3 lh-1 d-block text-truncate">Jamaah</span>
                <h4 class="mb-3"><span class="counter-value">48</span></h4>
              </div>
              <div class="col-6 text-end">
                <div class="avatar-md float-end">
                  <span class="avatar-title rounded-circle font-size-24 bg-danger">
                    <i data-feather="users"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="text-nowrap">
              <span class="badge bg-success text-white">{{ new Date().toISOString().slice(0, 10) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-6">
        <div class="card card-h-100">
          <div class="card-body shadow">
            <div class="row align-items-center">
              <div class="col-6">
                <span class="text-muted mb-3 lh-1 d-block text-truncate">Pendapatan</span>
                <h4 class="mb-3"><span class="counter-value">48</span></h4>
              </div>
              <div class="col-6 text-end">
                <div class="avatar-md float-end">
                  <span class="avatar-title rounded-circle font-size-24 bg-warning">
                    <i data-feather="upload-cloud"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="text-nowrap">
              <span class="badge bg-success text-white">{{ new Date().toISOString().slice(0, 10) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Parent>
</template>
