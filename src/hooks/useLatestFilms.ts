import { useQuery } from 'react-query';
/* Other */
import { api } from '../api';

export const useLatestFilms = () => {
    const query = useQuery(['latest'], () => api.getLatestMovies);
    const { data, isFetched } = query;

    return { data, isFetched };
};
