import { ref } from "vue";
import useApi from "./api";
import { useSessionStore } from "../stores/session";
import * as PusherPushNotifications from "@pusher/push-notifications-web";

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

  const depositNotification = async (id: string) => {
    await postResource('/notification', {
      user_account_id: getUser.id,
      transactional_savings_id: id,
      message: 'Setoran berhasil, menunggu konfirmasi dari admin',
    });
  };

  const webPush = async (userId?: string) => {
    const beamsClient: any = new PusherPushNotifications.Client({
      instanceId: "e5385f69-a3e5-42a5-b32a-9207220ee4c7",
    });

    beamsClient
      .start()
      .then((beamsClient: { getDeviceId: () => any; }) => beamsClient.getDeviceId())
      .then((deviceId: any) =>
        console.log("Successfully registered with Beams. Device ID:", deviceId)
      )
      .then(() => beamsClient.addDeviceInterest(userId))
      .then(() => beamsClient.getDeviceInterests())
      .then((interests: any) => console.log("Current interests:", interests))
      .catch(console.error);
  };
  return {
    notifications,
    unreadNotification,
    loadNotification,
    depositNotification,
    webPush
  };
}