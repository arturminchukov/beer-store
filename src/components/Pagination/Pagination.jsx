import * as React from 'react';
import './Pagination.css';

export class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.changePage = this.changePage.bind(this);
        this.pageNumber = 1;
    }

    generatePages(pageNumber) {
        return Array.from({length: pageNumber}, (x, i) => i + 1);
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
        const {countPages, currentPage} = this.props;
        this.pageNumber = countPages;
        const pages = this.generatePages(countPages);

        return (
            <div className='Pagination'>
                <div className='Pagination__panel'>
                    <button
                        type='button'
                        className='Pagination__button'
                        name='previous'
                        onClick={this.changePage}
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
                            onClick={this.changePage}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        type='button'
                        className='Pagination__button'
                        name='next'
                        onClick={this.changePage}
                    >
                        {'>>'}
                    </button>
                </div>
            </div>
        );
    }
}
