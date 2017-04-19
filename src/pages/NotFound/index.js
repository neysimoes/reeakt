import React from 'react';
import Helmet from 'react-helmet';
import { NotFoundTitle } from '~pages/NotFound/UI';

const NotFound = () => {
  return (
    <div>
      <Helmet title={'404 not found - reeakt'} />
      <NotFoundTitle>Oops... 404 Page!</NotFoundTitle>
    </div>
  );
};

export default NotFound;
