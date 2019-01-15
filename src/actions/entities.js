export const favoritesUpdate = newFavorites => ({
    type: 'FAVORITES_UPDATE',
    payload: {
        favorites: newFavorites,
    },
});

export const beersLoaded = (newBeers, next) => ({
    type: 'BEERS_LOADED',
    payload: {
        beers: newBeers,
        next,
    },
});
