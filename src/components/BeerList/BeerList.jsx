import * as React from 'react';
import {BeerItem} from '../BeerItem/BeerItem';
import './BeerList.css';

export function BeerList({beerItems = [], isMainView}) {
    const extraListClass = isMainView ? 'BeerList_home' : 'BeerList_favorites';

    return (
        <div className={`BeerItem ${extraListClass}`}>
            {beerItems.map(beerItem => <BeerItem key={String(beerItem)} beerItem={beerItem} isMainView={isMainView} />)}
        </div>
    );
}
