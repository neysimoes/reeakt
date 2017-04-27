import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Nav, NavItem, NavLinkStyled, Logo } from '~components/Layout/UI';
import { renderRoutes } from '../../routes';

// Assets
import logoSVG from '~assets/images/vectors/logo-reeakt.svg';

const Layout = ({ route }) => (
  <Wrapper>
    <Nav>
      <NavItem>
        <NavLinkStyled exact activeClassName={'active'} to="/">reeakt</NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled exact activeClassName={'active'} to="/about">docs</NavLinkStyled>
      </NavItem>
    </Nav>
    <Logo src={logoSVG} alt={'reeakt logo'} />
    <section>
      {renderRoutes(route.routes)}
    </section>
  </Wrapper>
);

Layout.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Layout;
