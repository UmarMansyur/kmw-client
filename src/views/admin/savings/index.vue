<script setup lang="ts">
import Parent from '../../../components/Parent.vue';
import BreadCrumb from '../../../components/BreadCrumb.vue';
import Pagination from '../../../components/Pagination.vue';
</script>
<template>
  <Parent>
    <BreadCrumb title="Tabungan" role="Administrator" />
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
                <th colspan="3" class="text-center">Jamaah</th>
                <th rowspan="2" class="text-end">Saldo</th>
                <th colspan="2" class="text-center">Aksi</th>
              </tr>
              <tr>
                <th>Kode</th>
                <th>Nama</th>
                <th>Kategori</th>
                <th class="text-center">Detail</th>
                <th class="text-center">Setoran</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123123</td>
                <td>Muhammad Marchel</td>
                <td>Blue</td>
                <td class="text-end">Rp. 50.000.000</td>
                <td class="text-center">
                  <button type="button" class="btn btn-info btn-sm waves-effect btn-label waves-light">
                    <i class="bx bx-search label-icon"></i>
                    Lihat</button>
                </td>
                <td class="text-center">
                  <button type="button" class="btn btn-success btn-sm waves-effect btn-label waves-light">
                    <i class="bx bx-navigation label-icon"></i>
                    Setor</button>
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