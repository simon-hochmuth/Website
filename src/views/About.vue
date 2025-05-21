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
        <ul class="list-disc list-inside space-y-2 text-left text-gray-700">
          <li>
            <strong>Advanced analytics & dashboards (5+ years)</strong>: Python,
            SQL, Tableau, Qlik, Streamlit
          </li>
          <li>
            <strong
              >Executive reporting & stakeholder engagement (4+ years)</strong
            >: C-suite consulting, strategic advising
          </li>
          <li>
            <strong>Forecasting & machine learning (5+ years)</strong>:
            Scikit-Learn, TensorFlow, Keras, PyTorch, Prophet, ARIMA, SciPy
          </li>
          <li>
            <strong>End-to-end data pipelines (5+ years)</strong>: Databricks,
            AWS, Spark, MongoDB, SQL, Python
          </li>
          <li>
            <strong>Full-stack web apps (2+ years)</strong>: Vue, C#, .NET,
            JavaScript, Python, SQL
          </li>
        </ul>
      </div>

      <div class="bg-white shadow rounded-lg p-6">
        <h3 class="text-2xl font-semibold text-green-700 mb-3">🌍 Personal</h3>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Open to new opportunities</strong></li>
          <li>
            <strong>Passions</strong>: Climbing, hiking, tech tinkering, and
            Washington Spirit season ticket holder
          </li>
          <li>
            <strong>Always learning</strong>: Currently exploring Vue, Next.js,
            and Django
          </li>
          <li>
            <strong>Fun fact</strong>: North Dakota is the only state in the
            continental U.S. I haven’t visited (yet!)
          </li>
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
