<template>
  <div>
    <About/>
  </div>
</template>

<script setup>
  import About from '../components/About.vue';
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
