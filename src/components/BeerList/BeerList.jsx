import * as React from 'react';
import {BeerItem} from '../BeerItem/BeerItem';
import './BeerList.css';

export function BeerList({beerItems = [], view}) {
    const beerListClass = view === 'favorites' ? 'BeerList__favorites' : 'BeerList';

    return (
        <div className={beerListClass}>
            {beerItems.map(beerItem => <BeerItem key={String(beerItem)} beerItem={beerItem} view={view} />)}
        </div>
    );
}
