import Api from '../helper/api';
import beerArrayToObject from '../helper/beerArrayToObject';
import {beerLoaded} from './entities';
import {resetQuery, updateQuery} from './route';

export default function fetchBeersByQuery(query) {
    return async function (dispatch) {
        try {
            if (query) {
                dispatch(updateQuery(query));
                let beer = await Api.getBeersByQuery(query);
                beer = beerArrayToObject(beer);

                dispatch(beerLoaded(beer));
            } else {
                dispatch(resetQuery());
            }
        } catch (e) {
            console.error(e);
        }
    };
}
