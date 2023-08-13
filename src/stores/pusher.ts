import { defineStore } from "pinia";

export const sessionPusher = defineStore({
  id: 'pusher',
  state: () => ({
    pusher: null,
    channel: null,
    channelName: null,
    event: null,
    callback: null,
  }),
  getters: {
    getPusher(state) {
      return state.pusher;
    }
  },
  actions: {
    setPusher(v: any) {
      this.pusher = v;
    }
  }
})