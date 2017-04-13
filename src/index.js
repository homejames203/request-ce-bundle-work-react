require('es6-object-assign').polyfill();
require('es6-promise').polyfill();
require('isomorphic-fetch');

import 'bootstrap/dist/css/bootstrap.css';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { createHashHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import App from './components/App';
import reducers from './redux/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createHashHistory();

const store = createStore(
  connectRouter(history)(combineReducers(reducers)),
  composeEnhancers(applyMiddleware(routerMiddleware(history)))
);

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('./components/App', () => render(App));