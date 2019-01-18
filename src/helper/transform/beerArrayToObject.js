export default function beerArrayToObject(beerArray) {
    let beerObject = {};

    beerArray.forEach((beer) => {
        beerObject[beer.id] = beer;
    });

    return beerObject;
}
