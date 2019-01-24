import {getFavoritesFromStorage} from './localStorage';
import {getPageBeer} from './getPageBeer';

function generateData(page, beersPerPage) {
    let data = getFavoritesFromStorage();
    data = Object.values(data);
    const countBeer = data.length;

    data = getPageBeer(data, page, beersPerPage);

    return {
        items: data,
        countBeer,
    };
}

export default function getStubFavoriteBeers(page, beersPerPage) {
    return new Promise(resolve => resolve(generateData(page, beersPerPage)));
}
