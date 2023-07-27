<script setup lang="ts">
import BreadCrumb from '../../../components/BreadCrumb.vue';
import Pagination from '../../../components/Pagination.vue';
import Modal from '../../../components/Modal.vue';
import Form from './Form.vue';
import ParentJamaah from '../../../components/ParentJamaah.vue';
</script>
<template>
  <ParentJamaah>
    <BreadCrumb title="Laporan" role="Jamaah" />
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
      <div class="col-md-4 col-12">
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
                <button class="btn btn-light ms-2" type="button" data-bs-target="#dinamyc-modal" data-bs-toggle="modal">
                  <i class="bx bx-filter" />
                </button>
                <Modal title="Filter">
                 <Form/>
                </Modal>
                <button class="btn btn-warning ms-2" type="button">
                  <i class="bx bx-printer"></i> Cetak
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
                <th class="col" rowspan="2">Tanggal Pembayaran</th>
                <th class="col text-center" colspan="2">Jamaah</th>
                <th class="col text-center" colspan="3">Pembayaran</th>
              </tr>
              <tr>
                <th>Kode</th>
                <th>Nama Jamaah</th>
                <th class="text-end">Debit</th>
                <th class="text-end">Kredit</th>
                <th class="text-end">Saldo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>23/07/2023</td>
                <td>123123</td>
                <td>Meita Regina Prayitno</td>
                <td class="text-end">Rp. 50.000.000</td>
                <td class="text-end">
                  -
                </td>
                <td class="text-end">
                  Rp. 0
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <Pagination />
  </ParentJamaah>
</template>