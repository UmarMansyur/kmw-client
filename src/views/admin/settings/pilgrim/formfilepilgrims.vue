<template>
  <div class="tab-pane" id="file-document">
    <div>
      <div class="text-center mb-4">
        <h5>Berkas Dokumen</h5>
        <p class="card-title-desc">Isi semua informasi di bawah ini</p>
      </div>
      <form>
        <div class="row">
          <div class="col-lg-6">
            <div class="mb-3">
              <label for="file-ktp" class="form-label">KTP: </label>
              <input type="file" class="form-control" id="file-ktp">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mb-3">
              <label for="file-kk" class="form-label">KK: </label>
              <input type="file" class="form-control" id="file-kk">
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-lg-6">
            <label for="file-nikah" class="form-label">Buku Nikah: </label>
            <input type="file" class="form-control" id="file-nikah">
          </div>
          <div class="col-lg-6">
            <label for="file-foto" class="form-label">Foto (4x3 Cm): </label>
            <input type="file" class="form-control" id="file-foto">
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-lg-6">
            <label for="file-akte" class="form-label">Akta Kelahiran: </label>
            <input type="file" class="form-control" id="file-akte">
          </div>
        </div>
      </form>
      <ul class="pager wizard twitter-bs-wizard-pager-link">
        <li class="previous"><a href="javascript: void(0);" class="btn btn-success"><i
              class="bx bx-chevron-left me-1"></i> Sebelumnya</a></li>
        <li class="next"><a href="javascript: void(0);" class="btn btn-success">Berikutnya <i
              class="bx bx-chevron-right ms-1"></i></a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useApi from '../../../../composables/api';

const { getResource } = useApi();

onMounted(async () => {
  loadCategories();
});
const categories = ref<any[]>([]);
const loadCategories = async () => {
  const response = await getResource('/saving-categories');
  categories.value = response.data.data;
}

</script>