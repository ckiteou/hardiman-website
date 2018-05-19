import React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import './index.css';
import App from './App';

const Home = () => (
  <main>
    <p>Here we create history...</p>
  </main>
)

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
), document.getElementById('root'))
