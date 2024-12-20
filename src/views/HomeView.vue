<script setup>
import { onMounted, ref } from 'vue';
import { useMovieStore } from '@/stores/movieStore';
const movieStore = useMovieStore()
const movies = ref()

onMounted(async () => {
  movies.value = await movieStore.getMovie(); // Espera a Promise ser resolvida
  console.log(movies.value)
});

</script>
<template>
  <div v-for="i in movies" :key="i.id">
    <p>{{i.title}}</p>
  </div>
</template>
