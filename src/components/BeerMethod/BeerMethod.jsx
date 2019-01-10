import * as React from 'react';
import './BeerMethod.css';

export function BeerMethod(props) {
    const {mash, fermentation, twist} = props;

    return (
        <div className='BeerMethod'>
            <h1 className='BeerMethod__title'>Method</h1>
            <div className='BeerMethod__property'>
                <h3 className='BeerMethod__property_title'>Mash</h3>
                {mash && mash.map(el => <p className='BeerMethod__property_desc' key={el}>{el}</p>)}
            </div>
            <div className='BeerMethod__property'>
                <h3 className='BeerMethod__property_title'>Fermentation</h3>
                {fermentation && fermentation.map(el => <p className='BeerMethod__property_desc' key={el}>{el}</p>)}
            </div>
            <div className='BeerMethod__property'>
                <h3 className='BeerMethod__property_title'>Twist</h3>
                <p className='BeerMethod__property_desc'>{twist}</p>
            </div>
        </div>
    );
}
