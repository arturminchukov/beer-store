import api from '../helper/api';
import {beerLoaded, beerLoading, updateNextPage} from './beers';
import getBeersPerPage from '../helper/getBeersPerPage';

export function fetchBeerById(beerId) {
    return async function (dispatch) {
        try {
            const beers = await api.getBeerById(beerId);
            dispatch(beerLoaded(beers));
        } catch (e) {
            console.error(e);
        }
    };
}

export function fetchBeers(nextPage) {
    return async function (dispatch) {
        dispatch(beerLoading(true));
        try {
            const beersPerPage = getBeersPerPage();
            const beers = await api.getBeers(nextPage, beersPerPage);
            const next = beers.length > 0 ? nextPage + 1 : false;

            dispatch(beerLoaded(beers));
            dispatch(updateNextPage(next));
        } catch (e) {
            console.error(e);
        } finally {
            dispatch(beerLoading(false));
        }
    };
}