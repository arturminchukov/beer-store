import * as React from 'react';
import searchLogo from '../../assets/icons/search.svg';
import './SearchInput.css';

export default function SearchInput({value, onChange}) {
    return (
        <div className='SearchInput'>
            <input
                className='SearchInput__input'
                placeholder='Search beers...'
                type='text'
                onChange={onChange}
                value={value}
            />
            <img src={searchLogo} className='SearchInput__icon-search' alt='search-input' />
        </div>
    );
}
