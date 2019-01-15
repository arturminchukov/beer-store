import Api from '../helper/api';
import beerArrayToObject from '../helper/beerArrayToObject';
import filterBeers from '../helper/filterBeers';
import {beersLoaded} from './entities';

function getBeersPerPage() {
    const width = window && window.screen && window.screen.width;

    if (width > 3000) {
        return 40;
    }
    if (width > 2000) {
        return 30;
    }
    if (width > 1000) {
        return 20;
    }

    return 10;
}

export default function fetchBeers() {
    return async function (dispatch, getState) {
        try {
            const state = getState();
            const beersPerPage = getBeersPerPage();
            const nextPage = state.entities && state.entities.next;
            const currentBeers = state.entities && state.entities.home;
            let beers = await Api.getBeers(nextPage, beersPerPage);
            const next = beers.length > 0 ? nextPage + 1 : false;

            beers = filterBeers(beers, currentBeers);
            beers = beerArrayToObject(beers);

            dispatch(beersLoaded(beers, next));
        } catch (e) {
            console.error(e);
        }
    };
}
