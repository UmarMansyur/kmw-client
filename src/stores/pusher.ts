import { defineStore } from "pinia";

export const sessionPusher = defineStore({
  id: 'pusher',
  state: () => ({
    pusher: {},
  }) as any,
  getters: {
    getPusher(state) {
      return state.pusher;
    },
  },
  actions: {
    setPusher(v: any) {
      this.pusher = v;
    },
    chanelSubscribe(channelName: string, event: string) {
      if (this.pusher === null) throw new Error('Pusher not initialized');
      const chanel: any = this.pusher.subscribe(channelName);
      chanel.bind(event, (data: any) => {
        return data;
      }
      );
    }
  }
});