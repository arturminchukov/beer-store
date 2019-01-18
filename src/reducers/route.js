import parseUrl from '../helper/parseUrl';
import {ROUTE_NAVIGATE} from '../actions/route';

const url = window && window.location && window.location.pathname;

const DEFAULT_ROUTE = parseUrl(url);

const route = (state, action) => {
    if (!state) {
        return DEFAULT_ROUTE;
    }

    switch (action.type) {
        case ROUTE_NAVIGATE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default route;
