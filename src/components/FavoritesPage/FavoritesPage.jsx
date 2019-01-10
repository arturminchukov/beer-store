import * as React from 'react';
import {Pagination} from '../Pagination/Pagination';
import BeerList from '../BeerList/BeerList';
import BeerListPage from '../BeerListPage/BeerListPage';

export default class FavoritesPage extends React.Component {
    render() {
        const {beerItems} = this.props;

        return (
            <div className='FavoritesPage'>
                <BeerListPage>
                    <Pagination
                        beerListComponent={BeerList}
                        beerListParams={{
                            showDescription: true,
                            beerItems,
                        }}
                    />
                </BeerListPage>
            </div>
        );
    }
}
