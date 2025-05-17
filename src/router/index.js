import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import School from "../views/School.vue";
import About from "../views/About.vue";
import Resume from "../views/Resume.vue"; // ✅ You probably added this

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/school", component: School },
  { path: "/about", component: About },
  { path: "/resume", name: "Resume", component: Resume }, // ✅ Add this line
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
