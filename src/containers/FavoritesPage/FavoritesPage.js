import {connect} from 'react-redux';
import FavoritesPage from '../../components/FavoritesPage/FavoritesPage';

const stateToProps = (state) => {
    const {favoriteBeers} = state && state.entities;
    let beerItems = favoriteBeers && favoriteBeers.items;

    beerItems = Object.values(beerItems);

    return {
        beerItems,
    };
};

export default connect(stateToProps)(FavoritesPage);
