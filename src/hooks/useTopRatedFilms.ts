import { useQuery } from 'react-query';
import { api } from '../api';


export const useTopRatedFilms = (page: number) => {
    return  (
        useQuery(['movies', 'top-rated'], () => api.getTopRated(page))
    );
};
