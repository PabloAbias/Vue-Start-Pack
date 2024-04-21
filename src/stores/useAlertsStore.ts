import { defineStore } from "pinia";

export const useAlertsStore = defineStore("alerts", {
  state: () => ({
    alerts: [],
    ids: 0,
  }),
  getters: {
    getAlerts: (state) => state.alerts,
  },
  actions: {
    addAlert(alert) {
      this.alerts.push(alert);
    },
  },
});
