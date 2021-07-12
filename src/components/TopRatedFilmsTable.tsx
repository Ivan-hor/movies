import { Table, Tag, Space } from 'antd';


import { useTopRatedFilms } from '../hooks/useTopRatedFilms';
import { getColumns } from './MoviesLIst';
import { KeysOfList } from '../types';

export const TopRatedFilmsTable = () => {
    const query = useTopRatedFilms(1);

    const columns = getColumns([KeysOfList.title, KeysOfList.release_date]);
    if (query.isFetched) {
        // console.log(query.data);

        return <Table columns = { columns } dataSource = { query.data } />;
    }

    return 'loading';
};
