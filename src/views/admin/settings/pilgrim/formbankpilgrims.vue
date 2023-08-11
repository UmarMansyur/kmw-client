<template>
  <div class="tab-pane" id="bank-detail">
    <div>
      <div class="text-center mb-4">
        <h5> Formulir Pembayaran </h5>
        <p class="card-title-desc">Isi semua informasi di bawah ini</p>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="haji" class="form-label font-size-13 text-muted">Kategori Tabungan: </label>
            <select class="form-control" data-trigger name="haji" id="haji" placeholder="Pilih Jenis Kategori Tabungan"
              v-model="saving_category_id">
              <option value="" disabled>Pilih Kategori Tabungan</option>
              <option v-for="category in categories" :key="category.saving_category_id"
                :value="category.saving_category_id">
                {{ category.name }} - {{ convertToRp(category.limit) }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="bank-name" class="form-label font-size-13 text-muted">Nama Bank: </label>
            <select class="form-control" data-trigger name="bank-name" id="bank-name"
              placeholder="Pilih Jenis Kategori Tabungan" v-model="bank_name">
              <option value="" disabled>Pilih Bank</option>
              <option value="bni">Bank Negara Indonesia</option>
              <option value="bri">Bank Rakyat Indonesia</option>
              <option value="bca">Bank Central Asia</option>
              <option value="mandiri">Mandiri</option>
              <option value="btpn">Bank Tabungan Pensiunan Nasional</option>
              <option value="bsi">Bank Syariah Indonesia</option>
              <option value="bukopin">Bank Bukopin</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-lg-6">
          <label for="bank-account" class="form-label font-size-13 text-muted">Nomor Rekening: </label>
          <input type="text" class="form-control" id="bank-account" placeholder="Masukkan Nomor Rekening"
            v-model="bank_account">
        </div>
        <div class="col-lg-6">
          <label for="bank-account-name" class="form-label font-size-13 text-muted">Nama Pemilik Rekening: </label>
          <input type="text" class="form-control" id="bank-account-name" placeholder="Masukkan Nama Pemilik Rekening"
            v-model="bank_account_name">
        </div>
      </div>
      <ul class="pager wizard twitter-bs-wizard-pager-link">
        <li class="previous"><a href="javascript: void(0);" class="btn btn-success"><i
              class="bx bx-chevron-left me-1"></i> Sebelumnya</a></li>
        <li class="float-end">
          <a href="javascript: void(0);" class="btn btn-info" @click="save" :disabled="!meta.valid">
            <i class="bx bx-send font-size-16"></i> Simpan
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
declare const Choices: any;
</script>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import useApi from '../../../../composables/api';
import { convertToRp } from '../../../../helpers/handleEvent';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
const { getResource } = useApi();
onMounted(async () => {
  await loadCategories();
  enableChoicePlugins();
});
const categories_choice = ref<any>({});
const bank_choice = ref<any>({});
function enableChoicePlugins() {
  categories_choice.value = new Choices("#haji", {
    searchEnabled: true,
    allowHTML: true,
  });
  bank_choice.value = new Choices("#bank-name", {
    searchEnabled: true,
    allowHTML: true,
  });
}


const categories = ref<any[]>([]);
const loadCategories = async () => {
  const response = await getResource('/saving-categories?limit=1000');
  categories.value = response.data.data;
};

const schema = yup.object().shape({
  saving_category_id: yup.string().required().min(3),
  bank_name: yup.string().required().min(3),
  bank_account: yup.string().required().min(3),
  bank_account_name: yup.string().required().min(3),
});

const { meta } = useForm({
  validationSchema: schema,
  initialValues: {
    saving_category_id: '',
    bank_name: '',
    bank_account: '',
    bank_account_name: '',
  }
});

const { value: saving_category_id } = useField<string>('saving_category_id');
const { value: bank_name } = useField<string>('bank_name');
const { value: bank_account } = useField<string>('bank_account');
const { value: bank_account_name } = useField<string>('bank_account_name');

const emit = defineEmits(['save'])
const save = async () => {
  const data = {
      saving_category_id: saving_category_id.value,
      bank_name: bank_name.value,
      bank_account: bank_account.value,
      bank_account_name: bank_account_name.value,
    };
  emit('save', data);
};

const props = defineProps(['data']);
const watchProps = computed(() => props.data);
watch(watchProps, (value) => {
  if(value) {
    categories_choice.value.setChoiceByValue(value.saving_category_id);
    saving_category_id.value = value.saving_category_id;
    bank_choice.value.setChoiceByValue(value.bank_name);
    bank_name.value = value.bank_name;
    bank_account.value = value.no_rekening;
    bank_account_name.value = value.bank_account_name;
  }
});

</script>