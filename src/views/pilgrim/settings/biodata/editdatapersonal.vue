<template>
  <div class="tab-pane" id="edit-biodata" role="tabpanel">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title mb-0">Ubah Data Diri</h5>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group mb-3">
            <label for="namaPengguna">Nama Pengguna:</label>
            <input type="text" class="form-control" id="namaPengguna" value="Meita Regina Priyanto" readonly>
          </div>
          <div class="form-group mb-3">
            <label for="nomorTelepon">Nomor Telepon:</label>
            <input type="text" class="form-control" id="nomorTelepon" value="086789654223" readonly>
          </div>
          <div class="form-group mb-3">
            <label for="alamatSurel">Alamat Surel:</label>
            <input type="email" class="form-control" id="alamatSurel" value="regina@gmail.com" readonly>
          </div>
          <div class="form-group mb-3">
            <label>Jenis Kelamin:</label>
            <div class="form-check">
              <input type="radio" class="form-check-input" id="jenisKelaminPerempuan" name="jenisKelamin"
                value="Perempuan" checked readonly>
              <label class="form-check-label" for="jenisKelaminPerempuan">Perempuan</label>
            </div>
            <div class="form-check">
              <input type="radio" class="form-check-input" id="jenisKelaminLakiLaki" name="jenisKelamin" value="Laki-Laki"
                disabled>
              <label class="form-check-label" for="jenisKelaminLakiLaki">Laki-Laki</label>
            </div>
          </div>
          <div class="form-group mb-3">
            <label for="alamatRumah">Alamat Rumah:</label>
            <textarea class="form-control" id="alamatRumah" rows="3" readonly>Tlanakan, Pamekasan</textarea>
          </div>
        </form>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-info waves-effect float-end">
          <i class="bx bx-send"></i> Simpan
        </button>
      </div>
      <!-- end card body -->
    </div>
    <!-- end card -->
  </div>
</template>