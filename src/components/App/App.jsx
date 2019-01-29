import React, {Component} from 'react';
import {
    Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import {parseLocation} from '../../helpers/parse';
import MainPage from '../../containers/MainPage/MainPage';
import FavoritesPage from '../../containers/FavoritesPage/FavoritesPage';
import DetailsPage from '../../containers/DetailsPage/DetailsPage';
import {history} from '../../helpers/navigationHelper';
import {ROUTES} from '../../constants/constants';

class App extends Component {
    componentDidMount() {
        this.unlistenHistory = history.listen(() => {
            const route = parseLocation(window.location);

            if (route.path && route.path === ROUTES.home.url) {
                this.props.fetchBeersByQuery(route.params);
            }

            if (!route.params.text && this.props.next === 1) {
                this.props.fetchBeers(this.props.next);
            }

            this.props.routeNavigate(route);
        });
    }

    componentWillUnmount() {
        this.unlistenHistory();
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/home' component={MainPage} />
                    <Route path='/beer/:beerId' component={DetailsPage} />
                    <Route path='/favorites' component={FavoritesPage} />
                    <Redirect from='/' to='/home' />
                </Switch>
            </Router>
        );
    }
}

export default App;
