<script setup>
defineProps({
  customer: Object,
});

function unit(str) {
  return str.split("-").join(" ");
}

function padOrder(orderId) {
  if (orderId.length > 0) {
    const pad = "#00000";
    return "#" + (pad + orderId).slice(-pad.length);
  }
}
</script>

<template>
  <div class="fixed inset-0 flex justify-center bg-[#000000da] z-10">
    <div
      class="text-center space-y-4 grid place-content-center bg-white h-1/2 w-1/2 mt-[10%] py-[60px] rounded-3xl"
    >
      <h6 class="font-extrabold text-slate-700 text-4xl">Selamat! ✨</h6>
      <h6 class="font-extrabold text-violet-700 text-xl">
        Order id : {{ padOrder(customer.order_id) }}
      </h6>
      <h1 class="text-lg font-bold text-slate-800">
        <span class="text-yellow-500">{{ customer.fullname }}</span> Mendapatkan
        1 Unit : <br />
        <span class="text-green-600">{{ unit(this.$route.params.id) }}</span>
      </h1>
      <button class="btn-success mt-10" @click="$emit('close-modal')">
        Save
      </button>
    </div>
  </div>
</template>
