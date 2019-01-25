import {connect} from 'react-redux';
import App from '../../components/App/App';
import {navigate} from '../../actions/route';
import {fetchBeers, fetchBeersByQuery} from '../../actions/fetching';

const mapStateToProps = state => ({
    next: state.entities.beers.next,
});

const mapDispatchToProps = dispatch => ({
    fetchBeersByQuery: query => dispatch(fetchBeersByQuery(query)),
    fetchBeers: nextPage => dispatch(fetchBeers(nextPage)),
    routeNavigate: (path, parameters) => dispatch(navigate(path, parameters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
