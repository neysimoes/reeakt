import React from 'react';
import PropTypes from 'prop-types';
import { NavLinkStyled, ImageList, ImageStyled } from '~components/Layout/UI';
import { renderRoutes } from '../../routes';

// Assets
import logoPNG from '~assets/images/logo-reeakt.png';
import logoJPG from '~assets/images/logo-reeakt.jpg';
import logoSVG from '~assets/images/vectors/logo-reeakt.svg';
import testGIF from '~assets/images/test.gif';

const Layout = ({ route }) => (
  <div>
    <ul>
      <li>
        <NavLinkStyled exact activeClassName={'active'} to="/">Reeakt</NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled exact activeClassName={'active'} to="/about">About</NavLinkStyled>
      </li>
    </ul>
    <ImageList>
      <ImageStyled src={logoSVG} alt=""/>
      <ImageStyled src={logoPNG} alt=""/>
      <ImageStyled src={testGIF} alt=""/>
      <ImageStyled src={logoJPG} alt=""/>
      <ImageStyled src={logoSVG} alt=""/>
    </ImageList>
    <div>
      {renderRoutes(route.routes)}
    </div>
  </div>
);

Layout.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Layout;
