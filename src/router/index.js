import { createRouter, createWebHistory } from "vue-router";
import CountryDetails from "../views/CountryDetails.vue";
// import Header from '../views/Home.vue'

const routes = [
  {
    path: "/Countries/:id",
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
