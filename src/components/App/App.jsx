import React, {Component} from 'react';
import {
    Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import history from '../../helper/history';
import DetailsPage from '../../containers/DetailsPage/DetailsPages';
import {parseLocation} from '../../helper/parseUrl';
import MainPage from '../../containers/MainPage/MainPage';
import FavoritesPage from '../../containers/FavoritesPage/FavoritesPage';

class App extends Component {
    componentDidMount() {
        this.unlistenHistory = history.listen(() => {
            const route = parseLocation(window.location);
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
