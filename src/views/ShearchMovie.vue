<template>
  <div>
    <h1 class="text-3xl font-bold my-8">Shearch Movies</h1>
    <ListMovies :movies="movies" :totalResults="totalResults" :totalPages="totalPages"
      @page-change="handlePageChange" />
  </div>
  <ScrollTop />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getMoviesBySearch } from '@/services/movieService';
import ListMovies from '@/components/ListMovies.vue';

const route = useRoute();

const movies = ref([]);
const totalResults = ref(0);
const totalPages = ref(0);

const fetchSearch = async (query, page = 1) => {
  if (!query) return;

  const response = await getMoviesBySearch(query, page);
  movies.value = response.results;
  totalResults.value = response.total_results;
  totalPages.value = response.total_pages;
};

const handlePageChange = (page) => {
  fetchSearch(route.query.q, page);
};

// carrega quando a view abre
onMounted(() => {
  fetchSearch(route.query.q);
});

// observa mudança na query (ex: nova busca)
watch(() => route.query.q, (newQuery) => {
  fetchSearch(newQuery);
});
</script>
