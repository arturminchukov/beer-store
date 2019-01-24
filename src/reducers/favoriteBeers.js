import {updateFavoritesStorage} from '../helper/localStorage';
import {FAVORITES_LOADED, FAVORITES_UPDATE} from '../actions/favoriteBeers';
import beerArrayToObject from '../helper/transform/beerArrayToObject';

const DEFAULT_ENTITIES = {
    items: {},
    countBeer: 0,
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

        case FAVORITES_LOADED: {
            const items = beerArrayToObject(action.payload.items);

            return {
                items,
                countBeer: action.payload.countBeer,
            };
        }

        default:
            return state;
    }
};

export default favoriteBeers;
