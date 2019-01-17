import {getFavoritesFromStorage} from '../helper/localStorage';

const DEFAULT_ENTITIES = {
    favorites: getFavoritesFromStorage() || {},
    home: {},
    next: 1,
};

const entities = (state, action) => {
    if (!state) {
        return {...DEFAULT_ENTITIES};
    }

    switch (action.type) {
        case 'BEERS_PAGE_LOADED':
            return {
                ...state,
                next: action.payload.next,
                home: {...state.home, ...action.payload.beers},
            };
        case 'BEER_LOADED':
            return {
                ...state,
                home: {...state.home, ...action.payload.beers},
            };
        case 'FAVORITES_UPDATE':
            return {
                ...state,
                favorites: {...action.payload.favorites},
            };
        default:
            return state;
    }
};

export default entities;
