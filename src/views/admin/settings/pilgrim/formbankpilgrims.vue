<template>
  <div class="tab-pane" id="bank-detail">
    <div>
      <div class="text-center mb-4">
        <h5> Formulir Pembayaran </h5>
        <p class="card-title-desc">Isi semua informasi di bawah ini</p>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="haji" class="form-label font-size-13 text-muted">Kategori Tabungan: </label>
            <select class="form-control" data-trigger name="haji" id="haji" placeholder="Pilih Jenis Kategori Tabungan">
              <option v-for="category in categories" :key="category.saving_category_id"
                :value="category.saving_category_id">
                {{ category.name }} - {{ convertToRp(category.limit) }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="bank-name" class="form-label font-size-13 text-muted">Nama Bank: </label>
            <select class="form-control" data-trigger name="bank-name" id="bank-name"
              placeholder="Pilih Jenis Kategori Tabungan">
              <option value="bni">Bank Negara Indonesia</option>
              <option value="bri">Bank Rakyat Indonesia</option>
              <option value="bca">Bank Central Asia</option>
              <option value="mandiri">Mandiri</option>
              <option value="btpn">Bank Tabungan Pensiunan Nasional</option>
              <option value="bsi">Bank Syariah Indonesia</option>
              <option value="bukopin">Bank Bukopin</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-lg-6">
          <label for="bank-account" class="form-label font-size-13 text-muted">Nomor Rekening: </label>
          <input type="text" class="form-control" id="bank-account" placeholder="Masukkan Nomor Rekening">
        </div>
        <div class="col-lg-6">
          <label for="bank-account-name" class="form-label font-size-13 text-muted">Nama Pemilik Rekening: </label>
          <input type="text" class="form-control" id="bank-account-name" placeholder="Masukkan Nama Pemilik Rekening">
        </div>
      </div>
      <ul class="pager wizard twitter-bs-wizard-pager-link">
        <li class="previous"><a href="javascript: void(0);" class="btn btn-success"><i
              class="bx bx-chevron-left me-1"></i> Sebelumnya</a></li>
        <li class="float-end">
          <a href="javascript: void(0);" class="btn btn-info" data-bs-toggle="modal" data-bs-target=".confirmModal">
            <i class="bx bx-send font-size-16"></i> Simpan
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
declare const Choices: any;
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useApi from '../../../../composables/api';
import { convertToRp } from '../../../../helpers/handleEvent';
const { getResource } = useApi();
onMounted(async () => {
  await loadCategories();
  enableChoicePlugins();
});

function enableChoicePlugins() {
  new Choices("#haji", {
    searchEnabled: true,
    allowHTML: true,
  });
  new Choices("#bank-name", {
    searchEnabled: true,
    allowHTML: true,
  });
}

const categories = ref<any[]>([]);
const loadCategories = async () => {
  const response = await getResource('/saving-categories?limit=1000');
  categories.value = response.data.data;
};

</script>