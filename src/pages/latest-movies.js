import { useEffect, useState } from 'react';

import { useLatestFilms } from '../hooks';
import { Header } from '../components';
import { SectionWrapper, MainWrapper } from '../components/styles';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

export const LatestFilmPage = () => {
    const { data, isFetched } = useLatestFilms();

    const [latestMovie, setLatestMovie] = useState({
        id:           '',
        poster_path:  '',
        title:        '',
        release_date: '',
        revenue:      0,
        status:       '',
        overview:     '',
        popularity:   '',
    });

    useEffect(() => {
        if (isFetched) {
            // eslint-disable-next-line promise/catch-or-return
            data.then((movie) => setLatestMovie(movie.data.data));
        }
    }, [isFetched]);

    return (
        <SectionWrapper className = 'ant-layout'>
            <Header />
            <MainWrapper className = 'ant-layout-content'>
                <div className = 'Toastify'></div>
                <div className = 'ant-table-wrapper'>
                    <div className = 'ant-spin-nested-loading'>
                        <div className = 'ant-spin-container'>
                            <div className = 'ant-table ant-table-bordered'>
                                <div className = 'ant-table-title'>
                                    <div className = 'ant-page-header site-page-header ant-page-header-ghost'>
                                        <div className = 'ant-page-header-heading'>
                                            <div className = 'ant-page-header-heading-left'>
                                                <span className = 'ant-page-header-heading-title' title = 'Последние фильмы'>
                                                        Последние фильмы
                                                </span>
                                                <span className = 'ant-page-header-heading-sub-title' title = 'Фильмы, которые недавно вышли в прокат'>
                                                        Фильмы, которые недавно вышли в прокат
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'ant-table-container'>
                                    <div className = 'ant-table-content'>
                                        <table style = { { tableLayout: 'auto' } }>
                                            <colgroup>
                                                <col style = { { width: '15%' } } />
                                                <col style = { { width: '10%' } } />
                                                <col style = { { width: '10%' } } />
                                                <col style = { { width: '10%' } } />
                                                <col style = { { width: '10%' } } />
                                                <col style = { { width: '10%' } } />
                                                <col />
                                                <col style = { { width: '150px' } } />
                                            </colgroup>
                                            <thead className = 'ant-table-thead'>
                                                <tr>
                                                    <th className = 'ant-table-cell' style = { { textAlign: 'center' } }>Постер</th>
                                                    <th className = 'ant-table-cell' style = { { textAlign: 'center' } }>Название</th>
                                                    <th className = 'ant-table-cell' style = { { textAlign: 'center' } }>Дата выхода</th>
                                                    <th className = 'ant-table-cell' style = { { textAlign: 'center' } }>Доходность</th>
                                                    <th className = 'ant-table-cell' style = { { textAlign: 'center' } }>Статус</th>
                                                    <th className = 'ant-table-cell' style = { { textAlign: 'center' } }>Популярность</th>
                                                    <th className = 'ant-table-cell' style = { { textAlign: 'left' } }>Краткое описание</th>
                                                    <th className = 'ant-table-cell' style = { { textAlign: 'center' } }>Детали</th>
                                                </tr>
                                            </thead>
                                            <tbody className = 'ant-table-tbody'>
                                                <tr data-row-key = '848926' className = 'ant-table-row ant-table-row-level-0'>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>
                                                        <div className = 'ant-image'>
                                                            <img
                                                                alt = 'Poster' className = 'ant-image-img'
                                                                src = { latestMovie.poster_path } />
                                                            <div className = 'ant-image-mask'>
                                                                <div className = 'ant-image-mask-info'>
                                                                    <span
                                                                        role = 'img' aria-label = 'eye'
                                                                        className = 'anticon anticon-eye'>
                                                                        <svg
                                                                            viewBox = '64 64 896 896' focusable = 'false'
                                                                            data-icon = 'eye' width = '1em'
                                                                            height = '1em' fill = 'currentColor'
                                                                            aria-hidden = 'true'>
                                                                            <path d = 'M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'></path>
                                                                        </svg>
                                                                    </span>
                                                                    Preview
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>
                                                        { latestMovie.title }
                                                    </td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>
                                                        <p>{ latestMovie.release_date || 'Отсутствует' }</p>
                                                    </td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>{ latestMovie.revenue }</td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>{ latestMovie.status }</td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>{ latestMovie.popularity }</td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'left' } }>{ latestMovie.overview }</td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>
                                                        <a href = { `/movies/films/${latestMovie.id}` }>Подробнее...</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'ant-back-top'>
                    <div>
                        <div className = 'ant-fade-leave ant-fade-leave-active ant-fade styles_backToTop__Jrpe3'>
                            <svg xmlns = 'http://www.w3.org/2000/svg' viewBox = '0 0 122.88 122.88'>
                                <path d = 'M122.85,61.43h0a61.39,61.39,0,0,1-61.43,61.41v0h0v0A61.38,61.38,0,0,1,0,61.45H0v0H0A61.35,61.35,0,0,1,61.43,0V0h0V0a61.34,61.34,0,0,1,61.38,61.4ZM61.44,28.67,30.48,63H50.25V86.92H72.62V63H92.4l-31-34.32Z'></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </MainWrapper>
        </SectionWrapper>
    );
};
