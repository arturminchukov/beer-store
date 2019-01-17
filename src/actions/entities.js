export const favoritesUpdate = newFavorites => ({
    type: 'FAVORITES_UPDATE',
    payload: {
        favorites: newFavorites,
    },
});

export const beersPageLoaded = (newBeers, next) => ({
    type: 'BEERS_PAGE_LOADED',
    payload: {
        beers: newBeers,
        next,
    },
});

export const beerLoaded = newBeers => ({
    type: 'BEER_LOADED',
    payload: {
        beers: newBeers,
    },
});
