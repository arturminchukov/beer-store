export const ROUTE_NAVIGATE = 'ROUTE_NAVIGATE';
export const navigate = (path, parameters) => ({
    type: ROUTE_NAVIGATE,
    payload: {
        path,
        parameters,
    },
});
