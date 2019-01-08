import * as React from 'react';
import {BeerButton} from '../BeerButton/BeerButton';
import {BeerLogo} from '../BeerLogo/BeerLogo';
import './BeerItem.css';

export class BeerItem extends React.Component {
    render() {
        const beerClass = this.props.isMainView ? 'BeerItem_home' : 'BeerItem_favorites';

        return (
            <div className={beerClass}>
                <div className='BeerItem__logo'>
                    <BeerLogo />
                </div>
                <div className='BeerItem__info'>
                    <h2 className='BeerItem__title'>BeerTitle</h2>
                    <p className='BeerItem__tag-line'>Deutch smell good dark-beer
                    </p>
                    {!this.props.isMainView && (
                        <div className='BeerItem__desc'>
                            non enim praesent elementum facilisis leo vel
                            fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis
                            scelerisque non enim praesent elementum facilisis leo vel
                            fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis
                            scelerisque
                        </div>
                    )}
                    <div className='BeerItem__controls'>
                        <BeerButton buttonName='open' isMainView={this.props.isMainView} />
                        <BeerButton buttonName='favorite' isMainView={this.props.isMainView} />
                    </div>
                </div>
            </div>
        );
    }
}
