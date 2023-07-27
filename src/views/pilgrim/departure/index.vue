<template>
<ParentJamaah>
  <BreadCrumb title="Pemberangkatan" role="Jamaah"/>
  <div class="row justify-content-center">
    <div class="col-xl-10">
      <div class="timeline">
        <div class="timeline-container">
          <div class="timeline-end">
            <p>Start</p>
          </div>
          <div class="timeline-continue">
            <div class="row timeline-right">
              <div class="col-md-6">
                <div class="timeline-icon">
                  <i class="bx bx-file text-primary h2 mb-0"></i>
                </div>
              </div>
              <div class="col-md-6">
                <div class="timeline-box">
                  <div class="timeline-date bg-info text-center rounded">
                    <h3 class="text-white mb-0">23</h3>
                    <p class="mb-0 text-white-50">June</p>
                  </div>
                  <div class="event-content">
                    <div class="timeline-text">
                      <h3 class="font-size-18">Mendaftar Haji</h3>
                      <p class="mb-0 mt-2 pt-1 text-muted">
                        Anda telah mendaftar haji pada tanggal 23 Juni 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row timeline-left">
              <div class="col-md-6 d-md-none d-block">
                <div class="timeline-icon">
                  <i class="bx bx-user-pin text-primary h2 mb-0"></i>
                </div>
              </div>
              <div class="col-md-6">
                <div class="timeline-box">
                  <div class="timeline-date bg-warning text-center rounded">
                    <h3 class="text-white mb-0">?</h3>
                    <p class="mb-0 text-white-50">?</p>
                  </div>
                  <div class="event-content">
                    <div class="timeline-text">
                      <h3 class="font-size-18">Tanggal Setoran Lunas</h3>
                      <p class="mb-0 mt-2 pt-1 text-muted">Belum ada tanggal lunas</p>

                      <div class="d-flex flex-wrap align-items-start event-img mt-3 gap-2">
                        <img src="/images/small/img-2.jpg" alt="" class="img-fluid rounded" width="60">
                        <img src="/images/small/img-5.jpg" alt="" class="img-fluid rounded" width="60">
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="col-md-6 d-md-block d-none">
                <div class="timeline-icon">
                  <i class="bx bx-check text-primary h2 mb-0"></i>
                </div>
              </div>
            </div>

            <div class="row timeline-right">
              <div class="col-md-6">
                <div class="timeline-icon">
                  <i class="bx bx-send text-primary h2 mb-0"></i>
                </div>
              </div>
              <div class="col-md-6">
                <div class="timeline-box">
                  <div class="timeline-date bg-danger text-center rounded">
                    <h3 class="text-white mb-0">?</h3>
                    <p class="mb-0 text-white-50">?</p>
                  </div>
                  <div class="event-content">
                    <div class="timeline-text">
                      <h3 class="font-size-18">Tanggal Pemberangkatan</h3>
                      <p class="mb-0 mt-2 pt-1 text-muted">Belum ditenetukan tanggal pemberangkatan</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="timeline-start">
            <p>End</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</ParentJamaah>
</template>

<script setup lang="ts">
  import BreadCrumb from '../../../components/BreadCrumb.vue';
import ParentJamaah from '../../../components/ParentJamaah.vue';
</script>