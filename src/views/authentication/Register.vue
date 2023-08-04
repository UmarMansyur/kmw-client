<template>
  <Parent>
    <form>
      <div class="mb-3">
        <label for="username" class="form-label">Username:</label>
        <input type="text" class="form-control" id="username" placeholder="Masukkan Nama Lengkap" autofocus
          v-model="username">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="text" class="form-control" id="email" placeholder="Masukkan Email" v-model="email">
      </div>
      <div class="mb-3">
        <label class="form-label" for="password-input">Password:</label>
        <div class="position-relative auth-pass-inputgroup mb-3">
          <input type="password" class="form-control pe-5" placeholder="Masukkan Password" id="password-input"
            v-model="password">
          <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button"
            @click="handleTogglePassword">
            <i class="mdi mdi-eye-outline align-middle"></i>
          </button>
        </div>
      </div>
      <div class="mb-3">
        <label for="gender">Jenis Kelamin: </label>
        <div class="form-check mb-3 ">
          <div class="row">
            <div class="col-md-6 col-lg-3">
              <input class="form-check-input" type="radio" name="formRadios" id="laki-laki" v-model="gender"
                value="Laki-laki">
              <label class="form-check-label" for="laki-laki">
                Laki-laki
              </label>
            </div>
            <div class="col-md-6 col-lg-3">
              <input class="form-check-input" type="radio" name="formRadios" id="perempuan" v-model="gender"
                value="Perempuan">
              <label class="form-check-label" for="perempuan">
                Perempuan
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="file">File:</label>
        <input class="form-control" type="file" id="file"
          accept="zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed"
          @change="handleFile" />
        <small class="text-muted fst-italic">File: KK, Akte Kelahiran, KTP (Wajib)</small>
      </div>
      <div class="mb-3">
        <label class="form-label" for="nominal">Jumlah Transfer:</label>
        <input class="form-control" type="number" id="nominal" placeholder="Masukkan Jumlah Transfer" v-model="nominal">
      </div>
      <div class="mb-3">
        <label class="form-label" for="nominal">Jenis Tabungan:</label>
        <select class="form-control" data-trigger name="haji" id="haji" placeholder="Pilih Jenis Kategori Tabungan"
          v-model="saving_category">
          <option v-for="category in categories" :key="category.saving_category_id" :value="category.saving_category_id">
            {{ category.name }} - {{ convertToRp(category.limit) }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label" for="file">Bukti Pembayaran:</label>
        <input class="form-control" type="file" id="file-bukti" accept="image/*" @change="handleFileBukti" />
        <small class="text-muted fst-italic">File: Bukti Pembayaran (Wajib)</small>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="auth-remember-check" value="">
        <label class="form-check-label" for="auth-remember-check">Ingatkan saya</label>
      </div>
      <div class="mt-4">
        <button to="/" class="btn btn-success w-100" type="button" :disabled="!meta.valid" @click="createAccount"><i
            class="bx font-size-16 me-2 bx-send"></i>Registrasi</button>
      </div>
      <div class="mt-5 text-center">
        <p class="mb-0">Sudah memiliki akun ? <RouterLink to="/login"
            class="fw-semibold text-info text-decoration-underline"> Masuk disini</RouterLink>
        </p>
      </div>
    </form>
  </Parent>
</template>

<script lang="ts">
declare const Choices: any;
</script>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import Parent from './Parent.vue';
import * as yup from 'yup';
import { ref, onMounted } from 'vue';
import { convertToRp, isDisableLayer, isEnableLayer, handleTogglePassword } from '../../helpers/handleEvent';
import axios from 'axios';
import Notify from '../../helpers/notify';
import router from '../../router';

const schema = yup.object().shape({
  username: yup.string().required().min(6),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  gender: yup.string().required(),
  file: yup.string().required(),
  nominal: yup.string().required(),
  saving_category: yup.string().required(),
  file_bukti: yup.string().required(),
});

const { meta } = useForm({
  validationSchema: schema,
  initialValues: {
    username: '',
    email: '',
    password: '',
    gender: '',
    file: '',
    nominal: '',
    saving_category: '',
    file_bukti: '',
  }
});

const { value: username } = useField<string>('username');
const { value: email } = useField<string>('email');
const { value: password } = useField<string>('password');
const { value: gender } = useField<string>('gender');
const { value: file } = useField<string>('file');
const { value: nominal } = useField<string>('nominal');
const { value: saving_category } = useField<string>('saving_category');
const { value: file_bukti } = useField<string>('file_bukti');

const handleFile = (e: any) => {
  file.value = e.target.files[0];
};

onMounted(async () => {
  isEnableLayer();
  await loadCategories();
  new Choices("#haji", {
    searchEnabled: true,
    allowHTML: true,
  });
  isDisableLayer();
});

const categories = ref<any[]>([]);
const loadCategories = async () => {
  const { data: response } = await axios.get(import.meta.env.VITE_API_KMW + '/saving-categories?limit=1000');
  categories.value = response.data.data;
};

const handleFileBukti = (e: any) => {
  file_bukti.value = e.target.files[0];
};

const createAccount = async () => {
  try {
    isEnableLayer();
    const { data } = await axios.post(import.meta.env.VITE_API_KMW + '/users/', {
      username: username.value,
      password: password.value,
      email: email.value,
      type: 'jamaah',
      thumbnail: import.meta.env.VITE_API_KMW + '/uploads/users/1691133441.png',
    });
    await createPilgrim(data.data.user_account_id);
    await postFile(data.data.user_account_id);
    await postFileBukti(data.data.user_account_id);
    Notify.success('Berhasil membuat akun');
    router.push('/login');
  } catch (error: any) {
    Notify.error(error.message);
  }

};

const createPilgrim = async (id: string) => {
  await axios.post(import.meta.env.VITE_API_KMW + '/pilgrims', {
    user_account_id: id,
    saving_category_id: saving_category.value,
    bank_name: '',
    no_rekening: '',
    bank_account_name: '',
    birth_day: '2000-01-01',
    nik: '',
    no_kk: '',
    gender: gender.value,
    phone: '',
    address: '',
  });
};

const postFile = async (id: string) => {
  const formData = new FormData();
  formData.append('file', file.value);
  formData.append('name', 'filekk - ' + username.value + ' - ' + new Date().getTime());
  formData.append('user_id', id);
  await axios.post(import.meta.env.VITE_API_KMW + '/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

const postFileBukti = async (id: string) => {
  const formData = new FormData();
  formData.append('file', file_bukti.value);
  formData.append('name', 'Bukti Pembayaran - ' + username.value + ' - ' + new Date().getTime());
  formData.append('user_id', id);

  const { data } = await axios.post(import.meta.env.VITE_API_KMW + '/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  if(data) {
    await axios.post(import.meta.env.VITE_API_KMW + '/setoran-awal/' + id, {
      nominal: nominal.value,
      file: data.data.file_id,
    });
  }
  isDisableLayer();
}



</script>