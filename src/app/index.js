import React from 'react';
import {Route, Switch} from 'react-router';
import routes from '../routes';
import 'sanitize.css/sanitize.css';

import {AuthDataProvider} from '../authData';
import {UserProvider} from '../user';
import Page from '../layout/Page';

import LemonsPage from '../lemons/pages/LemonsPage';
import AboutPage from '../about/pages/AboutPage';
import NotFoundPage from '../core/pages/NotFoundPage';
import LogoutPage from '../core/pages/LogoutPage';

import './App.css';

function App() {
  return (
    <AuthDataProvider>
      <UserProvider>
        <Page>
          <Switch>
            <Route exact path={routes.homepage.path} component={LemonsPage} />
            <Route exact path={routes.about.path} component={AboutPage} />
            <Route exact path={routes.logout.path} component={LogoutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Page>
      </UserProvider>
    </AuthDataProvider>
  );
}

export default App;
