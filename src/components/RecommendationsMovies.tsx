
// filmid:string
import { FC } from 'react';
import { format } from 'date-fns';
import {
    Table, Image, PageHeader, Rate,
} from 'antd';
import { TableWrap } from './styles';
import { useRecomendate, useVote } from '../hooks';

export const RecommendationsMovies :FC = (props) => {
    const {
        data: films,

    } = useRecomendate(props.filmid);
    const getQuote = (vote:number):number => {
        const voteorg = vote / 2.0;

        return Math.round(2 * voteorg) / 2;
    };
    // eslint-disable-next-line max-len
    const sourceList = films?.data?.data.slice(0, Math.min(5, films?.data?.data.length));
    const filmRating = (filmId4Rating:string) => {
        const vote = useVote(filmId4Rating);
        const ret = <Rate
            disabled
            allowHalf
            value = { getQuote(vote?.data?.vote_average) } />;

        return (
            { ret }
        );
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
            width:     '10%',
            id:        'title',
        },
        {
            title:     'Популярность',
            key:       `${Math.round(Math.random() * 1000000)}`,
            dataIndex: 'vote_average',
            align:     'center',
            render(text: number) {
                return <Rate
                    disabled
                    allowHalf
                    value = { getQuote(text) } />;

                // return filmRating(_record.id);
                // return <FilmRating flagId = { _record.id } />;
            },
        },

        {
            title:     'Дата выхода',
            dataIndex: 'release_date',
            key:       `${Math.round(Math.random() * 1000000)}`,
            className: 'nowrap',
            render:    (date: string) => {
                return format(new Date(date), 'dd.MM.yyyy');
            },
        },

        {
            title:     'Краткое описание',
            dataIndex: 'overview',
            key:       'overview',
            width:     '30%',
            className: 'overflow-ellipsis',
        },

        {
            title:        'Детали',
            dataIndex:    'id',
            key:          'id',
            overflow:     'hidden',
            textOverflow: 'ellipsis',
            className:    'nowrap, overflow-ellipsis',
            render(text: string) {
                return <a href = { `./${text}` }>Подробнее</a>;
            },
        },
    ]; const
        table = films?.data ? <Table columns = { columns } dataSource = { sourceList } /> : null;

    return (
        <TableWrap>
            <PageHeader   title = { 'Рекомендуемые фильмы' } />
            { table }
        </TableWrap>
    );
};
