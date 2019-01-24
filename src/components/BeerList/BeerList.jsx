import * as React from 'react';
import BeerItem from '../../containers/BeerItem/BeerItem';
import './BeerList.css';

export default function BeerList({beerItems = [], showDescription = false, fallback = 'Sorry, no beers'}) {
    if (beerItems.length < 1) {
        return <h1 className='BeerList__fallback'>{fallback}</h1>;
    }

    return (
        <div className='BeerList'>
            {beerItems.map(beerItem => (
                <BeerItem
                    key={beerItem.id}
                    beer={beerItem}
                    showDescription={showDescription}
                />
            ))}
        </div>
    );
}
