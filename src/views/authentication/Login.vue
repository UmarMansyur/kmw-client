<template>
  <Parent>
    <form>
      <div class="mb-3">
        <label for="username" class="form-label">Email</label>
        <input type="email" class="form-control" placeholder="Masukkan Email" autofocus v-model="username">
      </div>
      <div class="mb-3">
        <div class="float-end">
          <a href="/password/forgot-password" class="text-muted" tabindex="-1">Lupa password?</a>
        </div>
        <label class="form-label" for="password-input">Password</label>
        <div class="position-relative auth-pass-inputgroup mb-3">
          <input type="password" id="password-input" class="form-control pe-5" placeholder="Masukkan Password"
            v-model="password">
          <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
            @click="handleTogglePassword()" type="button">
            <i class="mdi mdi-eye-outline align-middle"></i>
          </button>
        </div>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="auth-remember-check" value="">
        <label class="form-check-label" for="auth-remember-check">Ingatkan saya</label>
      </div>
      <div class="mt-4">
        <button class="btn btn-success w-100" type="button" :disabled="!meta.valid" @click="tryLogin"><i
            class="bx font-size-16 align-middle me-2 bx-lock-open-alt"></i> Login </button>
      </div>
      <div class="mt-5 text-center">
        <p class="mb-0">Belum memiliki akun ? <RouterLink to="/register"
            class="fw-semibold text-info text-decoration-underline"> Daftar disini</RouterLink>
        </p>
      </div>
    </form>
  </Parent>
</template>

<script setup lang="ts">
import Parent from './Parent.vue';
import { handleTogglePassword, isDisableLayer } from '../../helpers/handleEvent'
import useValidateLogin from '../../validations/login';
import { onMounted } from 'vue';
const { username, password, meta, tryLogin } = useValidateLogin();

onMounted(() => {
  isDisableLayer();
})
</script>