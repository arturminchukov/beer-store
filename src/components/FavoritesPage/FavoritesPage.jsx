import * as React from 'react';
import {Header} from '../Header/Header';
import {BeerList} from '../BeerList/BeerList';

export class FavoritesPage extends React.Component {
    render() {
        const stubBeerItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

        return (
            <div className='MainPage'>
                <div className='MainPage__header'>
                    <Header />
                </div>
                <div className='MainPage__content'>
                    <BeerList beerItems={stubBeerItems} view='favorites'/>
                </div>
            </div>
        );
    }
}
