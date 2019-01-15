import * as React from 'react';
import searchLogo from '../../assets/icons/search.svg';
import './SearchInput.css';

export default class SearchInput extends React.Component {
    render() {
        return (
            <div className='SearchInput'>
                <input className='SearchInput__input' type='text' />
                <img src={searchLogo} className='SearchInput__icon-search' alt='search-input' />
            </div>
        );
    }
}
