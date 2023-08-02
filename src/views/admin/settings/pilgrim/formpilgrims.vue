<template>
  <div class="tab-pane" id="pilgrims-detail">
    <div class="text-center mb-4">
      <h5>Informasi Pendaftar</h5>
      <p class="card-title-desc">Isi semua informasi di bawah ini</p>
    </div>
    <form>
      <div class="row">
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="basicpill-username" class="form-label">Nama Lengkap: </label>
            <input type="text" class="form-control" id="basicpill-username" placeholder="Masukkan Nama Lengkap" v-model="username">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="basicpill-email" class="form-label">NIK: </label>
            <input type="text" class="form-control" id="basicpill-email" placeholder="Masukkan NIK" v-model="nik">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="basicpill-no-kk" class="form-label">No. KK: </label>
            <input type="text" class="form-control" id="basicpill-no-kk" placeholder="Masukkan No. KK" v-model="kk">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="basicpill-birt-day" class="form-label">Tanggal Lahir</label>
            <input type="date" class="form-control" id="basicpill-birt-day" placeholder="Masukkan Tanggal Lahir" v-model="birth_day">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 mb-3">
          <label for="gender" class="form-label">Jenis Kelamin: </label>
          <select name="gender" id="gender" class="form-select" v-model="gender">
            <option value="laki-laki">Laki-laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
        </div>
        <div class="col-lg-6 mb-3">
          <label for="phone" class="form-label">No. HP: </label>
          <input type="text" class="form-control" id="phone" placeholder="Masukkan No. HP" v-model="phone">
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="email" class="form-label">Email: </label>
          <input type="email" class="form-control" id="email" placeholder="Masukkan Email" v-model="email">
        </div>
        <div class="col-md-6 mb-3">
          <label for="password" class="form-label">Password: </label>
          <input type="password" class="form-control" id="password" placeholder="Masukkan Password" v-model="password">
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="mb-3">
            <label for="basicpill-address-input" class="form-label">Alamat: </label>
            <textarea id="basicpill-address-input" class="form-control" rows="5" placeholder="Masukkan Alamat" v-model="address"></textarea>
          </div>
        </div>
      </div>

    </form>
    <ul class="pager wizard twitter-bs-wizard-pager-link">
      <li class="next">
        <button type="button" class="btn btn-success" 

        @click="next"> Selanjutnya
          <i class="bx bx-chevron-right ms-1"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required().min(3),
  nik: yup.string().required().min(3).max(25),
  kk: yup.string().required().min(3).max(25),
  birth_day: yup.string().required().min(3),
  gender: yup.string().required().min(3),
  phone: yup.string().required().min(3).max(13),
  email: yup.string().required().min(3).max(1000),
  password: yup.string().required().min(3),
  address: yup.string().required().min(3)
});

const { meta } = useForm({
  validationSchema: schema,
  initialValues: {
    username: '',
    nik: '',
    kk: '',
    birth_day: '',
    gender: '',
    phone: '',
    email: '',
    password: '',
    address: ''
  }
});

const { value: username } = useField<string>('username');
const { value: nik } = useField<string>('nik');
const { value: kk } = useField<string>('kk');
const { value: birth_day } = useField<string>('birth_day');
const { value: gender } = useField<string>('gender');
const { value: phone } = useField<string>('phone');
const { value: email } = useField<string>('email');
const { value: password } = useField<string>('password');
const { value: address } = useField<string>('address');

const emit = defineEmits(['next']);

const next = () => {
  const data = {
    name: username.value,
    nik: nik.value,
    kk: kk.value,
    birth_day: birth_day.value,
    gender: gender.value,
    phone: phone.value,
    email: email.value,
    password: password.value,
    address: address.value
  }
  emit('next', data);
}

</script>