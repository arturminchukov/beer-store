import {connect} from 'react-redux';
import HeaderWrapper from '../../components/HeaderWrapper/HeaderWrapper';
import urlToRoutes from '../../dict/itemsNameByUrl';
import ROUTES from '../../dict/routes';
import filterFavoriteBeers from '../../helper/filter/filterFavoriteBeers';
import {fetchBeers} from '../../actions/fetching';

const stateToProps = (state) => {
    const {entities} = state;
    const itemsName = urlToRoutes[state.route.path];

    let beerItems = entities[itemsName].items ? Object.values(entities[itemsName].items) : [];

    if (itemsName === ROUTES.home.items) {
        beerItems = filterFavoriteBeers(beerItems, entities.favoriteBeers.items);
    }

    return {
        beerItems,
        next: entities.beers.next,
        isLoading: entities.beers.isLoading,
        showDescription: itemsName === ROUTES.favorites.items,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchNext: nextPage => dispatch(fetchBeers(nextPage)),
});

export default connect(stateToProps, mapDispatchToProps)(HeaderWrapper);
