import * as React from 'react';
import BeerListPage from '../../containers/BeerListPage/BeerListPage';

export default class MainPage extends React.Component {
    render() {
        return (
            <div className='MainPage'>
                <BeerListPage showSearchInput />
            </div>
        );
    }
}
