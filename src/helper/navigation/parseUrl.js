import ROUTES from '../../dict/routes';

function getPath(pathname) {
    const pathParts = pathname.split('/');

    return {
        pathname: `/${pathParts[1]}`,
        beerId: pathParts[2],
    };
}

export function getSearchQueries(searchUrl) {
    if (!searchUrl) {
        return null;
    }

    const search = searchUrl.slice(1);
    const searchParams = search.split('&');
    const queries = {};

    searchParams.forEach((searchParam) => {
        const queryName = searchParam.split('=')[0];
        const value = searchParam.split('=')[1];
        queries[queryName] = value;
    });

    return queries;
}

export default function parseUrl(location) {
    const path = getPath(location.pathname);
    const {search} = location;

    if (path.pathname === '/beer') {
        return {
            path: path.pathname,
            beerId: path.beerId,
        };
    }

    if (path === '/') {
        return {
            path: ROUTES.home.url,
        };
    }

    return {
        path: path.pathname,
        query: getSearchQueries(search),
    };
}
