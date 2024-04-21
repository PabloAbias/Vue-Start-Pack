import { addAlert } from "@/composables/useAlerts";

export const miximDefault = {
  methods: {
    addAlert({ type, message }) {
      addAlert({
        type,
        message,
      });
    },
  },
};
