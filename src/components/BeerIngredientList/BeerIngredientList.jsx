import * as React from 'react';
import './BeerIngredientList.css';
import InfoItemBox from '../InfoItemBox/InfoItemBox';
import IngredientGroup from '../IngredientType/IngredientGroup';

export default function BeerIngredientList({ingredientGroups = []}) {
    return (
        <div className='BeerIngredients'>
            <h1 className='BeerIngredients__title'>Ingredients</h1>
            <div>
                {ingredientGroups.map(ingredientGroup => (
                    <InfoItemBox key={ingredientGroup.name}>
                        <div className='BeerIngredients__ingredient'>
                            <h1 className='BeerIngredients__ingredient_title'>{ingredientGroup.name}</h1>
                            <IngredientGroup ingredients={ingredientGroup.ingredients} />
                        </div>
                    </InfoItemBox>
                ))}
            </div>
        </div>
    );
}
