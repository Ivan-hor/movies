// @ts-nocheck
/* Core */
import { useQuery } from 'react-query';
/* Other */
import { useEffect } from 'react';
import { api } from '../api';


export const useRecomendate = (filmId:string) => {
    const query = useQuery('filmsrecomendate', () => api.getRecommendationsMovies(filmId));


    return query;
};

export const useVote = (filmId:string) => {
    const { data:film, isFetched } = useQuery(['filmsrecomendate', filmId], () => api.getMovie(filmId));
    let vote = '0';
    useEffect(() => {
        if (film?.data) {
            vote = film.data.data.vote_average;
            console.log('useVote', vote);
        }
    }, [isFetched]);

    return vote;
};
