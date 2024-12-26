import { defineStore } from 'pinia';
import api from '@/plugins/axios';

export const useMoviesStore = defineStore('movies', () => {
    const listMovies = async (genreId, page, sort) => {
        const response = await api.get('discover/movie', {
            params: {
                with_genres: genreId,
                language: 'pt-BR',
                sort_by: sort,
                page: page
            },
        })
        return response.data.results.filter((movie) => movie.poster_path !== null)
    }
    return{ listMovies }
});