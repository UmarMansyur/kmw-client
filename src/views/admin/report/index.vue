<script setup lang="ts">
import Parent from '../../../components/Parent.vue';
import BreadCrumb from '../../../components/BreadCrumb.vue';
import Pagination from '../../../components/Pagination.vue';
import Modal from '../../../components/Modal.vue';
import Form from './Form.vue';
import usePagination from '../../../composables/pagination';
import { ref, onMounted } from 'vue';
import { convertToRp, isDisableLayer, isEnableLayer } from '../../../helpers/handleEvent';
import axios from 'axios';

const query = ref<string>('');
const filter = ref<string>('');
const {
  result,
  totalData,
  currentPage,
  totalPage,
  pageList,
  isFirstPage,
  isLastPage,
  nextPage,
  prevPage,
  goToPage,
  fetchData,
} = usePagination("/report", filter, query);

onMounted(async () => {
  isEnableLayer();
  await fetchData();
  isDisableLayer();
});


let queryFilter = '';
const getFilter = async (value: any) => {
  filter.value = '?start_date=' + value.start_date + '&end_date=' + value.end_date + '&category=' + value.category + '&type=' + value.status;
  queryFilter = filter.value;
  await fetchData();
};

const download = async () => {
  isEnableLayer();
  const { data: response } = await axios.get(import.meta.env.VITE_API_KMW + '/report/export' + queryFilter);
  if (response) {
    setTimeout(() => {
      window.open(import.meta.env.VITE_API_KMW + '/' + response.data.filename, '_blank');
      isDisableLayer();
    }, 10);
  }
}

</script>
<template>
  <Parent>
    <BreadCrumb title="Laporan" role="Administrator" />
    <div class="row">
      <div class="col-md-5 col-12 d-none d-lg-block">
        <div class="form-group row">
          <label for="search" class="col-md-2 col-4 col-form-label">Tampilkan:
          </label>
          <div class="col-md-3 col-8">
            <div class="input-group mb-3">
              <select class="form-select">
                <option value="1">10</option>
                <option value="2">25</option>
                <option value="3">50</option>
                <option value="4">100</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-6 col-12">
        <div class="form-group row">
          <label for="search" class="col-sm-2 col-2 col-form-label">Cari:
          </label>
          <div class="col-sm-10 col-10">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Masukkan kata kunci" />
              <div class="input-group-append">
                <button class="btn btn-info" type="button">
                  <i class="bx bx-search-alt" />
                </button>
                <button class="btn btn-light ms-2" type="button" data-bs-target="#dinamyc-modal" data-bs-toggle="modal">
                  <i class="bx bx-filter" />
                </button>
                <Modal title="Filter">
                  <Form @filter="getFilter" />
                </Modal>
                <a class="btn btn-warning ms-2" type="button" :href="'report/print/' + queryFilter" target="_blank">
                  <i class="bx bx-printer"></i> Cetak
                </a>
                <button class="btn btn-success ms-2" type="button" @click="download">
                  <i class="bx bx-download"></i>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
    <div class="col-12 d-none d-lg-block">
      <div class="alert alert-top-border alert-info">
          <p class="mb-0">
            <i class="mdi mdi-alert-circle-outline me-1"></i> <span>Jika saldo jamaah sudah melebihi batas jenis kategori tabungan, maka terdapat warna latar belakang pada baris data.</span>
          </p>
      </div>
    </div>
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-hover table-bordered">
            <thead class="align-middle">
              <tr>
                <th class="col" rowspan="2" style="width: 17%;">Tanggal Pembayaran</th>
                <th class="col text-center" colspan="2">Jamaah</th>
                <th class="col text-center" colspan="2">Pembayaran</th>
              </tr>
              <tr>
                <th>Kode</th>
                <th>Nama Jamaah</th>
                <th class="text-end">Debit</th>
                <th class="text-end">Saldo</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, i) in result" :key="i" :class="data.limit < data.nominal_saldo ? 'bg-warning-subtle' : ''">
                <td>{{ data.created_at.slice(0, 10) }}</td>
                <td>{{ data.kode }}</td>
                <td>{{ data.username }}</td>
                <td class="text-end">{{ convertToRp(data.nominal) }}</td>
                <td class="text-end">
                  {{ convertToRp(data.nominal_saldo) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <Pagination :current-page="currentPage" :is-first-page="isFirstPage" :is-last-page="isLastPage" :go-to="goToPage"
      :next-page="nextPage" :page-list="pageList" :total-page="totalPage" :prev-page="prevPage" :total-data="totalData"
      v-if="result.length > 0" />
  </Parent>
</template>