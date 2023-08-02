<template>
  <div class="tab-pane" id="file-document">
    <div>
      <div class="text-center mb-4">
        <h5>Berkas Dokumen</h5>
        <p class="card-title-desc">Isi semua informasi di bawah ini</p>
      </div>
      <div class="mb-4 alert alert-danger alert-top-border text-center">
        <i class="mdi mdi-alert-circle-outline me-2"></i>
        <strong>Info!</strong> File yang diupload harus berformat .jpg, .jpeg, .png, .pdf, dan ukuran maksimal untuk
        setiap file adalah 500kb.
      </div>
      <form>
        <div class="row mb-3">
          <div class="col-lg-6">
            <label for="file-ktp" class="form-label">KTP: </label>
            <input type="file" class="form-control" id="file-ktp" @change="getKtp">
          </div>
          <div class="col-lg-6">
            <label for="file-kk" class="form-label">KK: </label>
            <input type="file" class="form-control" id="file-kk" @change="getKk">
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-lg-6">
            <label for="file-akte" class="form-label">Akta Kelahiran: </label>
            <input type="file" class="form-control" id="file-akte" @change="getAkte">
          </div>
          <div class="col-lg-6">
            <label for="file-foto" class="form-label">Foto (4x3 Cm): </label>
            <input type="file" class="form-control" id="file-foto" @change="getFoto">
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-lg-6">
            <label for="file-nikah" class="form-label">Buku Nikah: <sup class="text-danger">* Opsional</sup> </label>
            <input type="file" class="form-control" id="file-nikah" @change="getNikah">
          </div>
        </div>
      </form>
      <ul class="pager wizard twitter-bs-wizard-pager-link">
        <li class="previous"><a href="javascript: void(0);" class="btn btn-success"><i
              class="bx bx-chevron-left me-1"></i> Sebelumnya</a></li>
        <li class="next"><a href="javascript: void(0);" class="btn btn-success" @click="next">Berikutnya <i
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
};

const ktp = ref<any>(null);
const getKtp = (event: any) => {
  ktp.value = event.target.files[0];
};

const kk = ref<any>(null);
const getKk = (event: any) => {
  kk.value = event.target.files[0];
};

const foto = ref<any>(null);
const getFoto = (event: any) => {
  foto.value = event.target.files[0];
};

const akte = ref<any>(null);
const getAkte = (event: any) => {
  akte.value = event.target.files[0];
};

const nikah = ref<any>(null);
const getNikah = (event: any) => {
  nikah.value = event.target.files[0];
}

const emit = defineEmits(['next']);
const next = () => {
  const data: any = {};
  if (ktp.value) {
    data.ktp = ktp.value;
  }
  if (kk.value) {
    data.kk = kk.value;
  }
  if (foto.value) {
    data.foto = foto.value;
  }
  if (akte.value) {
    data.akte = akte.value;
  }
  if(nikah.value) {
    data.nikah = nikah.value;
  }

  emit('next', data);
}



</script>