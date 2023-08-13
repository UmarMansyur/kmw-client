import Pusher from 'pusher-js';
import { sessionPusher } from '../stores/pusher';

export default (app: any, { apiKey, ...options }: any) => {
  const { setPusher } = sessionPusher();
  const pusher = new Pusher(apiKey, options);
  app.config.globalProperties.$pusher = new Pusher(apiKey, options);
  setPusher(pusher);
};