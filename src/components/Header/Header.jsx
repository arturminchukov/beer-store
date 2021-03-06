import * as React from 'react';
import './Header.css';
import MenuOnboard from '../MenuOnboard/MenuOnboard';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuVisible: false,
        };

        this.handleClickMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(
            prevState => ({
                isMenuVisible: !prevState.isMenuVisible,
            }),
        );
    }

    render() {
        const onboardClass = this.state.isMenuVisible ? 'Header__onboard_visible' : 'Header__onboard_hidden';
        const buttonClass = this.state.isMenuVisible ? 'Header__nav-button_active' : '';

        return (
            <div className='Header'>
                <button type='button' className={`Header__nav-button ${buttonClass}`} onClick={this.handleClickMenu}>
                    <span className='Header__nav-button_stripe' />
                </button>
                <div className={`Header__onboard ${onboardClass}`}>
                    <MenuOnboard />
                </div>
            </div>
        );
    }
}
