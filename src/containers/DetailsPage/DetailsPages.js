import {connect} from 'react-redux';
import DetailsPage from '../../components/DetailsPage/DetailsPage';
import {fetchBeerById} from '../../actions/fetching';
import {favoritesUpdate} from '../../actions/favoriteBeers';
import {checkFavorite} from '../../helper/checkFavorite';

const stateToProps = (state) => {
    const beerId = (state && state.route && state.route.segments && Number(state.route.segments[1])) || 1;
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
