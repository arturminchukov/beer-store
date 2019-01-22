import * as React from 'react';
import BeerListPage from '../../containers/BeerListPage/BeerListPage';

export default class FavoritesPage extends React.Component {
    render() {
        return (
            <div className='FavoritesPage'>
                <BeerListPage />
            </div>
        );
    }
}
