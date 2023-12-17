<script setup lang="ts">
import Parent from '../../../../components/Parent.vue';
import BreadCrumb from '../../../../components/BreadCrumb.vue';
import Pagination from '../../../../components/Pagination.vue';
import Modal from '../../../../components/Modal.vue';
import Form from './Form.vue';
import usePagination from '../../../../composables/pagination';
import DisplayLimit from '../../../../components/DisplayLimit.vue';
import { onMounted, ref } from 'vue';
import { convertToRp, isDisableLayer, isEnableLayer } from '../../../../helpers/handleEvent';
import Sweet from '../../../../helpers/sweetalert2';
import useApi from '../../../../composables/api';
import Notify from '../../../../helpers/notify';
const { deleteResource, getResource } = useApi();


const query = ref<string>('');

const {
  startNumber,
  result,
  totalData,
  currentPage,
  totalPage,
  pageList,
  search,
  changeLimit,
  isFirstPage,
  isLastPage,
  nextPage,
  prevPage,
  goToPage,
  fetchData,
} = usePagination("/saving-categories", '', query);

onMounted(async () => {
  isEnableLayer();
  await fetchData();
  isDisableLayer();
});

const getLimit = (value: number) => {
  changeLimit(value);
};

const loadData = async () => {
  await fetchData();
};

const destroy = (id: string) => {
  Sweet.confirm('Apakah anda yakin ingin menghapus data ini?', async () => {
    const response = await deleteResource(`/saving-categories/${id}`);
    if (response) {
      Notify.success('Berhasil menghapus data');
      await fetchData();
    }
  });
};

const saving_category = ref<any>({});
const getSavingCategories = async (id: string) => {
  const response = await getResource('/saving-categories/' + id);
  isDisableLayer();
  if (response) {
    saving_category.value = response.data;
    saving_category.value.limit = convertToRp(response.data.limit);
  }
};

const getSearch = async () => {
  isEnableLayer();
  await search();
  isDisableLayer();
}

</script>
<template>
  <Parent>
    <BreadCrumb title="Pengaturan Kategori" role="Administrator" />
    <div class="row">
      <div class="col-md-5 col-12 ">
        <div class="form-group row">
          <DisplayLimit @limit="getLimit"></DisplayLimit>
        </div>
      </div>
      <div class="col-md-3" />
      <div class="col-md-4 col-12 ">
        <div class="form-group row">
          <label for="search" class="col-sm-2 col-2 col-form-label">Cari:
          </label>
          <div class="col-sm-10 col-10">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Masukkan kata kunci" v-model="query"
                @change="getSearch()" />
              <div class="input-group-append">
                <button class="btn btn-info" type="button" @click="getSearch()">
                  <i class="bx bx-search-alt"></i>
                </button>
                <button class="btn btn-primary ms-2" type="button" data-bs-toggle="modal" data-bs-target="#dinamyc-modal">
                  <i class="bx bx-plus"></i> Tambah
                </button>
                <Modal title="Tambah Kategori">
                  <Form :data="saving_category" @load-data="loadData()" />
                </Modal>
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
                <th class="col text-center" rowspan="2">No</th>
                <th class="col" rowspan="2">Nama Kategori</th>
                <th class="col" rowspan="2">Limit Pembayaran</th>
                <th colspan="2" class="text-center">Aksi</th>
              </tr>
              <tr class="text-center">
                <th class="col">Edit</th>
                <th class="col">Hapus</th>
              </tr>
            </thead>
            <tbody class="align-middle">
              <tr v-for="(data, i) in result" :key="data.i">
                <td class="text-center">{{ startNumber + i }}</td>
                <td>{{ data.name }}</td>
                <td>{{ convertToRp(data.limit) }}</td>
                <td class="text-center">
                  <button class="btn btn-sm btn-info" @click="getSavingCategories(data.saving_category_id)"
                    data-bs-target="#dinamyc-modal" data-bs-toggle="modal">
                    <i class="bx bx-pencil"></i> Edit
                  </button>
                </td>
                <td class="text-center">
                  <button class="btn btn-sm btn-danger" @click="destroy(data.saving_category_id)">
                    <i class="bx bx-trash"></i> Hapus
                  </button>
                </td>
              </tr>
              <tr v-if="result.length == 0">
                <td colspan="5" class="text-center bg-light">
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
      :next-page="nextPage" :page-list="pageList" :total-page="totalPage" :prev-page="prevPage" :total-data="totalData" />
</Parent></template>