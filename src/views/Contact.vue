<template>
  <section class="max-w-3xl mx-auto px-4 py-12">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-6">
      Resume & Contact
    </h2>
    <p class="text-center text-gray-600 mb-10">
      I'm currently open to new opportunities and collaborations. Feel free to
      download my resume or get in touch!
    </p>

    <!-- Resume & Contact Grid -->
    <div class="grid gap-6 sm:grid-cols-2">
      <!-- Email -->
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

      <!-- Resume (replaces phone) -->
      <div class="bg-white shadow rounded-lg p-5 flex items-center gap-4">
        <!-- Centered Icon -->
        <div class="flex items-center justify-center w-12 h-12">
          <DocumentTextIcon class="w-8 h-8 text-blue-700" />
        </div>
        <div>
          <h4 class="font-semibold text-gray-800">Resume</h4>
          <a
            href="/Resume_Simon_Hochmuth.pdf"
            target="_blank"
            class="text-blue-600 hover:underline"
          >
            View / Download PDF
          </a>
        </div>
      </div>

      <!-- LinkedIn -->
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

      <!-- GitHub -->
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
  BriefcaseIcon,
  CodeBracketIcon,
  DocumentTextIcon,
} from "@heroicons/vue/24/outline";
</script>
