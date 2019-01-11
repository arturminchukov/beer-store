import * as React from 'react';
import './BeerProperityList.css';
import beerProperties from '../../dict/filterProperty';
import {BeerProperty} from '../BeerProperty/BeerProperty';

export function BeerPropertyList(props) {
    const beerPropertiesList = Object.values(beerProperties);

    return (
        <div className='BeerProperties'>
            <h1 className='BeerProperties__title'>Properties</h1>
            {beerProperties && props && beerPropertiesList.map(beerProperty => (
                <BeerProperty
                    abbreviation={beerProperty.abbreviation}
                    title={beerProperty.title}
                    value={props[beerProperty.abbreviation]}
                    key={beerProperty.abbreviation}
                />
            ))}
        </div>
    );
}
