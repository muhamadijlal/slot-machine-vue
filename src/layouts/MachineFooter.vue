<script setup>
let yearNow = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="grid place-items-center">
      <p class="text-xs text-slate-800 font-semibold">
        Copyright © {{ yearNow }}. Created by
        <a href="https://github.com/muhamadijlal" class="hover:text-blue-500"
          >muhamadijlal_</a
        >
      </p>

      <p class="text-[8px] font-medium text-slate-800">
        <a href="https://github.com/muhamadijlal/slot-machine-vue"
          >Code is opensource can be found here:
          <span class="underline hover:text-blue-500"
            >https://github.com/muhamadijlal/slot-machine-vue</span
          ></a
        >
      </p>
    </div>
  </footer>
</template>
