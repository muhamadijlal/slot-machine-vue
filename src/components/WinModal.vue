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

function phoneHash(str) {
  if (str.length > 3) {
    return str.slice(0, -3) + "xxx";
  }
}
</script>

<template>
  <div class="fixed inset-0 flex justify-center bg-[#000000da] z-10">
    <div
      class="text-center space-y-7 grid place-content-center bg-white h-3/4 w-3/4 mt-[10%] py-[60px] rounded-3xl p-10"
    >
      <h6 class="font-extrabold text-yellow-500 text-5xl">Selamat!</h6>
      <h6 class="font-extrabold text-violet-700 text-6xl">
        {{ customer.fullname.toUpperCase() }}
      </h6>
      <h6 class="font-extrabold text-violet-600 text-2xl">
        {{ phoneHash(customer.phone_number) }}
      </h6>
      <h1 class="text-lg font-bold text-slate-800">
        Mendapatkan 1 Unit :
        <span class="text-green-600 font-extrabold text-2xl">{{
          unit(this.$route.params.id.toUpperCase())
        }}</span>
      </h1>
      <div class="flex gap-5">
        <button
          class="btn-success w-[250px] m-auto"
          @click="$emit('close-modal')"
        >
          Save
        </button>

        <button
          class="btn-danger w-[250px] m-auto"
          @click="$emit('close-modal')"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
