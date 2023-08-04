<template>
  <ParentJamaah>
    <BreadCrumb title="Dashboard" role="Jamaah" />
    <div class="row">
      <div class="col-xl-4 col-md-6">
        <div class="card card-h-100">
          <div class="card-body shadow">
            <div class="row align-items-center">
              <div class="col-6">
                <span class="text-muted mb-3 lh-1 d-block text-truncate">Kategori Tabungan</span>
                <h4 class="mb-3"><span class="counter-value">{{ data.category }}</span></h4>
              </div>
              <div class="col-6 text-end">
                <div class="avatar-md float-end">
                  <span class="avatar-title rounded-circle font-size-24 bg-success">
                    <i data-feather="award"></i>
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
                <span class="text-muted mb-3 lh-1 d-block text-truncate">Total Saldo</span>
                <h4 class="mb-3"><span class="counter-value">{{ convertToRp(data.saldo) }}</span></h4>
              </div>
              <div class="col-6 text-end">
                <div class="avatar-md float-end">
                  <span class="avatar-title rounded-circle font-size-24 bg-danger">
                    <i data-feather="credit-card"></i>
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
                <span class="text-muted mb-3 lh-1 d-block text-truncate">Rata-Rata Setoran</span>
                <h4 class="mb-3"><span class="counter-value">{{ convertToRp(data.deposit_avg) }}</span></h4>
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
  </ParentJamaah>
</template>
<script setup lang="ts">
import BreadCrumb from '../../../components/BreadCrumb.vue';
import ParentJamaah from '../../../components/ParentJamaah.vue';
import { ref, onMounted } from 'vue';
import { convertToRp, isDisableLayer, isEnableLayer } from '../../../helpers/handleEvent';
import useApi from '../../../composables/api';
const { getResource } = useApi();
onMounted(async () => {
  isEnableLayer();
  await loadData();
  isDisableLayer();
});

const data = ref<any>({});

const loadData = async () => {
  const response = await getResource('/jamaah/information');
  data.value = response.data;
}
</script>