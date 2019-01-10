import * as React from 'react';
import Header from '../Header/Header';
import './BeerListPage.css';

function BeerListPage(props) {
    return (
        <div className='BeerListPage'>
            <div className='BeerListPage__header'>
                <Header />
            </div>
            {props.children}
        </div>
    );
}

export default BeerListPage;
