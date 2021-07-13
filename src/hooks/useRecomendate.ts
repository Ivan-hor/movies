// @ts-nocheck
/* Core */
import { useQuery } from 'react-query';
/* Other */
import { api } from '../api';


export const useRecomendate = (filmId:string) => {
    const query = useQuery('filmsrecomendate', () => api.getRecommendationsMovies(filmId));


    return query;
};

export const useVote = (filmId:string) => {
    const { data:film, isFetched } = useQuery(['filmsrecomendate', filmId], () => api.getMovie(filmId));

    return film?.data;
};
