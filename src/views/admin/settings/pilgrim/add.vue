<script setup lang="ts">
import Parent from '../../../../components/Parent.vue';
import BreadCrumb from '../../../../components/BreadCrumb.vue';
import * as yup from 'yup';
import { onMounted, ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import useApi from '../../../../composables/api';

const { getResource } = useApi();

const schema = yup.object().shape({
  username: yup.string().required().min(4).max(100),
  password: yup.string().required().min(4).max(100),
  confirmation_password: yup.string().required().min(4).max(100),
  saving_category_id: yup.string().required().min(1).max(1000),
  bank_name: yup.string().required().min(4).max(100),
  no_rekening: yup.string().required().min(4).max(20),
  nik: yup.string().required().min(1).max(13),
  no_kk: yup.string().required().min(1).max(13),
  gender: yup.string().required().min(1).max(100),
  phone: yup.string().required().min(1).max(13),
  address: yup.string().required().min(4).max(100000),
  email: yup.string().required().min(4).max(100000),
});

const { meta } = useForm({
  validationSchema: schema,
  initialValues: {
    username: '',
    password: '',
    confirmation_password: '',
    saving_category_id: '',
    bank_name: '',
    no_rekening: '',
    nik: '',
    no_kk: '',
    gender: '',
    phone: '',
    address: '',
    email: '',

  }
});

const { value:saving_category_id } = useField<string>('');
const { value:bank_name } = useField<string>('');
const { value:no_rekening } = useField<string>('');
const { value:nik } = useField<string>('');
const { value:no_kk } = useField<string>('');
const { value:gender } = useField<string>('');
const { value:phone } = useField<string>('');
const { value:address } = useField<string>('');
const { value:username } = useField<string>('');
const { value:password } = useField<string>('');
const { value:confirmation_password } = useField<string>('');
const { value:email } = useField<string>('');
onMounted(async () => {
  await loadCategories();
  console.log(username.value);
});

const categories = ref<any[]>([]);
const loadCategories = async () => {
  const response = await getResource('/saving-categories?limit=10');
  categories.value = response.data.data;
  console.log(categories.value);
}
</script>
<template>
  <Parent>
    <BreadCrumb title="Tambah Jamaah" role="Administrator" />
    <div class="row mb-3">
      <div class="col-6">
        <button class="btn btn-success" @click="$router.go(-1)">
          <i class="bx bx-arrow-back"></i>
        </button>
      </div>
      <div class="col-6">
        <button class="btn btn-primary float-end" @click="$router.push('/')">
          <i class="bx bx-home"></i>
        </button>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-6 mb-3">
                <label for="name" class="form-label">Nama:</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="Nama Jamaah"
                  v-model="username">
              </div>
              <div class="col-6">
                <label for="email" class="form-label">Email:</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="Email"
                  v-model="email">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-6">
                <label for="phone" class="form-label">No. Telepon:</label>
                <input type="text" name="phone" id="phone" class="form-control" placeholder="No. Telepon"
                  v-model="phone">
              </div>
              <div class="col-6">
                <label for="password" class="form-label">Password:</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="Password"
                  v-model="password">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-6">
                <label for="gender" class="form-label">Jenis Kelamin: </label>
                <select name="gender" id="gender" class="form-select" v-model="gender">
                  <option value="male">Laki-Laki</option>
                  <option value="female">Perempuan</option>
                </select>
              </div>
              <div class="col-6">
                <label for="password_confirmation" class="form-label">Konfirmasi Password:</label>
                <input type="password" name="password_confirmation" id="password_confirmation" class="form-control"
                  placeholder="Konfirmasi Password" v-model="confirmation_password">
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="address" class="form-label">Alamat:</label>
                <input type="text" class="form-control" id="address" name="address" placeholder="Alamat"
                  v-model="address">
              </div>
              <div class="col-6">
                <label for="saving_categories" class="form-label">Jenis Tabungan:</label>
                <select name="saving_categories" id="saving_categories" class="form-select" v-model="saving_category_id">
                  <option value="" disabled>Pilih Jenis Tabungan</option>
                  <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                </select>

              </div>
            </div>
            <div class="row">
              <div class="col-mb-6 col-lg-6 mb-3">
                <label for="nik" class="form-label">NIK:</label>
                <input type="text" class="form-control" id="nik" name="nik" placeholder="NIK" v-model="nik">
              </div>
              <div class="col-mb-6 col-lg-6 mb-3">
                <label for="no_kk" class="form-label">No. KK:</label>
                <input type="text" class="form-control" id="no_kk" name="no_kk" placeholder="No. KK"
                  v-model="no_kk">
              </div>
            </div>
            <div class="row">
              <div class="col-mb-6 col-lg-6 mb-3">
                <label for="bank_name" class="form-label">Nama Bank:</label>
                <input type="text" class="form-control" id="bank_name" name="bank_name" placeholder="Nama Bank"
                  v-model="bank_name">
              </div>
              <div class="col-mb-6 col-lg-6 mb-3">
                <label for="bank_account_number" class="form-label">No. Rekening:</label>
                <input type="text" class="form-control" id="bank_account_number" name="bank_account_number"
                  placeholder="No. Rekening" v-model="no_rekening">
              </div>
            </div>
            <div class="row my-3">
              <div class="col-12">
                <label for="File" class="form-label">File: </label>
                <input type="file" name="File" class="form-control" />
                <small class="text-danger">
                  File yang diupload harus berupa .zip
                </small>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-12">
                <label for="photo" class="form-label">Photo: </label>
                <input type="file" id="input-file-now" name="photo" class="form-control" />
                <small class="text-danger">
                  File yang diupload harus berupa .jpg, .jpeg, .png
                </small>
              </div>
            </div>
            <button class="btn btn-info btn-md  mt-2 float-end" :disabled="!meta.valid"><i class="bx bx-send"></i>
              Simpan</button>
            <button class="btn btn-light btn-md mt-2 float-start"><i class="fas fa-undo-alt"></i> Reset</button>

          </div>
        </div>
      </div>
    </div>
  </Parent></template>
