import parseUrl from '../helper/parseUrl';

const url = window && window.location && window.location.pathname;

const DEFAULT_ROUTE = parseUrl(url);

const route = (state, action) => {
    if (!state) {
        return DEFAULT_ROUTE;
    }

    switch (action.type) {
        case 'ROUTE_NAVIGATE':
            return {
                ...state,
                ...action.payload,
            };
        case 'ROUTE_QUERY':
            return {
                ...state,
                query: {
                    ...state.query,
                    text: action.payload.query,
                },
            };
        case 'ROUTE_QUERY_PARAMS':
            return {
                ...state,
                query: {
                    ...state.query,
                    ...action.payload.queryParams,
                },
            };
        case 'ROUTE_QUERY_RESET':
            return {
                ...state,
                query: null,
            };
        default:
            return state;
    }
};

export default route;
