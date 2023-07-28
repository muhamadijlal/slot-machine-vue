import { defineStore } from "pinia";

export const useDataStore = defineStore("data-customer", {
  state: () => ({
    data: Array,
  }),

  actions: {
    async fill() {
      let r = await import("@/biodata.json");

      this.data = r.default;
    },
  },
});
