<script setup>
let yearNow = new Date().getFullYear();
</script>

<template>
  <div class="grid place-content-center h-screen">
    <!-- Header -->
    <header class="flex flex-col items-center">
      <span class="text-9xl"
        ><img
          src="@/assets/images/prk-2023.png"
          class="h-[300px] w-[300px]"
          alt="logo-prk"
      /></span>
      <h4 class="text-4xl font-bold text-slate-700">
        🎉 Welcome to slots PRK 2023 🎉
      </h4>
      <span class="text-lg font-medium text-slate-700">
        spin now and win big rewards!
      </span>
    </header>

    <div class="flex w-full">
      <div
        class="bg-neutral-200 my-20 min-w-[700px] max-w-[700px] rounded-[43px] p-5 border-4 border-slate-500"
      >
        <!-- Slots -->
        <section class="mt-28 mb-10">
          <div class="bg-violet-950 h-80 rounded-3xl mb-5 p-5">
            <p
              class="bg-white break-all h-full justify-center flex items-center rounded-2xl text-5xl font-bold text-red-500 overflow-y-auto p-5 scroll"
            >
              Lorem ipsum dolor.
            </p>
          </div>

          <div class="flex justify-center mt-16">
            <button
              class="bg-violet-950 w-[450px] p-10 rounded-t-xl rounded-b-[80px] text-4xl font-bold text-white"
            >
              Spin now!
            </button>
          </div>
        </section>
      </div>

      <div class="w-full h-full relative -left-[4px]">
        <!-- Penyambung 1 -->
        <div
          class="w-14 h-56 bg-neutral-200 rounded-r-md absolute top-64 border-4 border-slate-500"
        ></div>
        <div class="flex flex-col">
          <!-- Penyambung 2 -->
          <div
            class="w-20 h-44 bg-neutral-200 rounded-r-md absolute top-[280px] left-[52px] border-4 border-slate-500"
          ></div>

          <!-- Tuas -->
          <div
            class="w-8 h-44 bg-neutral-200 absolute top-[108px] left-[76px] border-4 border-slate-500"
          ></div>

          <!-- Pegangan Tuas -->
          <div
            class="w-24 h-24 bg-red-600 absolute rounded-full top-[18px] left-[42px] border-8 border-red-700"
          ></div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer>
      <div class="grid place-items-center">
        <p class="text-lg text-slate-700 font-semibold">
          Copyright © {{ yearNow }}. Created by
          <a href="https://github.com/muhamadijlal" class="hover:text-blue-500"
            >muhamadijlal_</a
          >
        </p>

        <p class="text-md font-medium text-slate-700">
          <a href="https://github.com/muhamadijlal"
            >Code is opensource can be found here:
            <span class="underline hover:text-blue-500"
              >https://github.com/muhamadijlal/</span
            ></a
          >
        </p>
      </div>
    </footer>
  </div>
</template>
