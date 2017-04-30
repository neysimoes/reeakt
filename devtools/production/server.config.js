import http from 'http';
import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import StaticRouter from 'react-router-dom/StaticRouter';
import rootSagas from '~sagas';
import { routes, renderRoutes } from '../../src/routes';
import configureStore from '../../src/store';
import Html from '~components/Html';

const app = express();
const host = process.env.HOST || 'localhost';
const port = (process.env.NODE_ENV === 'development') ? process.env.DEV_PORT || 3001 : process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../', '../', 'dist')));
const server = new http.Server(app);

app.use((req, res) => {
  const store = configureStore({});

  const context = {};
  const component = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );

  store.runSaga(rootSagas).done.then(() => {
    if (context.url) {
      res.redirect(302, context.url);
      return;
    }

    // res.set('content-type','text/html');
    res.send(`<!doctype html>${renderToStaticMarkup(<Html component={component} assets={webpackIsomorphicTools.assets()} store={store} />)}`);
    // res.end();
  })
  .catch(e => console.log(e));

  renderToString(component);

  store.close();
});

if (port) {
  server.listen(port, (err) => {
    if (err) console.error(`ERROR: ${err}`);

    if(process.env.NODE_ENV === 'production') console.info(`Server Bootstrap Successful! Open http://${host}:${port} to see the Production Environment`);
  });
} else {
  console.error('ERROR: No PORT environment variable has been specified');
}
