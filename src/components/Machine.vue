<template>
  <div
    class="bg-neutral-200 my-5 min-w-[250px] max-w-[250px] rounded-3xl border-2 border-slate-500"
  >
    <!-- Slots -->
    <section class="m-5">
      <div class="bg-violet-950 h-44 rounded-xl p-1">
        <p
          class="bg-white break-all h-full justify-center flex items-center rounded-lg text-md font-bold text-violet-950 overflow-y-auto p-5 scroll"
        >
          Lorem ipsum dolor.
        </p>
      </div>

      <div class="flex justify-around mt-10">
        <button
          class="bg-green-600 rounded-lg p-2 ring-2 ring-green-700 text-sm font-bold text-white hover:text-green-200 hover:scale-105"
        >
          Spin now!
        </button>
        <button
          class="bg-red-600 rounded-lg p-2 ring-2 ring-red-700 text-sm font-bold text-white hover:text-red-200 hover:scale-105"
        >
          Stop now!
        </button>
      </div>
    </section>
  </div>
</template>
