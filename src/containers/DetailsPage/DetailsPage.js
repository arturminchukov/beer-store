import {connect} from 'react-redux';
import DetailsPage from '../../components/DetailsPage/DetailsPage';
import {fetchBeerById} from '../../actions/fetching';
import {favoritesUpdate} from '../../actions/favoriteBeers';
import getBeerIdFromState from '../../helper/getBeerIdFromState';
import {checkFavorite} from '../../helper/filters';

const stateToProps = (state) => {
    const beerId = getBeerIdFromState(state);
    let beer = state && state.entities && state.entities.beers && state.entities.beers.items[beerId];

    if (beer) {
        const favoriteBeers = state && state.entities && state.entities.favoriteBeers.items;
        beer = checkFavorite(beer, favoriteBeers);
    }

    return {
        beer,
        beerId,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchBeer: beerId => dispatch(fetchBeerById(beerId)),
    favorite: beer => dispatch(favoritesUpdate(beer)),
});

export default connect(stateToProps, mapDispatchToProps)(DetailsPage);
