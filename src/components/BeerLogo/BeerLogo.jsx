import * as React from 'react';
import './BeerLogo.css';

export default function BeerLogo({url}) {
    return <img className='BeerLogo' src={url} alt='beer-logo'/>;
}
