import Api from '../helper/api';
import beerArrayToObject from '../helper/beerArrayToObject';
import {beerLoaded} from './entities';

export default function fetchBeer(beerId) {
    return async function (dispatch) {
        try {
            let beer = await Api.getBeer(beerId);

            beer = beerArrayToObject(beer);
            dispatch(beerLoaded(beer));
        } catch (e) {
            console.error(e);
        }
    };
}
