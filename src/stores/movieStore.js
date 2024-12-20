import { defineStore } from "pinia";
import api from "@/plugins/api";

export const useMovieStore = defineStore("movies", () => {

    const getGenderMovies = async () => {
        try {
        //    const response = await api.get(``);
            return response.data.results;
        } catch (error) {
            console.log(error)
        }
    }

    const getMovie = async () => {
        try {
        //    const response = await api.get(``);
            return response.data.results;
        } catch (error) {
            console.log(error)
        }
    }


    const getSearchMovies = async () => {
        try {
        //    const response = await api.get(``);
            return response.data.results;
        } catch (error) {
            console.log(error)
        }
    }


    return { getMovie, getGenderMovies, getSearchMovies }
});