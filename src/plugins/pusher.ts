import Pusher from 'pusher-js';
export default(app: any, { apiKey, ...options }: any) => {
  app.config.globalProperties.$pusher = new Pusher(apiKey, options);
}