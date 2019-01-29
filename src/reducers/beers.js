import {
    BEER_LOADING,
    BEERS_LOADED,
    BEERS_NEXT,
    CHANGE_BEER_FAVORITE_PROPERTY,
} from '../actions/beers';
import {beerArrayToObject} from '../helpers/transformHelper';
import {filterBeers} from '../helpers/filters';
import {updateFavoritesStorage} from '../helpers/localStorage';

const DEFAULT_ENTITIES = {
    isLoading: false,
    next: 1,
    items: {},
};

const beers = (state, action) => {
    if (!state) {
        return {...DEFAULT_ENTITIES};
    }

    switch (action.type) {
        case BEERS_LOADED: {
            let beerItems = filterBeers(action.payload.beers, state.items);
            beerItems = beerArrayToObject(beerItems);

            return {
                ...state,
                items: {...state.items, ...beerItems},
            };
        }

        case BEERS_NEXT:
            return {
                ...state,
                next: action.payload.next,
            };

        case BEER_LOADING:
            return {
                ...state,
                isLoading: action.payload.loading,
            };

        case CHANGE_BEER_FAVORITE_PROPERTY: {
            const stateBeers = Object.assign({}, state.items);
            const newBeer = action.payload && action.payload.beer;

            if (newBeer.isFavorite) {
                newBeer.isFavorite = !newBeer.isFavorite;
            } else {
                newBeer.isFavorite = true;
            }

            stateBeers[newBeer.id] = {...newBeer};
            updateFavoritesStorage(newBeer);

            return {
                ...state,
                items: stateBeers,
            };
        }

        default:
            return state;
    }
};

export default beers;
