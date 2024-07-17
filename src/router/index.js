import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/terms-of-use",
    name: "term-of-use",
    component: () => import("@/pages/term-of-use.vue")
  },
  {
    path: "/legal-warning",
    name: "legal-warning",
    component: () => import("@/pages/legal-warning.vue")
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: () => import("@/pages/privacy-policy.vue")
  },
  {
    path: "/reseller-program",
    name: "reseller-program",
    component: () => import("@/pages/reseller-program.vue")
  }, 
  {
    path: "/contact-us",
    name: "contact-us",
    component: () => import("@/pages/contact-us.vue")
  },
  {
    path: "/about-us",
    name: "about-us",
    component: () => import("@/pages/about-us.vue")
  }, 
  {
    path: "/career",
    name: "career-page",
    component: () => import("@/pages/career-page.vue")
  },
  {
    path: "/workshops",
    name: "work-shops",
    component: () => import("@/pages/work-shops.vue")
  },
  {
    path: "/workshop-detail",
    name: "workshop-detail",
    component: () => import("@/pages/workshop-detail.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
