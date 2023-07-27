<template>
  <div class="row">
    <div class="col-12">
      <label for="start_date">Tanggal Mulai:</label>
      <input type="date" class="form-control" name="start_date" id="start_date" placeholder="12-07-2023">
    </div>
    <div class="col-12 my-3">
      <label for="end_date">Tanggal Selesai:</label>
      <input type="date" class="form-control" name="end_date" id="end_date" placeholder="14-07-2023">
    </div>
    <div class="col-12 mb-3">
      <label for="end_date">Kategori:</label>
      <select class="form-select">
        <option value="">-- Pilih Kategori --</option>
        <option value="1">Semua</option>
        <option value="2">Blue</option>
        <option value="3">Silver</option>
        <option value="4">Gold</option>
      </select>
    </div>
    <div class="col-12 mb-3">
      <label for="end_date">Status:</label>
      <select class="form-select">
        <option value="">-- Pilih Status --</option>
        <option value="1">Semua</option>
        <option value="2">Lunas</option>
        <option value="3">Belum Lunas</option>
      </select>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-light float-start" data-bs-dismiss="modal">
      <i class="bx bx-x"></i> Batal
    </button>
    <button class="btn btn-info float-end">
      <i class="bx bx-filter"></i> Filter
    </button>

  </div>
</template>