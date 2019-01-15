export const localStorage = window && window.localStorage;

const STORAGE_KEY = 'favorites';

export function getFavoritesFromStorage() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

export function updateFavoritesStorage(favoriteBeers) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteBeers));
}

export function addToFavoritesStorage(newBeer) {
    let favoriteBeers = getFavoritesFromStorage();

    favoriteBeers[newBeer.id] = newBeer;
    favoriteBeers = JSON.stringify(favoriteBeers);
    localStorage.setItem(STORAGE_KEY, favoriteBeers);
}

export function removeFromFavoritesStorage(beerId) {
    let favoriteBeers = getFavoritesFromStorage();

    delete favoriteBeers[beerId];

    favoriteBeers = JSON.stringify(favoriteBeers);
    localStorage.setItem(STORAGE_KEY, favoriteBeers);
}
