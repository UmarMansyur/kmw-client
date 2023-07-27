<script setup lang="ts">
import Parent from '../../../../components/Parent.vue';
import BreadCrumb from '../../../../components/BreadCrumb.vue';
import Pagination from '../../../../components/Pagination.vue';
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
              <tr>
                <th class="col text-center" rowspan="2">No</th>
                <th colspan="5" class="text-center">Jamaah</th>
                <th colspan="2" class="text-center">Aksi</th>
              </tr>
              <tr class="text-center">
                <th>Tanggal Mendaftar</th>
                <th>Kode</th>
                <th class="text-start">Nama Jamaah</th>
                <th>Kategori</th>
                <th>Alamat</th>
                <th class="col">Edit</th>
                <th class="col">Hapus</th>
              </tr>
            </thead>
            <tbody class="align-middle">
              <tr>
                <td class="text-center">1</td>
                <td>29 Juli 2023</td>
                <td>123123</td>
                <td>Muhammad Marchel</td>
                <td class="text-center">Blue</td>
                <td>Rombasan Pragaan Sumenep</td>
                <td class="text-center">
                  <button class="btn btn-info">
                    <i class="bx bx-pencil"></i> Edit
                  </button>
                </td>
                <td class="text-center">
                  <button class="btn btn-danger">
                    <i class="bx bx-trash"></i> Hapus
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Pagination />
  </Parent>
</template>