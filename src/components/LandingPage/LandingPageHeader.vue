<template>
 
 <div>
    <nav class="container px-6 py-8 mx-auto lg:flex lg:justify-between lg:items-center">
      <div class="flex items-center justify-between">
        <router-link to="/">
          <img class=" w-32 h-auto" src="../../assets/landingPage/logo.png">
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex lg:hidden">
          <button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-white md:fill-[#024D94]">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'" class="ease-in-out duration-300 flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0 items-end">
        <li class="text-white md:text-[#024D94] hover:text-indigo-400">Home</li>
        <li class="text-white md:text-[#024D94] hover:text-indigo-400">About</li>
        <li class="text-white md:text-[#024D94] hover:text-indigo-400">Blogs</li>
        <li class="text-white md:text-[#024D94] hover:text-indigo-400">Contact Us</li>
        <button type="button" class="md:text-white text-[#024D94] bg-white md:bg-[#024D94] cursor-pointer px-6 py-2">Sign In</button>
      </ul>
    </nav>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>