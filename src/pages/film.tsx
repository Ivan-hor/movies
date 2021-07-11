import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Typography, Image, Row,  Col,
} from 'antd';

import { useFilm } from '../hooks';

import { FilmDescriptions, FilmStatistic } from '../components';

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

    const {
        popularity, budget, revenue, release_date, status,
        vote_average, vote_count, genres, overview,
    } = film;

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
            <FilmDescriptions
                release_date = { release_date }
                status = { status }
                vote_average = { vote_average }
                vote_count = { vote_count }
                genres = { genres }
                overview = { overview } />
            <FilmStatistic
                popularity = { popularity }
                budget = { budget }
                revenue = { revenue } />
        </>
    );
};
