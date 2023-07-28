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
    </div>
  </footer>
</template>
