import * as React from 'react';
import {BeerIngredient} from '../BeerIngredient/BeerIngredient';
import './BeerIngredientList.css';
import {InfoItemBox} from '../InfoItemBox/InfoItemBox';

export function BeerIngredientList({ingredientClasses = {}}) {
    const ingredientClassTypes = Object.keys(ingredientClasses);

    return (
        <div className='BeerIngredients'>
            <h1 className='BeerIngredients__title'>Ingredients</h1>
            <div>
                {ingredientClassTypes && ingredientClassTypes.map(ingredientType => (
                    <InfoItemBox key={ingredientType}>
                        <div className='BeerIngredients__ingredient'>
                            <h1 className='BeerIngredients__ingredient_title'>{ingredientType}</h1>

                            {ingredientClasses[ingredientType]
                            && Array.isArray(ingredientClasses[ingredientType])
                            && ingredientClasses[ingredientType].map(ingredient => (
                                {ingredient}
                                && (
                                    <BeerIngredient
                                        name={ingredient.name}
                                        amountValue={ingredient.amount && ingredient.amount.value}
                                        amountUnit={ingredient.amount && ingredient.amount.unit}
                                        processStage={ingredient.add}
                                        key={`${ingredient.name} ${ingredient.amount.value}`}
                                    />
                                )
                            ))}

                            {typeof ingredientClasses[ingredientType] === 'string'
                            && <p>{ingredientClasses[ingredientType]}</p>}
                        </div>
                    </InfoItemBox>
                ))}
            </div>
        </div>
    );
}
