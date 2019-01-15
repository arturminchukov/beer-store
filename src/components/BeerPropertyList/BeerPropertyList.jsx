import * as React from 'react';
import './BeerProperityList.css';
import BeerProperty from '../BeerProperty/BeerProperty';

export default function BeerPropertyList({beerProperties = []}) {
    return (
        <div className='BeerProperties'>
            <h1 className='BeerProperties__title'>Properties</h1>
            {beerProperties.map(beerProperty => (
                <BeerProperty
                    abbreviation={beerProperty.abbreviation}
                    title={beerProperty.title}
                    value={beerProperty.value}
                    key={beerProperty.abbreviation}
                />
            ))}
        </div>
    );
}
