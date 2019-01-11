import * as React from 'react';
import {BeerListPage} from '../BeerListPage/BeerListPage';

export class FavoritesPage extends React.Component {
    render() {
        return (
            <div className='FavoritesPage'>
                <BeerListPage />
            </div>
        );
    }
}
