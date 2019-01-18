import * as React from 'react';
import BeerButton from '../BeerButton/BeerButton';
import BeerLogo from '../BeerLogo/BeerLogo';
import './BeerItem.css';
import navigate from '../../helper/navigate';

class BeerItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logoHeight: 0,
        };
        this.aboutRef = React.createRef();
        this.onClickOpen = this.handleOpen.bind(this);
        this.onClickFavorite = this.handleFavoriteAction.bind(this);
    }

    componentDidMount() {
        const container = this.aboutRef.current;

        if (container) {
            const containerHeight = container.clientHeight;

            this.setState({
                logoHeight: containerHeight,
            });
        }
    }

    handleOpen() {
        const beerId = this.props && this.props.beer && this.props.beer.id;
        navigate(`/beer/${beerId}`);
    }

    handleFavoriteAction() {
        const beer = this.props && this.props.beer;

        this.props.favorite(beer);
    }

    render() {
        const {beer} = this.props;
        const buttonFavoriteName = beer.isFavorite ? 'remove favorite' : 'favorite';

        return (
            <div className='BeerItem'>
                <div className='BeerItem__logo' style={{height: `${this.state.logoHeight}px`}}>
                    <BeerLogo url={beer.image_url} />
                </div>
                <div className='BeerItem__about' ref={this.aboutRef}>
                    <div className='BeerItem__info'>
                        <h2 className='BeerItem__title'>{beer.name}</h2>
                        <p className='BeerItem__tag-line'>{beer.tagline}</p>
                        {this.props.showDescription && (
                            <div className='BeerItem__desc'>
                                {beer.description}
                            </div>
                        )}
                    </div>
                    <div className='BeerItem__controls'>
                        <BeerButton buttonName='open' onClick={this.onClickOpen} />
                        <BeerButton buttonName={buttonFavoriteName} onClick={this.onClickFavorite} />
                    </div>
                </div>
            </div>
        );
    }
}

export default BeerItem;
