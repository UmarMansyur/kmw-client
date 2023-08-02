import Notify from "../helpers/notify";
import router from "../router";
import useApi from "./api";
import { ref } from "vue";
const { checkResponse, getResource, putResource } = useApi();

export default function useToken() {
    const isAdmin = ref<Boolean>(false);
    async function setToken(token: any) {
        sessionStorage.setItem('token', JSON.stringify(token));
    }

    function getAccessToken() {
        if (sessionStorage.getItem('token')) {
            return JSON.parse(sessionStorage.getItem('token')!);
        }
        return '';
    }

    async function clearToken() {
        sessionStorage.clear();
    }

    async function decodeToken() {
        try {
            const response = await getResource('/auth/me');
            await checkResponse(response);
            checkRole(response.data.type);
            return await response.data;
        } catch (error: any) {
            Notify.error(error.message);
        }
    }

    async function checkRole(role: string) {
        if (role === 'admin') {
            isAdmin.value = true;
            return;
        }
        isAdmin.value = false;
    }

    async function validateToken() {
        try {
            const payload = JSON.parse(window.atob((getAccessToken())!.split(".")[1]));
            const expired = payload.exp;
            const now = Date.now() / 1000;
            if (now < expired) {
                await clearToken();
                await refresh();
                router.replace({ name: 'Login' });
            }
        } catch (error: any) {
            console.log(error);
            Notify.error(error.message);
        }
    }

    async function refresh() {
        try {
            console.log(getAccessToken());
            // if(getAccessToken()) {
            //     const response = await fetch(import.meta.env.VITE_API_KMW + '/auth/refresh', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Authorization': `Bearer ${getAccessToken()}`
            //         }
            //     });
            //     await checkResponse(response);
            //     const data = await response.json();
            //     console.log(data);
            //     await setToken(data.data.token);
            //     await decodeToken();
            // }
        } catch (error: any) {
            clearToken();
            router.replace({ name: 'Login' });
            Notify.error(error.message);
        }
    }


    return {
        setToken, clearToken, decodeToken, getAccessToken, validateToken, isAdmin, refresh
    };

}