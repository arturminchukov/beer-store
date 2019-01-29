import {BEER_PROPERTIES} from '../constants/constants';

export function transformBeerIngredients(ingredients) {
    const ingredientNames = Object.keys(ingredients);

    return ingredientNames.map(name => ({
        ingredients: ingredients[name],
        name,
    }));
}

export function beerArrayToObject(beerArray) {
    let beerObject = {};

    beerArray.forEach((beer) => {
        beerObject[beer.id] = beer;
    });

    return beerObject;
}


export function transformBeerProperties(beerPropertyValues) {
    return BEER_PROPERTIES.map((beerProperty, index) => ({
        ...beerProperty,
        value: beerPropertyValues[index],
    }));
}
