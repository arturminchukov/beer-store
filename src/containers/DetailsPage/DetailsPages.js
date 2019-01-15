import {connect} from 'react-redux';
import DetailsPage from '../../components/DetailsPage/DetailsPage';
import fetchBeer from '../../actions/fetchBeer';
import favorite from '../../actions/favorite';
import {checkFavorite} from '../../helper/checkFavorite';

const stateToProps = (state) => {
    const beerId = state && state.route && state.route.parameters && state.route.parameters.beerId;
    let beer = state && state.entities && state.entities.home && state.entities.home[beerId];

    if (beer) {
        const favoriteBeers = state && state.entities && state.entities.favorites;
        beer = checkFavorite(beer, favoriteBeers);
    }

    return {
        beer,
        beerId,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchBeer: beerId => dispatch(fetchBeer(beerId)),
    favorite: beerId => dispatch(favorite(beerId)),
});

export default connect(stateToProps, mapDispatchToProps)(DetailsPage);
