import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Typography, Image, Row,  Col,
} from 'antd';

import { useFilm } from '../hooks';

import { FilmDescriptions } from '../components';

const { Title } = Typography;

export const FilmPage:FC = () => {
    const { id: filmId } = useParams();
    const navigate = useNavigate();

    const { data: film, isFetchedAfterMount } = useFilm(filmId);

    useEffect(() => {
        if (!film && isFetchedAfterMount) {
            navigate('/popular-films', { replace: true });
        }
    }, [film, isFetchedAfterMount]);

    if (!film) { return null; }

    return (
        <>
            <Title>{ film.title }</Title>
            <Row justify = 'start' align = 'middle'>
                <Col span = { 12 }>
                    <Image
                        width = { 200 }
                        src = { film.poster_path } />
                </Col>
            </Row>
            <FilmDescriptions { ...film } />

        </>
    );
};
