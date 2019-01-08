import * as React from 'react';
import {BeerItem} from '../BeerItem/BeerItem';
import './BeerList.css';

export function BeerList({beerItems} = []) {
    return (
        <div className='BeerList'>
            {beerItems.map(beerItem => <BeerItem key={String(beerItem)} beerItem={beerItem} />)}
        </div>
    );
}
