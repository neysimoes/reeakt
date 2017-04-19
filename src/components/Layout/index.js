import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Nav, NavItem, NavLinkStyled, Logo, Content } from '~components/Layout/UI';
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
        <NavLinkStyled exact activeClassName={'active'} to="/about">About</NavLinkStyled>
      </NavItem>
    </Nav>
    <Logo src={logoSVG} alt={'reeakt logo'} />
    <Content>
      {renderRoutes(route.routes)}
    </Content>
  </Wrapper>
);

Layout.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Layout;
