import * as React from 'react';
import './Spinner.css';

export default function Spinner() {
    return (
        <div className='Spinner'>
            <div className='Spinner__circle Spinner__circle_yellow' />
            <div className='Spinner__circle Spinner__circle_orange' />
            <div className='Spinner__circle Spinner__circle_red' />
            <div className='Spinner__circle Spinner__circle_pink' />
            <div className='Spinner__circle Spinner__circle_violet' />
            <div className='Spinner__circle Spinner__circle_mauve' />
            <div className='Spinner__circle Spinner__circle_light-yellow' />
        </div>
    );
}
