export const BEERS_ON_PAGE = 10;

export function getPageBeer(beers, page) {
    const begin = (page - 1) * BEERS_ON_PAGE;
    const end = begin + BEERS_ON_PAGE;

    return beers.slice(begin, end);
}
