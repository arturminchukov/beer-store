import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import './App.css';
import {MainPage} from '../MainPage/MainPage';
import {FavoritesPage} from '../FavoritesPage/FavoritesPage';
import {DetailsPage} from '../DetailsPage/DetailsPage';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/home' component={MainPage} />
                    <Route path='/favorites' component={FavoritesPage} />
                    <Route path='/details' component={DetailsPage} />
                    <Redirect from='/' to='/home' />
                </Switch>
            </Router>
        );
    }
}

export default App;
