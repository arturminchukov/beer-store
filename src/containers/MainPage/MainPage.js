import {connect} from 'react-redux';
import filterFavoriteBeers from '../../helper/filter/filterFavoriteBeers';
import {fetchBeers} from '../../actions/fetching';
import MainPage from '../../components/MainPage/MainPage';

const stateToProps = (state) => {
    const {beers} = state && state.entities;
    const favoriteBeers = state && state.entities && state.entities.favoriteBeers && state.entities.favoriteBeers.items;
    let beerItems = beers && beers.items;

    beerItems = Object.values(beerItems);
    beerItems = filterFavoriteBeers(beerItems, favoriteBeers);

    return {
        beerItems,
        next: beers && beers.next,
        isLoading: beers && beers.isLoading,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchNext: nextPage => dispatch(fetchBeers(nextPage)),
});

export default connect(stateToProps, mapDispatchToProps)(MainPage);
