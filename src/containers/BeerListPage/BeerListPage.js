import {connect} from 'react-redux';
import BeerListPage from '../../components/BeerListPage/BeerListPage';
import urlToRoutes from '../../dict/urlToRoutes';
import ROUTES from '../../dict/routes';
import filterFavoriteBeers from '../../helper/filterFavoriteBeers';
import fetchBeers from '../../actions/fetchBeers';
import fetchBeersByQuery from '../../actions/fetchBeersByQuery';
import filterBeersByQuery from '../../helper/filterBeersByQuery';

const stateToProps = (state) => {
    const {entities} = state;
    const routeName = urlToRoutes[state.route.path];
    const query = state && state.route && state.route.query && state.route.query;
    let beerItems = entities[routeName] ? Object.values(entities[routeName]) : [];

    if (routeName === ROUTES.home.name) {
        beerItems = filterFavoriteBeers(beerItems, entities.favorites);
    }

    if (query) {
        beerItems = filterBeersByQuery(beerItems, query);
    }

    return {
        beerItems,
        next: !query && state.entities.next,
        showDescription: routeName === ROUTES.favorites.name,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchNext: () => dispatch(fetchBeers()),
    handleQuery: query => dispatch(fetchBeersByQuery(query)),
});

export default connect(stateToProps, mapDispatchToProps)(BeerListPage);
