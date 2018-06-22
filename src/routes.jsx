import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './layouts/Home';
import Tables from './layouts/Tables';
import PageStructure from './layouts/PageStructure';
import Menus from './layouts/Menus';
import Images from './layouts/Images';
import Forms from './layouts/Forms';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/tables" component={Tables} />
      <Route path="/page" component={PageStructure} />
      <Route path="/menus" component={Menus} />
      <Route path="/images" component={Images} />
      <Route path="/forms" component={Forms} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;
