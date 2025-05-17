<template>
  <div
    class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200 border border-gray-200"
  >
    <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ title }}</h3>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <a
      :href="link"
      target="_blank"
      class="inline-block text-blue-600 font-medium hover:underline"
    >
      View Project →
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
});
</script>
