import { defineStore } from "pinia";

export const useDataStore = defineStore("data-customer", {
  state: () => ({
    customers: Array,
  }),
  actions: {
    async fill() {
      let r = await import("@/biodata.json");

      this.customers = r.default;
    },
  },
});
