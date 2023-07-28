import axios from "axios";
import { defineStore } from "pinia";

export const useDataStore = defineStore("data-customer", {
  state: () => ({
    data: Array,
  }),

  actions: {
    async fill() {
      // let r = await import("@/biodata.json");
      let r = await axios.get("http://localhost:3000/api/doorprizes");

      this.data = r.data;
    },
  },
});
