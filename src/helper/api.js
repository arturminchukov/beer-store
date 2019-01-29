import getStubFavoriteBeers from './getStubFavoriteBeers';

// const host = 'https://api.punkapi.com/v2/beers';
const host = 'http://localhost:3030';

class Api {
    static async requestResponse(parameters) {
        const url = `${host}${parameters}`;
        const result = await fetch(url);
        const data = await result.json();

        return data;
    }

    static async getBeers(nextPage = 1, beersPerPage = 10) {
        return this.requestResponse(`/beers?page=${nextPage}&per_page=${beersPerPage}`);
    }

    static async getBeerById(id) {
        return this.requestResponse(`/beer?id=${id}`);
    }

    static async getFavoriteBeers(page, beersPerPage) {
        return getStubFavoriteBeers(page, beersPerPage);
    }

    static async getBeersByQuery(query) {
        return this.requestResponse(`?beer_name=${encodeURIComponent(query.text)}`);
    }
}

export default Api;
