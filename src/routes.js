import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { Layout } from '~components';
import { Home, About, NotFound } from '~pages';

export const routes = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/about',
        component: About
      },
      {
        component: NotFound
      }
    ]
  }
];

export const renderRoutes = (routesList) => {
  const list = routesList ? (
    <Switch>
      {routesList.map((route, i) => (
        <Route key={i} path={route.path} exact={route.exact} strict={route.strict}>
          <route.component route={route} />
        </Route>
      ))}
    </Switch>
  ) : null;
  return list;
};
