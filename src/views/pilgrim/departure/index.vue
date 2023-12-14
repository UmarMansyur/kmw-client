<template>
  <ParentJamaah>
    <BreadCrumb title="Pemberangkatan" role="Jamaah" />
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
                      <h3 class="text-white mb-0">{{ data.tgl_daftar ? getDate(data.tgl_daftar) : '?' }}</h3>
                      <p class="mb-0 text-white">{{ data.tgl_daftar ? getMonth(data.tgl_daftar) : '?' }}</p>
                    </div>
                    <div class="event-content">
                      <div class="timeline-text">
                        <h3 class="font-size-18">Tanggal Mendaftar</h3>
                        <p class="mb-0 mt-2 pt-1 text-muted">{{ data.tgl_daftar ? getDay(data.tgl_daftar) : 'Belum ada data' }}</p>
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
                      <h3 class="text-white mb-0">{{ data.tgl_berangkat ? getDate(data.tgl_lunas) : '?' }}</h3>
                      <p class="mb-0 text-white">{{ data.tgl_berangkat ? getMonth(data.tgl_lunas) : '?' }}</p>
                    </div>
                    <div class="event-content">
                      <div class="timeline-text">
                        <h3 class="font-size-18">Tanggal Setoran Lunas</h3>
                        <p class="mb-0 mt-2 pt-1 text-muted">{{ data.tgl_berangkat ? getDay(data.tgl_lunas) : 'Belum Lunas' }}</p>
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
                      <h3 class="text-white mb-0">{{ data.tgl_berangkat ? getDate(data.tgl_berangkat) : '?' }}</h3>
                      <p class="mb-0 text-white">{{ data.tgl_berangkat ? getMonth(data.tgl_berangkat) : '?' }}</p>
                    </div>
                    <div class="event-content">
                      <div class="timeline-text">
                        <h3 class="font-size-18">Tanggal Pemberangkatan</h3>
                        <p class="mb-0 mt-2 pt-1 text-muted">{{ data.tgl_berangkat ? getDay(data.tgl_berangkat) : 'Belum ada data' }}</p>
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
import useApi from '../../../composables/api';
import { onMounted, ref } from 'vue';
import { isDisableLayer, isEnableLayer } from '../../../helpers/handleEvent';
const { getResource } = useApi();

onMounted(async () => {
  isEnableLayer();
  await loadData();
  isDisableLayer();
});
const data:any = ref<any>({});
const loadData = async () => {
  const response = await getResource('/jamaah/information/departure');
  data.value = response.data;
}

const getMonth = (date: string) => {
  return new Date(date).toLocaleDateString('id-ID', { month: 'short' });
}

const getDate = (date: string) => {
  return new Date(date).toLocaleDateString('id-ID', { day: 'numeric' });
}

const getDay = (date: string) => {
  return new Date(date).toLocaleDateString('id-ID');
}

</script>