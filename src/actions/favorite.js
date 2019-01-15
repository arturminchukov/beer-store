import {updateFavoritesStorage} from '../helper/localStorage';
import {favoritesUpdate} from './entities';

export default function favorite(beerId) {
    return function (dispatch, getState) {
        const state = getState();
        const beers = state && state.entities && state.entities.home;
        const favoriteBeers = state && state.entities && state.entities.favorites;

        let newFavoriteBeers = Object.assign({}, favoriteBeers);

        if (favoriteBeers[beerId]) {
            delete newFavoriteBeers[beerId];
        } else {
            newFavoriteBeers[beerId] = {
                ...beers[beerId],
                isFavorite: true,
            };
        }

        updateFavoritesStorage(newFavoriteBeers);

        dispatch(favoritesUpdate(newFavoriteBeers));
    };
}
