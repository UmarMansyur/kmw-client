<template>
  <div class="tab-pane active" id="biodata" role="tabpanel">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title mb-0">Data Diri</h5>
      </div>
      <div class="card-body">
        <div>
          <div class="pb-1">
            <div class="row">
              <div class="col-xl-2">
                <div>
                  <h5 class="font-size-15">Nama Pengguna :</h5>
                </div>
              </div>
              <div class="col-xl">
                <div class="text-muted">
                  <p class="mb-2">{{ getUser.name }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="py-1">
            <div class="row">
              <div class="col-xl-2">
                <div>
                  <h5 class="font-size-15">Jabatan :</h5>
                </div>
              </div>
              <div class="col-xl">
                <div class="text-muted">
                  <p class="mb-2">{{ getUser.role }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="py-1">
            <div class="row">
              <div class="col-xl-2">
                <div>
                  <h5 class="font-size-15">Nomor Telepon:</h5>
                </div>
              </div>
              <div class="col-xl">
                <div class="text-muted">
                  <p class="mb-2">{{ getUser.phone }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="py-1">
            <div class="row">
              <div class="col-xl-2">
                <div>
                  <h5 class="font-size-15">Alamat Surel:</h5>
                </div>
              </div>
              <div class="col-xl">
                <div class="text-muted">
                  <p class="mb-2">{{ getUser.email }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="py-1">
            <div class="row">
              <div class="col-xl-2">
                <div>
                  <h5 class="font-size-15">Jenis Kelamin:</h5>
                </div>
              </div>
              <div class="col-xl">
                <div class="text-muted">
                  <p class="mb-2">{{ getUser.gender }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="py-1">
            <div class="row">
              <div class="col-xl-2">
                <div>
                  <h5 class="font-size-15">Alamat Rumah:</h5>
                </div>
              </div>
              <div class="col-xl">
                <div class="text-muted">
                  <p class="mb-2">{{ getUser.address }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    getUser: {
      type: Object,
      required: true
    }
  });
</script>