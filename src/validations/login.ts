import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import axios from 'axios';
import Notify from '../helpers/notify';
import router from '../router';
import useToken from '../composables/token';

export default function useValidateLogin() {
  const schema = yup.object().shape({
    username: yup.string().required('').min(5),
    password: yup.string().required('').min(8)
  });

  const { meta } = useForm({
    validationSchema: schema,
    initialValues: {
      username: '',
      password: '',
    },
  });

  const { value: username } = useField<string>('username');
  const { value: password } = useField<string>('password');

  const tryLogin = async () => {
    const { setToken } = useToken();
    document.querySelector('.btn-success')!.innerHTML = '<i class="bx bx-loader bx-spin font-size-16 align-middle me-2"></i> Loading...';
    document.querySelector('.btn-success')!.setAttribute('disabled', 'disabled');
    const { data: response } = await axios.post(import.meta.env.VITE_API_KMW + '/auth/login', {
      email: username.value,
      password: password.value,
    });
    if (!response) {
      document.querySelector('.btn-success')!.innerHTML = 'Login';
      Notify.error('Gagal Login');
      return;
    }
    Notify.success('Berhasil Login');
    setToken(response.data.token);

    router.replace('/');
  };

  return {
    meta,
    username,
    password,
    tryLogin
  };
}