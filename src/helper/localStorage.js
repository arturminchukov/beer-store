export const localStorage = window && window.localStorage;

const STORAGE_KEY = 'favorites';

export function getFavoritesFromStorage() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

export function updateFavoritesStorage(favoriteBeers) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteBeers));
}
