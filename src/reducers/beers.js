import {BEER_LOADING, BEERS_LOADED, BEERS_NEXT} from '../actions/beers';
import beerArrayToObject from '../helper/transform/beerArrayToObject';
import {filterBeers} from '../helper/filters';

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
        default:
            return state;
    }
};

export default beers;
