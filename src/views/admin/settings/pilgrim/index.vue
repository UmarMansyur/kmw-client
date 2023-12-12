<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Parent from '../../../../components/Parent.vue';
import BreadCrumb from '../../../../components/BreadCrumb.vue';
import Pagination from '../../../../components/Pagination.vue';
import usePagination from '../../../../composables/pagination';
import { encrypt } from '../../../../helpers/crypto';
import Sweet from '../../../../helpers/sweetalert2';
import useApi from '../../../../composables/api';
import Notify from '../../../../helpers/notify';
import { isDisableLayer, isEnableLayer } from '../../../../helpers/handleEvent';
const { deleteResource } = useApi();
const query = ref<string>('');

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
  search,
  fetchData,
} = usePagination("/pilgrims", '', query);

onMounted(async () => {
  isEnableLayer();
  await fetchData();
  isDisableLayer();
});

async function getSearch() {
  isEnableLayer();
  await search();
  isDisableLayer();
}

const deleteData = async (id: string) => {
  Sweet.confirm('Apakah anda yakin ingin menghapus data ini?', async () => {
    const response = await deleteResource('/users/' + id);
    if (response) {
      Notify.success('Data berhasil dihapus');
      await fetchData();
    }
  });
}
</script>
<template>
  <Parent>
    <BreadCrumb title="Pengaturan Jamaah" role="Administrator" />
    <div class="row">
      <div class="col-md-5 col-12">
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
      <div class="col-md-4 col-12">
        <div class="form-group row">
          <label for="search" class="col-sm-2 col-2 col-form-label">Cari:
          </label>
          <div class="col-sm-10 col-10">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Masukkan kata kunci" v-model="query" @change="getSearch()"/>
              <div class="input-group-append">
                <button class="btn btn-info" type="button" @click="getSearch()">
                  <i class="bx bx-search-alt" />
                </button>
                <RouterLink to="/pengaturan/jamaah/tambah" class="btn btn-primary ms-2" type="button">
                  <i class="bx bx-plus" /> Tambah
                </RouterLink>
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
                <th colspan="5" class="text-center">Jamaah</th>
                <th colspan="2" class="text-center">Aksi</th>
              </tr>
              <tr class="text-center">
                <th>Tanggal Mendaftar</th>
                <th>Kode</th>
                <th class="text-start">Nama Jamaah</th>
                <th>Kategori</th>
                <th>Alamat</th>
                <th class="col">Edit</th>
                <th class="col">Hapus</th>
              </tr>
            </thead>
            <tbody class="align-middle">
              <tr v-for="(data, i) in result" :key="i">
                <td class="text-center">{{ data.created_at.slice(0, 10) }}</td>
                <td class="text-center">{{ data.kode }}</td>
                <td>{{ data.username }}</td>
                <td class="text-center">
                  <span class="badge bg-success font-size-12">{{ data.name }}</span>
                </td>
                <td>{{ data.address }}</td>
                <td class="text-center">
                  <RouterLink :to="`/pengaturan/jamaah/edit/${encrypt(data.user_account_id.toString())}`" class="btn btn-info">
                    <i class="bx bx-pencil"></i> Edit
                  </RouterLink>
                </td>
                <td class="text-center">
                  <button class="btn btn-danger" @click="deleteData(data.user_account_id)">
                    <i class="bx bx-trash"></i> Hapus
                  </button>
                </td>
              </tr>
              <tr v-if="result.length === 0">
                <td colspan="7" class="text-center bg-light">
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
      :next-page="nextPage" :page-list="pageList" :total-page="totalPage" :prev-page="prevPage" :total-data="totalData" v-if="result.length > 0" />
  </Parent>
</template>