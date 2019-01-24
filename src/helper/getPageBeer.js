export function getPageBeer(beers, page, beersPerPage) {
    const begin = (page - 1) * beersPerPage;
    const end = begin + beersPerPage;

    return beers.slice(begin, end);
}
