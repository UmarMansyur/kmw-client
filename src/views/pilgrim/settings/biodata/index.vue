<template>
  <ParentJamaah>
    <BreadCrumb title="Profile" />
    <div class="row">
      <div class="col-xl-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm order-2 order-sm-1">
                <div class="d-flex align-items-start mt-3 mt-sm-0">
                  <div class="flex-shrink-0">
                    <div class="avatar-xl me-3">
                      <img :src="getUser.thumbnail" alt="" class="img-thumbnail rounded-circle d-block avatar-xl" />
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <div>
                      <div class="float-end">
                        <button class="btn btn-warning">
                          <i class="bx bx-pencil"></i> Ubah Data Diri
                        </button>
                      </div>
                      <h5 class="font-size-16 mb-1">{{ getUser.name }}</h5>
                      <p class="text-muted font-size-13">{{ getUser.role == 'jamaah' ? 'Jamaah' : '' }}</p>
                      <div class="d-flex flex-wrap align-items-start gap-2 gap-lg-3 text-muted font-size-13">
                        <div>
                          <i class="mdi mdi-phone-refresh-outline me-1 text-success align-middle"></i>{{ getUser.phone }}
                        </div>
                        <div>
                          <i class="mdi mdi-email-outline me-1 text-success align-middle"></i> {{ getUser.email }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul class="nav nav-tabs-custom card-header-tabs border-top mt-4" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link px-3 active" data-bs-toggle="tab" href="#biodata" role="tab" aria-selected="true">Data
                  Diri</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link px-3" data-bs-toggle="tab" href="#akun-bank" role="tab" aria-selected="false">Akun Bank</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link px-3" data-bs-toggle="tab" href="#edit-biodata" role="tab" aria-selected="false"
                  tabindex="-1">Ubah Data Diri</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link px-3" data-bs-toggle="tab" href="#account" role="tab" aria-selected="false"
                  tabindex="-1">Akun</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="tab-content">
          <Datapersonal :get-user="getUser"></Datapersonal>
          <Editdatapersonal :get-user="getUser" @update-user="updateUser"></Editdatapersonal>
          <Account :get-user="getUser" @update-user="updateUser"></Account>
          <AccountBank></AccountBank>
        </div>
      </div>
    </div>
  </ParentJamaah>
</template>

<script setup lang="ts">
import ParentJamaah from '../../../../components/ParentJamaah.vue';
import BreadCrumb from '../../../../components/BreadCrumb.vue';
import Account from './account.vue';
import AccountBank from './bankaccount.vue';
import Datapersonal from './datapersonal.vue';
import Editdatapersonal from './editdatapersonal.vue';
import { useSessionStore } from '../../../../stores/session';
const { getUser, setUser } = useSessionStore();

const updateUser = async () => {
  await setUser();
};

</script>

