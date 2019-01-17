import * as React from 'react';
import BeerList from '../BeerList/BeerList';
import Header from '../Header/Header';
import SearchInput from '../SearchInput/SearchInput';
import './BeerListPage.css';
import {InfiniteScroll} from '../InfiniteScroll/InfiniteScroll';
import debounce from '../../helper/debounce';
import {beerProperties} from '../../dict/alcoholProperties';
import AdvancedFilter from '../../containers/AdvancedFilter/AdvancedFilter';

class BeerListPage extends React.Component {
    constructor(props) {
        super(props);

        if (props.beerItems.length < 10 && props.next && !props.showDescription) {
            this.props.fetchNext();
        }

        this.onChange = this.handleChange.bind(this);
        this.debouncedHandleQuery = debounce(this.props.handleQuery, 700);
        this.state = {
            queryValue: '',
        };
    }

    handleChange(event) {
        const query = event && event.currentTarget && event.currentTarget.value && event.currentTarget.value.toLowerCase();

        this.debouncedHandleQuery(query);
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
                    <InfiniteScroll fetchNext={this.props.fetchNext} next={next}>
                        <BeerList beerItems={beerItems} showDescription={this.props.showDescription} />
                    </InfiniteScroll>
                </div>
            </div>
        );
    }
}

export default BeerListPage;
