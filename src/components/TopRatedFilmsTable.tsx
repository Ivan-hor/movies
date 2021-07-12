import { Table, Image } from 'antd';


import { useTopRatedFilms } from '../hooks/useTopRatedFilms';

export const TopRatedFilmsTable = () => {
    const query = useTopRatedFilms(1);

    const columns = [
        {
            title:     'Постер',
            dataIndex: 'poster_path',
            key:       'id',
            width:     '10%',
            // eslint-disable-next-line
            render:    (url: string) => <Image
                width = { 200 }
                src = { url } />,
        },
        {
            title:     'Название',
            dataIndex: 'title',
            key:       'id',
        },
        {
            title:     'Дата релиза',
            dataIndex: 'release_date',
            key:       'id',
        },
        {
            title:     'Количество голосов',
            dataIndex: 'vote_count',
            key:       'id',
        },
        {
            title:     'Средняя оценка',
            dataIndex: 'vote_average',
            key:       'id',
        },
        {
            title:     'Жанры',
            dataIndex: 'genres',
            key:       'id',
        },
        {
            title:     'Краткое описание',
            dataIndex: 'overview',
            key:       'id',
        },
    ];

    if (query.isFetched) {
        return <Table
            columns = { columns }
            dataSource = { query.data }
            bordered
            title = { () => 'Трендовые фильмы' } />;
    }

    return 'loading';
};
