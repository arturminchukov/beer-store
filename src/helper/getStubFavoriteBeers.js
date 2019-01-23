import {getFavoritesFromStorage} from './localStorage';
import {getPageBeer} from './getPageBeer';

function generateData(page) {
    let data = getFavoritesFromStorage();
    data = Object.values(data);
    const countBeer = data.length;

    data = getPageBeer(data, page);

    return {
        items: data,
        countBeer,
    };
}

export default function getStubFavoriteBeers(page) {
    return new Promise(resolve => resolve(generateData(page)));
}
