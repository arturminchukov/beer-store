import * as React from 'react';
import './DetailsPage.css';
import BeerLogo from '../BeerLogo/BeerLogo';
import BeerMethod from '../BeerMethod/BeerMethod';
import BeerIngredientList from '../BeerIngredientList/BeerIngredientList';
import BeerPropertyList from '../BeerPropertyList/BeerPropertyList';
import FoodPairing from '../FoodPairing/FoodPairing';
import Header from '../Header/Header';

export default class DetailsPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className='DetailsPage'>
                    <div className='DetailsPage__about'>
                        <h1 className='DetailsPage__about_title'> Punk IPA 2007-2010</h1>
                        <p className='DetailsPage__tag-line'> spicy dark beer ruby</p>
                        <button type='button' className='DetailsPage__favorite-button'>add to favorites</button>
                        <div className='DetailsPage__desc'>non enim praesent elementum facilisis leo vel
                            fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis
                            scelerisque non enim praesent elementum facilisis leo vel
                            fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis
                            scelerisque
                        </div>
                    </div>
                    <div className='DetailsPage__logo'><BeerLogo /></div>
                    <div className='DetailsPage__properties'>
                        <BeerPropertyList />
                    </div>
                    <div className='DetailsPage__food-pairing'>
                        <FoodPairing foodPairing={[
                            'Spicy chicken tikka masala',
                            'Grilled chicken quesadilla',
                            'Caramel toffee cake',
                        ]}
                        />
                    </div>
                    <div className='DetailsPage__brewing'>
                        <h1 className='DetailsPage__brewing_title'>Brewing</h1>
                        <p className='DetailsPage__brewing_desc'>brewing description</p>
                    </div>
                    <div className='DetailsPage__ingredients'>
                        <BeerIngredientList />
                    </div>
                    <div className='DetailsPage__method'>
                        <BeerMethod />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
