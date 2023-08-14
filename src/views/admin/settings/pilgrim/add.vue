<script setup lang="ts">
import Parent from '../../../../components/Parent.vue';
import BreadCrumb from '../../../../components/BreadCrumb.vue';
import FormPilgrim from './formpilgrims.vue';
import FormFilePilgrim from './formfilepilgrims.vue';
import FormBankPilgrim from './formbankpilgrims.vue';
import { onMounted, ref } from 'vue';
import Sweet from '../../../../helpers/sweetalert2';
import useApi from '../../../../composables/api';
import Notify from '../../../../helpers/notify';
import router from '../../../../router';
import { useRoute } from 'vue-router';
import { decrypt } from '../../../../helpers/crypto';
import { isDisableLayer } from '../../../../helpers/handleEvent';

const { getResource, postResource, postResourceFile, putResource } = useApi();
const route = useRoute();
const id = ref<string>('');
onMounted(async () => {
  $("#basic-pills-wizard").bootstrapWizard({
    tabClass: "nav nav-pills nav-justified",
  });
  if (route.params.id) {
    id.value = decrypt(route.params.id.toString());
    if (id.value) {
      await getData();
    }
  }
  isDisableLayer();
});

const data = ref<any>({});
const oldData = ref<any>({});

const getBiodata = (value: any) => {
  if (value) {
    data.value = value;
  }
};

const getFile = (value: any) => {
  if (value) {
    data.value = { ...data.value, ...value };
  }
};

const getData = async () => {
  const response = await getResource('/pilgrims/' + id.value);
  if (response) {
    oldData.value = response.data;
  }
};

const getBank = (value: any) => {
  if (value) {
    Sweet.confirm('Apakah Anda yakin ingin menyimpan data ini?', async () => {
      data.value = { ...data.value, ...value };
      await createUser();
    });
  }
};

const createUser = async () => {
  let response: any;
  if (id.value) {
    response = await postResource('/users/' + id.value, {
      username: data.value.name,
      password: data.value.password,
      email: data.value.email,
      type: 'jamaah',
    });
    await createPilgrim(id.value);
  } else {
    response = await postResource('/users', {
      username: data.value.name,
      password: data.value.password,
      email: data.value.email,
      type: 'jamaah',
    });
    if (response) {
      await createPilgrim(response.data.user_account_id);
    }
  }
};

const createPilgrim = async (i: string) => {
  let response: any;
  if (id.value) {
    response = await putResource('/pilgrims/' + id.value, {
      user_account_id: i,
      saving_category_id: data.value.saving_category_id,
      bank_name: data.value.bank_name,
      no_rekening: data.value.bank_account,
      bank_account_name: data.value.bank_account_name,
      birth_day: data.value.birth_day,
      nik: data.value.nik,
      no_kk: data.value.kk,
      gender: data.value.gender,
      phone: data.value.phone,
      address: data.value.address
    });
  } else {
    response = await postResource('/pilgrims', {
      user_account_id: i,
      saving_category_id: data.value.saving_category_id,
      bank_name: data.value.bank_name,
      no_rekening: data.value.bank_account,
      bank_account_name: data.value.bank_account_name,
      birth_day: data.value.birth_day,
      nik: data.value.nik,
      no_kk: data.value.kk,
      gender: data.value.gender,
      phone: data.value.phone,
      address: data.value.address
    });
  }

  if (response) {

    if (data.value.nikah) {
      await postResourceFile('files', 'POST', {
        user_id: i,
        name: 'nikah',
        file: data.value.nikah,
      });
    }

    if (data.value.foto) {
      await postResourceFile('/users/' + i, 'POST', {
        thumbnail: data.value.foto,
      });

      await postResourceFile('files', 'POST', {
        user_id: i,
        name: 'foto',
        file: data.value.foto,
      });
    }


    if (data.value.file_kk) {
      await postResourceFile('files', 'POST', {
        user_id: i,
        name: 'KK',
        file: data.value.file_kk,
      });
    }

    if (data.value.ktp) {
      await postResourceFile('files', 'POST', {
        user_id: i,
        name: 'KTP',
        file: data.value.ktp,
      });
    }

    if (data.value.akte) {
      await postResourceFile('files', 'POST', {
        user_id: i,
        name: 'akte',
        file: data.value.akte,
      });
    }
    if (response) {
      Notify.success('Data berhasil disimpan');
      data.value = {};
      router.push('/pengaturan/jamaah');
    }
  }
}


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
                <FormPilgrim @next="getBiodata" :data="oldData" />
                <FormFilePilgrim @next="getFile" />
                <FormBankPilgrim @save="getBank" :data="oldData" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Parent>
</template>



