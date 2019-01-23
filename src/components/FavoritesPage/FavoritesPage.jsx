import * as React from 'react';
import {Pagination} from '../Pagination/Pagination';
import BeerList from '../BeerList/BeerList';
import HeaderWrapper from '../HeaderWrapper/HeaderWrapper';
import {favoriteNavigate} from '../../helper/navigate';

export default class FavoritesPage extends React.Component {
    constructor(props) {
        super(props);

        this.changePage = this.handleClickPage.bind(this);

        this.props.fetchFavoritesBeers(this.props.currentPage);
    }

    handleClickPage(currentPage) {
        favoriteNavigate(currentPage);
        this.props.fetchFavoritesBeers(currentPage);
    }

    render() {
        const {beerItems} = this.props;

        return (
            <div className='FavoritesPage'>
                <HeaderWrapper>
                    <BeerList beerItems={beerItems} showDescription />
                    <Pagination
                        currentPage={this.props.currentPage}
                        beerCount={this.props.countBeer}
                        changePage={this.changePage}
                    />
                </HeaderWrapper>
            </div>
        );
    }
}
