import ROUTES from './routes';

const routes = Object.values(ROUTES);
const itemsNameByUrl = {};

routes.forEach((route) => {
    itemsNameByUrl[route.url] = route.items;
});

export default itemsNameByUrl;
