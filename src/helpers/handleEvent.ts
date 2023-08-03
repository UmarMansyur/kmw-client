function handleTogglePassword() {
  const passwordInput: any = document.querySelector('#password-input');
  const passwordInputType = passwordInput.getAttribute('type');
  if (passwordInputType === 'password') {
    passwordInput.setAttribute('type', 'text');
  } else {
    passwordInput.setAttribute('type', 'password');
  }
}

function convertToRp(value: string) {
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
  handleTogglePassword, convertToRp, isEnableLayer, isDisableLayer
}