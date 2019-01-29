import {getStubFavoriteBeers} from './beerHelper';
import {getFavoritesFromStorage} from './localStorage';
import {filterFavoriteBeers} from './filters';

const host = 'https://api.punkapi.com/v2/beers';
const favorites = getFavoritesFromStorage();

class Api {
    static async requestResponse(parameters) {
        const url = `${host}${parameters}`;
        const result = await fetch(url);
        let data = await result.json();

        data = filterFavoriteBeers(data, favorites);

        return data;
    }

    static getBeers(nextPage = 1, beersPerPage = 10) {
        return this.requestResponse(`?page=${nextPage}&per_page=${beersPerPage}`);
    }

    static async getBeerById(id) {
        return this.requestResponse(`/${id}`);
    }

    static async getFavoriteBeers(page, beersPerPage) {
        return getStubFavoriteBeers(page, beersPerPage);
    }

    static async getBeersByQuery(query) {
        return this.requestResponse(`?beer_name=${encodeURIComponent(query.text)}`);
    }
}

export default Api;
