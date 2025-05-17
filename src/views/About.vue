<template>
  <section class="max-w-3xl mx-auto px-4 py-12">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-6">About Me</h2>
    <p class="text-center text-gray-600 text-lg mb-10">
      I'm a data scientist with a background in analytics, automation, and
      strategic consulting. I help organizations unlock value from their data
      through tools, insights, and smart forecasting.
    </p>

    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-white shadow rounded-lg p-6">
        <h3 class="text-2xl font-semibold text-blue-700 mb-3">
          🧠 Professional Focus
        </h3>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>Advanced analytics & dashboarding (Python, SQL, Tableau)</li>
          <li>Forecasting models and ML for finance & workforce planning</li>
          <li>End-to-end data pipelines (Databricks, AWS, MongoDB)</li>
          <li>Executive reporting & stakeholder communication</li>
        </ul>
      </div>

      <div class="bg-white shadow rounded-lg p-6">
        <h3 class="text-2xl font-semibold text-green-700 mb-3">🌍 Personal</h3>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>Relocating to NYC in 2025 — open to new opportunities</li>
          <li>Climber, technologist, and coffee enthusiast</li>
          <li>Always learning — currently exploring LLMs & agent workflows</li>
        </ul>
      </div>
    </div>

    <div class="mt-12 text-center text-gray-600">
      <p>
        Want to collaborate or hire me?
        <router-link to="/contact" class="text-blue-600 underline"
          >Reach out</router-link
        >.
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps(); // with no props or incorrect syntax
</script>
