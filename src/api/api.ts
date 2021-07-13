// Core
import axios from 'axios';
import { IFilmDetailsModel } from '../types';

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
    getMovie: async (filmId: string): Promise<IFilmDetailsModel> => {
        const { data } = await axios.get(`${root}/movie-details/${filmId}`);

        return data.data;
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
    getLatestMovies: async () => {
        const response =  await axios.get(`${root}/latest-movie`);

        return response.data.data;
    },
});
