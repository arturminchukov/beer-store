export const navigate = (path, parameters) => ({
    type: 'ROUTE_NAVIGATE',
    payload: {
        path,
        parameters,
    },
});
