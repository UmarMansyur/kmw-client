<template>
  <Parent>
    <form>
      <div class="mb-3">
        <label for="username" class="form-label">Username:</label>
        <input type="text" class="form-control" id="username" placeholder="Masukkan Email">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="text" class="form-control" id="email" placeholder="Masukkan Email">
      </div>
      <div class="mb-3">
        <label class="form-label" for="password-input">Password:</label>
        <div class="position-relative auth-pass-inputgroup mb-3">
          <input type="password" class="form-control pe-5" placeholder="Masukkan Password">
          <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button">
            <i class="mdi mdi-eye-outline align-middle"></i>
          </button>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="file">File:</label>
        <input class="form-control" type="file" id="file" />
        <small class="text-muted fst-italic">File: KK, Akte Kelahiran, KTP (Wajib)</small>
      </div>
      <div class="mb-3">
        <label class="form-label" for="nominal">Jumlah Transfer:</label>
        <input class="form-control" type="number" id="nominal" placeholder="Masukkan Jumlah Transfer" />
      </div>
      <div class="mb-3">
        <label class="form-label" for="nominal">Jenis Tabungan:</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Pilih Jenis Tabungan</option>
          <option value="1">Blue</option>
          <option value="2">Silver</option>
          <option value="3">Gold</option>
          <option value="4">Haji Plus</option>
          <option value="5">Haji Reguler</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label" for="file">Bukti Pembayaran:</label>
        <input class="form-control" type="file" id="file" />
        <small class="text-muted fst-italic">File: Bukti Pembayaran (Wajib)</small>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="auth-remember-check" value="">
        <label class="form-check-label" for="auth-remember-check">Ingatkan saya</label>
      </div>
      <div class="mt-4">
        <RouterLink to="/" class="btn btn-success w-100" type="submit"><i
            class="bx font-size-16 me-2 bx-send"></i>Registrasi</RouterLink>
      </div>
      <div class="mt-5 text-center">
        <p class="mb-0">Sudah memiliki akun ? <RouterLink to="/login"
            class="fw-semibold text-info text-decoration-underline"> Masuk disini</RouterLink>
        </p>
      </div>
    </form>
  </Parent>
</template>

<script setup lang="ts">
import Parent from './Parent.vue';
</script>