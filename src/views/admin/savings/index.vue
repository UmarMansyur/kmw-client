<script setup lang="ts">
import Parent from '../../../components/Parent.vue';
import BreadCrumb from '../../../components/BreadCrumb.vue';
import Pagination from '../../../components/Pagination.vue';
import { onMounted, ref } from 'vue';
import usePagination from '../../../composables/pagination';
import { convertToRp, isDisableLayer, isEnableLayer } from '../../../helpers/handleEvent';
import { encrypt } from '../../../helpers/crypto';
const query = ref<string>('');

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
} = usePagination("/admin/tabungan", '', query);

onMounted(async () => {
  isEnableLayer();
  await fetchData();
  isDisableLayer();
});

const handleSearch = async () => {
  isEnableLayer();
  await search();
  isDisableLayer();
};


</script>
<template>
  <Parent>
    <BreadCrumb title="Tabungan" role="Administrator" />
    <div class="row">
      <div class="col-md-5 col-12 ">
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
      <div class="col-md-3" />
      <div class="col-md-4 col-12 ">
        <div class="form-group row">
          <label for="search" class="col-sm-2 col-2 col-form-label">Cari:
          </label>
          <div class="col-sm-10 col-10">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Masukkan kata kunci" @change="handleSearch"
                v-model="query" />
              <div class="input-group-append">
                <button class="btn btn-info" type="button" @click="handleSearch">
                  <i class="bx bx-search-alt" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-hover table-bordered">
            <thead class="align-middle">
              <tr>
                <th colspan="3" class="text-center">Jamaah</th>
                <th rowspan="2" class="text-end">Saldo</th>
                <th colspan="3" class="text-center">Aksi</th>
              </tr>
              <tr>
                <th>Kode</th>
                <th>Nama</th>
                <th>Kategori</th>
                <th class="text-center">Detail</th>
                <th class="text-center">Edit</th>
                <th class="text-center">Setoran</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, i) in result" :key="i">
                <td>{{ data.kode }}</td>
                <td>{{ data.username }}</td>
                <td>{{ data.name }}</td>
                <td class="text-end">{{ convertToRp(data.nominal) }}</td>
                <td class="text-center">
                  <RouterLink :to="`/tabungan/detail/${encrypt(data.pilgrims_id.toString())}`" type="button"
                    class="btn btn-light btn-sm waves-effect btn-label waves-light">
                    <i class="bx bx-search label-icon"></i>
                    Lihat
                  </RouterLink>
                </td>
                <td class="text-center">
                  <RouterLink :to="`/tabungan/debit/${encrypt(data.pilgrims_id.toString())}`" type="button"
                    class="btn btn-info btn-sm waves-effect btn-label waves-light">
                    <i class="bx bx-credit-card label-icon"></i>
                    Edit
                  </RouterLink>
                </td>
                <td class="text-center">
                  <RouterLink :to="`/tabungan/setor/${encrypt(data.pilgrims_id.toString())}`" type="button"
                    class="btn btn-success btn-sm waves-effect btn-label waves-light">
                    <i class="bx bx-navigation label-icon"></i>
                    Setor
                  </RouterLink>
                </td>
              </tr>
              <tr v-if="result.length == 0">
                <td colspan="7" class="text-center bg-light"> <img src="/images/error404.png" class="img-fluid">
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