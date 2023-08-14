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
    try {
      const { setToken } = useToken();
      document.querySelector('.btn-success')!.innerHTML = '<i class="bx bx-loader bx-spin font-size-16 align-middle me-2"></i> Loading...';
      document.querySelector('.btn-success')!.setAttribute('disabled', 'disabled');
      const response = await axios.post(import.meta.env.VITE_API_KMW + '/auth/login', {
        email: username.value,
        password: password.value,
      });
      await setToken(response.data.data.token);
      router.replace('/');
    } catch (error: any) {
      Notify.error(error.message);
      username.value = '';
      password.value = '';
      document.querySelector('.btn-success')!.innerHTML = '<i class="bx bx-lock-open font-size-16 align-middle me-2"></i> Login';
      router.replace({ name: 'Login' });
    }
  };


  return {
    meta,
    username,
    password,
    tryLogin
  };
}