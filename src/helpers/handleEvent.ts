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


export {
  handleTogglePassword, convertToRp
}