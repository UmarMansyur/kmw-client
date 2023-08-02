<script setup lang="ts">
import Parent from '../../../../components/Parent.vue';
import BreadCrumb from '../../../../components/BreadCrumb.vue';
import FormPilgrim from './formpilgrims.vue';
import FormFilePilgrim from './formfilepilgrims.vue';
import FormBankPilgrim from './formbankpilgrims.vue';

import { onMounted } from 'vue';


onMounted(async () => {
  $("#basic-pills-wizard").bootstrapWizard({
    tabClass: "nav nav-pills nav-justified",
  });
});





</script>

<script lang="ts">
declare const $: any;
</script>

<template>
  <Parent>
    <BreadCrumb title="Tambah Jamaah" role="Administrator" />
    <div class="row mb-3">
      <div class="col-6">
        <button class="btn btn-success" @click="$router.go(-1)">
          <i class="bx bx-arrow-back"></i> Kembali
        </button>
      </div>
      <div class="col-6">
        <button class="btn btn-primary float-end" @click="$router.push('/')">
          <i class="bx bx-home"></i> Dashboard
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card">

          <div class="card-body">
            <div id="basic-pills-wizard" class="twitter-bs-wizard">
              <ul class="twitter-bs-wizard-nav">
                <li class="nav-item">
                  <a href="#pilgrims-detail" class="nav-link" data-toggle="tab">
                    <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Seller Details">
                      <i class="bx bx-user"></i>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#file-document" class="nav-link" data-toggle="tab">
                    <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Company Document">
                      <i class="bx bx-file"></i>
                    </div>
                  </a>
                </li>

                <li class="nav-item">
                  <a href="#bank-detail" class="nav-link" data-toggle="tab">
                    <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Bank Details">
                      <i class="bx bx-credit-card"></i>
                    </div>
                  </a>
                </li>
              </ul>
              <div class="tab-content twitter-bs-wizard-tab-content">
                <FormPilgrim/>
                <FormFilePilgrim/>
                <FormBankPilgrim/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Parent>
</template>



