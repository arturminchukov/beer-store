import {getFavoritesFromStorage} from './localStorage';

function getPageBeer(beers, page, beersPerPage) {
    const begin = (page - 1) * beersPerPage;
    const end = begin + beersPerPage;

    return beers.slice(begin, end);
}

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
