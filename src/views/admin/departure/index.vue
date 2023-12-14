<script setup lang="ts">
import Parent from '../../../components/Parent.vue';
import BreadCrumb from '../../../components/BreadCrumb.vue';
import Pagination from '../../../components/Pagination.vue';
import Modal from '../../../components/Modal.vue';
import Form from './Form.vue';
import usePagination from '../../../composables/pagination';
import { ref, onMounted } from 'vue';
import { isDisableLayer, isEnableLayer } from '../../../helpers/handleEvent';
import useApi from '../../../composables/api';
import Notify from '../../../helpers/notify';
import DisplayLimit from '../../../components/DisplayLimit.vue';
const { putResource } = useApi();
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
  changeLimit
} = usePagination("/admin/departure", '', query);

onMounted(async () => {
  isEnableLayer();
  await fetchData();
  isDisableLayer();
});

const id = ref<string>('');
const getData = async (value: any) => {
  isEnableLayer();
  const response = await putResource('/admin/departure/', {
    id: id.value,
    time: value
  });
  if (response) {
    Notify.success('Berhasil mengatur waktu pemberangkatan');
  }
  await fetchData();
  isDisableLayer();
};

const time = ref<string>('');

const edit = (i: string) => {
  id.value = i;
  time.value = result.value.find((data: any) => data.id === i).waktu_keberangkatan.split(' ')[0];
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
    <BreadCrumb title="Pengaturan Jamaah" role="Administrator" />
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
              <input type="text" class="form-control" placeholder="Masukkan kata kunci" v-model="query" @change="getSearch" />
              <div class="input-group-append">
                <button class="btn btn-info" type="button" @click="getSearch">
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
              <tr class="text-center">
                <th>Tanggal Mendaftar</th>
                <th>Tanggal Lunas</th>
                <th>Kode</th>
                <th class="text-start">Nama Jamaah</th>
                <th>Kategori</th>
                <th>Alamat</th>
                <th class="col">Aksi</th>
              </tr>
            </thead>
            <tbody class="align-middle">
              <tr v-for="data in result" :key="data.id">
                <td>{{ data.tanggal_mendaftar }}</td>
                <td>{{ data.tanggal_lunas }}</td>
                <td>{{ data.kode }}</td>
                <td>{{ data.nama }}</td>
                <td class="text-center">{{ data.kategori }}</td>
                <td>{{ data.alamat }}</td>
                <td class="text-center">

                  <button class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#dinamyc-modal"
                    @click="edit(data.id)" v-if="data.waktu_keberangkatan">
                    <i class="bx bx-pencil"></i>
                  </button>
                  <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#dinamyc-modal"
                    @click="id = data.id" v-else>
                    <i class="bx bx-calendar"></i> Atur
                  </button>
                </td>
              </tr>
              <tr v-if="result.length == 0">
                <td colspan="7" class="text-center bg-light">
                  <img src="/images/error404.svg" class="img-fluid" width="400">
                  <h6>DATA TIDAK DITEMUKAN</h6>
                </td>
              </tr>
            </tbody>
          </table>
          <Modal title="Atur Pemberangkatan">
            <Form @save="getData" :waktu="time" />
          </Modal>
        </div>
      </div>
    </div>
    <Pagination :current-page="currentPage" :is-first-page="isFirstPage" :is-last-page="isLastPage" :go-to="goToPage"
      :next-page="nextPage" :page-list="pageList" :total-page="totalPage" :prev-page="prevPage" :total-data="totalData"
      v-if="result.length > 0" />
  </Parent>
</template>