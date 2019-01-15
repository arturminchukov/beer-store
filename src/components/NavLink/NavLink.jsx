import * as React from 'react';
import './NavLink.css';

function getIcon(iconName) {
    return require(`../../assets/icons/${iconName}.svg`);
}

export default function NavLink(props) {
    const {
        name,
        title = '',
        iconName = '',
        onClick,
    } = props;

    if (!name || !title) {
        return;
    }

    const icon = getIcon(iconName);

    return (
        <div className='NavLink'>
            <img className='NavLink__img' src={icon} alt={title} />
            <button type='button' className='NavLink__title' name={name} onClick={onClick}>{title}</button>
        </div>
    );
}
