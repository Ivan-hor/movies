import { Table, Tag, Space } from 'antd';


import { useTopRatedFilms } from '../hooks/useTopRatedFilms';

export const TopRatedFilmsTable = () => {
    const query = useTopRatedFilms(1);

    const columns = [
        {
            title:     'Name',
            dataIndex: 'title',
            key:       'title',
            // eslint-disable-next-line react/display-name
            // render:    (text) => <a>{ text }</a>,
        },
        {
            title:     'release_date',
            dataIndex: 'release_date',
            key:       'release_date',
        },
        // {
        //     title:     'Address',
        //     dataIndex: 'address',
        //     key:       'address',
        // },
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
        console.log(query.data);

        return <Table columns = { columns } dataSource = { query.data } />;
    }

    return 'loading';
};
