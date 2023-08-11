<template>
  <div class="tab-pane" id="pilgrims-detail">
    <div class="text-center mb-4">
      <h5>Informasi Pendaftar</h5>
      <p class="card-title-desc">Isi semua informasi di bawah ini</p>
    </div>
    <form>
      <div class="row">
        <div class="col-lg-6">
          <div class="mb-3 form-group">
            <label for="basicpill-username" class="form-label">Nama Lengkap: </label>
            <input type="text" class="form-control" id="basicpill-username" placeholder="Masukkan Nama Lengkap"
              v-model="username" :class="{ 'is-invalid': metaUsername.dirty && !metaUsername.valid }">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="basicpill-email" class="form-label">NIK: </label>
            <input type="text" class="form-control" id="basicpill-email" placeholder="Masukkan NIK" v-model="nik"
              :class="{ 'is-invalid': metaNik.dirty && !metaNik.valid }">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="basicpill-no-kk" class="form-label">No. KK: </label>
            <input type="text" class="form-control" id="basicpill-no-kk" placeholder="Masukkan No. KK" v-model="kk"
              :class="{ 'is-invalid': metaKK.dirty && !metaKK.valid }">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="basicpill-birt-day" class="form-label">Tanggal Lahir</label>
            <input type="date" class="form-control" id="basicpill-birt-day" placeholder="Masukkan Tanggal Lahir"
              v-model="birth_day" :class="{ 'is-invalid': metaBirthDay.dirty && !metaBirthDay.valid }">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 mb-3">
          <label for="gender" class="form-label">Jenis Kelamin: </label>
          <select name="gender" id="gender" class="form-select" v-model="gender"
            :class="{ 'is-invalid': metagender.dirty && !metagender.valid }">
            <option value="" disabled> -- Pilih Jenis Kelamin -- </option>
            <option value="laki-laki">Laki-laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
        </div>
        <div class="col-lg-6 mb-3">
          <label for="phone" class="form-label">No. HP: </label>
          <input type="text" class="form-control" id="phone" placeholder="Masukkan No. HP" v-model="phone"
            :class="{ 'is-invalid': metaPhone.dirty && !metaPhone.valid }">
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="email" class="form-label">Email: </label>
          <input type="email" class="form-control" id="email" placeholder="Masukkan Email" v-model="email"
            :class="{ 'is-invalid': metaEmail.dirty && !metaEmail.valid }">
        </div>
        <div class="col-md-6 mb-3">
          <label for="password">Password:</label>
          <div class="position-relative auth-pass-inputgroup mb-3">
            <input type="password" id="password-input" class="form-control pe-5" placeholder="Masukkan Password"
              v-model="password" :class="{ 'is-invalid': metaPassword.dirty && !metaPassword.valid }">
            <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
              @click="handleTogglePassword()" type="button">
              <i class="mdi mdi-eye-outline align-middle"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="mb-3">
            <label for="basicpill-address-input" class="form-label">Alamat: </label>
            <textarea id="basicpill-address-input" class="form-control" rows="5" placeholder="Masukkan Alamat"
              v-model="address" :class="{ 'is-invalid': metaAddress.dirty && !metaAddress.valid }"></textarea>
          </div>
        </div>
      </div>

    </form>
    <ul class="pager wizard twitter-bs-wizard-pager-link">
      <li class="next">
        <button type="button" class="btn btn-success" v-if="meta.valid" @click="next"> Selanjutnya
          <i class="bx bx-chevron-right ms-1"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { computed, watch } from 'vue';
import * as yup from 'yup';
import { handleTogglePassword } from '../../../../helpers/handleEvent';

const schema = yup.object().shape({
  username: yup.string().required().min(8),
  nik: yup.string().required().min(10).max(25),
  kk: yup.string().required().min(10).max(25),
  birth_day: yup.string().required().min(4),
  gender: yup.string().required().min(1),
  phone: yup.string().required().min(4).max(13),
  email: yup.string().required().min(8).max(1000),
  password: yup.string().required().min(8),
  address: yup.string().required().min(5)
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

const { value: username, meta: metaUsername } = useField<string>('username');
const { value: nik, meta: metaNik } = useField<string>('nik');
const { value: kk, meta: metaKK } = useField<string>('kk');
const { value: birth_day, meta: metaBirthDay } = useField<string>('birth_day');
const { value: gender, meta: metagender } = useField<string>('gender');
const { value: phone, meta: metaPhone } = useField<string>('phone');
const { value: email, meta: metaEmail } = useField<string>('email');
const { value: password, meta: metaPassword } = useField<string>('password');
const { value: address, meta: metaAddress } = useField<string>('address');

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
  };
  emit('next', data);
};

const props = defineProps(['data']);

const watchProps = computed(() => {
  return props.data;
});

watch(watchProps, (value) => {
  if (value) {
    username.value = value.username;
    nik.value = value.nik;
    kk.value = value.no_kk;
    birth_day.value = value.birth_date;
    gender.value = value.gender;
    phone.value = value.phone;
    email.value = value.email;
    password.value = value.password;
    address.value = value.address;
  }
});

</script>