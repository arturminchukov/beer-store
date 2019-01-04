import * as React from 'react';
import {BeerButton} from '../BeerButton/BeerButton';
import {BeerLogo} from '../BeerLogo/BeerLogo';
import './BeerItem.css';

export class BeerItem extends React.Component {
    render() {
        const favoritesClass = this.props.view === 'favorites' ? '_favorites' : '';

        return (
            <div className={`BeerItem${favoritesClass}`}>
                <div className={`BeerItem__logo${favoritesClass}`}>
                    <BeerLogo />
                </div>
                <div className={`BeerItem__info${favoritesClass}`}>
                    <h2 className={`BeerItem__title${favoritesClass}`}>BeerTitle</h2>
                    <p className={`BeerItem__tag-line${favoritesClass}`}>Deutch smell good dark-beer
                    </p>
                    {favoritesClass && (
                        <div className='BeerItem__desc_favorites'>
                            non enim praesent elementum facilisis leo vel
                            fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis
                            scelerisque non enim praesent elementum facilisis leo vel
                            fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis
                            scelerisque
                        </div>
                    )}
                    <div className={`BeerItem__controls${favoritesClass}`}>
                        <BeerButton buttonName='open' view={this.props.view} />
                        <BeerButton buttonName='favorite' view={this.props.view} />
                    </div>
                </div>
            </div>
        );
    }
}
