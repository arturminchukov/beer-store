import * as React from 'react';
import beerLogo from '../../assets/img/beer-logo.png';
import './BeerLogo.css';

export default function BeerLogo() {
    return <img className='BeerLogo' src={beerLogo} alt='beer-logo' />;
}
