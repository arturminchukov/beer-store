export const localStorage = window && window.localStorage;

const STORAGE_KEY = 'favorites';

export function getFavoritesFromStorage() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

export function saveFavoritesToStorage(favoriteBeers) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteBeers));
}

export function updateFavoritesStorage(beer) {
    let beers = getFavoritesFromStorage();

    if (beers && beers[beer.id]) {
        delete beers[beer.id];
    } else if (beers && !beers[beer.id]) {
        beers[beer.id] = beer;
    } else {
        beers = {
            [beer.id]: beer,
        };
    }

    saveFavoritesToStorage(beers);
}
