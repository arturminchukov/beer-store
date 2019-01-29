import * as React from 'react';
import {ROUTES} from '../../constants/constants';
import NavLink from '../NavLink/NavLink';
import {navigate} from '../../helpers/navigationHelper';

class MenuOnboard extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const {name} = event.currentTarget;

        if (name) {
            navigate(ROUTES[name].url);
        }
    }

    render() {
        const routes = Object.values(ROUTES);

        return (
            <div className='MenuOnboard'>
                {routes && routes.map(({iconName, title, name}) => (
                    <NavLink
                        key={title}
                        iconName={iconName}
                        title={title}
                        name={name}
                        onClick={this.onClick}
                    />
                ))}
            </div>
        );
    }
}

export default MenuOnboard;
