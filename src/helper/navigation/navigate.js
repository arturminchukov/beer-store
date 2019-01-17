import history from './history';
import ROUTES from '../dict/routes';

export function navigate(path = '/home') {
    history.push(path);
}

export function favoriteNavigate(page) {
    const path = `${ROUTES.favorites.sourceUrl}?page=${page}`;

    navigate(path);
}
