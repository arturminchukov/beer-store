import * as React from 'react';
import {Pagination} from '../Pagination/Pagination';
import BeerList from '../BeerList/BeerList';
import HeaderWrapper from '../HeaderWrapper/HeaderWrapper';
import {favoriteNavigate} from '../../helper/navigation/navigate';

const BEERS_PER_PAGE = 10;

export default class FavoritesPage extends React.Component {
    constructor(props) {
        super(props);

        this.changePage = this.handleClickPage.bind(this);

        this.props.fetchFavoritesBeers(this.props.currentPage, BEERS_PER_PAGE);
    }

    handleClickPage(currentPage) {
        favoriteNavigate(currentPage);
        this.props.fetchFavoritesBeers(currentPage, BEERS_PER_PAGE);
    }

    render() {
        const {beerItems} = this.props;
        const fallback = 'Sorry,but you don\'t have any favorite beer';

        return (
            <div className='FavoritesPage'>
                <HeaderWrapper>
                    <BeerList beerItems={beerItems} showDescription fallback={fallback}/>
                    <Pagination
                        currentPage={this.props.currentPage}
                        itemsCount={this.props.countBeer}
                        itemsPerPage={BEERS_PER_PAGE}
                        changePage={this.changePage}
                    />
                </HeaderWrapper>
            </div>
        );
    }
}
