import React from 'react';
import Helmet from 'react-helmet';

const About = () => {
  const pageTitle = 'About - My App';
  return (
    <div className="container">
      <Helmet title={pageTitle} />
      <h1>About 1</h1>
      <p>A boilerplate for bootstrap with React.</p>
      <p>Server side and client side rendering support.</p>
      <p>
        ( Node.js, React.js, Redux, Webpack, React Bootstrap, CSS Modules, PostCSS, Babel,
          ES2015, ESLint ... )
      </p>
    </div>
  );
};

export default About;
