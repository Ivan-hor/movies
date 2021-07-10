import { Table, Image } from 'antd';
import { Link }  from 'react-router-dom';
import { usePopularFilms } from '../hooks';


export const PopularFilmsTable = () => {
    const query = usePopularFilms(1);

    const columns = [
        {
            title:     'Постер',
            dataIndex: 'poster_path',
            key:       'poster_path',
            width:     '10%',
            // eslint-disable-next-line
            render:    (url: string) => <Image
                width = { 200 }
                src =  { url } />,
        },
        {
            title:     'Название',
            dataIndex: 'title',
            key:       'title',
        },
        {
            title:     'Популярность',
            dataIndex: 'popularity',
            key:       'popularity',
        },
        {
            title:     'Количество голосов',
            dataIndex: 'vote_count',
            key:       'vote_count',
        },
        {
            title:     'Средняя оценка',
            dataIndex: 'vote_average',
            key:       'vote_average',
        },
        {
            title:     'Краткое описание',
            dataIndex: 'overview',
            key:       'overview',
            width:     '20%',
        },
        {
            title:     'Детали',
            dataIndex: 'id',
            key:       'details',
            // eslint-disable-next-line
            render:    (id: number) => <Link to = { `/films/${id}` }>Подробнее...</Link>,
        },
    ];

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
