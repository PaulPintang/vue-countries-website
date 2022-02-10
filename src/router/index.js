import { createRouter, createWebHistory } from "vue-router";
import CountryDetails from "../views/CountryDetails.vue";

const routes = [
  {
    path: "/:id",
    name: "CountryDetails",
    component: CountryDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
