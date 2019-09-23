import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';
import Form from './pages/form';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/clients" component={Main} />
      <Route path="/clients/:id" component={Product} />
      <Route exact path="/" component={Form} />
    </Switch>
  </BrowserRouter>
);

export default Routes;