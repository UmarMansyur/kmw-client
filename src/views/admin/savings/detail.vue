<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BreadCrumb from '../../../components/BreadCrumb.vue';
import Parent from '../../../components/Parent.vue';
import useApi from '../../../composables/api';
import { convertToRp, isDisableLayer, isEnableLayer } from '../../../helpers/handleEvent';
import { useRoute } from 'vue-router';
import { decrypt, encrypt } from '../../../helpers/crypto';
const { getResource } = useApi();
const route = useRoute();
const id = ref<string>('');
onMounted(async () => {
  isEnableLayer();
  id.value = decrypt(route.params.id.toString());
  await loadData();
  isDisableLayer();
});

const data = ref<any>({});

const loadData = async () => {
  const response = await getResource('/admin/tabungan/' + id.value);
  if(response) {
    data.value = response.data;
    data.value.thumbnail = import.meta.env.VITE_API_KMW + '/' + response.data.thumbnail;
  }
}
</script>
<template>
  <Parent>
    <BreadCrumb title="Detail Tabungan" role="Administrator" />
    <div class="row my-2">
      <div class="col-12 text-end">
        <button class="btn btn-outline-success" @click="() => $router.go(-1)">Kembali
        </button>
        <RouterLink :to="`/tabungan/setor/${encrypt(id)}`" class="btn btn-primary ms-2">
          <i class="bx bx-send"></i> Setor Tabungan
        </RouterLink>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-3 mx-auto text-center mb-2">
        <img :src="data.thumbnail" alt="" class="img-thumbnail">
      </div>
      <div class="col-xl-9">
        <div class="row">
          <div class="col-md-3 col-5">
            <h6>Nama Lengkap </h6>
          </div>
          <div class="col-md-9 col-6">
            <p>: {{ data.username }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-5">
            <h6>Kode </h6>
          </div>
          <div class="col-md-9 col-6">
            <p>: {{ data.kode }} </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-5">
            <h6>No. Rekening </h6>
          </div>
          <div class="col-md-9 col-6">
            <p>: {{ data.no_rekening }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-5">
            <h6>Kategori</h6>
          </div>
          <div class="col-md-9 col-6">
            <p>: {{data.name}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-5">
            <h6>Tanggal Mendaftar </h6>
          </div>
          <div class="col-md-9 col-6">
            <p>: {{ data.created_at }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-5">
            <h6>Alamat </h6>
          </div>
          <div class="col-md-9 col-6">
            <p>: {{ data.address }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-5">
            <h6>Saldo </h6>
          </div>
          <div class="col-md-9 col-6">
            <p>: {{ convertToRp(data.nominal) }}</p>
          </div>
        </div>
      </div>
    </div>

  </Parent>
</template>