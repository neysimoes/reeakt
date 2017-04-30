import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import { ServerStyleSheet } from 'styled-components';

const Html = ({ assets, component, store }) => {
  const head = Helmet.rewind();
  const sheet = new ServerStyleSheet();
  const body = component ? renderToString(component) : '';
  sheet.collectStyles(body);
  return (
    <html lang="en-US">
      <head>
        <meta charSet="UTF-8" />
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}

        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="reeakt" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="reeakt" />
        <meta name="theme-color" content="#303F9F" />
        {sheet.getStyleElement()}
      </head>
      <body>
        <div id="container" dangerouslySetInnerHTML={{ __html: body }} />
        {store && <script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__=${serialize(store.getState())};` }} charSet="UTF-8"/>}
        {assets.javascript && <script src={assets.javascript.vendor} charSet="UTF-8" />}
        {assets.javascript && <script src={assets.javascript.main} charSet="UTF-8" />}
      </body>
    </html>
  );
};

Html.propTypes = {
  assets: PropTypes.object,
  component: PropTypes.node,
  store: PropTypes.object
};

export default Html;
