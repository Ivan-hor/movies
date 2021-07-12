import { Image, Rate } from 'antd';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { KeysOfList } from '../types';

const getQuote = (vote:number):number => {
    const voteorg = vote / 2.0;

    return Math.round(2 * voteorg) / 2;
};
export const getColumns = (keys:Array<KeysOfList>) => {
    return keys.map((keyCol) => {
        switch (keyCol) {
            case KeysOfList.poster_path:
                return (
                    {
                        title:     'Постер',
                        dataIndex: keyCol,
                        key:       keyCol,
                        clasName:  keyCol,

                        render(url: string) {
                            return (<Image
                                width = { 200 }
                                src = { url } />);
                        },
                    });

            case  KeysOfList.title:
                return (
                    {
                        title:     'Название',
                        dataIndex: 'title',
                        key:       'title',
                    });
            case  KeysOfList.popularity:
                return (
                    {
                        title:     'Популярность',
                        dataIndex: keyCol,
                        key:       keyCol,
                        clasName:  keyCol,
                    }
                );

            case KeysOfList.vote_count:
                return (
                    {
                        title:     'Количество голосов',
                        dataIndex: keyCol,
                        key:       keyCol,
                        clasName:  keyCol,
                    }
                );
            case KeysOfList.vote_average:
                return (
                    {
                        title:     'Средняя оценка',
                        dataIndex: keyCol,
                        key:       keyCol,
                        clasName:  keyCol,
                    }
                );
            case KeysOfList.overview:
                return (
                    {
                        title:     'Краткое описание',
                        width:     '20%',
                        dataIndex: keyCol,
                        key:       keyCol,
                        clasName:  keyCol,
                    }
                );
            case KeysOfList.details:
                return (
                    {
                        title:     'Детали',
                        dataIndex: 'id',
                        key:       keyCol,
                        clasName:  keyCol,
                        render(id: number) { return <Link to = { `/films/${id}` }>Подробнее...</Link>; },
                    }
                );
            case KeysOfList.release_date:
                return (
                    {
                        title:     'Дата выхода',
                        dataIndex: 'release_date',
                        key:       keyCol,
                        className: keyCol,
                        render(date: string) {
                            return format(new Date(date), 'dd.MM.yyyy');
                        },
                    }
                );
            case KeysOfList.vote_average_as_stars:
                return (
                    {
                        title:    'Популярность',
                        key:      keyCol,
                        clasName: keyCol,
                        render(id: number) {
                            return <Rate
                                disabled
                                allowHalf
                                value = { getQuote(id) } />;
                        },
                    }
                );
            default:
                return {
                    title:     `Undefined :${keyCol}`,
                    dataIndex: keyCol,
                    key:       keyCol,
                    clasName:  keyCol,
                };
        }

        // return columns;
    });
};
