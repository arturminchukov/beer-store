import * as React from 'react';
import './BeerButton.css';

export function BeerButton(props) {
    const {buttonName} = props;

    return (
        <button className='BeerButton' type='button' name={buttonName}>{buttonName}</button>
    );
}
