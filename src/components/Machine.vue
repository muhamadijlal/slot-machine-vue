<script setup>
import { useDataStore } from "@/store/DataCustomerStore";

let state = useDataStore();
function phoneHash(str) {
  if (str.length > 3) {
    return str.slice(0, -3) + "xxx";
  }
}

function padOrder(orderId) {
  if (orderId.length > 0) {
    const pad = "#00000";
    return "#" + (pad + orderId).slice(-pad.length);
  }
}
</script>

<template>
  <div
    class="bg-neutral-200 my-5 min-w-[350px] max-w-[350px] rounded-3xl border-2 border-slate-500"
  >
    <!-- Slots -->
    <section class="m-8">
      <div class="bg-violet-950 h-56 rounded-xl p-1">
        <div
          class="bg-white break-all h-full text-center justify-center flex flex-col rounded-lg overflow-y-auto p-5 space-y-3"
        >
          <h5 class="text-4xl text-violet-700 font-extrabold">
            {{ padOrder(state.data.order_id) }}
          </h5>
          <h5 class="text-xl font-extrabold text-violet-950">
            {{ state.data.fullname.toUpperCase() }}
          </h5>
          <h5 class="text-lg font-bold text-violet-700">
            {{ phoneHash(state.data.phone_number) }}
          </h5>
        </div>
      </div>

      <div class="flex justify-around mt-10">
        <button
          @click.prevent="state.startAnimation"
          :disabled="state.isSpinning"
          class="btn-spin"
        >
          Spin now!
        </button>
        <button
          @click.prevent="state.stopAnimation"
          :disabled="!state.isSpinning"
          class="btn-stop"
        >
          Stop now!
        </button>
      </div>
    </section>
  </div>
</template>
