import * as React from 'react';
import {Link} from 'react-router-dom';
import './NavLink.css';

function getIcon(iconName) {
    return require(`../../assets/icons/${iconName}.svg`);
}

export function NavLink({url = '', title = '', iconName = ''}) {
    if (!url || !title) {
        return;
    }

    const icon = getIcon(iconName);

    return (
        <div className='NavLink'>
            <img className='NavLink__img' src={icon} alt={title} />
            <Link className='NavLink__title' to={url}>{title}</Link>
        </div>
    );
}
