import Api from '../helper/api';
import beerArrayToObject from '../helper/beerArrayToObject';
import {beersLoaded} from './entities';

export default function fetchBeer(beerId) {
    return async function (dispatch, getState) {
        try {
            const state = getState();
            const next = state && state.entities && state.entities.next;

            let beer = await Api.getBeer(beerId);

            beer = beerArrayToObject(beer);

            dispatch(beersLoaded(beer, next));
        } catch (e) {
            console.error(e);
        }
    };
}
