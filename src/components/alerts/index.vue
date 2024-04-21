<script>
import { useAlertsStore } from "@/stores/useAlertsStore.ts";

export default {
  created() {
    this.alerts = useAlertsStore();
  },
  data() {
    return {
      alerts: null,
    };
  },
};
</script>

<template>
  <div>
    {{ alerts.getAlerts }}
  </div>
</template>
