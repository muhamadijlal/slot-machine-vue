<script setup>
import { reactive } from "vue";
import { useDataStore } from "@/store/DataCustomerStore";

let data = useDataStore();

const state = reactive({
  interval: false,
  isSpinning: false,
  name: "CLick spin",
});

function randomName() {
  // data.customers[0].fullname
  return data.customers[Math.floor(Math.random() * data.customers.length)]
    .fullname;
}

function updateReels() {
  state.name = randomName();
}

function startAnimation() {
  state.isSpinning = true;
  state.interval = setInterval(updateReels, 100);
}

function stopAnimation() {
  state.isSpinning = false;
  clearInterval(state.interval);
}
</script>

<template>
  <div
    class="bg-neutral-200 my-5 min-w-[250px] max-w-[250px] rounded-3xl border-2 border-slate-500"
  >
    <!-- Slots -->
    <section class="m-5">
      <div class="bg-violet-950 h-44 rounded-xl p-1">
        <p
          class="bg-white break-all h-full justify-center flex items-center rounded-lg text-xl font-bold text-violet-950 overflow-y-auto p-5 scroll"
        >
          {{ state.name }}
        </p>
      </div>

      <div class="flex justify-around mt-10">
        <button
          @click.prevent="startAnimation"
          :disabled="state.isSpinning"
          class="bg-green-600 rounded-lg p-2 ring-2 ring-green-700 text-sm font-bold text-white hover:scale-105 disabled:bg-slate-300 disabled:ring-slate-400 disabled:pointer-events-none"
        >
          Spin now!
        </button>
        <button
          @click.prevent="stopAnimation"
          :disabled="!state.isSpinning"
          class="bg-red-600 rounded-lg p-2 ring-2 ring-red-700 text-sm font-bold text-white hover:scale-105 disabled:bg-slate-300 disabled:ring-slate-400 disabled:pointer-events-none"
        >
          Stop now!
        </button>
      </div>
    </section>
  </div>
</template>
