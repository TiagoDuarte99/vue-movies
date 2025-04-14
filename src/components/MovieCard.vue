<template>
  <div class="movie-card">
    <router-link :to="`/movie/${movie.id}`">
      <div class="image-container">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster"
          class="w-full h-auto transform hover:scale-105 transition duration-300 ease-in-out" />
      </div>
      <div class="card-body  flex flex-col space-y-2">
        <h3 class="card-title text-3xl font-bold truncate max-w-full">{{ movie.title }}</h3>
        <p class="card-subtitle">{{ formatDate(movie.release_date) }}</p>
        <ProgressBar :value="parseFloat((movie.vote_average * 10).toFixed(2))" />
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Movie } from '@/models/Movie';

defineProps < {
  movie: Movie;
} > ();

const formatDate = (dateString: string | number | Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-PT', options);
};

</script>

<style scoped>
.movie-card {
  width: 100%;
  max-width: 250px;
  border: 2px solid #000000;
  border-radius: 16px;
  /*  text-align: center; */
  overflow: hidden;
}

.image-container {
  width: 100%;
  height: 350px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

}

.card-body {
  padding: 16px;
}
</style>
