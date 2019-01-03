import * as React from 'react';
import './Header.css';
import {MenuOnboard} from '../MenuOnboard/MenuOnboard';

const ONBOARD_CLASS = {
    hidden: 'Header__onboard_hidden',
    visible: 'Header__onboard_visible',
};

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onboardClass: ONBOARD_CLASS.hidden,
        };

        this.handleClickMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(
            prevState => ({
                onboardClass: prevState.onboardClass === ONBOARD_CLASS.hidden
                    ? ONBOARD_CLASS.visible : ONBOARD_CLASS.hidden,
            }),
        );
    }


    render() {
        return (
            <div className='Header'>
                <button type='button' className='Header__nav-button' onClick={this.handleClickMenu}>
                    <span className='Header__nav-button_stripe' />
                </button>
                <div className={`Header__onboard ${this.state.onboardClass}`}>
                    <MenuOnboard />
                </div>
            </div>
        );
    }
}
