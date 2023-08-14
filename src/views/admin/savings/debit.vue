<script setup lang="ts">
import { useRoute } from 'vue-router';
import BreadCrumb from '../../../components/BreadCrumb.vue';
import Parent from '../../../components/Parent.vue';
import { onMounted, ref } from 'vue';
import { decrypt } from '../../../helpers/crypto';
import useApi from '../../../composables/api';
import { convertToRp, isDisableLayer, isEnableLayer } from '../../../helpers/handleEvent';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import Notify from '../../../helpers/notify';
import router from '../../../router';
const { getResource, putResource } = useApi();

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
  if (response) {
    data.value = response.data;
    data.value.thumbnail = import.meta.env.VITE_API_KMW + '/' + response.data.thumbnail;
    data.value.nominal = convertToRp(response.data.nominal);
  }
};

const schema = yup.object().shape({
  nominal: yup.number().required().min(1)
});

const { meta } = useForm({
  validationSchema: schema,
  initialValues: {
    nominal: 0
  }
});

const { value: nominal } = useField<string>('nominal');

const save = async () => {
  const response = await putResource('/admin/tabungan/tarik/' + id.value, {
    nominal: nominal.value
  });
  if (response) {
    Notify.success('Berhasil menarik tabungan');
    router.push('/tabungan');
  }
}


</script>
<template>
  <Parent>
    <BreadCrumb title="Edit Jumlah Saldo" role="Administrator" />
    <div class="row my-2">
      <div class="col-12 text-end">
        <button class="btn btn-success" @click="() => $router.go(-1)">Kembali
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-3 mx-auto text-center mb-2">
        <img :src="data.thumbnail" alt="" class="img-thumbnail">
      </div>
      <div class="col-xl-9">
        <div class="row">
          <div class="col-md-12 mb-3">
            <h6>{{ data.username }} {{ data.gender == 'laki-laki' ? '(L)' : '(P)' }}</h6>
            <p class="mb-0">{{ data.address }}</p>
            <span class="badge bg-warning font-size-12">{{ data.name }}</span>
          </div>
          <div class="col-md-10">
            <div class="row mb-4">
              <label for="saldo" class="col-sm-3 col-form-label">Saldo</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="saldo" placeholder="Contoh: Rp. 1xxx" disabled
                  v-model="data.nominal">
              </div>
            </div>
            <div class="row mb-4">
              <label for="deposit" class="col-sm-3 col-form-label">Nominal Penarikan</label>
              <div class="col-sm-9">
                <input type="number" class="form-control" id="deposit" placeholder="Contoh: Rp. 1xxx" v-model="nominal">
              </div>

            </div>
            <div class="row justify-content-end">
              <div class="col-sm-12">
                <button type="button" class="btn btn-light float-start">
                  <i class="bx bx-revision"></i> Reset
                </button>
                <button type="submit" class="btn btn-danger float-end" @click="save" :disabled="!meta.valid"> <i
                    class="bx bx-credit-card font-size-18"></i> Tarik</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </Parent>
</template>