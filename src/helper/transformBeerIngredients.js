export default function transformBeerIngredients(ingredients) {
    const ingredientNames = Object.keys(ingredients);

    return ingredientNames.map(name => ({
        ingredients: ingredients[name],
        name,
    }));
}
