<template>
  <UserParent>
    <BreadCrumb title="Setoran" role="Jamaah" />
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="avatar-sm flex-shrink-0">
                <span class="rounded-2 fs-1"><i class="bx bx-wallet-alt"></i></span>
              </div>
              <div class="flex-grow-1 overflow-hidden ms-3">
                <p class="text-uppercase fw-medium text-muted text-truncate mb-3"> Saldo</p>
                <div class="d-flex align-items-center mb-3">
                  <h2 class="fs-4 flex-grow-1 mb-0"><span>Rp. 50.000.000</span></h2>
                </div>
                <p class="text-muted text-truncate mb-0"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-xl-3 mx-auto text-center mb-2">
            <img src="#" alt="" class="img-thumbnail">
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
                  <label for="saldo" class="col-sm-3 col-form-label">Nominal: </label>
                  <div class="col-sm-9">
                    <input type="number" class="form-control" id="saldo" placeholder="Contoh: Rp. 1xxx"
                      value="1000000">
                  </div>
                </div>
                <div class="row mb-4">
                  <label for="file" class="col-sm-3 col-form-label">Bukti Transfer: </label>
                  <div class="col-sm-9">
                    <input type="file" class="form-control" id="file" placeholder="Contoh: Rp. 1xxx">
                  </div>
                </div>
                <div class="row justify-content-end">
                  <div class="col-sm-12">
                    <button type="button" class="btn btn-light float-start">
                      <i class="bx bx-revision"></i> Reset
                    </button>
                    <button type="submit" class="btn btn-info float-end"> <i class="bx bx-send font-size-18"></i>
                      Setor</button>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
        </div>
      </div>
    </div>
  </UserParent>
</template>

<script setup lang="ts">
import BreadCrumb from '../../../components/BreadCrumb.vue';
import UserParent from '../../../components/ParentJamaah.vue';
</script>