export const FAVORITES_UPDATE = 'FAVORITES_UPDATE';
export const favoritesUpdate = newFavoriteBeer => ({
    type: 'FAVORITES_UPDATE',
    payload: {
        item: newFavoriteBeer,
    },
});
