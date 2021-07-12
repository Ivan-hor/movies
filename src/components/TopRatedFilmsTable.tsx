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
            // eslint-disable-next-line react/display-name
            // render:    (text) => <a>{ text }</a>,
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

        // {
        //     title:     'Tags',
        //     key:       'tags',
        //     dataIndex: 'tags',
        //     // eslint-disable-next-line react/display-name
        //     render:    (tags) => (
        //         <>
        //             { tags.map((tag) => {
        //                 let color = tag.length > 5 ? 'geekblue' : 'green';
        //                 if (tag === 'loser') {
        //                     color = 'volcano';
        //                 }
        //
        //                 return (
        //                     <Tag color = { color } key = { tag }>
        //                         { tag.toUpperCase() }
        //                     </Tag>
        //                 );
        //             }) }
        //         </>
        //     ),
        // },
        // {
        //     title:  'Action',
        //     key:    'action',
        //     // eslint-disable-next-line react/display-name
        //     render: (text, record) => (
        //         <Space size = 'middle'>
        //             <a>Invite { record.name }</a>
        //             <a>Delete</a>
        //         </Space>
        //     ),
        // },
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
