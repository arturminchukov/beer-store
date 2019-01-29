import {parseLocation} from '../helpers/parse';
import {ROUTE_NAVIGATE} from '../actions/route';

const DEFAULT_ROUTE = parseLocation(window.location);

const route = (state, action) => {
    if (!state) {
        return DEFAULT_ROUTE;
    }

    switch (action.type) {
        case ROUTE_NAVIGATE:
            return {...action.payload.route};
        default:
            return state;
    }
};

export default route;
