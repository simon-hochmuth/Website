<template>
  <section class="max-w-3xl mx-auto px-4 py-12">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-6">
      Contact Me
    </h2>
    <p class="text-center text-gray-600 mb-10">
      I'm currently open to new opportunities and collaborations in NYC. Reach
      out!
    </p>

    <!-- Contact Info Cards -->
    <div class="grid gap-6 sm:grid-cols-2 mb-12">
      <div class="bg-white shadow rounded-lg p-5 flex items-center gap-4">
        <EnvelopeIcon class="w-6 h-6 text-blue-600" />
        <div>
          <h4 class="font-semibold text-gray-800">Email</h4>
          <a
            href="mailto:Simon.Hochmuth@gmail.com"
            class="text-blue-600 hover:underline"
          >
            Simon.Hochmuth@gmail.com
          </a>
        </div>
      </div>

      <div class="bg-white shadow rounded-lg p-5 flex items-center gap-4">
        <PhoneIcon class="w-6 h-6 text-green-600" />
        <div>
          <h4 class="font-semibold text-gray-800">Phone</h4>
          <p>301-789-7215</p>
        </div>
      </div>

      <div class="bg-white shadow rounded-lg p-5 flex items-center gap-4">
        <BriefcaseIcon class="w-6 h-6 text-purple-600" />
        <div>
          <h4 class="font-semibold text-gray-800">LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/simon-hochmuth/"
            target="_blank"
            class="text-blue-600 hover:underline"
          >
            linkedin.com/in/simon-hochmuth
          </a>
        </div>
      </div>

      <div class="bg-white shadow rounded-lg p-5 flex items-center gap-4">
        <CodeBracketIcon class="w-6 h-6 text-gray-800" />
        <div>
          <h4 class="font-semibold text-gray-800">GitHub</h4>
          <a
            href="https://github.com/simon-hochmuth/portfolio"
            target="_blank"
            class="text-blue-600 hover:underline"
          >
            github.com/simon-hochmuth/portfolio
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  EnvelopeIcon,
  PhoneIcon,
  BriefcaseIcon,
  CodeBracketIcon,
} from "@heroicons/vue/24/outline";
</script>
