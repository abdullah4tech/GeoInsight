<script setup>
import HomePage from '@/views/HomeView.vue'
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <main>
    <HomePage />
  </main>

  <footer>
    <FooterBar />
  </footer>
</template>
