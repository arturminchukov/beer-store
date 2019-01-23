import * as React from 'react';
import Header from '../Header/Header';
import './HeaderWrapper.css';

function HeaderWrapper(props) {
    return (
        <div>
            <div className='HeaderWrapper__header'>
                <Header />
            </div>
            <div className='HeaderWrapper__content'>
                {props.children}
            </div>
        </div>
    );
}

export default HeaderWrapper;
