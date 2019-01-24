import * as React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import {InfiniteScroll} from '../InfiniteScroll/InfiniteScroll';
import BeerList from '../BeerList/BeerList';
import HeaderWrapper from '../HeaderWrapper/HeaderWrapper';

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
                <HeaderWrapper showSearchInput>
                    <SearchInput />
                    <InfiniteScroll
                        fetchNext={fetchNext}
                        next={next}
                        isLoading={isLoading}
                    >
                        <BeerList beerItems={beerItems} showDescription={false} />
                    </InfiniteScroll>
                </HeaderWrapper>
            </div>
        );
    }
}
