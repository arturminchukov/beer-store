import * as React from 'react';
import {Pagination} from '../Pagination/Pagination';
import BeerList from '../BeerList/BeerList';
import HeaderWrapper from '../HeaderWrapper/HeaderWrapper';
import {favoriteNavigate} from '../../helpers/navigationHelper';

const BEERS_PER_PAGE = 10;

export default class FavoritesPage extends React.Component {
    constructor(props) {
        super(props);

        this.changePage = this.handleClickPage.bind(this);

        this.props.fetchFavoritesBeers(this.props.currentPage, BEERS_PER_PAGE);
    }

    componentWillReceiveProps(nextProps) {
        if ((nextProps.beerItems.length !== this.props.beerItems.length)
            && nextProps.beerItems.length < 1
            && this.countPages > 1) {
            if (nextProps.currentPage === this.countPages) {
                this.handleClickPage(nextProps.currentPage - 1);
            } else {
                this.handleClickPage(nextProps.currentPage);
            }
        }
    }

    handleClickPage(currentPage) {
        favoriteNavigate(currentPage);
        this.props.fetchFavoritesBeers(currentPage, BEERS_PER_PAGE);
    }

    render() {
        const {beerItems} = this.props;
        const fallback = 'Sorry,but you don\'t have any favorite beer';
        const showPagination = beerItems.length > 0;

        this.countPages = Math.ceil(this.props.countBeer / BEERS_PER_PAGE);

        return (
            <div className='FavoritesPage'>
                <HeaderWrapper>
                    <BeerList beerItems={beerItems} showDescription fallback={fallback} />
                    {showPagination && (
                        <Pagination
                            currentPage={this.props.currentPage}
                            countPages={this.countPages}
                            itemsPerPage={BEERS_PER_PAGE}
                            changePage={this.changePage}
                        />)}
                </HeaderWrapper>
            </div>
        );
    }
}
