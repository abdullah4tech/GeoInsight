<script setup>
import { ref } from 'vue'
import DropDown from '@/components/DropDown.vue'

const isChoosed = ref(false)

const handleOptionSelected = (option) => {
  isChoosed.value = !!option
}

const search = ref('')
console.log(search.value)
</script>

<template>
  <div class="lg:flex gap-4">
    <div class="flex lg:flex-row items-center justify-center">
      <div class="flex items-center gap-5">
        <DropDown @optionSelected="handleOptionSelected" />
        <input
          type="text"
          v-model="search"
          placeholder="Enter a country"
          :disabled="!isChoosed"
          class="ring-1 ring-inset ring-slate-300 w-3/4 h-10 p-5 text-black rounded-lg outline-none"
        />
      </div>
    </div>
    <button
      class="flex items-center gap-1 active:scale-95 bg-slate-700 w-32 h-10 lg:mt-0 mt-4 rounded-lg justify-center"
    >
      <p>Search</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </button>
  </div>
</template>
