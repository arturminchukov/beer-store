export default function filterBeersByQuery(beers, query) {
    if (!query) {
        return true;
    }

    const queryText = query && query.text && query.text.split(' ');
    const beerProperties = Object.keys(query).filter(el => el !== 'text');

    return beers.filter((beer) => {
        const beerName = beer && beer.name && beer.name.toLowerCase();
        const beerTagline = beer && beer.tagline && beer.tagline.toLowerCase();

        const isValidBeerproperties = beerProperties.reduce(
            (isValid, beerProperty) => isValid && (beer[beerProperty] >= query[beerProperty]),
            true,
        );

        return isValidBeerproperties && queryText.reduce((isQueryBeer, queryEl) => isQueryBeer
            && (beerName.includes(queryEl) || beerTagline.includes(queryEl)), true);
    });
}
