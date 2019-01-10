import * as React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import {InfiniteScroll} from '../InfiniteScroll/InfiniteScroll';
import BeerList from '../BeerList/BeerList';
import BeerListPage from '../BeerListPage/BeerListPage';

export default class MainPage extends React.Component {
    render() {
        const {
            fetchNext,
            next,
            isLoading,
            beerItems,
        } = this.props;

        return (
            <div className='MainPage'>
                <BeerListPage showSearchInput>
                    <div className='BeerListPage__content'>
                        <SearchInput className='BeerListPage__search-input' />
                        <InfiniteScroll
                            fetchNext={fetchNext}
                            next={next}
                            isLoading={isLoading}
                        >
                            <BeerList beerItems={beerItems} showDescription={false} />
                        </InfiniteScroll>
                    </div>
                </BeerListPage>
            </div>
        );
    }
}
