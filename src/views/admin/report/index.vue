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
import DisplayLimit from '../../../components/DisplayLimit.vue';

const query = ref<string>('');
const filter = ref<string>('');
const {
  result,
  totalData,
  currentPage,
  totalPage,
  pageList,
  search,
  isFirstPage,
  isLastPage,
  nextPage,
  prevPage,
  goToPage,
  fetchData,
  changeLimit
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

async function getSearch () {
  isEnableLayer();
  await search();
  isDisableLayer();
}
const getLimit = (value: number) => {
  changeLimit(value);
};

</script>
<template>
  <Parent>
    <BreadCrumb title="Laporan" role="Administrator" />
    <div class="row">
      <div class="col-md-5 col-12 ">
        <div class="form-group row">
          <DisplayLimit @limit="getLimit"></DisplayLimit>
        </div>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-6 col-12">
        <div class="form-group row">
          <label for="search" class="col-sm-2 col-2 col-form-label d-none d-md-block">Cari:</label>
          <div class="col-sm-10 col-12">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Cari ..." @change="getSearch" v-model="query"/>
              <div class="input-group-append">
                <button class="btn btn-info" type="button" @click="getSearch">
                  <i class="bx bx-search-alt" />
                </button>
                <button class="btn btn-light ms-2" type="button" data-bs-target="#dinamyc-modal" data-bs-toggle="modal">
                  <i class="bx bx-filter" />
                </button>
                <Modal title="Filter">
                  <Form @filter="getFilter" />
                </Modal>
                <a class="btn btn-warning ms-2" type="button" :href="'report/print/' + queryFilter" target="_blank">
                  <i class="bx bx-printer "></i> <span class="d-none d-lg-inline-block">Cetak</span>
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
    <div class="col-12 ">
      <div class="alert alert-top-border alert-info">
          <p class="mb-0">
            <i class="mdi mdi-alert-circle-outline me-1"></i> <span>Jika saldo jamaah sudah melebihi batas jenis kategori tabungan, maka terdapat warna latar belakang pada baris data.</span>
          </p>
      </div>
    </div>
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-hover table-bordered font-size-13">
            <thead class="align-middle">
              <tr>
                <th class="col" rowspan="2" style="width: 17%;">Tanggal Pembayaran</th>
                <th class="col text-center" colspan="4">Jamaah</th>
                <th class="col text-center" colspan="4">Pembayaran</th>
              </tr>
              <tr>
                <th>Kode</th>
                <th>Nama Jamaah</th>
                <th>Kategori Haji/Umroh</th>
                <th class="text-end">Target Pembayaran</th>
                <th class="text-end">Debit</th>
                <th class="text-end">Kredit</th>
                <th class="text-end">Saldo</th>
                <th class="text-end">Lebih/Kurang</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, i) in result" :key="i" :class="data.limit < data.saldo ? 'bg-warning-subtle' : ''">
                <td>{{ new Date(data.created_at).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }} </td>
                <td>{{ data.kode }}</td>
                <td>{{ data.username }}</td>
                <td>{{ data.category }}</td>
                <td class="text-end">
                  {{ convertToRp(data.limit) }}
                </td>
                <td class="text-end">{{ data.nominal < 0 ? '-' : convertToRp(data.nominal) }}</td>
                <td class="text-end">
                  {{ data.nominal  < 0 ? convertToRp((data.nominal * -1).toString()) : '-' }}
                </td>
                <td class="text-end">
                  {{ convertToRp(data.saldo) }}
                </td>
                <th class="text-end text-primary" v-if="data.nominal > data.limit">
                  
                  {{ convertToRp((data.limit - data.saldo * -1).toString()) }}
                </th>
                <th class="text-end text-danger" v-else>
                  {{ convertToRp((data.limit - data.saldo).toString()) }}
                </th>
              </tr>
              <tr v-if="result.length == 0">
                <td colspan="9" class="text-center bg-light">
                  <img src="/images/error404.svg" class="img-fluid" width="400">
                  <h6>DATA TIDAK DITEMUKAN</h6>
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