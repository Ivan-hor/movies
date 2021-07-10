import { useQuery, UseQueryResult } from 'react-query';

import { api } from '../api';
import { IFilmDetailsModel, ErrorType } from '../types';
import { useStore } from './useStore';

export const useFilm = (filmId: string): UseQueryResult<IFilmDetailsModel, ErrorType> => {
    const { uiStore } = useStore();
    const { setError } = uiStore;

    const query = useQuery<IFilmDetailsModel, ErrorType>(
        ['filmById', filmId],
        () => api.getMovie(filmId),
        {
            onError: (error: ErrorType) => {
                setError(error.message);
            },
        },
    );

    return query;
};
