import * as React from 'react';
import BeerList from '../BeerList/BeerList';
import './Pagination.css';

const BEERS_ON_PAGE = 5;

export class Pagination extends React.Component {
    constructor(props) {
        super(props);


        this.onClick = this.changePage.bind(this);

        this.state = {
            currentPage: 1,
        };
    }

    generatePages(pageNumber) {
        const pages = [];

        for (let i = 0; i < pageNumber; i++) {
            pages.push(i + 1);
        }

        return pages;
    }

    filterByPage() {
        const {beerItems} = this.props && this.props.beerListParams;
        const begin = (this.state.currentPage - 1) * BEERS_ON_PAGE;
        const end = begin + BEERS_ON_PAGE;

        return beerItems.slice(begin, end);
    }

    changePage(event) {
        let action = event.currentTarget.name;

        if (action === 'previous') {
            this.setState(prevState => ({
                currentPage: prevState.currentPage > 1 ? prevState.currentPage - 1 : 1,
            }));
            return;
        }

        if (action === 'next') {
            this.setState(prevState => ({
                currentPage: prevState.currentPage < this.pageNumber ? prevState.currentPage + 1 : this.pageNumber,
            }));
            return;
        }

        const newPage = Number(action);

        if (newPage) {
            this.setState({
                currentPage: newPage,
            });
        }
    }

    render() {
        const {showDescription, beerItems} = this.props && this.props.beerListParams;
        const BeerListComponent = this.props.beerListComponent ? this.props.beerListComponent : BeerList;

        const pageBeerItems = this.filterByPage();
        this.pageNumber = Math.ceil(beerItems.length / BEERS_ON_PAGE);
        const pages = this.generatePages(this.pageNumber);

        return (
            <div className='Pagination'>
                <BeerListComponent beerItems={pageBeerItems} showDescription={showDescription} />
                <div className='Pagination__panel'>
                    <button
                        type='button'
                        className='Pagination__button'
                        name='previous'
                        onClick={this.onClick}
                    >
                        {'<<'}
                    </button>

                    {pages.map(page => (
                        <button
                            type='button'
                            className={
                                `Pagination__button ${this.state.currentPage === page && 'Pagination__button_active'}`}
                            key={page}
                            name={page}
                            onClick={this.onClick}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        type='button'
                        className='Pagination__button'
                        name='next'
                        onClick={this.onClick}
                    >
                        {'>>'}
                    </button>
                </div>
            </div>
        );
    }
}
