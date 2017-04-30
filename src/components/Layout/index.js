import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Nav, NavItem, NavLinkStyled, Logo } from '~components/Layout/UI';
import { renderRoutes } from '../../routes';

// Assets
import logoSVG from '~assets/images/vectors/logo-reeakt.svg';

const Layout = ({ route }) => (
  <Wrapper>
    <header>
      <nav>
        <Nav>
          <NavItem>
            <NavLinkStyled exact activeClassName={'active'} to="/">reeakt</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled exact activeClassName={'active'} to="/docs">docs</NavLinkStyled>
          </NavItem>
        </Nav>
      </nav>
      <figure><Logo src={logoSVG} alt={'reeakt logo'} /></figure>
    </header>
    <div>
      {renderRoutes(route.routes)}
    </div>
  </Wrapper>
);

Layout.propTypes = {
  route: PropTypes.object.isRequired
};

export default Layout;
