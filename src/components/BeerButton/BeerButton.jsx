import * as React from 'react';
import './BeerButton.css';

export default function BeerButton({buttonName}) {
    return (
        <button className='BeerButton' type='button' name={buttonName}>{buttonName}</button>
    );
}
