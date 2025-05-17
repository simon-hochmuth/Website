<template>
  <nav class="navbar">
    <div class="nav-content">
      <div class="nav-logo">
        <router-link to="/">Simon Hochmuth</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/school">School</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #1e1e1e;
  padding: 1rem 2rem;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
}

.nav-logo a {
  font-size: 1.25rem;
  color: white;
  font-weight: 600;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: #ccc;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s, border-bottom 0.3s;
  padding-bottom: 2px;
}

.nav-links a:hover {
  color: white;
  border-bottom: 2px solid white;
}

.nav-links a.router-link-active {
  color: white;
  border-bottom: 2px solid white;
}
</style>
