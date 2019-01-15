import {connect} from 'react-redux';
import BeerItem from '../../components/BeerItem/BeerItem';
import favorite from '../../actions/favorite';

const mapDispatchToProps = dispatch => ({
    favorite: beerId => dispatch(favorite(beerId)),
});

export default connect(null, mapDispatchToProps)(BeerItem);
