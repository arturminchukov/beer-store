import * as React from 'react';
import './BeerButton.css';

export function BeerButton(props) {
    const {buttonName} = props;
    const extraClass = props.view ? 'BeerButton_favorites' : '';

    return (
        <button className={`BeerButton ${extraClass}`} type='button' name={buttonName}>{buttonName}</button>
    );
}
