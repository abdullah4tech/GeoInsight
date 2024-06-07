<script setup>
</script>

<template>
  <section class="flex flex-col items-baseline">
    <div class="m-4 mt-36 md:m-16 lg:m-28 h-1/2 flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-56">
      <div class="text-center md:mt-32 lg:text-left">
        <h1 class="text-3xl md:text-4xl lg:text-5xl">[[ GeoInsite. ]]</h1>
        <p class="mt-6 md:mt-8 lg:mt-10">An informative website designed to provide comprehensive details<br class="hidden sm:inline"> about every country in the world.</p>
      </div>
      <div>
        <img src="@/assets/earth.png" alt="Earth image" >
      </div>
    </div>
    <div class="">
        <h2 class="font-bold text-3xl mb-2">Countinents</h2>
        <ul class="ml-4 list-inside mb-5">
          <li class="list-decimal"><a href="#">Africa</a></li>
          <li class="list-decimal"><a href="#">Antarctica</a></li>
          <li class="list-decimal"><a href="#">Asia</a></li>
          <li class="list-decimal"><a href="#">Europe</a></li>
          <li class="list-decimal"><a href="#">North America</a></li>
          <li class="list-decimal"><a href="#">Australia</a></li>
          <li class="list-decimal"><a href="#">South America</a></li>
        </ul>
      </div>
  </section>
</template>
