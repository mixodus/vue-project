<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div> 
    <header>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/admin-panel">Admin Panel</RouterLink>
        <RouterLink to="/landing-page">Landing Page</RouterLink>
      </nav>
    </header>
    <RouterView /> 
  </div>


</template>

<script>
localStorage.setItem("theme", 'dark');
if(localStorage.getItem("theme") == 'light'){
  document.documentElement.classList.remove('dark')
} else {
  document.documentElement.classList.add('dark')
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


nav {
  text-align: center;
  font-size: 1rem;

  padding: 1rem;
  margin-top: 1rem;
}

</style>
