import * as React from 'react';
import infoIcon from '../../assets/icons/info.svg';
import './BeerProperty.css';
import InfoItemBox from '../InfoItemBox/InfoItemBox';

export default function BeerProperty({abbreviation, title, value}) {
    return (
        <InfoItemBox>
            <div className='BeerProperty'>
                <div className='BeerProperty__about'>
                    <h1 className='BeerProperty__title'>{abbreviation}</h1>
                    <div className='BeerProperty__more-info'>
                        <img className='BeerProperty__icon-info' src={infoIcon} alt='info' />
                        <p className='BeerProperty__info-suggest'>{title}</p>
                    </div>
                </div>
                <div className='BeerProperty__value'>{value}</div>
            </div>
        </InfoItemBox>
    );
}
