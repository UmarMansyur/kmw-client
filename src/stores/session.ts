import { defineStore } from "pinia";
import { userType } from "../helpers/type";
import useToken from "../composables/token";
import { isDisableLayer } from "../helpers/handleEvent";
const { decodeToken } = useToken();
export const useSessionStore = defineStore({
  id: "session",
  state: () => <userType>({
    id: 0,
    name: '',
    email: '',
    role: '',
    thumbnail: '',
    phone: '',
    gender: '',
    address: '',
  }),
  getters: {
    getUser(state: userType) {
      return state;
    }
  },
  actions: {
    async setUser() {
      if(sessionStorage.getItem('token') == null) return;
      const response = await decodeToken();
      this.id = response.user_account_id;
      this.name = response.username;
      this.email = response.email;
      this.role = response.type == 'admin' ? 'Administrator' : response.type;
      this.thumbnail = import.meta.env.VITE_API_KMW +'/' + response.thumbnail;
      this.phone = response.phone;
      this.gender = response.gender;
      this.address = response.address;
      isDisableLayer();
    },
    destroyUser() {
      this.id = 0;
      this.name = '';
      this.email = '';
      this.role = '';
      this.thumbnail = '';
      this.phone = '';
    }
  }
});

