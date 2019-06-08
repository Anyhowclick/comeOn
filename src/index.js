import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Error from './components/Error';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/error" component={Error} />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
