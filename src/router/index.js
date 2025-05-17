import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import School from "../views/School.vue";
import About from "../views/About.vue";
import Resume from "../views/Resume.vue";
import Contact from "../views/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/school", component: School },
  { path: "/about", component: About },
  { path: "/resume", name: "Resume", component: Resume },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
