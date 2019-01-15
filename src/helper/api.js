const host = 'https://api.punkapi.com/v2/beers';

class Api {
    static async requestResponse(parameters) {
        const url = `${host}${parameters}`;
        const result = await fetch(url);
        const data = await result.json();

        return data;
    }

    static async getBeers(page, perPage) {
        return this.requestResponse(`?page=${page}&per_page=${perPage}`);
    }

    static async getBeer(id) {
        return this.requestResponse(`/${id}`);
    }
}

export default Api;
