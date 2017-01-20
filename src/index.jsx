import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './routes/main.component.jsx';
import Home from './routes/home.component.jsx';
import Another from './routes/another.component.jsx';

render(
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={Home} />
      <Route path="/another" component={Another} />
    </Route>
  </Router>,
  document.getElementById('app')
);
