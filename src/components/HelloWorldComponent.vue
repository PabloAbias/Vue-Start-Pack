<script>
import { miximDefault } from "@/mixins/index.ts";
import { useAlertsStore } from "@/stores/useAlertsStore.ts";

import { Alert } from "@/components/alerts";

export default {
  mixins: [miximDefault],
  components: {
    Alert,
  },
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
  <div class="flex flex-col p-2 gap-4">
    <span>
      Este é um projeto inicial simples, pronto para codar, nele contém:
      <ul class="pl-8 list-disc">
        <li>Vite.js</li>
        <li>Vue.js</li>
        <li>Pinia</li>
        <li>TailwindCSS</li>
        <li>Vitest / test-utils</li>
        <li>Vitest</li>
      </ul>
    </span>
    <button
      class="w-fit px-2 py-1 bg-emerald-300 rounded"
      @click="addAlert({ type: 'E', message: 'Hello World!' })"
    >
      Adicionar Novo Alert!
    </button>
    <span> Alertas: <Alert /> </span>
  </div>
</template>
