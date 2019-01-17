import * as React from 'react';
import BeerList from '../BeerList/BeerList';
import Header from '../Header/Header';
import SearchInput from '../SearchInput/SearchInput';
import './BeerListPage.css';
import {InfiniteScroll} from '../InfiniteScroll/InfiniteScroll';
import debounce from '../../helper/debounce';
import {beerProperties} from '../../dict/alcoholProperties';
import AdvancedFilter from '../../containers/AdvancedFilter/AdvancedFilter';
import queryNavigate from '../../helper/navigation/queryNavigate';

class BeerListPage extends React.Component {
    constructor(props) {
        super(props);

        if (props.beerItems.length < 1 && props.query && !props.showDescription) {
            this.props.fetchBeersByQuery(this.props.query);
        }

        this.onChange = this.handleChange.bind(this);
        this.debouncedQueryNavigate = debounce(queryNavigate, 700);
        this.state = {
            queryValue: this.props.query && this.props.query.text ? this.props.query.text : '',
        };
    }

    handleChange(event) {
        const query = event && event.currentTarget && event.currentTarget.value && event.currentTarget.value.toLowerCase();

        this.debouncedQueryNavigate({text: query});
        this.setState({
            queryValue: query,
        });
    }

    render() {
        const {beerItems, next} = this.props;

        return (
            <div className='BeerListPage'>
                <div className='BeerListPage__header'>
                    <Header />
                </div>
                <div className='BeerListPage__content'>
                    {this.props.showSearchInput && (
                        <SearchInput
                            className='BeerListPage__search-input'
                            onChange={this.onChange}
                            value={this.state.queryValue}
                        />)}
                    {this.state.queryValue && <AdvancedFilter filterScales={beerProperties} />}
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
