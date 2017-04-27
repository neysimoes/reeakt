import http from 'http';
import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import exphbs from 'express-handlebars';
import Helmet from 'react-helmet';
import StaticRouter from 'react-router-dom/StaticRouter';
import rootSagas from '~sagas';
import { routes, renderRoutes } from '../../../src/routes';
import configureStore from '../../../src/store';
import styleSheet from 'styled-components/lib/models/StyleSheet'

const app = express();
const host = process.env.HOST || 'localhost';
const port = (process.env.NODE_ENV === 'development') ? process.env.DEV_PORT || 3001 : process.env.PORT || 8080;

app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('views', path.join(__dirname, '../', '../', 'templates'));
app.use(express.static(path.join(__dirname, '../', '../', '../', 'dist')));
app.set('view engine', 'hbs');
const server = new http.Server(app);

app.use((req, res) => {
  const store = configureStore({});

  const context = {};
  const rootComp = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );

  store.runSaga(rootSagas).done.then(() => {
    const body = renderToString(rootComp);
    const head = Helmet.rewind();
    const styles = styleSheet.getCSS();

    if (context.url) {
      res.redirect(302, context.url);
      return;
    }

    res.render('index', {
      styles,
      title: head.title.toString(),
      meta: head.meta.toString(),
      link: head.link.toString(),
      script: head.script.toString(),
      body,
      state: JSON.stringify(store.getState()),
      assets: webpackIsomorphicTools.assets()
    });
  })
  .catch(e => console.log(e));

  renderToString(rootComp);

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
