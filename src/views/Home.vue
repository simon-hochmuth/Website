<template>
  <div class="text-center mt-10">
    <h1 class="text-4xl text-blue-600 font-bold mb-4">
      Tailwind is working 🎉
    </h1>
    <p class="text-lg text-gray-600">
      If this is big, blue, and centered — Tailwind is installed correctly.
    </p>
  </div>
  <section class="page home">
    <h1>Simon Hochmuth</h1>
    <h2>Data Scientist | Analytics Engineer</h2>
    <p>
      Welcome to my personal portfolio. I currently work at LMI as a Data
      Scientist supporting the Department of Defense. I build analytics tools,
      automate financial reporting, and create pipelines that support senior
      leadership decisions.
    </p>
    <p>
      I'm relocating to NYC this year and open to new opportunities. If you're
      hiring or want to connect, feel free to
      <router-link to="/contact">reach out</router-link>.
    </p>
  </section>
</template>

<script setup></script>

<style scoped>
.page {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
}
</style>
