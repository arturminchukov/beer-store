export function checkFavorite(beer, favorites) {
    if (favorites[beer.id]) {
        return {
            ...beer,
            isFavorite: true,
        };
    }

    return beer;
}
