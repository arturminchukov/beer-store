import * as React from 'react';
import {BeerListPage} from '../BeerListPage/BeerListPage';

export class MainPage extends React.Component {
    render() {
        return (
            <div className='MainPage'>
                <BeerListPage showSearchInput />
            </div>
        );
    }
}
