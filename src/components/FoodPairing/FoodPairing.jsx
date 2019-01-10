import * as React from 'react';
import {InfoItemBox} from '../InfoItemBox/InfoItemBox';
import './FoodPairing.css';

export function FoodPairing({foodPairing}) {
    return (
        <div className='FoodPairing'>
            <h1 className='FoodPairing__title'>Food Pairing</h1>
            {foodPairing && foodPairing.map(foodPair => (
                <InfoItemBox key={foodPair}>
                    <p className='FoodPairing__food-pair'>{foodPair}</p>
                </InfoItemBox>
            ))}
        </div>
    );
}
