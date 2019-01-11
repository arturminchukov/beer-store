import * as React from 'react';
import {BeerList} from '../BeerList/BeerList';
import {Header} from '../Header/Header';
import {SearchInput} from '../SearchInput/SearchInput';
import './BeerListPage.css';

export class BeerListPage extends React.Component {
    render() {
        const beerItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

        return (
            <div className='BeerListPage'>
                <div className='BeerListPage__header'>
                    <Header />
                </div>
                <div className='BeerListPage__content'>
                    {this.props.showSearchInput && <SearchInput className='BeerListPage__search-input' />}
                    <BeerList beerItems={beerItems} />
                </div>
            </div>
        );
    }
}
