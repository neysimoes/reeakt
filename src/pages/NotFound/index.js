import React from 'react';
import Helmet from 'react-helmet';
import { NotFoundTitle } from '~pages/NotFound/UI';

const NotFound = () => {
  return (
    <section>
      <Helmet title={'404 not found - reeakt'} />
      <NotFoundTitle>Oops... 404 Page!</NotFoundTitle>
    </section>
  );
};

export default NotFound;
