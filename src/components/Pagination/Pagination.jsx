import * as React from 'react';
import './Pagination.css';
import {BEERS_ON_PAGE} from '../../helper/getPageBeer';

export class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.changePage.bind(this);
        this.pageNumber = 1;
    }

    generatePages(pageNumber) {
        const pages = [];

        for (let i = 0; i < pageNumber; i++) {
            pages.push(i + 1);
        }

        return pages;
    }

    changePage(event) {
        const {changePage, currentPage} = this.props;
        const action = event.currentTarget.name;
        let newPage = 1;

        if (action === 'previous') {
            newPage = currentPage > 1 ? currentPage - 1 : 1;
        } else if (action === 'next') {
            newPage = currentPage < this.pageNumber ? currentPage + 1 : this.pageNumber;
        } else if (Number(action)) {
            newPage = Number(action);
        }

        changePage(newPage);
    }

    render() {
        const {beerCount, currentPage} = this.props;
        this.pageNumber = Math.ceil(beerCount / BEERS_ON_PAGE);
        const pages = this.generatePages(this.pageNumber);

        return (
            <div className='Pagination'>
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
                                `Pagination__button ${currentPage === page && 'Pagination__button_active'}`}
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
