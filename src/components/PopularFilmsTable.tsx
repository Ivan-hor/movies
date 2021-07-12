import { Table } from 'antd';

import { usePopularFilms } from '../hooks';
import { KeysOfList } from '../types';
import { getColumns } from './MoviesLIst';

export const PopularFilmsTable = () => {
    const query = usePopularFilms(1);
    const header :Array<KeysOfList> = [
        KeysOfList.poster_path, KeysOfList.title, KeysOfList.popularity,
        KeysOfList.vote_count, KeysOfList.vote_average, KeysOfList.overview, KeysOfList.details,
    ];
    const columns = getColumns(header);


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
