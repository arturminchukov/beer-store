import {getFavoritesFromStorage, updateFavoritesStorage} from '../helper/localStorage';
import {FAVORITES_UPDATE} from '../actions/favoriteBeers';

const DEFAULT_ENTITIES = {
    items: getFavoritesFromStorage() || {},
};

const favoriteBeers = (state, action) => {
    if (!state) {
        return {...DEFAULT_ENTITIES};
    }

    switch (action.type) {
        case FAVORITES_UPDATE: {
            const beers = Object.assign({}, state.items);
            const newBeer = action.payload && action.payload.item;

            if (beers[newBeer.id]) {
                delete beers[newBeer.id];
            } else {
                beers[newBeer.id] = {
                    ...newBeer,
                    isFavorite: true,
                };
            }

            updateFavoritesStorage(beers);

            return {
                ...state,
                items: beers,
            };
        }
        default:
            return state;
    }
};

export default favoriteBeers;
