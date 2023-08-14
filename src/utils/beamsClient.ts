import PushNotifications from "@pusher/push-notifications-server";


const beamsClient = new PushNotifications({
  instanceId: import.meta.env.VITE_API_BEAMS_PUSHER,
  secretKey: import.meta.env.VITE_SECRET_KEY_BEAMS_PUSHER
});

export {
  beamsClient
};

