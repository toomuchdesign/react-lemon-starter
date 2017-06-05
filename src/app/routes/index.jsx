import React from 'react';
import { Route } from 'react-router';

import AuthDataProvider from 'app/authData/components/AuthDataProvider';
import AppContainer from 'app/core/components/App';

import LemonsPage from 'app/lemons/pages/LemonsPage';

import AboutPage from 'app/about/pages/AboutPage';
import NotFoundPage from 'app/core/pages/NotFoundPage';
import LogoutPage from 'app/core/pages/LogoutPage';

const siteTitle = 'React lemon starter';
const routesObj = {
  /*
   * This is the main route which should contain all ather application routes.
   * It provides a main wrapper layout + user authorization and user data retrieval
   */
  homepage: {
    name: 'homepage',
    path: '/',
    title: `${siteTitle} - Welcome`,
    component: props => (
      <AuthDataProvider>
        <AppContainer {...props}>
          <LemonsPage {...props} />
        </AppContainer>
      </AuthDataProvider>
    ),
  },
  about: {
    name: 'about',
    path: 'about-page(/:foo)',
    title: `${siteTitle} - About`,
    component: AboutPage,
    indexRoute: { component: AboutPage },
  },
  // #Special route 1: redirect here when no matching route is found
  notFound: {
    name: 'notFound',
    path: '*',
    title: `${siteTitle} - Page Not Found`,
    component: NotFoundPage,
  },
  // #Special route 2: it resides OUTSIDE the main route and handles user logout
  logout: {
    name: 'logout',
    path: '/logout',
    title: `${siteTitle} - Logout`,
    component: LogoutPage,
  },
};

// Export current routes config
const getAppRoutes = () => (
  <Route>
    <Route {...routesObj.logout} />
    <Route {...routesObj.homepage} >
      <Route {...routesObj.about} />
      <Route {...routesObj.notFound} />
    </Route>
  </Route>
);

const getAppRoutesObj = () => Object.assign({}, routesObj);

export { getAppRoutes, getAppRoutesObj };
