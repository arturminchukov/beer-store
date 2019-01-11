import * as React from 'react';
import './BeerIngredientList.css';
import {InfoItemBox} from '../InfoItemBox/InfoItemBox';
import {IngredientType} from '../IngredientType/IngredientType';

export function BeerIngredientList({ingredientTypes = {}}) {
    const ingredientTypeNames = Object.keys(ingredientTypes);

    return (
        <div className='BeerIngredients'>
            <h1 className='BeerIngredients__title'>Ingredients</h1>
            <div>
                {ingredientTypeNames.map(ingredientTypeName => (
                    <InfoItemBox key={ingredientTypeName}>
                        <div className='BeerIngredients__ingredient'>
                            <h1 className='BeerIngredients__ingredient_title'>{ingredientTypeName}</h1>
                            <IngredientType ingredients={ingredientTypes[ingredientTypeName]} />
                        </div>
                    </InfoItemBox>
                ))}
            </div>
        </div>
    );
}
