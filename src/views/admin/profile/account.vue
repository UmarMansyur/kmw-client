<template>
  <div class="tab-pane" id="account" role="tabpanel">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title mb-0">Akun</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <div class="alert alert-top-border alert-danger">
              <i class="mdi mdi-alert-circle-outline me-1"></i> Jika anda mengubah email atau password, anda akan
              diminta untuk login ulang. Kolom password secara default tidak akan ditampilkan. Hal tersebut untuk alasan
              keamanan.
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label for="password" class="form-label">Password: </label>
            <input type="password" name="password" id="password" class="form-control" placeholder="Password" v-model="password" />
          </div>
          <div class="col-12 my-3">
            <label for="confirmation-password" class="form-label">Konfirmasi Password: </label>
            <input type="password" name="confirmation-password" id="confirmation-password" class="form-control" placeholder="Konfirmasi Password" v-model="confirm_password"
             />
          </div>
          <div class="col-12">
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-info waves-effect float-end" @click="updateAccount" :disabled="!meta.valid">
          <i class="bx bx-send me-1"></i> Simpan
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sweet from '../../../helpers/sweetalert2';
import useApi from '../../../composables/api';
import Notify from '../../../helpers/notify';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
const { postResourceFile } = useApi();

const props = defineProps({
  getUser: {
    type: Object,
    required: true,
  }
});

const emit = defineEmits(['updateUser']);

const schema = yup.object().shape({
  confirm_password: yup.string().required().min(8).max(20),
  password: yup.string().required().min(8).max(20),
});

const { meta } = useForm({
  validationSchema: schema,
  initialValues: {
    password: '',
    confirm_password: '',
  },
});

const { value: password } = useField<string>('password');
const { value: confirm_password } = useField<string>('confirm_password');


const updateAccount = async () => {
  Sweet.confirm('Apakah anda yakin ingin mengubah akun?', async () => {
    const response = await postResourceFile('users/' + props.getUser.id, 'POST', {
      password: password.value,
    });
    if (response) {
      Notify.success('Berhasil mengubah akun');
    }
    emit('updateUser', response);
  });
  password.value = '';
  confirm_password.value = '';
};

</script>