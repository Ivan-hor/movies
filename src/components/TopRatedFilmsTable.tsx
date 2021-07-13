import { Table } from 'antd';


import { useTopRatedFilms } from '../hooks/useTopRatedFilms';
import { getColumns } from './MoviesLIst';
import { KeysOfList } from '../types';

export const TopRatedFilmsTable = () => {
    const query = useTopRatedFilms(1);

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
        // console.log(query.data);

        return <Table
            rowKey = 'id'
            columns = { columns }
            dataSource = { query.data } />;
    }

    return <>loading</>;
};
