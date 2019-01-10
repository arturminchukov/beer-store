import * as React from 'react';
import BeerLogo from '../BeerLogo/BeerLogo';
import BeerMethod from '../BeerMethod/BeerMethod';
import BeerIngredientList from '../BeerIngredientList/BeerIngredientList';
import BeerPropertyList from '../BeerPropertyList/BeerPropertyList';
import FoodPairing from '../FoodPairing/FoodPairing';
import Header from '../Header/Header';
import transformBeerProperties from '../../helper/transform/transformBeerProperties';
import transformBeerIngredients from '../../helper/transform/transformBeerIngredients';
import Spinner from '../Spinner/Spinner';
import './DetailsPage.css';

class DetailsPage extends React.Component {
    constructor(props) {
        super(props);

        if (!props.beer) {
            props.fetchBeer(props.beerId);
        }

        this.onClickFavorite = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.favorite(this.props.beer);
    }

    render() {
        const {beer} = this.props;

        if (!beer) {
            return <div className='DetailsPage__spinner'><Spinner /></div>;
        }

        const beerProperties = transformBeerProperties([beer.abv, beer.ibu, beer.ebc]);
        const ingredients = transformBeerIngredients(beer.ingredients);
        const {method} = beer;
        const buttonName = beer.isFavorite ? 'remove from favorites' : 'add to favorites';

        return (
            <React.Fragment>
                <Header />
                <div className='DetailsPage'>
                    <div className='DetailsPage__about'>
                        <h1 className='DetailsPage__about_title'>{beer.name}</h1>
                        <p className='DetailsPage__tag-line'>{beer.tagline}</p>
                        <button
                            type='button'
                            className='DetailsPage__favorite-button'
                            onClick={this.onClickFavorite}
                        >
                            {buttonName}
                        </button>
                        <div className='DetailsPage__desc'>{beer.description}
                        </div>
                    </div>
                    <div className='DetailsPage__logo'><BeerLogo url={beer.image_url} /></div>
                    <div className='DetailsPage__properties'>
                        <BeerPropertyList beerProperties={beerProperties} />
                    </div>
                    <div className='DetailsPage__food-pairing'>
                        <FoodPairing foodPairing={beer.food_pairing} />
                    </div>
                    <div className='DetailsPage__brewing'>
                        <h1 className='DetailsPage__brewing_title'>Brewing</h1>
                        <p className='DetailsPage__brewing_desc'>{beer.brewers_tips}</p>
                    </div>
                    <div className='DetailsPage__ingredients'>
                        <BeerIngredientList ingredientGroups={ingredients} />
                    </div>
                    <div className='DetailsPage__method'>
                        <BeerMethod
                            mash={method.mash_temp}
                            fermentation={method.fermentation}
                            twist={method.twist}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DetailsPage;
