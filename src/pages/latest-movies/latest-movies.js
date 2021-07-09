import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {  Table  } from 'antd';

import { columns } from './config';

import { useLatestFilms } from '../../hooks';
import { SectionWrapper, MainWrapper, HeaderWrapper } from '../../components/styles';
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
            data.then((movie) => {
                setLatestMovie(movie.data.data);
                console.log(movie.data.data);

                return null;
            });
        }
    }, [isFetched]);

    const dataSource = [
        {
            key:          latestMovie.id,
            poster_path:  <img src = { latestMovie.poster_path } />,
            title:        latestMovie.title,
            release_date: latestMovie.release_date,
            revenue:      latestMovie.revenue,
            status:       latestMovie.status,
            popularity:   latestMovie.popularity,
            overview:     latestMovie.overview,
            // eslint-disable-next-line react/display-name
            more:         (movieId) => <Link to = { `/movie-details/${movieId}` }>Детали</Link>,
        },
    ];


    return (
        <SectionWrapper className = 'ant-layout'>
            <HeaderWrapper className = 'ant-layout-header'>
                <p className = 'styles_logo__2I-b3'>Movie App</p>
                <ul
                    className = 'ant-menu-overflow ant-menu ant-menu-root ant-menu-horizontal ant-menu-dark styles_nav__2Ssjh' role = 'menu'
                    tabIndex = '0' data-menu-list = 'true'>
                    <li
                        className = 'ant-menu-overflow-item ant-menu-item ant-menu-item-only-child' role = 'menuitem'
                        tabIndex = '-1' data-menu-id = 'rc-menu-uuid-80608-1-1'
                        style = { { opacity: '1', order: '0' } }>
                        <span className = 'ant-menu-title-content'>
                            <a href = '/'>Главная</a>
                        </span></li>
                    <li
                        className = 'ant-menu-overflow-item ant-menu-item ant-menu-item-only-child' role = 'menuitem'
                        tabIndex = '-1' data-menu-id = 'rc-menu-uuid-80608-1-3'
                        style = { { opacity: '1', order: '1' } }>
                        <span className = 'ant-menu-title-content'>
                            <a href = '/movies/films'>Фильмы</a>
                        </span>
                    </li>
                    <li
                        className = 'ant-menu-overflow-item ant-menu-item ant-menu-item-only-child' role = 'menuitem'
                        tabIndex = '-1' data-menu-id = 'rc-menu-uuid-80608-1-2'
                        style = { { opacity: '1', order: '2' } }>
                        <span className = 'ant-menu-title-content'>
                            <a href = '/movies/popular-films'>Популярные фильмы</a>
                        </span>
                    </li>
                    <li
                        className = 'ant-menu-overflow-item ant-menu-item ant-menu-item-only-child' role = 'menuitem'
                        tabIndex = '-1' data-menu-id = 'rc-menu-uuid-80608-1-4'
                        style = { { opacity: '1', order: '3' } }>
                        <span className = 'ant-menu-title-content'>
                            <a href = '/movies/top-rated-films'>Трендовые фильмы</a>
                        </span>
                    </li>
                    <li
                        className = 'ant-menu-overflow-item ant-menu-item ant-menu-item-selected ant-menu-item-only-child' role = 'menuitem'
                        tabIndex = '-1' aria-hidden = 'true'
                        style = { {
                            opacity:       '0',
                            order:         '4',
                            height:        '0px',
                            overflowY:     'hidden',
                            pointerEvents: 'none',
                            position:      'absolute',
                        } }>
                        <span className = 'ant-menu-title-content'>
                            <NavLink to = '/latest-films'>Последние вышедшие фильмы</NavLink>
                        </span>
                    </li>
                    <li
                        className = 'ant-menu-overflow-item ant-menu-overflow-item-rest ant-menu-submenu ant-menu-submenu-horizontal ant-menu-submenu-selected' role = 'none'
                        style = { { opacity: '1', order: '3' } }>
                        <div
                            role = 'menuitem' className = 'ant-menu-submenu-title'
                            tabIndex = '-1' aria-expanded = 'false'
                            aria-haspopup = 'true' data-menu-id = 'rc-menu-uuid-80608-1-rc-menu-more'
                            aria-controls = 'rc-menu-uuid-80608-1-rc-menu-more-popup'>
                            <span
                                role = 'img' aria-label = 'ellipsis'
                                className = 'anticon anticon-ellipsis'>
                                <svg
                                    viewBox = '64 64 896 896' focusable = 'false'
                                    data-icon = 'ellipsis' width = '1em'
                                    height = '1em' fill = 'currentColor'
                                    aria-hidden = 'true'>
                                    <path d = 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z'></path>
                                </svg>
                            </span>
                            <i className = 'ant-menu-submenu-arrow'></i>
                        </div>
                    </li>
                </ul>
                <div aria-hidden = 'true' style = { { display: 'none' } }></div>
            </HeaderWrapper>
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
                                                <span className = 'ant-page-header-heading-title' title = 'Популярные фильмы'>Популярные фильмы</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'ant-table-container'>
                                    <div className = 'ant-table-content'>
                                        <Table dataSource = { dataSource } columns = { columns } >
                                            <colgroup>
                                                <col style = { { width: '15%' } } />
                                                <col style = { { width: '10%' } } />
                                                <col style = { { width: '10%' } } />
                                                <col style = { { width: '10%' } } />
                                                <col style = { { width: '10%' } } />
                                                <col />
                                                <col style = { { width: '150px' } } />
                                            </colgroup>
                                        </Table>;
                                        <table style = { { tableLayout: 'auto' } }>
                                            <colgroup>
                                                <col style = { { width: '15%' } } />
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
                                                    <th className = 'ant-table-cell' style = { { textAlign: 'center' } }>Популярность</th>
                                                    <th className = 'ant-table-cell' style = { { textAlign: 'center' } }>Количество голосов</th>
                                                    <th className = 'ant-table-cell' style = { { textAlign: 'center' } }>Средняя оценка</th>
                                                    <th className = 'ant-table-cell' style = { { textAlign: 'left' } }>Краткое описание</th>
                                                    <th className = 'ant-table-cell' style = { { textAlign: 'center' } }>Детали</th>
                                                </tr>
                                            </thead>
                                            <tbody className = 'ant-table-tbody'>
                                                <tr data-row-key = '508943' className = 'ant-table-row ant-table-row-level-0'>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>
                                                        <div className = 'ant-image'>
                                                            <img
                                                                alt = 'Poster'
                                                                className = 'ant-image-img'
                                                                src = 'https://image.tmdb.org/t/p/original/jTswp6KyDYKtvC52GbHagrZbGvD.jpg' />
                                                            <div className = 'ant-image-mask'>
                                                                <div className = 'ant-image-mask-info'>
                                                                    <span
                                                                        role = 'img'
                                                                        aria-label = 'eye'
                                                                        className = 'anticon anticon-eye'>
                                                                        <svg
                                                                            viewBox = '64 64 896 896'
                                                                            focusable = 'false'
                                                                            data-icon = 'eye'
                                                                            width = '1em'
                                                                            height = '1em'
                                                                            fill = 'currentColor'
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
                                                        <a href = '/movies/films/508943'>Luca</a>
                                                    </td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>4280.651</td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>2239</td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>8.2</td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'left' } }>Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.</td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>
                                                        <Link to = '/movies/films/508943'>Подробнее...</Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <ul className = 'ant-pagination ant-table-pagination ant-table-pagination-right' unselectable = 'unselectable'>
                                <li
                                    title = 'Previous Page'
                                    className = 'ant-pagination-prev ant-pagination-disabled'
                                    aria-disabled = 'true'>
                                    <button
                                        className = 'ant-pagination-item-link'
                                        type = 'button'
                                        tabIndex = '-1'
                                        disabled = ''>
                                        <span
                                            role = 'img'
                                            aria-label = 'left'
                                            className = 'anticon anticon-left'>
                                            <svg
                                                viewBox = '64 64 896 896'
                                                focusable = 'false'
                                                data-icon = 'left'
                                                width = '1em'
                                                height = '1em'
                                                fill = 'currentColor'
                                                aria-hidden = 'true'>
                                                <path d = 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z'></path>
                                            </svg>
                                        </span>
                                    </button>
                                </li>
                                <li className = 'ant-pagination-options'>
                                    <div className = 'ant-pagination-options-quick-jumper'>Go to
                                        <input type = 'text' value = '' />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className = 'ant-back-top'></div>
            </MainWrapper>
        </SectionWrapper>
    );
};

