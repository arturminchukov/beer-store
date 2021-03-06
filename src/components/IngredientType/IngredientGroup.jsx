import * as React from 'react';
import BeerIngredient from '../BeerIngredient/BeerIngredient';

export default function IngredientGroup({ingredients = []}) {
    if (ingredients && Array.isArray(ingredients)) {
        const validIngredients = ingredients.filter(el => el);

        return validIngredients.map(ingredient => (
            <BeerIngredient
                name={ingredient.name}
                amountValue={ingredient.amount && ingredient.amount.value}
                amountUnit={ingredient.amount && ingredient.amount.unit}
                processStage={ingredient.add}
                key={`${ingredient.name} ${ingredient.amount.value} ${ingredient.add}`}
            />
        ));
    }

    return <p>{ingredients}</p>;
}
