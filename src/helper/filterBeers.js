export default function filterBeers(newBeer, prevBeer = {}) {
    return newBeer.filter(beer => !prevBeer[beer.id]);
}
