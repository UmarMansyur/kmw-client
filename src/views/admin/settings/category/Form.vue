<template>
  <div class="row">
    <div class="col-12">
      <label for="saving_type">Jenis Tabungan:</label>
      <input type="text" class="form-control" name="saving_type" id="saving_type" placeholder="Contoh: Blue">
    </div>
    <div class="col-12 my-3">
      <label for="limit">Batas Pembayaran:</label>
      <input type="number" class="form-control" name="limit" id="limit" placeholder="Contoh: 2000000">
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-light float-start" data-bs-dismiss="modal">
      <i class="bx bx-x"></i> Batal
    </button>
    <button class="btn btn-info float-end">
      <i class="bx bx-send"></i> Simpan
    </button>

  </div>
</template>