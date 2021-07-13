import { Table } from 'antd';

import { usePopularFilms } from '../hooks';
import { KeysOfList } from '../types';
import { getColumns } from './MoviesLIst';

// temporaly alias
const ColumnsKeys = KeysOfList;

export const PopularFilmsTable = () => {
    const query = usePopularFilms(1);

    const columns = getColumns([
        ColumnsKeys.poster_path,
        ColumnsKeys.title,
        ColumnsKeys.popularity,
        ColumnsKeys.vote_count,
        ColumnsKeys.vote_average,
        ColumnsKeys.overview,
        ColumnsKeys.details,
    ]);

    if (query.isFetched) {
        return (
            <Table
                columns = { columns }
                dataSource = { query.data }
                bordered
                title = { () => 'Популярные фильмы' } />
        );
    }

    return null;
};
