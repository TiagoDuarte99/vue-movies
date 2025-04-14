import { createRouter, createWebHistory } from "vue-router";
import PopularMovies from "@/views/PopularMovies.vue";
import MovieDetail from "@/views/MovieDetail.vue";
import TopMovies from "@/views/TopMovies.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: PopularMovies,
    },
    {
      path: "/topmovies",
      name: "TopMovies",
      component: TopMovies,
    },
    {
      path: "/movie/:id",
      name: "MovieDetail",
      component: MovieDetail,
      props: true, // Passa o parâmetro 'id' como prop para o componente MovieDetail
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
