<template>
  <UserParent>
    <BreadCrumb title="Setoran" role="Jamaah" />
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="avatar-sm flex-shrink-0">
                <span class="rounded-2 fs-1"><i class="bx bx-wallet-alt"></i></span>
              </div>
              <div class="flex-grow-1 overflow-hidden ms-3">
                <p class="text-uppercase fw-medium text-muted text-truncate mb-3"> Saldo</p>
                <div class="d-flex align-items-center mb-3">
                  <h2 class="fs-4 flex-grow-1 mb-0"><span>{{ convertToRp(data.saldo) }}</span></h2>
                </div>
                <p class="text-muted text-truncate mb-0"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-xl-3 mx-auto text-center mb-2">
            <img :src="getUser.thumbnail" alt="" class="img-thumbnail">
          </div>
          <div class="col-xl-9">
            <div class="row">
              <div class="col-md-12 mb-3">
                <h6>{{ getUser.name }} {{ getUser.gender == 'laki-laki' ? '(L)' : '(P)' }}</h6>
                <p class="mb-0">{{ getUser.address }}</p>
                <span class="badge bg-warning font-size-12">{{ data.kategori }}</span>
              </div>
              <div class="col-md-10">
                <div class="row mb-4">
                  <label for="saldo" class="col-sm-3 col-form-label">Nominal: </label>
                  <div class="col-sm-9">
                    <input type="number" class="form-control" id="saldo" placeholder="Contoh: Rp. 1xxx" v-model="nominal">
                  </div>
                </div>
                <div class="row mb-4">
                  <label for="file" class="col-sm-3 col-form-label">Bukti Transfer: </label>
                  <div class="col-sm-9">
                    <input type="file" class="form-control" id="file" placeholder="Contoh: Rp. 1xxx" @change="getFile" accept="image/*, .pdf">
                  </div>
                </div>
                <div class="row justify-content-end">
                  <div class="col-sm-12">
                    <button type="button" class="btn btn-light float-start">
                      <i class="bx bx-revision"></i> Reset
                    </button>
                    <button type="submit" class="btn btn-info float-end" @click="tryDeposit" :disabled="!meta.valid"> <i
                        class="bx bx-send font-size-18"></i>
                      Setor</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </UserParent>
</template>

<script setup lang="ts">
import BreadCrumb from '../../../components/BreadCrumb.vue';
import UserParent from '../../../components/ParentJamaah.vue';
import { ref, onMounted } from 'vue';
import { convertToRp, isDisableLayer, isEnableLayer } from '../../../helpers/handleEvent';
import useApi from '../../../composables/api';
import { useSessionStore } from '../../../stores/session';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import Notify from '../../../helpers/notify';
import useNotification from '../../../composables/notification';


const { getResource, postResourceFile, postResource } = useApi();
const { getUser } = useSessionStore();
const { loadNotification, depositNotification } = useNotification();
onMounted(async () => {
  isEnableLayer();
  await loadData();
  isDisableLayer();
});

const data = ref<any>({});

const loadData = async () => {
  const response = await getResource('/jamaah/saldo');
  data.value = response.data;
};

const schema = yup.object().shape({
  nominal: yup.number().required().min(1),
  file: yup.string().required(),
});

const { meta } = useForm({
  validationSchema: schema,
  initialValues: {
    nominal: '',
    file: '',
  }
});

const { value: nominal } = useField<string>('nominal');
const { value: file } = useField<string>('file');

const getFile = (e: any) => {
  file.value = e.target.files[0];
};



const tryDeposit = async () => {
  isEnableLayer();
  const file_id = await postResourceFile('files', 'POST', {
    user_id: getUser.id,
    name: 'Setor - ' + getUser.name + ' - ' + new Date().getTime(),
    file: file.value,
  });
  const response = await postResource('/jamaah/information', {
    pilgrims_id: getUser.id,
    nominal: nominal.value,
    file: file_id,
  });
  if (response) {
    await pushNotification(response.data.transactional_savings_id);
    nominal.value = '';
    file.value = '';
    Notify.success('Berhasil setor');
  }
  await loadData();
  await loadNotification();
  isDisableLayer();
};

const pushNotification = async (id: string) => {
  await depositNotification(id);
}

</script>