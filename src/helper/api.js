import getStubFavoriteBeers from './getStubFavoriteBeers';

const host = 'https://api.punkapi.com/v2/beers';

class Api {
    static async requestResponse(parameters) {
        const url = `${host}${parameters}`;
        const result = await fetch(url);
        const data = await result.json();

        return data;
    }

    static async getBeers(nextPage = 1, beersPerPage = 10) {
        return this.requestResponse(`?page=${nextPage}&per_page=${beersPerPage}`);
    }

    static async getBeerById(id) {
        return this.requestResponse(`/${id}`);
    }

    static async getFavoriteBeers(page) {
        return getStubFavoriteBeers(page);
    }
}

export default Api;
