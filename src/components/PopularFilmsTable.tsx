import { Table, Image } from 'antd';
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
        // {
        //     title:     'Детали',
        //     dataIndex: 'details',
        //     key:       'details',
        // },
    ];

    // const data = [
    //     {
    //         id:           508943,
    //         popularity:   4176.6,
    //         title:        'Luca',
    //         poster_path:  'https://image.tmdb.org/t/p/original/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
    //         vote_count:   2313,
    //         vote_average: 8.1,
    //         overview:     'Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.',
    //     },
    // ];

    if (query.isFetched) {
        console.log(query.data);

        return (
            <Table
                columns = { columns }
                dataSource = { query.data }
                bordered
                title = { () => 'Популярные фильмы' } />
        );
    }

    return null;

    // return (
    //     <Table
    //         columns = { columns }
    //         dataSource = { data }
    //         bordered
    //         title = { () => 'Популярные фильмы' } />
    // );
};
