<script setup lang="ts">
import Parent from '../../../components/Parent.vue';
import BreadCrumb from '../../../components/BreadCrumb.vue';
import Pagination from '../../../components/Pagination.vue';
import Modal from '../../../components/Modal.vue';
import Form from './Form.vue';
</script>
<template>
  <Parent>
    <BreadCrumb title="Pengaturan Jamaah" role="Administrator" />
    <div class="row">
      <div class="col-md-5 col-12 d-none d-lg-block">
        <div class="form-group row">
          <label for="search" class="col-md-2 col-4 col-form-label">Tampilkan:
          </label>
          <div class="col-md-3 col-8">
            <div class="input-group mb-3">
              <select class="form-select">
                <option value="1">10</option>
                <option value="2">25</option>
                <option value="3">50</option>
                <option value="4">100</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3" />
      <div class="col-md-4 col-12 d-none d-lg-block">
        <div class="form-group row">
          <label for="search" class="col-sm-2 col-2 col-form-label">Cari:
          </label>
          <div class="col-sm-10 col-10">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Masukkan kata kunci" />
              <div class="input-group-append">
                <button class="btn btn-info" type="button">
                  <i class="bx bx-search-alt" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-hover table-bordered">
            <thead class="align-middle">
              <tr class="text-center">
                <th>Tanggal Mendaftar</th>
                <th>Tanggal Lunas</th>
                <th>Kode</th>
                <th class="text-start">Nama Jamaah</th>
                <th>Kategori</th>
                <th>Alamat</th>
                <th class="col">Aksi</th>
              </tr>
            </thead>
            <tbody class="align-middle">
              <tr>
                <td>29 Juli 2022</td>
                <td>29 Juli 2023</td>
                <td>123123</td>
                <td>Meita Regina Prayitno</td>
                <td class="text-center">Blue</td>
                <td>Rombasan Pragaan Sumenep</td>
                <td class="text-center">
                  <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#dinamyc-modal">
                    <i class="bx bx-calendar"></i> Atur
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <Modal title="Atur Pemberangkatan">
            <Form />
          </Modal>
        </div>
      </div>
    </div>
    <Pagination />
  </Parent>
</template>