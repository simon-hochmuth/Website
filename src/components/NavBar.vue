<template>
  <nav
    :class="[
      'sticky top-0 w-full backdrop-blur-md shadow-md z-50 transition duration-300',
      isScrolled ? 'bg-gray-400/30 text-gray-200' : 'bg-black/30 text-gray-200',
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div :class="brandClass">Simon Hochmuth</div>

      <!-- Navigation Links -->
      <div class="flex space-x-6 text-sm font-medium">
        <router-link to="/" :class="linkClass" active-class="border-b-2" exact>
          Home
        </router-link>
        <router-link to="/school" :class="linkClass" active-class="border-b-2">
          School
        </router-link>
        <!-- Comment out since not used now -->
        <!-- <router-link to="/resume" :class="linkClass" active-class="border-b-2">
          Resume
        </router-link>  -->
        <router-link
          to="/projects"
          :class="linkClass"
          active-class="border-b-2"
        >
          Projects
        </router-link>
        <router-link to="/about" :class="linkClass" active-class="border-b-2">
          About
        </router-link>
        <router-link to="/contact" :class="linkClass" active-class="border-b-2">
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Dynamic class for nav links
const linkClass = computed(() => {
  return isScrolled.value
    ? "text-gray-700 hover:text-black border-black pb-1 transition"
    : "text-gray-300 hover:text-white border-white pb-1 transition";
});
const brandClass = computed(() => {
  return isScrolled.value
    ? "text-1.5xl font-semibold text-gray-700 hover:text-black transition"
    : "text-1.5xl font-semibold text-gray-300 hover:text-white transition";
});
</script>
