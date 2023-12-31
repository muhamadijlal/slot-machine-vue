<script setup>
import { useDataStore } from "@/store/DataCustomerStore";
import WinModal from "@/components/winModal.vue";
import axios from "axios";
import { reactive } from "vue";
import { useRoute } from "vue-router";

const spinAudio = new Audio("../../src/assets/audio/trol 5.mp3");
const winAudio = new Audio("../../src/assets/audio/new win 2.wav");
const state = useDataStore();

const route = useRoute();

const data = reactive({
  product_name: route.params.id,
  isSpinning: false,
  interval: false,
  showModal: false,
  customer: {
    fullname: "Spin Now!",
    order_id: "",
    phone_number: "",
  },
});

async function storeData() {
  await axios
    .post("http://localhost:3000/api/winner_history", {
      order_id: data.customer.order_id,
      product_name: data.product_name,
      fullname: data.customer.fullname,
      phone_number: data.customer.phone_number,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((response) => {
      console.log(response);
    });
}

function phoneHash(str) {
  if (str.length > 3) {
    return str.slice(0, -3) + "xxx";
  }
}

function padOrder(orderId) {
  if (orderId > 0) {
    const pad = "#00000";
    return "#" + (pad + orderId).slice(-pad.length);
  }
}

function randomName() {
  return state.data[Math.floor(Math.random() * state.data.length)];
}

function updateReels() {
  data.customer = randomName();
}

function startAnimation() {
  spinAudio.loop = true;
  spinAudio.play();
  data.isSpinning = true;
  data.interval = setInterval(updateReels, 1);
}

function closeModal() {
  data.showModal = false;
  winAudio.pause();
  clear();
}

function clear() {
  data.customer = {
    fullname: "Spin Now!",
    order_id: "",
    phone_number: "",
  };
}

function stopAnimation() {
  spinAudio.loop = false;
  spinAudio.pause();
  winAudio.play();
  data.isSpinning = false;
  data.showModal = true;
  clearInterval(data.interval);
  storeData();
}
</script>

<template>
  <WinModal
    v-show="data.showModal"
    @close-modal="closeModal()"
    :customer="data.customer"
  />

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
            {{ padOrder(data.customer.order_id) }}
          </h5>
          <h5 class="text-xl font-extrabold text-sky-500">
            {{ data.customer.fullname.toUpperCase() }}
          </h5>
          <h5 class="text-lg font-bold text-violet-700">
            {{ phoneHash(data.customer.phone_number) }}
          </h5>
        </div>
      </div>

      <div class="flex justify-around mt-10">
        <button
          @click.prevent="startAnimation()"
          :disabled="data.isSpinning"
          class="btn-spin"
        >
          Spin now!
        </button>
        <button
          :disabled="!data.isSpinning"
          @click.prevent="stopAnimation()"
          class="btn-stop"
        >
          Stop now!
        </button>
      </div>
    </section>
  </div>
</template>
