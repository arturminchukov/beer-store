import ROUTES from './routes';

const routes = Object.values(ROUTES);

const urlToRoutes = {};

routes.forEach((route) => {
    urlToRoutes[route.url] = route.name;
});

export default urlToRoutes;
