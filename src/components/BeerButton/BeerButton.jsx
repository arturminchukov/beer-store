import * as React from 'react';
import './BeerButton.css';

export default function BeerButton({buttonName, onClick}) {
    return (
        <button className='BeerButton' type='button' name={buttonName} onClick={onClick}>{buttonName}</button>
    );
}
