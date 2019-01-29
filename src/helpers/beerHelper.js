import {getFavoritesFromStorage} from './localStorage';

export function getBeersPerPage() {
    const width = window && window.screen && window.screen.width;

    if (width > 3000) {
        return 40;
    }
    if (width > 2000) {
        return 30;
    }
    if (width > 1000) {
        return 20;
    }

    return 10;
}

export function getBeerIdFromState(state) {
    return (state && state.route && state.route.segments && Number(state.route.segments[1]));
}


function getPageBeer(beers, page, beersPerPage) {
    const begin = (page - 1) * beersPerPage;
    const end = begin + beersPerPage;

    return beers.slice(begin, end);
}

function generateData(page, beersPerPage) {
    let data = getFavoritesFromStorage();

    if (!data) {
        return {
            items: [],
            countBeer: 0,
        };
    }

    data = Object.values(data);
    const countBeer = data.length;

    data = getPageBeer(data, page, beersPerPage);

    return {
        items: data,
        countBeer,
    };
}

export function getStubFavoriteBeers(page, beersPerPage) {
    return new Promise(resolve => resolve(generateData(page, beersPerPage)));
}
