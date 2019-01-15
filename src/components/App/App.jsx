import React, {Component} from 'react';
import {
    Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import history from '../../helper/history';
import './App.css';
import MainPage from '../MainPage/MainPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import DetailsPage from '../../containers/DetailsPage/DetailsPages';
import parseUrl from '../../helper/parseUrl';


class App extends Component {
    componentDidMount() {
        this.unlistenHistory = history.listen((location) => {
            const route = parseUrl(location.pathname);
            this.props.routeNavigate(route.path, route.parameters);
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
                    <Route path='/favorites' component={FavoritesPage} />
                    <Route path='/beer/:beerId' component={DetailsPage} />
                    <Redirect from='/' to='/home' />
                </Switch>
            </Router>
        );
    }
}

export default App;
