import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
`;

export const Nav = styled.ul`
  padding: 0;
  margin: 0 0 40px;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

export const NavItem = styled.li`
  display: block;
  flex: 1;
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid transparent;
  font-size: 18px;
  &.active {
    border-bottom: 1px solid #000;
  }
`;

export const Logo = styled.img`
  margin-bottom: 40px;
  width: 100%;
`;
