<script setup>
import MachineContent from "@/layouts/MachineContent.vue";
import MachineFooter from "@/layouts/MachineFooter.vue";
import { useDataStore } from "@/store/DataCustomerStore.js";

let data = useDataStore();

data.fill();
</script>
<template>
  <div
    class="grid place-content-center bg-[url('./assets/images/bg-prk-lottery.png')] bg-cover h-screen"
  >
    <machine-content />

    <machine-footer />
  </div>
</template>
