// @ts-check
import { useState, useEffect } from 'react';
import { Table, Image } from 'antd';
import { Link } from 'react-router-dom';

import { ILatestMovie } from '../types/latestMovieModel';
import { useLatestMovie } from '../hooks';
import {
    HeaderWrapper, SectionWrapper, MainWrapper,
} from './styles';
import 'antd/dist/antd.css';
import { LatestMovieTableWrapper } from './styles/LatestMovie.style';

const tableTitle = () => (
    <LatestMovieTableWrapper >
        <span>Последние фильмы</span>
        <span>Фильмы, которые недавно вышли в прокат</span>
    </LatestMovieTableWrapper>
);

export const LatestMovies = () => {
    const { data, isFetched } = useLatestMovie();
    const [latestMovie, setLatestMovie] = useState<ILatestMovie | null>();

    useEffect(() => {
        if (isFetched) {
            // eslint-disable-next-line promise/catch-or-return
            data.then((movie: ILatestMovie) => setLatestMovie(movie.data.data));
        }
    }, [isFetched]);

    const columns = [
        {
            title:     'постер',
            dataIndex: 'poster_path',
            key:       'poster_path',
            width:     '15%',
            // eslint-disable-next-line
            render:    (url: string) => url ? <Image width = { '100%' } src =  { url } /> : 'отсутствует',
        },
        {
            title:     'Название',
            dataIndex: 'title',
            key:       'title',
            width:     '10%',
        },
        {
            title:     'Дата выхода',
            dataIndex: 'release_date',
            key:       'release_date',
            width:     '10%',
        },
        {
            title:     'Доходность',
            dataIndex: 'revenue',
            key:       'revenue',
            width:     '10%',
        },
        {
            title:     'Статус',
            dataIndex: 'status',
            key:       'status',
            width:     '10%',
        },
        {
            title:     'Популярность',
            dataIndex: 'popularity',
            key:       'popularity',
            width:     '10%',
        },
        {
            title:     'Краткое описание',
            dataIndex: 'overview',
            key:       'overview',
            // eslint-disable-next-line
            render:    (view: string) => view ? view : 'отсутствует',
        },
        {
            title:     'Детали',
            dataIndex: 'id',
            key:       'id',
            width:     '150px',
            // eslint-disable-next-line
            render:    (id: number) => <Link to = { `/movie-details/${id}` }>Подробнее...</Link>,

        },
    ];

    if (latestMovie) {
        return (
            <Table
                bordered
                pagination = { false }
                title = { () => tableTitle() }
                columns = { columns }
                dataSource = { [{ ...latestMovie, key: 1 }] } />

        );
    }

    return null;
};
