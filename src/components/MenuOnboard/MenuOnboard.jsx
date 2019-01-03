import * as React from 'react';
import {NavLink} from '../NavLink/NavLink';

export class MenuOnboard extends React.Component {
    render() {
        return (
            <div className='MenuOnboard'>
                <NavLink routeName='home' />
                <NavLink routeName='favorites' />
            </div>
        );
    }
}
