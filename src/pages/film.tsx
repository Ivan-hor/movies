import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const FilmPage:FC = () => {
    const { id: filmId } = useParams();

    return (
        <div>
            FilmPage { filmId }
        </div>
    );
};
