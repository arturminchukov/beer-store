import {connect} from 'react-redux';
import BeerListPage from '../../components/BeerListPage/BeerListPage';
import urlToRoutes from '../../dict/urlToRoutes';
import ROUTES from '../../dict/routes';
import filterFavoriteBeers from '../../helper/filterFavoriteBeers';
import fetchBeers from '../../actions/fetchBeers';


const stateToProps = (state) => {
    const {entities} = state;
    const routeName = urlToRoutes[state.route.path];
    let beerItems = entities[routeName] ? Object.values(entities[routeName]) : [];

    if (routeName === ROUTES.home.name) {
        beerItems = filterFavoriteBeers(beerItems, entities.favorites);
    }

    return {
        beerItems,
        next: state.entities.next,
        showDescription: routeName === ROUTES.favorites.name,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchNext: () => dispatch(fetchBeers()),
});

export default connect(stateToProps, mapDispatchToProps)(BeerListPage);
