import { ref } from "vue";
import useApi from "./api";
import { useSessionStore } from "../stores/session";
import axios from "axios";
const { getResource, postResource } = useApi();
export default function useNotification() {
  const { getUser } = useSessionStore();
  const notifications = ref<any[]>([]);
  const unreadNotification = ref<number>(0);
  const loadNotification = async () => {
    const response = await getResource('/notification/mynotification/' + getUser.id);
    notifications.value = response.data.data.map((item: any) => {
      return {
        ...item,
        created_at: new Date(item.created_at).toLocaleString(),
      };
    });
    unreadNotification.value = response.data.unread;
  };
  const pushNotification = async () => {
    await axios({
      method: "post",
      url: "https://onesignal.com/api/v1/notifications",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + import.meta.env.VITE_ONESIGNAL_REST_API_KEY,
      },
      data: {
        app_id: import.meta.env.VITE_ONESIGNAL_APP_ID,
        included_segments: ["Subscribed Users"],
        data: {
          foo: "bar",
        },
        contents: {
          en: `Setoran berhasil, menunggu konfirmasi dari administrator`,
        },
      },
    });
  };
  const depositNotification = async (id: string) => {
    await postResource('/notification', {
      user_account_id: getUser.id,
      transactional_savings_id: id,
      message: 'Setoran berhasil, menunggu konfirmasi dari admin',
    });
  }
  return {
    notifications,
    unreadNotification,
    loadNotification,
    pushNotification,
    depositNotification,
  }
}