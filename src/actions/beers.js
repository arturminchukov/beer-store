export const BEERS_LOADED = 'BEERS_LOADED';
export const beerLoaded = newBeers => ({
    type: BEERS_LOADED,
    payload: {
        beers: newBeers,
    },
});

export const BEERS_NEXT = 'BEERS_NEXT';
export const updateNextPage = nextPage => ({
    type: BEERS_NEXT,
    payload: {
        next: nextPage,
    },
});

export const BEER_LOADING = 'BEER_LOADING';
export const beerLoading = loadingStatus => ({
    type: BEER_LOADING,
    payload: {
        loading: loadingStatus,
    },
});

export const CHANGE_BEER_FAVORITE_PROPERTY = 'CHANGE_BEER_FAVORITE_PROPERTY';
export const changeBeerFavoriteProperty = beer => ({
    type: CHANGE_BEER_FAVORITE_PROPERTY,
    payload: {
        beer,
    },
});
