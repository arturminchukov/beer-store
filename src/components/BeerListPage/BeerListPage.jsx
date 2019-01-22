import * as React from 'react';
import BeerList from '../BeerList/BeerList';
import Header from '../Header/Header';
import SearchInput from '../SearchInput/SearchInput';
import './BeerListPage.css';
import {InfiniteScroll} from '../InfiniteScroll/InfiniteScroll';

class BeerListPage extends React.Component {
    render() {
        const {beerItems, next} = this.props;

        return (
            <div className='BeerListPage'>
                <div className='BeerListPage__header'>
                    <Header />
                </div>
                <div className='BeerListPage__content'>
                    {this.props.showSearchInput && <SearchInput className='BeerListPage__search-input' />}
                    <InfiniteScroll
                        fetchNext={this.props.fetchNext}
                        next={!this.props.showDescription && next}
                        isLoading={this.props.isLoading}
                    >
                        <BeerList beerItems={beerItems} showDescription={this.props.showDescription} />
                    </InfiniteScroll>
                </div>
            </div>
        );
    }
}

export default BeerListPage;
