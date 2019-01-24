export const ROUTE_NAVIGATE = 'ROUTE_NAVIGATE';
export const navigate = route => ({
    type: ROUTE_NAVIGATE,
    payload: {
        route,
    },
});
