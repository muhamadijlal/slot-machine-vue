<script setup>
defineProps({
  customer: Object,
});

function unit(str) {
  return str.split("-").join(" ");
}

function padOrder(orderId) {
  if (orderId > 0) {
    const pad = "#00000";
    return "#" + (pad + orderId).slice(-pad.length);
  }
}
</script>

<template>
  <div class="fixed inset-0 flex justify-center bg-[#000000da] z-10">
    <div
      class="text-center space-y-11 grid place-content-center bg-white h-1/2 w-1/2 mt-[10%] py-[60px] rounded-3xl"
    >
      <h6 class="font-extrabold text-yellow-500 text-5xl">Selamat!</h6>
      <h6 class="font-extrabold text-violet-700 text-6xl">
        {{ customer.fullname.toUpperCase() }}
      </h6>
      <h1 class="text-lg font-bold text-slate-800">
        Mendapatkan 1 Unit :
        <span class="text-green-600 font-extrabold text-2xl">{{
          unit(this.$route.params.id.toUpperCase())
        }}</span>
      </h1>
      <button
        class="btn-success mt-10 w-1/2 m-auto"
        @click="$emit('close-modal')"
      >
        Save
      </button>
    </div>
  </div>
</template>
