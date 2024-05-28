<script setup>
import SearchBox from '@/components/SearchBox.vue'
import axios from 'axios'
</script>

<template>
  <div class="container flex flex-col items-center justify-center">
    <div class="m-10">
      <SearchBox />
    </div>
    <div class="countries flex flex-col items-center gap-4 mb-5 lg:grid grid-cols-2">
      <div class="bg-slate-700 w-72 flex flex-col rounded-xl">
        <img
          class="mb-4 w-72 rounded-xl"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAACVBMVEUAh1H///8AfDudGzJvAAABX0lEQVR4nO3QQQ0AIAzAwIF/0Yi4ZA/Sc9DObLlnzV2L2tM+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+8uW+B3AYRFPn9q1JAAAAAElFTkSuQmCC"
        />
        <div class="flex flex-col justify-center m-5 text-left">
          <h2 class="font-bold text-xl mb-1">Republic Of Nigeria</h2>
          <p>Population:</p>
          <p>Region:</p>
          <p>Capital:</p>
        </div>
      </div>
      <div class="bg-slate-700 w-72 flex flex-col rounded-xl">
        <img
          class="mb-4 w-72 rounded-xl"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAACVBMVEUAh1H///8AfDudGzJvAAABX0lEQVR4nO3QQQ0AIAzAwIF/0Yi4ZA/Sc9DObLlnzV2L2tM+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+8uW+B3AYRFPn9q1JAAAAAElFTkSuQmCC"
        />
        <div class="flex flex-col justify-center m-5 text-left">
          <h2 class="font-bold text-xl mb-1">Republic Of Nigeria</h2>
          <p>Population:</p>
          <p>Region:</p>
          <p>Capital:</p>
        </div>
      </div>
      <div class="bg-slate-700 w-72 flex flex-col rounded-xl">
        <img
          class="mb-4 w-72 rounded-xl"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAACVBMVEUAh1H///8AfDudGzJvAAABX0lEQVR4nO3QQQ0AIAzAwIF/0Yi4ZA/Sc9DObLlnzV2L2tM+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+8uW+B3AYRFPn9q1JAAAAAElFTkSuQmCC"
        />
        <div class="flex flex-col justify-center m-5 text-left">
          <h2 class="font-bold text-xl mb-1">Republic Of Nigeria</h2>
          <p>Population:</p>
          <p>Region:</p>
          <p>Capital:</p>
        </div>
      </div>
      <div class="bg-slate-700 w-72 flex flex-col rounded-xl">
        <img
          class="mb-4 w-72 rounded-xl"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAACVBMVEUAh1H///8AfDudGzJvAAABX0lEQVR4nO3QQQ0AIAzAwIF/0Yi4ZA/Sc9DObLlnzV2L2tM+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+8uW+B3AYRFPn9q1JAAAAAElFTkSuQmCC"
        />
        <div class="flex flex-col justify-center m-5 text-left">
          <h2 class="font-bold text-xl mb-1">Republic Of Nigeria</h2>
          <p>Population:</p>
          <p>Region:</p>
          <p>Capital:</p>
        </div>
      </div>
    </div>
  </div>
</template>
