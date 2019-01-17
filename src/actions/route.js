export const navigate = (path, parameters) => ({
    type: 'ROUTE_NAVIGATE',
    payload: {
        path,
        parameters,
    },
});

export const updateQuery = query => ({
    type: 'ROUTE_QUERY',
    payload: {
        query,
    },
});

export const updateQueryParams = queryParams => ({
    type: 'ROUTE_QUERY_PARAMS',
    payload: {
        queryParams,
    },
});

export const resetQuery = () => ({
    type: 'ROUTE_QUERY_RESET',
});
