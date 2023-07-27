import { defineStore } from "pinia";

export const useDataStore = defineStore("data-customer", {
  state: () => ({
    customers: Array,
    interval: false,
    isSpinning: false,
    data: {
      fullname: "Spin Now!",
      order_id: "",
      phone_number: "",
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
      this.interval = setInterval(this.updateReels, 1);
    },

    stopAnimation() {
      this.isSpinning = false;
      clearInterval(this.interval);
    },
  },
});
