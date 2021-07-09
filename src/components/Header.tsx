import { NavLink, Link } from 'react-router-dom';
import { HeaderWrapper, Logo } from './styles';

export const Header = () => {
    return (
        <HeaderWrapper className = 'ant-layout-header'>
            <Logo>Movie App</Logo>
            <ul
                className = 'ant-menu-overflow ant-menu ant-menu-root ant-menu-horizontal ant-menu-dark styles_nav__2Ssjh' role = 'menu'
                tabIndex = '0' data-menu-list = 'true'>
                <li
                    className = 'ant-menu-overflow-item ant-menu-item ant-menu-item-only-child' role = 'menuitem'
                    tabIndex = '-1' data-menu-id = 'rc-menu-uuid-80608-1-1'
                    style = { { opacity: '1', order: '0' } }>
                    <span className = 'ant-menu-title-content'>
                        <Link to = '/'>Главная</Link>
                    </span></li>
                <li
                    className = 'ant-menu-overflow-item ant-menu-item ant-menu-item-only-child' role = 'menuitem'
                    tabIndex = '-1' data-menu-id = 'rc-menu-uuid-80608-1-3'
                    style = { { opacity: '1', order: '1' } }>
                    <span className = 'ant-menu-title-content'>
                        <Link to = '/films'>Фильмы</Link>
                    </span>
                </li>
                <li
                    className = 'ant-menu-overflow-item ant-menu-item ant-menu-item-only-child' role = 'menuitem'
                    tabIndex = '-1' data-menu-id = 'rc-menu-uuid-80608-1-2'
                    style = { { opacity: '1', order: '2' } }>
                    <span className = 'ant-menu-title-content'>
                        <Link to = '/popular-films'>Популярные фильмы</Link>
                    </span>
                </li>
                <li
                    className = 'ant-menu-overflow-item ant-menu-item ant-menu-item-only-child' role = 'menuitem'
                    tabIndex = '-1' data-menu-id = 'rc-menu-uuid-80608-1-4'
                    style = { { opacity: '1', order: '3' } }>
                    <span className = 'ant-menu-title-content'>
                        <Link to = '/top-rated-films'>Трендовые фильмы</Link>
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
    );
};
