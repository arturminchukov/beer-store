import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import './input-range.css';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './reducers/index';
import App from './containers/App/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function middleware({dispatch, getState}) {
    return next => (action) => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }

        return next(action);
    };
}

const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(middleware)),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
