import { FC } from 'react';

export const PopularFilmsPage: FC = () => {
    return (
        <section className = 'ant-layout styles_section__2QkFe'>
            <main className = 'ant-layout-content'>
                <div className = 'Toastify'>
                </div>
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
                                                                alt = 'Poster' className = 'ant-image-img'
                                                                src = 'https://image.tmdb.org/t/p/original/jTswp6KyDYKtvC52GbHagrZbGvD.jpg' />
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
                                                                    </span>Preview
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>
                                                        <a href = '/movies/films/508943'>Luca</a>
                                                    </td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>4176.6</td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>2313</td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>8.1</td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'left' } }>Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.
                                                    </td>
                                                    <td className = 'ant-table-cell' style = { { textAlign: 'center' } }>
                                                        <a href = '/movies/films/508943'>Подробнее...</a>
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
            </main>
        </section>
    );
};

