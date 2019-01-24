export const FAVORITES_UPDATE = 'FAVORITES_UPDATE';
export const favoritesUpdate = newFavoriteBeer => ({
    type: FAVORITES_UPDATE,
    payload: {
        item: newFavoriteBeer,
    },
});

export const FAVORITES_LOADED = 'FAVORITES_LOADED';
export const favoritesLoaded = favoritesBeers => ({
    type: FAVORITES_LOADED,
    payload: favoritesBeers,
});
