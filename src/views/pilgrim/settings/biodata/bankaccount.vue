<template>
  <div class="tab-pane" id="akun-bank" role="tabpanel">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title mb-0">Akun Bank</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <label for="bank-name" class="form-label font-size-13 text-muted">Nama Bank: </label>
            <select class="form-control" data-trigger name="bank-name" id="bank-name"
              placeholder="Pilih Jenis Kategori Tabungan" v-model="bank_name">
              <option value="bni">Bank Negara Indonesia</option>
              <option value="bri">Bank Rakyat Indonesia</option>
              <option value="bca">Bank Central Asia</option>
              <option value="mandiri">Mandiri</option>
              <option value="btpn">Bank Tabungan Pensiunan Nasional</option>
              <option value="bsi">Bank Syariah Indonesia</option>
              <option value="bukopin">Bank Bukopin</option>
            </select>
          </div>
          <div class="col-12 my-3">
            <label for="bank-username" class="form-label">Nama Akun Bank Terdaftar: </label>
            <input type="text" name="bank-username" id="bank-username" class="form-control" v-model="bank_account_name" />
          </div>
          <div class="col-12 my-3">
            <label for="no-rekening" class="form-label">Nomor Rekening: </label>
            <input type="text" name="no-rekening" id="no-rekening" class="form-control" v-model="no_rekening" />
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-info waves-effect float-end" :disabled="!meta.valid" @click="save">
          <i class="bx bx-send me-1"></i> Simpan
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
declare const Choices: any;
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useToken from '../../../../composables/token';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import { isDisableLayer, isEnableLayer } from '../../../../helpers/handleEvent';
import { useSessionStore } from '../../../../stores/session';
import useApi from '../../../../composables/api';
import Notify from '../../../../helpers/notify';
const { putResource } = useApi();
const { decodeToken } = useToken();
const { getUser } = useSessionStore();

const schema = yup.object({
  bank_name: yup.string().required('Nama bank tidak boleh kosong'),
  bank_account_name: yup.string().required('Nama akun bank tidak boleh kosong'),
  no_rekening: yup.string().required('Nomor rekening tidak boleh kosong'),
});

const { meta } = useForm({
  validationSchema: schema,
  initialValues: {
    bank_name: '',
    bank_account_name: '',
    no_rekening: '',
  },
});

const { value: bank_name } = useField<string>('bank_name');
const { value: bank_account_name } = useField<string>('bank_account_name');
const { value: no_rekening } = useField<string>('no_rekening');
const bank_choice = ref<any>(null);
onMounted(async () => {
  isEnableLayer();
  bank_choice.value = new Choices("#bank-name", {
    searchEnabled: true,
    allowHTML: true,
  });
  await getData();
  isDisableLayer();
});

const getData = async () => {
  const data = await decodeToken();
  bank_name.value = data.bank_name;
  bank_choice.value.setChoiceByValue(data.bank_name);
  bank_account_name.value = data.bank_account_name;
  no_rekening.value = data.no_rekening;
};


const save = async () => {
  const response = await putResource('/pilgrims/' + getUser.id, {
    bank_name: bank_name.value,
    bank_account_name: bank_account_name.value,
    no_rekening: no_rekening.value,
  });
  if(response) {
    Notify.success('Berhasil menyimpan data');
  }
  await getData();
};
</script>