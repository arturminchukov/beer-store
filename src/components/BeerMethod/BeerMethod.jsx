import * as React from 'react';
import './BeerMethod.css';
import MethodProperty from '../MethodProperty/MethodProperty';

export default function BeerMethod(props) {
    const {mash, fermentation, twist} = props;

    return (
        <div className='BeerMethod'>
            <h1 className='BeerMethod__title'>Method</h1>
            <div className='BeerMethod__property'>
                <h3 className='BeerMethod__property_title'>Mash</h3>
                {mash && mash.map(mashItem => (
                    <MethodProperty
                        duration={mashItem.duration}
                        temperature={mashItem.temp.value}
                        key={mashItem.duration + mashItem.temp.value}
                    />))}
            </div>
            <div className='BeerMethod__property'>
                <h3 className='BeerMethod__property_title'>Fermentation</h3>
                {fermentation && (
                    <MethodProperty
                        duration={fermentation.duration}
                        temperature={fermentation.temp.value}
                        key={fermentation.duration + fermentation.temp.value}
                    />)}
            </div>
            {twist && (
                <div className='BeerMethod__property'>
                    <h3 className='BeerMethod__property_title'>Twist</h3>
                    <p className='BeerMethod__property_desc'>{twist}</p>
                </div>
            )}
        </div>
    );
}
