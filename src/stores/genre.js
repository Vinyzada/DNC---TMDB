import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const useGenreStore = defineStore('genre', () => {
  const state = reactive({
    genres: [],
    currentGenreId: null,
  })
  const currentGenreId = computed(() => state.currentGenreId)
  const setCurrentGenreId = (genreId) => {
    state.currentGenreId = genreId
  }

  const genres = computed(() => state.genres)
  function getGenreName(id) {
    const genero = genres.value.find((genre) => genre.id === id);
    return genero.name;
  }

  const getAllGenres = async (type) => {
    const response = await api.get(`genre/${type}/list?language=pt-BR`)
    state.genres = response.data.genres
  }

  return {
    genres,
    getAllGenres,
    getGenreName,
    currentGenreId,
    setCurrentGenreId,
  }
})
