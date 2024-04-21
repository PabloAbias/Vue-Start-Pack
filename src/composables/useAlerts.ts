import { useAlertsStore } from "@/stores/useAlertsStore";

var alerts;
setTimeout(() => {
  alerts = useAlertsStore();
}, 10);

export const addAlert = ({ type, message }) => {
  alerts.addAlert({ type, message });
};
