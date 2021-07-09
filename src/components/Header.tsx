import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export const HeaderWrapper = () => {
    return (
        <Header className = 'styles_header'>
            <p className = 'styles_logo'>Movie App</p>
            <Menu
                theme = 'dark' mode = 'horizontal'
                defaultSelectedKeys = { ['1'] }>
                <Menu.Item key = '1'><Link to = '/'>Главная</Link></Menu.Item>
                <Menu.Item key = '2'><Link to = '/popular-films'>Фильмы</Link></Menu.Item>
                <Menu.Item key = '3'><Link to = '/top-rated-films'>Популярные фильмы</Link></Menu.Item>
                <Menu.Item key = '4'><Link to = '/latest-films'>Трендовые фильмы</Link></Menu.Item>
                <Menu.Item key = '5'><Link to = '/films/:filmId'>Последние вышедшие фильмы</Link></Menu.Item>
            </Menu>
        </Header>
    );
};
