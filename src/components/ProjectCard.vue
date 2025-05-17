<template>
  <div class="project-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <a :href="link" target="_blank">View Project →</a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
});
</script>

<style scoped>
.project-card {
  border: 1px solid #ccc;
  padding: 1.25rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  background: #fdfdfd;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
.project-card h3 {
  margin-bottom: 0.5rem;
}
.project-card a {
  color: #007acc;
  text-decoration: none;
  font-weight: bold;
}
</style>
