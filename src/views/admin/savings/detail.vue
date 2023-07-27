<script setup lang="ts">
import BreadCrumb from '../../../components/BreadCrumb.vue';
import Parent from '../../../components/Parent.vue';
</script>
<template>
  <Parent>
    <BreadCrumb title="Detail Tabungan" role="Administrator" />
    <div class="row my-2">
      <div class="col-12 text-end">
        <button class="btn btn-outline-success" @click="() => $router.go(-1)">Kembali
        </button>
        <RouterLink to="/tabungan/setor/1" class="btn btn-primary ms-2">
          <i class="bx bx-send"></i> Setor Tabungan
        </RouterLink>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-3 mx-auto text-center mb-2">
        <img src="/images/users/avatar-6.jpg" alt="" class="img-thumbnail">
      </div>
      <div class="col-xl-9">
        <div class="row">
          <div class="col-md-3 col-5">
            <h6>Nama Lengkap </h6>
          </div>
          <div class="col-md-9 col-6">
            <p>: Meita Regina Prayitno</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-5">
            <h6>Kode </h6>
          </div>
          <div class="col-md-9 col-6">
            <p>: 23072020-09</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-5">
            <h6>No. Rekening </h6>
          </div>
          <div class="col-md-9 col-6">
            <p>: 123123123</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-5">
            <h6>Kategori</h6>
          </div>
          <div class="col-md-9 col-6">
            <p>: Blue</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-5">
            <h6>Tanggal Mendaftar </h6>
          </div>
          <div class="col-md-9 col-6">
            <p>: 23 Juli 2020</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-5">
            <h6>Alamat </h6>
          </div>
          <div class="col-md-9 col-6">
            <p>: Rombasan Pragaan Sumenep</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-5">
            <h6>Saldo </h6>
          </div>
          <div class="col-md-9 col-6">
            <p>: Rp. 10.000.000</p>
          </div>
        </div>
      </div>
    </div>

  </Parent>
</template>