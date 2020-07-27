import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import DragonsList from '../pages/DragonsList';
import DragonDetail from '../pages/DragonDetail';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/list" component={DragonsList} isPrivate />
    <Route path="/detail/:id" component={DragonDetail} isPrivate />
  </Switch>
);

export default Routes;
