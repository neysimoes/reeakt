import React from 'react';
import Helmet from 'react-helmet';

const NotFound = () => {
  const pageTitle = '404 not found - My App';

  return (
    <div className="container">
      <Helmet title={pageTitle} />
      <div>
        <h1>404</h1>
        <p>This is not the web page you are looking for.</p>
      </div>
    </div>
  );
};

export default NotFound;
