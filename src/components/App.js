import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Counter from '../containers/Counter';
import Home from './Home';
import Profile from '../containers/Profile';
import Catalog from '../containers/Catalog';

const App = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="layout">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/counter" component={Counter}/>
        <Route path="/catalog" component={Catalog}/>
        <Route path="/profile" component={Profile}/>
      </div>
    </ConnectedRouter>
  </Provider>
);
export default App;