<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useDark } from '@vueuse/core'

const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light'
})

const themeToggle = () => {
  isDark.value = !isDark.value
}

// Ref for the navbar
const navbar = ref(null)

// Function to handle scroll event
const handleScroll = () => {
  if (window.scrollY > 0) {
    navbar.value.classList.add('fixed', 'top-0', 'left-0', 'w-full')
  } else {
    navbar.value.classList.remove('fixed', 'top-0', 'left-0', 'w-full')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav ref="navbar" class="w-full p-5 bg-slate-500 text-white">
    <div class="flex items-center space-x-52 justify-center lg:gap-x-96">
      <a href="#" class="font-bold text-2xl">GeoInsite.</a>
      <div
        class="flex items-center rounded-full bg-slate-400 p-2 cursor-pointer"
        @click="themeToggle"
      >
        <ion-icon :name="isDark ? 'moon-outline' : 'sunny-outline'" class="size-5"></ion-icon>
      </div>
    </div>
  </nav>
</template>

<style>
.fixed {
  position: fixed;
  margin-top: 0; /* Add any desired margin */
  box-shadow: 0 0 50px rgb(53, 53, 53);
}
</style>
