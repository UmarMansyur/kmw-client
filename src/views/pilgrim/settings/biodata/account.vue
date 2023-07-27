<template>
  <div class="tab-pane" id="account" role="tabpanel">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title mb-0">Akun</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <label for="username" class="form-label">Username: </label>
            <input type="text" name="username" id="username" class="form-control" />
          </div>
          <div class="col-12 my-3">
            <label for="password" class="form-label">Password: </label>
            <input type="password" name="password" id="password" class="form-control" />
          </div>
          <div class="col-12">
            <Thumbnail />
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