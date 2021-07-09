// Core
import axios from 'axios';

// Configs
import { root } from './config';

export const api = Object.freeze({
    getMovie: (filmId: string) => {
        return axios.get(`${root}/movie-details/${filmId}`);
    },
    getSimilarMovies: (filmId: string) => {
        return axios.get(`${root}/${filmId}/similar`);
    },
    getRecommendationsMovies: (filmId: string) => {
        return axios.get(`${root}/${filmId}/recommendations`);
    },
    getReviewsToMovie: (filmId: string) => {
        return axios.get(`${root}/${filmId}/reviews`);
    },
    getPopularMovies: async (page: number) => {
        const response =  await axios.get(`${root}/popular-movies?page=${page}`);

        return response.data.data;
    },
    getTrendingMovies: (time: string) => {
        return axios.get(`${root}/trending/movie/${time}`);
    },
    getTopRated: (page: number) => {
        return axios.get(`${root}/top-rated?page=${page}`);
    },
});
