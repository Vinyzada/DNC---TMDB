<script setup>
import { useGenreStore } from '@/stores/genre'
import { ref, onMounted } from 'vue'
import { useMoviesStore } from '@/stores/moviesStore'
import router from '@/router'
const genreStore = useGenreStore()
const moviesStore = useMoviesStore()
const movies = ref()

function openMovie(movieId) {
  router.push({ name: 'MovieDetails', params: { movieId } });
}

const props = defineProps({
  title: String,
  gndr: Array,
  page: Number,
  sort: String
})

onMounted(async () => {
    await genreStore.getAllGenres('movie')
    movies.value = await moviesStore.listMovies(props.gndr, props.page, props.sort)
})
</script>
<template>
    <h2>{{props.title}}</h2>
    <div class="movie-list">
        <div v-for="movie in movies" :key="movie.id" class="movie-card">
            <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :alt="movie.title"
            @click="openMovie(movie.id)"/>
        </div>
    </div>
</template>
<style scoped>

.movie-list {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    width: calc(100vw - 20px);
    max-width: 100vw;
    min-width: calc(100vw - 20px);
    overflow: hidden;
    overflow-x: scroll;
    margin: 0px 10px;
    padding: 10px 0px;
}

.movie-card {
    width: 96px;
    height: 146px;
    min-width: 100px;
    overflow: hidden;
}

.movie-card img {
    width: 96px;
    height: 146px;
    min-height: 100%;
}

</style>