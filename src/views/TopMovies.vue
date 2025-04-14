<template>
  <div>
    <h1 class="text-3xl font-bold my-8">Top Movies</h1>
    <ListMovies
      :movies="movies"
      :totalResults="totalResults"
      :totalPages="totalPages"
      @page-change="handlePageChange"
    />
  </div>
  <ScrollTop />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ListMovies from '@/components/ListMovies.vue';
import { getTopMovies } from '@/services/movieService';

const movies = ref([]);
const totalResults = ref(0);
const totalPages = ref(0);

const fetchMovies = async (page = 1) => {
  const response = await getTopMovies(page);
  totalResults.value = response.total_results;
  totalPages.value = response.total_pages;
  movies.value = response.results;
};

const handlePageChange = async (page) => {
  await fetchMovies(page);
};

onMounted(() => {
  fetchMovies();
});
</script>