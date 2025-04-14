<template>
  <div v-if="movie" class="p-6">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Texto -->
      <div class="w-full md:max-w-xl">
        <h1 class="text-4xl font-bold mb-4">{{ movie.title }}</h1>
        <p class="text-lg mb-2">{{ movie.overview }}</p>
        <p><strong>Release Date:</strong> {{ movie.release_date }}</p>
        <p><strong>Vote Average:</strong>
          <ProgressBar :value="parseFloat((movie.vote_average * 10).toFixed(2))" />
        </p>
        <p><strong>Runtime:</strong> {{ movie.runtime }} min</p>
      </div>

      <!-- Imagem -->
      <div class="w-full md:w-1/3">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Poster"
          class="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getMovie } from '@/services/movieService';
import type { Movie } from '@/models/Movie';

const movie = ref<Movie | null>(null);

const movieId = useRoute().params.id as string;

onMounted(async () => {
  movie.value = await getMovie(movieId);
  console.log(movie.value);
});

</script>