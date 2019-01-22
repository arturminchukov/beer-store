import * as React from 'react';
import './BeerList.css';
import BeerItem from '../../containers/BeerItem/BeerItem';

export default function BeerList({beerItems = [], showDescription = false}) {
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
