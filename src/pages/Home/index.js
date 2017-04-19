import React from 'react';
import Helmet from 'react-helmet';
import Tests from '~containers/Tests';
import { Slogan, Demos, Demo, DemoLabel, DemoImage } from '~pages/Home/UI';

import logoPNG from '~assets/images/logo-reeakt.png';
import logoJPG from '~assets/images/logo-reeakt.jpg';
import testGIF from '~assets/images/test.gif';

const Home = () => (
  <div>
    <Helmet title={'reeakt'} />
    <Slogan>A React.js boilerplate to awesome web applications</Slogan>
    <Demos>
      <Demo>
        <DemoLabel>PNG File</DemoLabel>
        <div><DemoImage src={logoPNG} alt=""/></div>
      </Demo>
      <Demo>
        <DemoLabel>JPG File</DemoLabel>
        <div><DemoImage src={logoJPG} alt=""/></div>
      </Demo>
      <Demo>
        <DemoLabel>GIF File</DemoLabel>
        <div><DemoImage src={testGIF} alt=""/></div>
      </Demo>
      <Demo>
        <DemoLabel>API Call</DemoLabel>
        <div><Tests /></div>
      </Demo>
    </Demos>
  </div>
);

export default Home;
