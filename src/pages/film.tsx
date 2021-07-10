import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useFilm } from '../hooks';

export const FilmPage:FC = () => {
    const { id: filmId } = useParams();
    const navigate = useNavigate();

    const { data: film, isFetchedAfterMount } = useFilm(filmId);

    console.log('===>', film);

    useEffect(() => {
        if (!film && isFetchedAfterMount) {
            navigate('/popular-films', { replace: true });
        }
    }, [film, isFetchedAfterMount]);


    return (
        <div>
            FilmPage { filmId } <b>{ film?.title }</b>
        </div>
    );
};
