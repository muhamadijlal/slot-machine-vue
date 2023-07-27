<script setup>
// import { reactive } from "vue";
import { useDataStore } from "@/store/DataCustomerStore";

let state = useDataStore();
</script>

<template>
  <div
    class="bg-neutral-200 my-5 min-w-[250px] max-w-[250px] rounded-3xl border-2 border-slate-500"
  >
    <!-- Slots -->
    <section class="m-5">
      <div class="bg-violet-950 h-44 rounded-xl p-1">
        <div
          class="bg-white break-all h-full justify-center flex flex-col items-center rounded-lg overflow-y-auto p-5 scroll"
        >
          <h5 class="text-xl font-bold text-violet-950">
            {{ state.data.fullname }}
          </h5>
          <h5 class="text-sm text-violet-700 font-medium">
            #{{ state.data.order_id }}
          </h5>
        </div>
      </div>

      <div class="flex justify-around mt-10">
        <button
          @click.prevent="state.startAnimation"
          :disabled="state.isSpinning"
          class="bg-green-600 rounded-lg p-2 ring-2 ring-green-700 text-sm font-bold text-white hover:scale-105 disabled:bg-slate-300 disabled:ring-slate-400 disabled:pointer-events-none"
        >
          Spin now!
        </button>
        <button
          @click.prevent="state.stopAnimation"
          :disabled="!state.isSpinning"
          class="bg-red-600 rounded-lg p-2 ring-2 ring-red-700 text-sm font-bold text-white hover:scale-105 disabled:bg-slate-300 disabled:ring-slate-400 disabled:pointer-events-none"
        >
          Stop now!
        </button>
      </div>
    </section>
  </div>
</template>
