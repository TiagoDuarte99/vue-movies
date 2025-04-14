<template>
  <div class="movies-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
  <div class="my-8">
    <Paginator :rows="20" :totalRecords="totalResults" @page="onPageChange" />
  </div>
  <ScrollTop />
</template>

<script setup lang="ts">
import type { Movie } from '@/models/Movie';
import MovieCard from '@/components/MovieCard.vue';

const props = defineProps<{
  movies: Movie[];
  totalResults: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: 'page-change', page: number): void;
}>();

const onPageChange = (event: any) => {
  const page = event.page + 1;
  emit('page-change', page); // notificamos o pai
};
</script>


<style scoped></style>
