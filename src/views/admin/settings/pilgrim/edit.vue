<script setup lang="ts">
import Parent from '../../../../components/Parent.vue';
import BreadCrumb from '../../../../components/BreadCrumb.vue';
</script>
<template>
  <Parent>
    <BreadCrumb title="Edit Jamaah" role="Administrator" />
    <div class="row mb-3">
      <div class="col-6">
        <button class="btn btn-success" @click="$router.go(-1)">
          <i class="bx bx-arrow-back"></i>
        </button>
      </div>
      <div class="col-6">
        <button class="btn btn-primary float-end">
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
                <input type="text" name="name" id="name" class="form-control" placeholder="Nama Jamaah" required>
              </div>
              <div class="col-6">
                <label for="email" class="form-label">Email:</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="Email" required>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-6">
                <label for="phone" class="form-label">No. Telepon:</label>
                <input type="text" name="phone" id="phone" class="form-control" placeholder="No. Telepon" required>
              </div>
              <div class="col-6">
                <label for="password" class="form-label">Password:</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="Password" required>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-6">
                <label for="gender" class="form-label">Jenis Kelamin: </label>
                <select name="gender" id="gender" class="form-select" required>
                  <option value="male">Laki-Laki</option>
                  <option value="female">Perempuan</option>
                </select>
              </div>
              <div class="col-6">
                <label for="password_confirmation" class="form-label">Konfirmasi Password:</label>
                <input type="password" name="password_confirmation" id="password_confirmation" class="form-control"
                  placeholder="Konfirmasi Password" required>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="address" class="form-label">Alamat:</label>
                <input type="text" class="form-control" id="address" name="address">
              </div>
              <div class="col-6">
                <label for="saving_categories" class="form-label">Jenis Tabungan:</label>
                <select name="saving_categories" id="saving_categories" class="form-select" required>
                  <option value="1">Blue</option>
                  <option value="2">Silver</option>
                  <option value="3">Gold</option>
                </select>

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
            <button class="btn btn-info btn-md  mt-2 float-end"><i class="bx bx-send"></i> Simpan</button>
            <button class="btn btn-light btn-md mt-2 float-start"><i class="fas fa-undo-alt"></i> Reset</button>

          </div>
        </div>
      </div>
    </div>
  </Parent>
</template>