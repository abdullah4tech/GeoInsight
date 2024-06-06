<script setup>
import { watch } from 'vue'
import { useDark } from '@vueuse/core'

const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light'
})

const themeToggle = () => {
  const body = document.body
  if (isDark.value) {
    body.classList.remove('fade-to-dark')
    body.classList.add('fade-to-light')
  } else {
    body.classList.remove('fade-to-light')
    body.classList.add('fade-to-dark')
  }
  isDark.value = !isDark.value
}

// Watch for changes in the theme and clean up classes
watch(isDark, (newVal) => {
  const body = document.body
  if (newVal) {
    body.classList.remove('fade-to-light')
    body.classList.add('fade-to-dark')
  } else {
    body.classList.remove('fade-to-dark')
    body.classList.add('fade-to-light')
  }
})
</script>

<template>
  <nav class="w-full p-5 bg-slate-500 text-white sticky z-[1000]">
    <div class="flex items-center gap-48 justify-center md:gap-96">
      <a href="#" class="font-bold text-base md:mr-56 lg:mr-96 lg:text-2xl">GeoInsite.</a>
      <div
        class="flex items-center rounded-full bg-slate-400 p-2 cursor-pointer"
        @click="themeToggle"
      >
        <ion-icon :name="isDark ? 'moon-outline' : 'sunny-outline'" class="size-5"></ion-icon>
      </div>
    </div>
  </nav>
</template>
