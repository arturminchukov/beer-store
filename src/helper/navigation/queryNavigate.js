import navigate from './navigate';
import ROUTES from '../../dict/routes';
import {getSearchQueries} from './parseUrl';

let QUERY_PARAMS = {
    ...getSearchQueries(window && window.location && window.location.search),
};

export default function queryNavigate(query) {
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
