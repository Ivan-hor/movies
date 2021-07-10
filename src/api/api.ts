// Core
import axios from 'axios';

// Configs
import { root } from './config';

enum Genre {
    'Comedy',
    'Drama',
    'Romance',
}

type Movie = {
    'id': number,
    'title': string,
    'poster_path': string,
    'vote_count': number,
    'vote_average': number,
    'overview': string,
    'genres': Genre[],
    'release_date': string,
};

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
    getTopRated: async (page: number) => {
        const result = await axios.get<{ data: Movie[] }>(`${root}/top-rated?page=${page}`);

        return result.data.data;
    },
});
