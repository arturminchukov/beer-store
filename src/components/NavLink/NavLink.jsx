import * as React from 'react';
import {Link} from 'react-router-dom';
import './NavLink.css';

const ROUTES = {
    favorites: {
        title: 'Favorites',
        icon: require('../../assets/icons/favorites.svg'),
        url: '/favorites',
    },
    home: {
        title: 'Home',
        icon: require('../../assets/icons/home.svg'),
        url: '/home',
    },
};

export function NavLink({routeName} = '') {
    const route = ROUTES[routeName];

    if (!route) {
        return;
    }

    const {url, title, icon} = route;

    return (
        <div className='NavLink'>
            <img className='NavLink__img' src={icon} alt={title} />
            <Link className='NavLink__title' to={url}>{title}</Link>
        </div>
    );
}
