import {connect} from 'react-redux';
import {fetchBeers, fetchBeersByQuery} from '../../actions/fetching';
import MainPage from '../../components/MainPage/MainPage';
import {filterBeersByQuery} from '../../helpers/filters';

const stateToProps = (state) => {
    const {beers} = state && state.entities;
    const query = state && state.route && state.route.params;

    let beerItems = beers && beers.items;
    beerItems = Object.values(beerItems);

    if (query && query.text) {
        beerItems = filterBeersByQuery(beerItems, query);
    }

    return {
        beerItems,
        query,
        next: !query.text && beers && beers.next,
        isLoading: beers && beers.isLoading,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchNext: nextPage => dispatch(fetchBeers(nextPage)),
    fetchBeersByQuery: query => dispatch(fetchBeersByQuery(query)),
});

export default connect(stateToProps, mapDispatchToProps)(MainPage);
