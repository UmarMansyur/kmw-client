import { ref } from "vue";

const password = ref<boolean>(true);
function handleTogglePassword() {
  const passwordInput: any = document.querySelector('#password-input');
  const passwordInputType = passwordInput.getAttribute('type');
  const icon = document.querySelector('#password-icon');
  if (passwordInputType === 'password') {
    passwordInput.setAttribute('type', 'text');
    icon?.classList.remove('mdi-eye-outline');
    icon?.classList.add('mdi-eye-off-outline');
  } else {
    passwordInput.setAttribute('type', 'password');
    icon?.classList.remove('mdi-eye-off-outline');
    icon?.classList.add('mdi-eye-outline');
  }
}

function convertToRp(value: string) {
  if (!value) return 'Rp 0';
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(parseInt(value)).slice(0, -3);
}

function isEnableLayer() {
  const layer: any = document.querySelector('.layer');
  layer.classList.remove('d-none');
}

function isDisableLayer() {
  const layer: any = document.querySelector('.layer');
  layer.classList.add('d-none');
}


export {
  handleTogglePassword, convertToRp, isEnableLayer, isDisableLayer, password
}