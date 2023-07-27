<script setup lang="ts">
import BreadCrumb from '../../../components/BreadCrumb.vue';
import Parent from '../../../components/Parent.vue';
</script>
<template>
  <Parent>
    <BreadCrumb title="Detail Tabungan" role="Administrator" />
    <div class="row my-2">
      <div class="col-12 text-end">
        <button class="btn btn-success" @click="() => $router.go(-1)">Kembali
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-3 mx-auto text-center mb-2">
        <img src="/images/users/avatar-6.jpg" alt="" class="img-thumbnail">
      </div>
      <div class="col-xl-9">
        <div class="row">
          <div class="col-md-12 mb-3">
            <h6>Meita Regina Prayitno (L)</h6>
            <p class="mb-0">Rombasan Pragaan Sumenep</p>
            <span class="badge bg-info">Blue</span>
          </div>
          <div class="col-md-10">
            <div class="row mb-4">
              <label for="saldo" class="col-sm-3 col-form-label">Saldo</label>
              <div class="col-sm-9">
                <input type="number" class="form-control" id="saldo"
                  placeholder="Contoh: Rp. 1xxx" disabled value="1000000">
              </div>
            </div>
            <div class="row mb-4">
              <label for="deposit" class="col-sm-3 col-form-label">Setoran</label>
              <div class="col-sm-9">
                <input type="number" class="form-control" id="deposit" placeholder="Contoh: Rp. 1xxx">
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-sm-12">
                <button type="button" class="btn btn-light float-start">
                  <i class="bx bx-revision"></i> Reset
                </button>
                  <button type="submit" class="btn btn-info float-end"> <i class="bx bx-send font-size-18"></i> Setor</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </Parent>
</template>