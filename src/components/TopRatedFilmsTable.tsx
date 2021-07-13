import { useState } from 'react';
import { Table } from 'antd';


import { useTopRatedFilms } from '../hooks/useTopRatedFilms';
import { getColumns } from './MoviesLIst';
import { KeysOfList } from '../types';

export const TopRatedFilmsTable = () => {
    const [page, setPage] = useState(1);
    const query = useTopRatedFilms(page);

    const onChange = (newPage: number) => {
        setPage(newPage);
    };

    const columns = getColumns([
        KeysOfList.poster_path,
        KeysOfList.title,
        KeysOfList.release_date,
        KeysOfList.vote_count,
        KeysOfList.vote_average,
        KeysOfList.genres,
        KeysOfList.overview,
        KeysOfList.details,
    ]);
    if (query.isFetched) {
        console.log(query.data);

        return <Table
            rowKey = 'id'
            columns = { columns }
            dataSource = { query.data }
            pagination = { { onChange, total: 1000, showSizeChanger: false } } />;
    }

    return <>loading</>;
};
