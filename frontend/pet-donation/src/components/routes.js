import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './private_route';

import HomePage from '../pages/homepage';
import SignIn from '../pages/signin';
import SignOut from '../pages/signout';
import SignUp from '../pages/signup'
import UserPage from '../pages/userPage'
import PetPage from '../pages/PetPage'

const Routes = () => {
  return (
    <Router>
      <Route path='/' component={HomePage} exact />
      <Route path='/signin' component={SignIn} exact />
      <Route path='/signout' component={SignOut} exact />
      <Route path='/signup' component={SignUp} exact />
      <Route path='/pet/:id' component={PetPage} exact />
      <PrivateRoute path='/user-page' component={UserPage} exact />
    </Router>
  );
};

export default Routes;
