<script setup lang="ts">
import Parent from '../../../components/Parent.vue';
import BreadCrumb from '../../../components/BreadCrumb.vue';
import Pagination from '../../../components/Pagination.vue';
import { onMounted, ref } from 'vue';
import usePagination from '../../../composables/pagination';
import { convertToRp, isDisableLayer, isEnableLayer } from '../../../helpers/handleEvent';
import Modal from '../../../components/Modal.vue';
import useApi from '../../../composables/api';
import Notify from '../../../helpers/notify';
import { sessionPusher } from '../../../stores/pusher';
import DisplayLimit from '../../../components/DisplayLimit.vue';

const { getResource, putResource } = useApi();


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
} = usePagination("/admin/verifikasi", '', query);

onMounted(async () => {
  isEnableLayer();
  await fetchData();
  await subscribeNotification();
  isDisableLayer();
});

const handleSearch = async () => {
  isEnableLayer();
  await search();
  isDisableLayer();
};

const image = ref<string>('');

const handleImage = async (i: any) => {
  isEnableLayer();
  declineClick.value = false;
  const response = await getResource('/admin/verifikasi/gambar/' + i);
  image.value = import.meta.env.VITE_API_KMW + '/' + response.data.file;
  const exist: any = document.getElementById('img-modal-bukti');
  isDisableLayer();
  if (exist) {
    exist.src = image.value;
    return;
  }
  const imageElement = document.createElement('img');
  imageElement.src = image.value;
  imageElement.classList.add('img-thumbnail');
  imageElement.id = 'img-modal-bukti';
  const dinamycModal = document.getElementById('img-center-modal');


  dinamycModal?.appendChild(imageElement);
};

const acceptVerification = async (i: any) => {
  isEnableLayer();
  const response = await putResource('/admin/verifikasi/' + i, {
    type: 'diverifikasi',
  });
  if (response) {
    Notify.success('Berhasil memverifikasi pembayaran');
  }
  await fetchData();
  isDisableLayer();
};

const comment = ref<string>('');
const declineClick = ref(false);

const declineVerification = async () => {
  isEnableLayer();
  const response = await putResource('/admin/verifikasi/' + id.value, {
    type: 'ditolak',
    comment: comment.value
  });
  id.value = '';
  if (response) {
    Notify.success('Berhasil menolak setoran');
  }
  comment.value = '';
  await fetchData();
  isDisableLayer();
};
const id = ref<string>('');
const handleDeclineClick = (i: string) => {
  declineClick.value = true;
  id.value = i;
}

const { getPusher } = sessionPusher();
const subscribeNotification = async () => {
  isEnableLayer();
  const pusher: any = getPusher;
  const chanel = pusher.subscribe('testing');
  chanel.bind('event', async (_data: any) => {
    await fetchData();
  });
  feather.replace();
  isDisableLayer();
};

const getLimit = (value: number) => {
  changeLimit(value);
};


</script>

<script lang="ts">
  declare const feather: any;
</script>
<template>
  <Parent>
    <BreadCrumb title="Verifikasi Pembayaran" role="Administrator" />
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
                @change="handleSearch" />
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
                <th class="col text-center" colspan="2">Jamaah</th>
                <th class="col text-center" colspan="2">Pembayaran</th>
                <th class="col text-center" colspan="2">Aksi</th>
              </tr>
              <tr>
                <th>Kode</th>
                <th>Nama Jamaah</th>
                <th class="text-end">Jumlah Setoran</th>
                <th class="text-center">Bukti Pembayaran</th>
                <th class="text-center">Tolak</th>
                <th class="text-center">Terima</th>
              </tr>
            </thead>
            <tbody class="align-middle">
              <tr v-for="(data, i) in result" :key="i">
                <td>{{ data.kode }}</td>
                <td>{{ data.username }}</td>
                <td class="text-end">{{ convertToRp(data.nominal) }}</td>
                <td class="text-center">
                  <button type="button" class="btn btn-info waves-effect btn-label waves-light"
                    data-bs-target="#dinamyc-modal" data-bs-toggle="modal" @click="handleImage(data.transactional_savings_id)">
                    <i class="bx bx-file label-icon"></i> File</button>
                </td>
                <td class="text-center">
                  <button type="button" class="btn btn-danger waves-effect btn-label waves-light"
                    data-bs-target="#dinamyc-modal" data-bs-toggle="modal" @click="handleDeclineClick(data.transactional_savings_id)">
                    <i class="bx bx-x label-icon"></i> Tolak</button>
                </td>
                <td class="text-center">
                  <button type="button" class="btn btn-success waves-effect btn-label waves-light"
                    @click="acceptVerification(data.transactional_savings_id)"><i class="bx bx-check-double label-icon"></i>
                    Terima</button>
                </td>
              </tr>
              <tr v-if="result.length == 0">
                <td colspan="6" class="text-center bg-light"> <img src="/images/error404.svg" class="img-fluid" width="400">
                  <h6>DATA TIDAK DITEMUKAN</h6>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Modal title="Bukti Transfer">
      <div class="row">
        <div class="col-12" v-if="declineClick">
          <div class="mb-3">
            <label for="comment" class="form-label">Komentar:</label>
            <textarea type="text" class="form-control" name="comment" id="comment" v-model="comment" rows="5"
              placeholder="Pembayaran ini ditolak sebab ..."></textarea>
          </div>
          <div class="mb-3">
            <button class="btn btn-light" data-bs-dismiss="modal"><i class="bx bx-x"></i>Batal</button>
            <button class="btn btn-info float-end" data-bs-dismiss="modal" @click="declineVerification"><i
                class="bx bx-send"></i>Simpan</button>
          </div>
        </div>
      </div>
      <div class="text-center" id="img-center-modal" v-if="!declineClick">

      </div>
    </Modal>
    <Pagination :current-page="currentPage" :is-first-page="isFirstPage" :is-last-page="isLastPage" :go-to="goToPage"
      :next-page="nextPage" :page-list="pageList" :total-page="totalPage" :prev-page="prevPage" :total-data="totalData"
      v-if="result.length > 0" />
</Parent></template>