import history from './history';
import ROUTES from '../../dict/routes';
import {getSearchQuery} from '../parse';

let QUERY_PARAMS = getSearchQuery(window && window.location);

export function navigate(path = '/home') {
    history.push(path);
}

export function favoriteNavigate(page) {
    const path = `${ROUTES.favorites.sourceUrl}?page=${page}`;
    navigate(path);
}

export function queryNavigate(query) {
    const queryName = Object.keys(query)[0];

    if (!query || !query[queryName]) {
        delete QUERY_PARAMS[queryName];
        navigate(ROUTES.home.url);
        return;
    }

    QUERY_PARAMS[queryName] = query[queryName];

    const queryParamNames = Object.keys(QUERY_PARAMS);
    let queryArray = [];

    queryParamNames.forEach((queryParamName) => {
        queryArray.push(`${queryParamName}=${QUERY_PARAMS[queryParamName]}`);
    });

    navigate(`${ROUTES.home.url}?${queryArray.join('&')}`);
}
