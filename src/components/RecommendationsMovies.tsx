
// filmid:string
import { FC, useState } from 'react';
import {
    Table, Image, Rate, PageHeader,
} from 'antd';

import { useRecomendate, useVote } from '../hooks';

export const RecommendationsMovies :FC = (props) => {
    const  [vote, setVote] = useState('');
    // @ts-ignore
    const {
        data: films,

    } = useRecomendate(props.filmid);
    // eslint-disable-next-line max-len
    const sourceList = films?.data?.data.slice(0, Math.min(5, films?.data?.data.length));
    const getVote = (filmId:string):string => {
        setVote(useVote(filmId));

        return vote;
    };
    const columns = [
        {
            title:     'Постер',
            dataIndex: 'poster_path',
            key:       'poster_path',
            align:     'center',

            render(text: string) {
                return <Image
                    width = { 200 }
                    src = { text } />;
            },
        },
        {
            title:     'Название',
            dataIndex: 'title',
            key:       'title',
        },
        {
            title:     'Популярность',
            key:       'popularity',
            dataIndex: 'popularity',
            align:     'center',
            render(text: string, _record: any) {
                getVote(_record.id);
                console.log('render', vote);

                return <Rate disabled defaultValue = {  parseFloat(vote) / 2.0 } />;
            },
        },

        {
            title:     'Дата выхода',
            dataIndex: 'release_date',
            key:       'release_date',
            width:     'auto',
            render:    (date: string) => {
                const d: Date = new Date(date);
                console.log(d.getFullYear(), d.getMonth(), d.getDate());
                const m = d.getMonth() - 1;

                return `${d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()}.${m < 10 ? `0${m}` : m}.${d.getFullYear()}`;
            },
        },

        {
            title:     'Краткое описание',
            dataIndex: 'overview',
            key:       'overview',
            width:     '30%',
        },

        {
            title:     'Детали',
            dataIndex: 'id',
            key:       'id',
            width:     210,

            render(text: string) {
                return <a href = { `./${text}` }>Подробнее...</a>;
            },
        },
    ]; const
        table = films?.data ? <Table columns = { columns } dataSource = { sourceList } /> : null;


    return (
        <main>
            <PageHeader   title = { 'Рекомендуемые фильмы' } />
            { table }
        </main>
    );
};
