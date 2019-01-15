import * as React from 'react';
import NavLink from '../NavLink/NavLink';
import ROUTES from '../../dict/routes.json';

export default class MenuOnboard extends React.Component {
    render() {
        const routes = Object.values(ROUTES);

        return (
            <div className='MenuOnboard'>
                {routes && routes.map(({iconName, title, url}) => (
                    <NavLink
                        key={title}
                        iconName={iconName}
                        title={title}
                        url={url}
                    />
                ))}
            </div>
        );
    }
}
