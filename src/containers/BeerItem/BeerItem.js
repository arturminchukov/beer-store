import {connect} from 'react-redux';
import BeerItem from '../../components/BeerItem/BeerItem';
import {favoritesUpdate} from '../../actions/favoriteBeers';
import {changeBeerFavoriteProperty} from '../../actions/beers';

const mapDispatchToProps = dispatch => ({
    favorite: (beer) => {
        dispatch(favoritesUpdate(beer));
        dispatch(changeBeerFavoriteProperty(beer));
    },
});

export default connect(null, mapDispatchToProps)(BeerItem);
