<template>
  <nav class="sticky top-0 w-full bg-gray-900 shadow z-50">
    <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div>
        <router-link
          to="/"
          class="text-white text-lg font-semibold tracking-wide hover:text-blue-300"
        >
          Simon Hochmuth
        </router-link>
      </div>

      <!-- Navigation Links -->
      <div class="flex space-x-6 text-sm font-medium">
        <router-link
          to="/"
          class="text-gray-300 hover:text-white hover:border-b-2 border-white pb-1"
          active-class="text-white border-b-2 border-white"
          exact
        >
          Home
        </router-link>
        <router-link
          to="/school"
          class="text-gray-300 hover:text-white hover:border-b-2 border-white pb-1"
          active-class="text-white border-b-2 border-white"
        >
          School
        </router-link>
        <router-link
          to="/resume"
          class="text-gray-300 hover:text-white hover:border-b-2 border-white pb-1"
          active-class="text-white border-b-2 border-white"
        >
          Resume
        </router-link>
        <router-link
          to="/projects"
          class="text-gray-300 hover:text-white hover:border-b-2 border-white pb-1"
          active-class="text-white border-b-2 border-white"
        >
          Projects
        </router-link>
        <router-link
          to="/about"
          class="text-gray-300 hover:text-white hover:border-b-2 border-white pb-1"
          active-class="text-white border-b-2 border-white"
        >
          About
        </router-link>
        <router-link
          to="/contact"
          class="text-gray-300 hover:text-white hover:border-b-2 border-white pb-1"
          active-class="text-white border-b-2 border-white"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
