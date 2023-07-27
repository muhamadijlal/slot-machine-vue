import { defineStore } from "pinia";

export const useDataStore = defineStore("data-customer", {
  state: () => ({
    customers: Array,
    interval: false,
    isSpinning: false,
    data: {
      fullname: "Click spin",
      order_id: "-",
    },
  }),
  actions: {
    async fill() {
      let r = await import("@/biodata.json");

      this.customers = r.default;
    },
    randomName() {
      return this.customers[Math.floor(Math.random() * this.customers.length)];
    },

    updateReels() {
      this.data = this.randomName();
    },

    startAnimation() {
      this.isSpinning = true;
      this.interval = setInterval(this.updateReels, 50);
    },

    stopAnimation() {
      this.isSpinning = false;
      clearInterval(this.interval);
    },
  },
});
