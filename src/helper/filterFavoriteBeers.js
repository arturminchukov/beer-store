import {checkFavorite} from './checkFavorite';

export default function filterFavoriteBeers(beers, favorites) {
    return beers.map(beer => checkFavorite(beer, favorites));
}
