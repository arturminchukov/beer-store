import * as React from 'react';
import {BeerList} from '../BeerList/BeerList';
import {Header} from '../Header/Header';
import {SearchInput} from '../SearchInput/SearchInput';
import './MainPage.css';

export class MainPage extends React.Component {
    render() {
        const beerItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


        return (
            <div className='MainPage'>
                <div className='MainPage__header'>
                    <Header />
                </div>
                <div className='MainPage__content'>
                    <SearchInput className='MainPage__search-input' />
                    <BeerList beerItems={beerItems} />
                </div>
            </div>
        );
    }
}
