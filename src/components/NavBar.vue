<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/school">School</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
.nav {
  display: flex;
  gap: 1rem;
  background: #222;
  padding: 1rem;
}
.nav a {
  color: white;
  text-decoration: none;
}
.nav a.router-link-active {
  font-weight: bold;
}
</style>
