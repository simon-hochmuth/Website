<template>
  <div
    class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200 border border-gray-200"
  >
    <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ title }}</h3>
    <p class="text-gray-600 mb-4">{{ description }}</p>

    <!-- Show iframe if isIframe is true -->
    <div v-if="isIframe" class="w-full h-[500px]">
      <iframe
        :src="link"
        class="w-full h-full rounded-md border border-gray-300"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Show link only if not iframe -->
    <a
      v-else
      :href="link"
      :download="download ? '' : null"
      target="_blank"
      class="inline-block text-blue-600 font-medium hover:underline"
    >
      {{ download ? "Click here to download PDF" : "View Project →" }}
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
  isIframe: {
    type: Boolean,
    default: false,
  },
  download: {
    type: Boolean,
    default: false,
  },
});
</script>
