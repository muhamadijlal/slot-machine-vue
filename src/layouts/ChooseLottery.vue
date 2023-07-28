<script setup></script>

<template>
  <div
    class="grid place-content-center bg-[url('./assets/images/bg-prk-lottery.png')] bg-cover h-screen"
  >
    <div class="flex flex-wrap justify-center mt-20">
      <router-link :to="{ name: 'lottery', params: { id: 'air-conditioner' } }">
        <img src="../assets/images/AC.png" class="w-52 hover:scale-110" />
      </router-link>
      <router-link :to="{ name: 'lottery', params: { id: 'blender' } }">
        <img src="../assets/images/blender.png" class="w-52 hover:scale-110" />
      </router-link>
      <router-link :to="{ name: 'lottery', params: { id: 'dispenser' } }">
        <img src="../assets/images/dispnser.png" class="w-52 hover:scale-110" />
      </router-link>
      <router-link :to="{ name: 'lottery', params: { id: 'handphone' } }">
        <img src="../assets/images/hp.png" class="w-52 hover:scale-110" />
      </router-link>
      <router-link :to="{ name: 'lottery', params: { id: 'kompor' } }">
        <img src="../assets/images/kompor.png" class="w-52 hover:scale-110" />
      </router-link>
      <router-link :to="{ name: 'lottery', params: { id: 'rice-cooker' } }">
        <img
          src="../assets/images/rice-cooker.png"
          class="w-52 hover:scale-110"
        />
      </router-link>
      <router-link
        :to="{ name: 'lottery', params: { id: 'motor-listrik-roda-2' } }"
      >
        <img src="../assets/images/roda-2.png" class="w-52 hover:scale-110" />
      </router-link>
      <router-link
        :to="{ name: 'lottery', params: { id: 'motor-listrik-roda-3' } }"
      >
        <img src="../assets/images/roda-3.png" class="w-52 hover:scale-110" />
      </router-link>
      <router-link :to="{ name: 'lottery', params: { id: 'TV' } }">
        <img src="../assets/images/TV.png" class="w-52 hover:scale-110" />
      </router-link>
      <router-link :to="{ name: 'lottery', params: { id: 'voucher-mercure' } }">
        <img src="../assets/images/voucher.png" class="w-52 hover:scale-110" />
      </router-link>
    </div>
  </div>
</template>
