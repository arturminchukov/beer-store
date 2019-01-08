import * as React from 'react';
import './BeerButton.css';

export function BeerButton({buttonName, isMainView}) {
    const extraClass = isMainView ? '' : 'BeerButton_favorites';

    return (
        <button className={`BeerButton ${extraClass}`} type='button' name={buttonName}>{buttonName}</button>
    );
}
