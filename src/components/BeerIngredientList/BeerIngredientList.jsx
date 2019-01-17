import * as React from 'react';
import './BeerIngredientList.css';
import InfoItemBox from '../InfoItemBox/InfoItemBox';
import IngredientType from '../IngredientType/IngredientType';

export default function BeerIngredientList({ingredientTypes = []}) {
    return (
        <div className='BeerIngredients'>
            <h1 className='BeerIngredients__title'>Ingredients</h1>
            <div>
                {ingredientTypes.map(ingredientType => (
                    <InfoItemBox key={ingredientType.name}>
                        <div className='BeerIngredients__ingredient'>
                            <h1 className='BeerIngredients__ingredient_title'>{ingredientType.name}</h1>
                            <IngredientType ingredients={ingredientType.ingredients} />
                        </div>
                    </InfoItemBox>
                ))}
            </div>
        </div>
    );
}
