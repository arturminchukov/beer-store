import {connect} from 'react-redux';
import BeerItem from '../../components/BeerItem/BeerItem';
import {favoritesUpdate} from '../../actions/favoriteBeers';

const mapDispatchToProps = dispatch => ({
    favorite: beer => dispatch(favoritesUpdate(beer)),
});

export default connect(null, mapDispatchToProps)(BeerItem);
