import {combineReducers} from 'redux';
import entities from './entities';
import route from './route';

export const rootReducer = combineReducers({
    entities,
    route,
});
