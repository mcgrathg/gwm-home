import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Resume from './components/resume';
import Portfolio from './components/portfolio';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Resume} />
    <Route path="resume" component={Resume} />
    <Route path="portfolio" component={Portfolio} />
  </Route>
);
