<template>
  <div
    class="min-h-screen bg-cover bg-center bg-no-repeat"
    style="background-image: url('/background.jpg')"
  >
    <Navbar />
    <main class="pt-20 px-4 py-8 flex-grow">
      <!-- Main content container -->
      <div
        class="bg-white bg-opacity-85 rounded-2xl p-6 shadow-lg max-w-4xl mx-auto"
      >
        <router-view />
      </div>

      <!-- Footer -->
      <footer class="text-right text-white mt-6 pr-6 pb-6">
        <a
          href="mailto:simon.hochmuth@gmail.com"
          class="underline hover:text-gray-300 block mb-2"
        >
          simon.hochmuth@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/simon-hochmuth/"
          target="_blank"
          class="underline hover:text-gray-300 block"
        >
          LinkedIn Profile
        </a>
      </footer>
    </main>
  </div>
</template>

<script setup>
import Navbar from "./components/NavBar.vue";
</script>
