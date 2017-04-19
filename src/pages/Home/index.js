import React from 'react';
import Helmet from 'react-helmet';
import Tests from '~containers/Tests';

const Home = () => (
  <div>
    <Helmet title={'My App'} />
    <p>Reeakt is running with React, Redux, Sagas, Styled Components, Webpack 2 ... :)</p>
    <Tests />
  </div>
);

export default Home;
