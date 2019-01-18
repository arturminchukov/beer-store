import {combineReducers} from 'redux';
import route from './route';
import favoriteBeers from './favoriteBeers';
import beers from './beers';

export const rootReducer = combineReducers({
    entities: combineReducers({
        favoriteBeers,
        beers,
    }),
    route,
});
