<template>
  <div class="tab-pane" id="edit-biodata" role="tabpanel">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title mb-0">Ubah Data Diri</h5>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group mb-3">
            <label for="namaPengguna">Nama Pengguna:</label>
            <input type="text" class="form-control" id="namaPengguna" v-model="user.name">
          </div>
          <div class="form-group mb-3">
            <label for="jabatan">Jabatan:</label>
            <select class="form-select" id="jabatan" v-model="user.role" :readonly="user.role !== 'Administrator'">
              <option value="Administrator">Administrator</option>
              <option value="jamaah">Jamaah</option>
            </select>
          </div>
          <div class="form-group mb-3">
            <label for="nomorTelepon">Nomor Telepon:</label>
            <input type="text" class="form-control" id="nomorTelepon" v-model="user.phone">
          </div>
          <div class="form-group mb-3">
            <label for="alamatSurel">Alamat Surel:</label>
            <input type="email" class="form-control" id="alamatSurel" v-model="user.email">
          </div>
          <div class="form-group mb-3">
            <label>Jenis Kelamin:</label>
            <div class="form-check">
              <input type="radio" class="form-check-input" id="jenisKelaminPerempuan" value="perempuan"
                v-model="user.gender">
              <label class="form-check-label" for="jenisKelaminPerempuan">Perempuan</label>
            </div>
            <div class="form-check">
              <input type="radio" class="form-check-input" id="jenisKelaminLakiLaki" value="laki-laki"
                v-model="user.gender">
              <label class="form-check-label" for="jenisKelaminLakiLaki">Laki-Laki</label>
            </div>
          </div>
          <div class="form-group mb-3">
            <label for="alamatRumah">Alamat Rumah:</label>
            <textarea class="form-control" id="alamatRumah" rows="3" v-model="user.address"></textarea>
          </div>
          <div class="mb-3">
            <label for="file" class="form-label">Foto Profil:</label>
            <input class="form-control" type="file" id="file" accept="image/*" v-on:change="handleFile()">
          </div>
        </form>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-info waves-effect float-end" @click="updateUser()">
          <i class="bx bx-send"></i> Simpan
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import useApi from '../../../composables/api';
import Sweet from '../../../helpers/sweetalert2';
import Notify from '../../../helpers/notify';
const { postResourceFile, putResource } = useApi();
const emit = defineEmits(['updateUser']);
const props = defineProps({
  getUser: {
    type: Object,
    required: true
  }
});
const user: any = ref<any>({});

const watchUser = computed(() => props.getUser);
const newImage = ref<any>(null);
watch(watchUser, (value) => {
  user.value = {
    id: value.id,
    name: value.name,
    gender: value.gender,
    role: value.role,
    email: value.email,
    address: value.address,
    phone: value.phone,
    thumbnail: value.thumbnail,
  };
}, { immediate: true });

const updateUser = async () => {

  Sweet.confirm('Apakah anda yakin ingin mengubah data diri?', async () => {

    if (newImage.value) {
      await postResourceFile('users/' + user.value.id, 'POST', {
        thumbnail: newImage.value,
      });
      newImage.value = '';
    }

    await postResourceFile('users/' + user.value.id, 'POST', {
      username: user.value.name,
      email: user.value.email,
      type: user.value.role === 'Administrator' ? 'admin' : user.value.role,
    });

    const response = await putResource('/user/admin/' + user.value.id, {
      address: user.value.address,
      gender: user.value.gender,
      phone: user.value.phone,
    });

    if (response) {
      Notify.success('Berhasil mengubah data diri');
    }
    emit('updateUser', user.value);
  });
};

function handleFile() {
  const file: any = document.getElementById('file') as HTMLInputElement;
  newImage.value = file.files[0];
}
</script>