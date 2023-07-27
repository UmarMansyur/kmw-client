<template>
  <div class="row">
    <div class="col-12">
      <label for="departure_date">Waktu Pemberangkatan: </label>
      <input type="datetime-local" name="departure_date" id="departure_date" class="form-control">
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-12">
      <button type="button" class="btn btn-light float-start">
        <i class="bx bx-x"></i> Batal
      </button>
      <button class="btn btn-info float-end" type="button">
        <i class="bx bx-navigation"></i> Atur
      </button>
    </div>
  </div>
</template>