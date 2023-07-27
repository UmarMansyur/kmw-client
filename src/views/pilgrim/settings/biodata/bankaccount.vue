<template>
  <div class="tab-pane" id="akun-bank" role="tabpanel">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title mb-0">Akun Bank</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <label for="bank-name" class="form-label">Nama Bank: </label>
            <input type="text" name="bank-name" id="bank-name" class="form-control" />
          </div>
          <div class="col-12 my-3">
            <label for="bank-username" class="form-label">Nama Akun Bank Terdaftar: </label>
            <input type="text" name="bank-username" id="bank-username" class="form-control" />
          </div>
          <div class="col-12 my-3">
            <label for="no-rekening" class="form-label">Nomor Rekening: </label>
            <input type="password" name="no-rekening" id="no-rekening" class="form-control" />
          </div>

        </div>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-info waves-effect float-end">
          <i class="bx bx-send me-1"></i> Simpan
        </button>
      </div>
    </div>
  </div>
</template>