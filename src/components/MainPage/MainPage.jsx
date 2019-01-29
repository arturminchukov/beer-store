import * as React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import {InfiniteScroll} from '../InfiniteScroll/InfiniteScroll';
import BeerList from '../BeerList/BeerList';
import HeaderWrapper from '../HeaderWrapper/HeaderWrapper';
import debouncedQueryNavigate from '../../helpers/debounce';
import {BEER_PROPERTIES} from '../../constants/constants';
import AdvancedFilter from '../AdvancedFilter/AdvancedFilter';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);

        if (props.beerItems.length < 1 && props.query && !this.props.next) {
            this.props.fetchBeersByQuery(this.props.query);
        }

        this.onChange = this.handleChange.bind(this);
        this.state = {
            queryValue: (this.props.query && this.props.query.text) || '',
        };
    }

    handleChange(event) {
        const query = event && event.currentTarget && event.currentTarget.value && event.currentTarget.value.toLowerCase();

        debouncedQueryNavigate({text: query});
        this.setState({
            queryValue: query,
        });
    }

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
                    <SearchInput
                        className='BeerListPage__search-input'
                        onChange={this.onChange}
                        value={this.state.queryValue}
                    />
                    {this.state.queryValue
                    && <AdvancedFilter filterScales={BEER_PROPERTIES} query={this.props.query} />}
                    <InfiniteScroll
                        fetchNext={fetchNext}
                        next={next}
                        isLoading={isLoading}
                    >
                        <BeerList beerItems={beerItems} />
                    </InfiniteScroll>
                </HeaderWrapper>
            </div>
        );
    }
}
