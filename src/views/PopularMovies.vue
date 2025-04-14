<template>
  <div>
    <h1 class="text-3xl font-bold my-8">Popular Movies</h1>
    <div class="movies-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
  <div class="my-8">
    <Paginator :rows="20" :totalRecords="totalResults" @page="onPageChange" />
  </div>
  <ScrollTop />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MovieCard from '@/components/MovieCard.vue';
import { getPopularMovies } from '@/services/movieService';  // Importando o serviço

const movies = ref([]);
const totalResults = ref(0);
const totalPages = ref(0);
onMounted(async () => {
  const response = await getPopularMovies(1);
  totalResults.value = response.total_results;
  totalPages.value = response.total_pages;
  movies.value = response.results;
});

const onPageChange = async (event) => {
  const page = event.page + 1;
  console.log('Página:', page);
  const response = await getPopularMovies(page);
  totalResults.value = response.total_results;
  totalPages.value = response.total_pages;
  movies.value = response.results;
};

</script>


<style scoped></style>
