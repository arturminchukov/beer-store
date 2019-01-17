import {connect} from 'react-redux';
import HeaderWrapper from '../../components/HeaderWrapper/HeaderWrapper';
import urlToRoutes from '../../dict/itemsNameByUrl';
import ROUTES from '../../dict/routes';
import filterBeersByQuery from '../../helper/filter/filterBeersByQuery';
import {fetchBeers, fetchBeersByQuery} from '../../actions/fetching';
import filterFavoriteBeers from '../../helper/filter/filterFavoriteBeers';

const stateToProps = (state) => {
    const {entities} = state;
    const itemsName = urlToRoutes[state.route.path];
    const query = state && state.route && state.route.query;
    let beerItems = entities[itemsName].items ? Object.values(entities[itemsName].items) : [];

    if (itemsName === ROUTES.home.items) {
        beerItems = filterFavoriteBeers(beerItems, entities.favoriteBeers.items);
    }

    if (query) {
        beerItems = filterBeersByQuery(beerItems, query);
    }

    return {
        beerItems,
        query,
        next: !query && entities.beers.next,
        isLoading: entities.beers.isLoading,
        showDescription: itemsName === ROUTES.favorites.items,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchNext: nextPage => dispatch(fetchBeers(nextPage)),
    fetchBeersByQuery: query => dispatch(fetchBeersByQuery(query)),
});

export default connect(stateToProps, mapDispatchToProps)(HeaderWrapper);
