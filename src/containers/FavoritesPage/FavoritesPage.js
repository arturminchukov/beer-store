import {connect} from 'react-redux';
import FavoritesPage from '../../components/FavoritesPage/FavoritesPage';
import {fetchFavoriteBeers} from '../../actions/fetching';

const stateToProps = (state) => {
    const {favoriteBeers} = state && state.entities;
    const countBeer = favoriteBeers && favoriteBeers.countBeer;
    let beerItems = favoriteBeers && favoriteBeers.items;
    const {page} = state && state.route && state.route.params;

    beerItems = Object.values(beerItems);

    return {
        beerItems,
        countBeer,
        currentPage: Number(page) || 1,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchFavoritesBeers: (page, beersPerPage) => dispatch(fetchFavoriteBeers(page, beersPerPage)),
});

export default connect(stateToProps, mapDispatchToProps)(FavoritesPage);
